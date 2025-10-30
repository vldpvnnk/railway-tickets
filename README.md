# 🚆 Railway Tickets

**Проект на Next.js**  
Frontend + Backend для фильтрации и отображения заказов на железнодорожные/авиа/автобусные билеты.

---

## 📋 Описание проекта

Проект состоит из двух частей:

### **1. Frontend (Компонент фильтров)**
Компонент `Filters.jsx` — это адаптивный React-компонент для фильтрации и выбора даты на странице поиска билетов.

**Функциональность:**
- Табы выбора транспорта: **Ж/Д**, **Авиа**, **Автобусы**
- Панель быстрых фильтров: *Фильтры, Есть места, Нижние места, Тип вагона*
- Календарь цен по датам с интерактивным выбором
- Подсветка активных табов и выбранной даты
- Полностью **адаптивная верстка** (Tailwind CSS, Flex/Grid)
- Реализован с использованием **Next.js App Router** и **React Hooks**

---

### **2. Backend (API заказов)**

Реализован API-endpoint `/api/admin/orders`, который возвращает список заказов из файла `mock-orders.json`.

**Возможности API:**
- `GET /api/admin/orders` — возвращает все заказы  
- `GET /api/admin/orders?status=PAID` — фильтрация заказов по статусу (`PAID`, `PENDING`, `CANCELLED`)
- Данные читаются из файла `src/data/mock-orders.json`
- Обработка ошибок и возврат статуса 500 при сбое чтения файла

---

## 🧩 Технологии

| Раздел | Технологии |
|:--------|:------------|
| **Frontend** | React 19, Next.js 16 (App Router), Tailwind CSS |
| **Backend** | Next.js Route Handlers, Node.js (fs/promises) |
| **UI/UX** | Flexbox, Grid, адаптивная верстка, тёмная тема |
| **Прочее** | TypeScript (в layout/page), ESLint, PostCSS |


## ⚙️ Установка и запуск

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/vldpvnk/railway-tickets.git
   cd railway-tickets
    ```
2. Установите зависимости:
    ```
    npm install
    ```
3. Запустите проект:
    ```
    npm run dev
    ```

4. Откройте в браузере: http://localhost:3000

## Проверка API
Все заказы:
```
http://localhost:3000/api/admin/orders
```
Фильтрация по статусу:
```
http://localhost:3000/api/admin/orders?status=PAID
```