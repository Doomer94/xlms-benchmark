FROM golang:latest

# Скопировать исходный код в контейнер
WORKDIR /app
COPY . .

# Установить зависимости
RUN go mod init products_exporter
RUN go get -d -v ./...
RUN go install -v ./...

# Собрать исполняемый файл
RUN go build -o products_exporter .

# Открыть порт
EXPOSE 8080

# Запустить приложение
CMD ["./products_exporter"]
