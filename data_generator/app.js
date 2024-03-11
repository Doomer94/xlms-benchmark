const connectDatabase = require('./app/utils/database');
const { generateProductData, insertGeneratedData } = require('./app/generateData');

async function app() {
    await connectDatabase();
    
    const numberOfProductsToGenerate = process.env.NUM_TEST_DATA || 1000; // По умолчанию 1000 тестовых данных
    const productsToInsert = generateProductData(numberOfProductsToGenerate);
    await insertGeneratedData(productsToInsert);

    process.exit(0);
}

app();