import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import { scrollToTop } from "../services/helpers/scrollToTop.js";

export const ContactsP = () => {
  scrollToTop();

  const initialValues = {
    name: "",
    telephone: "",
    email: "",
    message: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().matches(/[a-zA-Z]/, "you must specify letters"),
    telephone: yup
      .number()
      .positive()
      .integer()

      .typeError("You must specify a number"),
    email: yup.string().email("Invalid email").required("Required"),
    message: yup.string().min(5, "Too short").required("Required"),
  });

  return (
    <section className="contacts">
      <iframe
        title="map"
        className="contacts__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.7491002908137!2d69.22894861479588!3d41.35780690579245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c5daaa166db%3A0x1f0a4fad767606d7!2z0KjQutC-0LvQsCAyMzMgLSDQlNC-0LwgMjAsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1627966786643!5m2!1sru!2s"
        width="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="container">
        <div className="contacts-inner">
          <h1 className="heading">СВЯЖИТИСЬ С НАМИ</h1>
          <div className="grid contacts__grid">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={() => {}}
            >
              {({ errors, touched }) => {
                return (
                  <Form className="contacts__form">
                    <Field
                      name="name"
                      type="text"
                      className="contacts__textfield"
                      placeholder="Имя"
                    />{" "}
                    {errors.name && touched.name ? (
                      <div className="contacts__error">{errors.name}</div>
                    ) : null}
                    <Field
                      name="telephone"
                      type="tel"
                      className="contacts__textfield"
                      placeholder="Телефон"
                    />
                    {errors.telephone && touched.telephone ? (
                      <div className="contacts__error">{errors.telephone}</div>
                    ) : null}
                    <Field
                      name="email"
                      tye="email"
                      className="contacts__textfield"
                      placeholder="E-Mail"
                    />
                    {errors.email && touched.email ? (
                      <div className="contacts__error">{errors.email}</div>
                    ) : null}
                    <Field
                      as="textarea"
                      name="message"
                      type="text"
                      className="contacts__textfield"
                      placeholder="Сообшение"
                    />
                    {errors.message && touched.message ? (
                      <div className="contacts__error">{errors.message}</div>
                    ) : null}
                    <button
                      className="btn"
                      type="submit"
                      onSubmit={() => console.log("submitted")}
                    >
                      Отправить
                    </button>
                  </Form>
                );
              }}
            </Formik>

            <div className="contacts__inf">
              <h2 className="sub-heading">Контакты</h2>
              <a
                className="contacts__detail"
                href="https://www.google.com/maps"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
                      fill="black"
                    />
                  </g>
                </svg>
                <span>15A Yunusobod, Toshkent</span>
              </a>
              <a className="contacts__detail" href="tel:+ 998990000001">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
                      fill="black"
                    />
                  </g>
                </svg>
                <span>+ 998 99 000 00 01</span>
              </a>
              <a className="contacts__detail" href="https://mail.google.com/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                      fill="black"
                    />
                  </g>
                </svg>
                <span>industriya@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
