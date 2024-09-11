#!/usr/bin/env sh

# Завершуємо виконання при помилці
set -e

# Встановлюємо ім'я проекту
PROJECT_NAME='timecraft'

# Створюємо загальну мережу, якщо вона ще не існує
docker network create common || true

# Зупиняємо всі контейнери для проекту timecraft
docker-compose --project-name $PROJECT_NAME kill

# Видаляємо всі зупинені контейнери для проекту timecraft
docker-compose --project-name $PROJECT_NAME rm -f

# Оновлюємо Docker-образи для проекту timecraft
docker-compose --project-name $PROJECT_NAME pull

# Піднімаємо сервіси в фоновому режимі і будуємо образи заново
docker-compose  --project-name $PROJECT_NAME up --build