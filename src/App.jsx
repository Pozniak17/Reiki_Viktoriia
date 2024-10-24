import { NavLink, Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Home from "./pages/Home/Home";
import MyStory from "./pages/MyStory/MyStory";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <header className={css.header}>
        <div>
          <NavLink className={css.logo} to="/">
            reiki victoria
          </NavLink>
        </div>
        <nav className={css.nav}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/about-me">
            About me
          </NavLink>
          <NavLink className={css.link} to="/services">
            Reiki Services
          </NavLink>
          <NavLink className={css.link} to="/calendar">
            Calendar
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-story" element={<MyStory />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
