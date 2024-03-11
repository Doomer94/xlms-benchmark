const mongoose = require('mongoose');

async function connectDatabase() {
    try {
        await mongoose.connect('mongodb://mongodb:27017');

        console.log('Подключение к базе данных успешно.');
    } catch (error) {
        console.error('Ошибка подключения к базе данных:', error);
    }
}

module.exports = connectDatabase;
