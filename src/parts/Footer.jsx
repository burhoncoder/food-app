import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid footer__grid">
          <div className="footer-column">
            <NavLink exact to="/" className="footer__logo">
              <i className="fas fa-utensils"></i>resto.
            </NavLink>
            <p className="footer__text">
              MASTER BUILDING PRODUCTS © 2016-2021Все права защищены.
            </p>
          </div>
          <div className="footer-column">
            <h3 className="footer-column__title">Меню</h3>
            <NavLink exact to="/" className="footer-column__link">
              Главное
            </NavLink>
            <NavLink exact to="/menu/burger" className="footer-column__link">
              Меню
            </NavLink>
            <NavLink exact to="/about-us" className="footer-column__link">
              О Нас
            </NavLink>
            <NavLink exact to="/contacts" className="footer-column__link">
              Контакты
            </NavLink>
          </div>
          <div className="footer-column">
            <h3 className="footer-column__title">Контакты</h3>
            <a href="tel:+123-456-7890" className="footer-column__link">
              +123-456-7890
            </a>
            <a href="tel:+111-222-3333" className="footer-column__link">
              +111-222-3333
            </a>
            <a href="https://mail.google.com/" className="footer-column__link">
              shaikhanas@gmail.com
            </a>
            <a href="https://mail.google.com/" className="footer-column__link">
              anasbhai@gmail.com
            </a>
            <a
              href="https://www.google.ru/maps"
              className="footer-column__link"
            >
              mumbai, india - 400104
            </a>
          </div>
          <div className="footer-column">
            <h3 className="footer-column__title">Социльные сети</h3>
            <a
              href="https://ru-ru.facebook.com/"
              className="footer-column__link"
            >
              facebook
            </a>
            <a href="https://twitter.com/" className="footer-column__link">
              twitter
            </a>
            <a
              href="https://www.instagram.com/?hl=ru"
              className="footer-column__link"
            >
              instagram
            </a>
            <a href="https://ru.linkedin.com/" className="footer-column__link">
              linkedin
            </a>
          </div>
        </div>
        <div className="footer__license">
          copyright @ 2021 by <span>mr. web designer</span>
        </div>
      </div>
    </footer>
  );
};
