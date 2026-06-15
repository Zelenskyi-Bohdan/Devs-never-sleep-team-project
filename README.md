# Organic Shop 🍃

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://zelenskyi-bohdan.github.io/Devs-never-sleep-team-project/)

## Про проєкт
Organic Shop — це адаптивний веб-застосунок (лендінг) для магазину органічних продуктів. Проєкт розроблено командою "Devs never sleep" у рамках навчального курсу. Головний фокус — семантична верстка, мобільно-адаптивний дизайн та робота з нативним DOM через Vanilla JavaScript.

## Технологічний стек
- **HTML5 / CSS3** (семантика, Flexbox/Grid, CSS-змінні).
- **JavaScript** (Vanilla JS для логіки UI).
- **Vite** (бандлер для швидкого локального сервера та оптимізації продакшен-збірки).
- **npm** (управління залежностями).

## Структура проєкту
- `src/` — вихідні файли (HTML, CSS, JS, ассети).
- `img/` — статичні зображення.
- `vite.config.js` — конфігурація збірки.
- `.prettierrc.json` / `.editorconfig` — налаштування форматування коду.

## Локальний запуск

Для розгортання проєкту локально необхідний встановлений [Node.js](https://nodejs.org/).

1. Склонувати репозиторій:
   ```bash
   git clone [https://github.com/Zelenskyi-Bohdan/Devs-never-sleep-team-project.git](https://github.com/Zelenskyi-Bohdan/Devs-never-sleep-team-project.git)

2. Перейти в директорію проєкту:
   ```Bash
   cd Devs-never-sleep-team-project

3. Встановити залежності:
   ```Bash
   npm install

4. Запустити сервер для розробки:
   ```Bash
   npm run dev

5. Збірка проєкта для продакшену:
   ```Bash
   npm run build