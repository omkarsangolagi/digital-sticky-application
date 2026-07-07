# 📝 Digital Sticky Notes App

A simple and responsive **Digital Sticky Notes Application** built using **React.js, JavaScript, HTML, and CSS**. This application helps users create, manage, search, and organize notes with data stored in the browser using **Local Storage**.

---

## 🚀 Features

- ➕ Create new notes
- 🗑 Delete notes
- 🔍 Search notes by title
- 📂 Filter notes by category
- 🌙 Light/Dark Mode
- 💾 Local Storage support (notes persist after refresh)
- 📱 Responsive design for Mobile, Tablet, and Desktop

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- Vite
- Local Storage API

---

## 📂 Project Structure

```
digital-sticky-notes/
│
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── AddNote.jsx
│   │   ├── NoteCard.jsx
│   │   └── NotesList.jsx
│   │
│   ├── Styles/
│   │   ├── Navbar.css
│   │   ├── CategoryFilter.css
│   │   ├── AddNote.css
│   │   ├── NoteCard.css
│   │   └── NotesList.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Functionalities

### Create Notes
- Add a title
- Select a category
- Enter note description
- Save note

### Delete Notes
- Remove unwanted notes with one click

### Search Notes
- Search notes instantly using the search bar

### Category Filter
- All
- Home
- Personal
- College
- Work
- Shopping
- Ideas

### Dark Mode
- Toggle between Light and Dark themes

### Local Storage
- Automatically saves notes in the browser
- Notes remain available after refreshing the page

---

## ⚛️ React Concepts Used

- Functional Components
- useState Hook
- useEffect Hook
- Props
- Component-based Architecture
- Conditional Rendering
- Array map()
- Array filter()
- Local Storage

---

## 📸 Application Preview

### Home Page
- Navbar
- Search Bar
- Dark Mode Toggle
- Category Filter
- Add Note Form
- Notes Display

---

## 📈 Future Enhancements

- User Login & Signup
- Admin Dashboard
- Edit Notes
- Pin Notes
- Favorite Notes
- Drag & Drop Notes
- Export Notes as PDF
- Copy Notes to Clipboard
- Backend Integration (Node.js + MongoDB)

---

## ▶️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/digital-sticky-notes.git
```

Navigate to the project

```bash
cd digital-sticky-notes
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 👨‍💻 Author

omkar

B.Tech – Computer Science & Engineering (Cyber Security)

---

## 📄 License

This project is developed for learning, practice, and portfolio purposes.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
