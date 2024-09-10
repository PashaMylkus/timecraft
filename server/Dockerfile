# Використовуємо базовий образ Node.js
FROM node:18

# Встановлюємо робочу директорію
WORKDIR /usr/src/app

# Копіюємо файли package.json та package-lock.json (або yarn.lock)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь код у контейнер
COPY . .

# Встановлюємо nodemon для гарячого перезавантаження
RUN npm install -g nodemon

# Виставляємо порт, на якому буде працювати сервер
EXPOSE 4000

# Запускаємо сервер у режимі розробки з nodemon
CMD ["nodemon", "src/server.ts"]