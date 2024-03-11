const mongoose = require('mongoose');
const ExcelJS = require('exceljs');
const fs = require('fs');

// Подключение к MongoDB
mongoose.connect('mongodb://mongodb:27017');

// Определение схемы и модели Product
const productSchema = new mongoose.Schema({});

const Product = mongoose.model('Product', productSchema);

// Функция для извлечения данных из MongoDB и записи их в файл Excel
async function exportToExcel() {
  try {
    console.time('exportToExcel'); // Запускаем таймер

    // Извлечение данных из коллекции Product
    const products = await Product.find({}).limit(50000).lean();

    // Преобразование данных в формат, подходящий для записи в файл Excel
    const data = products.map(product => {
      // Ваш код преобразования объекта продукта в массив данных
      return product;
    });

    // Создание нового листа Excel
    const worksheet = ExcelJS.utils.json_to_sheet(data);

    // Создание новой книги Excel и добавление листа
    const workbook = ExcelJS.utils.book_new();
    ExcelJS.utils.book_append_sheet(workbook, worksheet, 'Products');

    // Запись книги Excel в файл
    ExcelJS.writeFile(workbook, 'products.xlsx');

    console.log('Данные успешно экспортированы в файл products.xlsx');

    // Определяем размер файла
    const stats = fs.statSync('products.xlsx');
    const fileSizeInBytes = stats.size;
    console.log(`Размер файла: ${fileSizeInBytes} bytes`);

    console.timeEnd('exportToExcel'); // Останавливаем таймер
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    // Закрытие соединения с MongoDB
    mongoose.connection.close();
  }
}

// Вызов функции для экспорта данных в файл Excel
exportToExcel();
