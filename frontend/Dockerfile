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

# Виставляємо порт, на якому буде працювати фронтенд
EXPOSE 5173

# Запускаємо Vite у режимі розробки
CMD ["npm", "run", "dev"]