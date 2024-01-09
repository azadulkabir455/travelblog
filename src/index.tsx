import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// DatePiceker CSS
import "react-datepicker/dist/react-datepicker.css";

// Global CSS
import "./styles/customizeTheme.scss";
import "./styles/global.scss";

// Page CSS
import "./styles/pages/home.scss";
import "./styles/pages/blogs.scss";
import "./styles/pages/contact.scss";
import "./styles/pages/profile.scss";
import "./styles/pages/addPost.scss"

// Global Component CSS
import "./styles/global/card.scss";
import "./styles/global/bloglist.scss";
import "./styles/global/sidebarContent.scss";
import "./styles/global/blogCardLarge.scss";
import "./styles/global/footer.scss";
import "./styles/global/navbar.scss";
import "./styles/global/notFound.scss"

// Form CSS
import "./styles/form/customForm.scss"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
