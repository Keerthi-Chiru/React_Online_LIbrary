# 📚 React + Redux Online Library App

Welcome to my Online Library project! This is a simple and clean web app built with **React**, **Redux Toolkit**, and **React Router**. It lets users browse books, filter by category, and even add new books — with everything saved using `localStorage` so your data stays even after refreshing.

---

## 💡 What This Project Does

- Users can **search books** by title or author
- Filter books by **categories** like Fiction, Science, History, etc.
- Fill out a form to **add a new book** to the list
- The app uses **Redux** to manage state, and `localStorage` to save data between sessions
- Clicking on a book takes you to a simple **detail page**
- Fully styled using plain **CSS** (Grid + Flexbox) with custom radio buttons

---

## 🧱 Tech Stack

- ⚛️ React (with Vite)
- 🧠 Redux Toolkit
- 🧭 React Router v6
- 🖌️ CSS (custom styles, no framework)
- 💾 localStorage for persistence

---

## 🖼️ Screenshots

_Browse Books Page_  
> Filter by category or search by title/author

_Add Book Page_  
> Form with custom radio buttons and validations

---

## 🧰 How to Run This

If you'd like to try it locally:

```bash
git clone https://github.com/Keerthi-Chiru/react-online-library.git
cd react-online-library
npm install
npm run dev
Then open http://localhost:5173 in your browser.

🗂️ Folder Structure 
bash
Copy
Edit
src/
├── components/       # BookCard, Navbar, BrowseBooks
├── pages/            # Add.jsx, BookDetail.jsx
├── redux/            # bookSlice.js, store.js
├── utils/            # books.js (default data)
├── App.jsx
└── main.jsx
🧠 What I Learned
This project helped me understand:

How Redux Toolkit simplifies state management

Connecting form data to Redux with validation

Handling localStorage to persist user actions

Writing clean and modular components in React

Styling forms and radio buttons without a UI framework

🚀 Features I Plan to Add
 Edit & delete books

 Upload book cover images

 Dark mode toggle

 Export/backup your library

 Deploy to Netlify or Vercel

🙋‍♂️ Who Made This?
Hi, I’m Keerthi N Chiranjeevi 👋
I built this project to practice React, Redux, and working with localStorage.
If you found it helpful or interesting, feel free to connect or leave feedback.

📃 License
This project is free to use and modify under the MIT License.
