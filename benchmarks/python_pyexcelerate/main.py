from pyexcelerate import Workbook
import pandas as pd
from pymongo import MongoClient
import time

start_time = time.time()

# Подключение к MongoDB
client = MongoClient('mongodb://mongodb:27017')
db = client['test']
collection = db['products']

# Извлечение данных из MongoDB
cursor = collection.find().limit(50000)
df = pd.DataFrame(list(cursor))

# Закрытие соединения с MongoDB
client.close()

# Запись данных в файл Excel
excel_filename = 'products.xlsx'

wb = Workbook()
wb.new_sheet("sheet name", data=df)
wb.save(excel_filename)

print(f"Данные успешно экспортированы в файл {excel_filename}")
print(f"Размер файла: {df.memory_usage().sum()} bytes")

# Время выполнения скрипта
end_time = time.time()
execution_time = end_time - start_time
print(f"Время выполнения скрипта: {execution_time} секунд")
