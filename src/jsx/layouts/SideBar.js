import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

class MM extends Component {
   componentDidMount() {
      this.$el = this.el;
      this.mm = new MetisMenu(this.$el);
   }
   componentWillUnmount() {
      this.mm("dispose");
   }
   render() {
      return (
         <div className="mm-wrapper">
            <ul className="metismenu" ref={(el) => (this.el = el)}>
               {this.props.children}
            </ul>
         </div>
      );
   }
}

class SideBar extends Component {
   /// Open menu
   componentDidMount() {
      // sidebar open/close

      var btn = document.querySelector(".nav-control");
      var aaa = document.querySelector("#main-wrapper ");

      function toggleFunc() {
         return aaa.classList.toggle("menu-toggle");
      }

      btn.addEventListener("click", toggleFunc);
   }
   render() {
      /// Path
      const path = window.location.pathname;

      /// Active menu
      let deshBoard = [
            "",
            "search-job",
            "appication",
            "profile",
            "companies",
            "statistics",
         ],
         app = [
            "app-profile",
            "app-calender",
            "email-compose",
            "email-inbox",
            "email-read",
            "ecom-product-grid",
            "ecom-product-list",
            "ecom-product-list",
            "ecom-product-order",
            "ecom-checkout",
            "ecom-invoice",
            "ecom-customers",
         ],
         charts = [
            "chart-flot",
            "chart-morris",
            "chart-chartjs",
            "chart-chartist",
            "chart-sparkline",
            "chart-peity",
         ],
         bootstrap = [
            "ui-accordion",
            "ui-badge",
            "ui-alert",
            "ui-button",
            "ui-modal",
            "ui-button-group",
            "ui-list-group",
            "ui-media-object",
            "ui-card",
            "ui-carousel",
            "ui-dropdown",
            "ui-popover",
            "ui-progressbar",
            "ui-tab",
            "ui-typography",
            "ui-pagination",
            "ui-grid",
         ],
         plugins = [
            "uc-select2",
            "uc-nestable",
            "uc-sweetalert",
            "uc-toastr",
            "uc-jqvmap",
            "uc-noui-slider",
         ],
         widget = ["widget"],
         forms = [
            "form-element",
            "form-wizard",
            "form-editor-summernote",
            "form-pickers",
            "form-validation-jquery",
         ],
         table = ["table-bootstrap-basic", "table-datatable-basic"],
         pages = [
            "page-register",
            "page-login",
            "page-lock-screen",
            "page-error-400",
            "page-error-403",
            "page-error-404",
            "page-error-500",
            "page-error-503",
         ];
      return (
         <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
               <MM className="metismenu" id="menu">
                  <li
                     className={`${
                        deshBoard.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to=""
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-networking"></i>
                        <span className="nav-text">Dashboard</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                           <Link to="search-job">Search Job</Link>
                        </li>
                        <li>
                           <Link to="application">Application</Link>
                        </li>
                        <li>
                           <Link to="profile">Profile</Link>
                        </li>
                        <li>
                           <Link to="companies">Companies</Link>
                        </li>
                        <li>
                           <Link to="statistics">Statistics</Link>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`${
                        app.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to=""
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-television"></i>
                        <span className="nav-text">Apps</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="./app-profile">Profile</Link>
                        </li>
                        <li>
                           <Link
                              className="has-arrow"
                              to=""
                              aria-expanded="false"
                           >
                              Email
                           </Link>
                           <ul aria-expanded="false">
                              <li>
                                 <Link to="./email-compose">Compose</Link>
                              </li>
                              <li>
                                 <Link to="./email-inbox">Inbox</Link>
                              </li>
                              <li>
                                 <Link to="./email-read">Read</Link>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <Link to="./app-calender">Calendar</Link>
                        </li>
                        <li>
                           <Link
                              className="has-arrow"
                              to=""
                              aria-expanded="false"
                           >
                              Shop
                           </Link>
                           <ul aria-expanded="false">
                              <li>
                                 <Link to="./ecom-product-grid">
                                    Product Grid
                                 </Link>
                              </li>
                              <li>
                                 <Link to="./ecom-product-list">
                                    Product List
                                 </Link>
                              </li>
                              <li>
                                 <Link to="./ecom-product-detail">
                                    Product Details
                                 </Link>
                              </li>
                              <li>
                                 <Link to="./ecom-product-order">Order</Link>
                              </li>
                              <li>
                                 <Link to="./ecom-checkout">Checkout</Link>
                              </li>
                              <li>
                                 <Link to="./ecom-invoice">Invoice</Link>
                              </li>
                              <li>
                                 <Link to="./ecom-customers">Customers</Link>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`${
                        charts.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to=""
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-controls-3"></i>
                        <span className="nav-text">Charts</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="./chart-flot">Flot</Link>
                        </li>
                        <li>
                           <Link to="./chart-morris">Morris</Link>
                        </li>
                        <li>
                           <Link to="./chart-chartjs">Chartjs</Link>
                        </li>
                        <li>
                           <Link to="./chart-chartist">Chartist</Link>
                        </li>
                        <li>
                           <Link to="./chart-sparkline">Sparkline</Link>
                        </li>
                        <li>
                           <Link to="./chart-peity">Peity</Link>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`${
                        bootstrap.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to=""
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-internet"></i>
                        <span className="nav-text">Bootstrap</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="./ui-accordion">Accordion</Link>
                        </li>
                        <li>
                           <Link to="./ui-alert">Alert</Link>
                        </li>
                        <li>
                           <Link to="./ui-badge">Badge</Link>
                        </li>
                        <li>
                           <Link to="./ui-button">Button</Link>
                        </li>
                        <li>
                           <Link to="./ui-modal">Modal</Link>
                        </li>
                        <li>
                           <Link to="./ui-button-group">Button Group</Link>
                        </li>
                        <li>
                           <Link to="./ui-list-group">List Group</Link>
                        </li>
                        <li>
                           <Link to="./ui-media-object">Media Object</Link>
                        </li>
                        <li>
                           <Link to="./ui-card">Cards</Link>
                        </li>
                        <li>
                           <Link to="./ui-carousel">Carousel</Link>
                        </li>
                        <li>
                           <Link to="./ui-dropdown">Dropdown</Link>
                        </li>
                        <li>
                           <Link to="./ui-popover">Popover</Link>
                        </li>
                        <li>
                           <Link to="./ui-progressbar">Progressbar</Link>
                        </li>
                        <li>
                           <Link to="./ui-tab">Tab</Link>
                        </li>
                        <li>
                           <Link to="./ui-typography">Typography</Link>
                        </li>
                        <li>
                           <Link to="./ui-pagination">Pagination</Link>
                        </li>
                        <li>
                           <Link to="./ui-grid">Grid</Link>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`${
                        plugins.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to=""
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-heart"></i>
                        <span className="nav-text">Plugins</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="./uc-select2">Select 2</Link>
                        </li>
                        <li>
                           <Link to="./uc-nestable">Nestedable</Link>
                        </li>
                        <li>
                           <Link to="./uc-noui-slider">Noui Slider</Link>
                        </li>
                        <li>
                           <Link to="./uc-sweetalert">Sweet Alert</Link>
                        </li>
                        <li>
                           <Link to="./uc-toastr">Toastr</Link>
                        </li>
                        <li>
                           <Link to="./map-jqvmap">Jqv Map</Link>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`${
                        widget.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        to="widget-basic"
                        className="ai-icon"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-settings-2"></i>
                        <span className="nav-text">Widget</span>
                     </Link>
                  </li>
                  <li
                     className={`${
                        forms.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to=""
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-notepad"></i>
                        <span className="nav-text forms">Forms</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="./form-element">Form Elements</Link>
                        </li>
                        <li>
                           <Link to="./form-wizard">Wizard</Link>
                        </li>
                        <li>
                           <Link to="./form-editor-summernote">Summernote</Link>
                        </li>
                        <li>
                           <Link to="form-pickers">Pickers</Link>
                        </li>
                        <li>
                           <Link to="form-validation-jquery">
                              Jquery Validate
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`${
                        table.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to=""
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-network"></i>
                        <span className="nav-text">Table</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="table-bootstrap-basic">Bootstrap</Link>
                        </li>
                        <li>
                           <Link to="table-datatable-basic">Datatable</Link>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`${
                        pages.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to=""
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-layer-1"></i>
                        <span className="nav-text">Pages</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="./page-register">Register</Link>
                        </li>
                        <li>
                           <Link to="./page-login">Login</Link>
                        </li>
                        <li>
                           <Link
                              className="has-arrow"
                              to=""
                              aria-expanded="false"
                           >
                              Error
                           </Link>
                           <ul aria-expanded="false">
                              <li>
                                 <Link to="./page-error-400">Error 400</Link>
                              </li>
                              <li>
                                 <Link to="./page-error-403">Error 403</Link>
                              </li>
                              <li>
                                 <Link to="./page-error-404">Error 404</Link>
                              </li>
                              <li>
                                 <Link to="./page-error-500">Error 500</Link>
                              </li>
                              <li>
                                 <Link to="./page-error-503">Error 503</Link>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <Link to="./page-lock-screen">Lock Screen</Link>
                        </li>
                     </ul>
                  </li>
               </MM>

               <div className="copyright">
                  <p>
                     <strong>Jobie Dashboard</strong> ©All Rights Reserved
                  </p>
                  <p>by DexignZone</p>
               </div>
            </PerfectScrollbar>
         </div>
      );
   }
}

export default SideBar;
