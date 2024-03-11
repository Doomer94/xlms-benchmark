# Используем базовый образ Python
FROM python:3.9

# Установка зависимостей
RUN pip install pyexcelerate pandas pymongo openpyxl

# Копируем исходный код в контейнер
COPY . /app

# Устанавливаем рабочую директорию
WORKDIR /app

# Команда для запуска скрипта при старте контейнера
CMD ["python", "main.py"]
