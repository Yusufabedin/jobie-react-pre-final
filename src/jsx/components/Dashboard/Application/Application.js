import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Application = () => {
   return (
      <Fragment>
         <div className="d-flex flex-wrap mb-4 row">
            <div className="col-xl-3 col-lg-4 mb-2">
               <h6 className="text-black fs-16 font-w600 mb-1">
                  Showing 45 Applicants
               </h6>
               <span className="fs-14">Based your preferences</span>
            </div>
            <div className="col-xl-9 col-lg-8 d-flex flex-wrap">
               <div className="mr-auto">
                  <Link
                     to="/"
                     className="btn btn-primary btn-rounded mr-2 mb-2"
                  >
                     ALL
                  </Link>
                  <Link
                     to="/"
                     className="btn btn-primary btn-rounded mr-2 light mb-2"
                  >
                     Pending
                  </Link>
                  <Link
                     to="/"
                     className="btn btn-primary btn-rounded mr-2 light mb-2"
                  >
                     On-Hold
                  </Link>
                  <Link
                     to="/"
                     className="btn btn-primary btn-rounded mr-2 light mb-2"
                  >
                     Candidate
                  </Link>
               </div>
               <div className="dropdown custom-dropdown mb-2">
                  <div
                     className="btn border border-primary text-black btn-rounded"
                     role="button"
                     data-toggle="dropdown"
                     aria-expanded="false"
                  >
                     <svg
                        className="min-w20 mr-2"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M8.2939 14.293L6.0009 16.5859V1C6.0009 0.734784 5.89554 0.48043 5.708 0.292893C5.52047 0.105357 5.26611 0 5.0009 0C4.73568 0 4.48133 0.105357 4.29379 0.292893C4.10625 0.48043 4.0009 0.734784 4.0009 1V16.5859L1.7079 14.293C1.51929 14.1108 1.26669 14.01 1.00449 14.0123C0.742297 14.0146 0.491485 14.1198 0.306077 14.3052C0.120669 14.4906 0.0154998 14.7414 0.0132214 15.0036C0.010943 15.2658 0.111737 15.5184 0.293895 15.707L4.2939 19.707C4.4816 19.8942 4.73586 19.9993 5.00095 19.9993C5.26603 19.9993 5.5203 19.8942 5.708 19.707L9.708 15.707C9.89082 15.5185 9.99217 15.2657 9.99016 15.0031C9.98816 14.7405 9.88295 14.4893 9.69727 14.3036C9.51159 14.118 9.26034 14.0128 8.99776 14.0108C8.73519 14.0088 8.48237 14.1102 8.2939 14.293Z"
                           fill="#40189D"
                        />
                        <path
                           d="M9.00098 4H19.001C19.2662 4 19.5205 3.89464 19.7081 3.7071C19.8956 3.51957 20.001 3.26521 20.001 3C20.001 2.73478 19.8956 2.48043 19.7081 2.29289C19.5205 2.10536 19.2662 2 19.001 2H9.00098C8.73576 2 8.48141 2.10536 8.29387 2.29289C8.10633 2.48043 8.00098 2.73478 8.00098 3C8.00098 3.26521 8.10633 3.51957 8.29387 3.7071C8.48141 3.89464 8.73576 4 9.00098 4Z"
                           fill="#40189D"
                        />
                        <path
                           d="M19.001 6H9.00098C8.73576 6 8.48141 6.10536 8.29387 6.29289C8.10633 6.48043 8.00098 6.73478 8.00098 7C8.00098 7.26521 8.10633 7.51957 8.29387 7.7071C8.48141 7.89464 8.73576 8 9.00098 8H19.001C19.2662 8 19.5205 7.89464 19.7081 7.7071C19.8956 7.51957 20.001 7.26521 20.001 7C20.001 6.73478 19.8956 6.48043 19.7081 6.29289C19.5205 6.10536 19.2662 6 19.001 6Z"
                           fill="#40189D"
                        />
                        <path
                           d="M16.001 10H9.00098C8.73576 10 8.48141 10.1054 8.29387 10.2929C8.10633 10.4804 8.00098 10.7348 8.00098 11C8.00098 11.2652 8.10633 11.5196 8.29387 11.7071C8.48141 11.8947 8.73576 12 9.00098 12H16.001C16.2662 12 16.5205 11.8947 16.7081 11.7071C16.8956 11.5196 17.001 11.2652 17.001 11C17.001 10.7348 16.8956 10.4804 16.7081 10.2929C16.5205 10.1054 16.2662 10 16.001 10Z"
                           fill="#40189D"
                        />
                     </svg>
                     Newest
                     <i className="las la-angle-down scale5 text-primary ml-3"></i>
                  </div>
                  <div className="dropdown-menu dropdown-menu-right">
                     <Link className="dropdown-item" to="">
                        Details
                     </Link>
                     <Link className="dropdown-item text-danger" to="">
                        Cancel
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-12">
               <div className="table-responsive">
                  <table
                     className="table display mb-4 dataTablesCard  card-table"
                     id="example5"
                  >
                     <thead>
                        <tr>
                           <th>
                              <div className="checkbox mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox ">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="checkAll"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       for="checkAll"
                                    ></label>
                                 </div>
                              </div>
                           </th>
                           <th>ID</th>
                           <th>Date Applied</th>
                           <th>Company</th>
                           <th>Type</th>
                           <th>Postition</th>
                           <th>Contact</th>
                           <th>Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <div className="checkbox mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox ">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="check1"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       for="check1"
                                    ></label>
                                 </div>
                              </div>
                           </td>
                           <td>#APL-0003</td>
                           <td>June 1, 2020, 08:22 AM</td>
                           <td>
                              <div className="media">
                                 <svg
                                    className="mr-3"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                       fill="#D3D3D3"
                                    />
                                    <path
                                       d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                       fill="#F0780A"
                                    />
                                    <path
                                       d="M12.8892 12.8887C14.4645 11.3134 16.3346 10.0638 18.3928 9.21129C20.451 8.35875 22.657 7.91996 24.8848 7.91996C27.1126 7.91996 29.3185 8.35875 31.3767 9.21129C33.4349 10.0638 35.305 11.3134 36.8803 12.8887C38.4556 14.464 39.7052 16.3341 40.5577 18.3923C41.4103 20.4505 41.8491 22.6565 41.8491 24.8842C41.8491 27.112 41.4103 29.318 40.5577 31.3762C39.7052 33.4344 38.4556 35.3045 36.8803 36.8798L30.8825 30.882C31.6702 30.0944 32.295 29.1593 32.7212 28.1302C33.1475 27.1011 33.3669 25.9981 33.3669 24.8842C33.3669 23.7704 33.1475 22.6674 32.7212 21.6383C32.295 20.6092 31.6702 19.6741 30.8825 18.8865C30.0949 18.0988 29.1598 17.474 28.1307 17.0478C27.1016 16.6215 25.9987 16.4021 24.8848 16.4021C23.7709 16.4021 22.6679 16.6215 21.6388 17.0478C20.6097 17.474 19.6746 18.0988 18.887 18.8865L12.8892 12.8887Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M12.8892 36.8798C9.70778 33.6984 7.92048 29.3835 7.92048 24.8843C7.92048 20.385 9.70778 16.0701 12.8892 12.8887C16.0706 9.70727 20.3856 7.91997 24.8848 7.91996C29.384 7.91996 33.6989 9.70726 36.8803 12.8887L30.8825 18.8865C29.2918 17.2958 27.1344 16.4021 24.8848 16.4021C22.6352 16.4021 20.4777 17.2958 18.887 18.8865C17.2963 20.4772 16.4026 22.6346 16.4026 24.8843C16.4026 27.1339 17.2963 29.2913 18.887 30.882L12.8892 36.8798Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <div className="media-body text-nowrap">
                                    <h6 className="text-black font-w600 fs-16 mb-0">
                                       Mosciski Inc.
                                    </h6>
                                    <span className="fs-14">
                                       Creative Design Agency
                                    </span>
                                 </div>
                              </div>
                           </td>
                           <td>FREELANCE</td>
                           <td>Intern UI Designer</td>
                           <td>
                              <div className="d-flex">
                                 <Link className="contact-icon mr-3" to="#">
                                    <i
                                       className="fa fa-phone"
                                       aria-hidden="true"
                                    ></i>
                                 </Link>
                                 <Link className="contact-icon" to="#">
                                    <i className="las la-envelope"></i>
                                 </Link>
                              </div>
                           </td>
                           <td>
                              <div className="d-flex align-items-center">
                                 <Link
                                    className="btn btn-rounded btn-outline-dark mr-3 ml-auto"
                                    to="#"
                                 >
                                    Pending
                                 </Link>
                                 <div className="dropdown float-right custom-dropdown mb-0">
                                    <div className="" data-toggle="dropdown">
                                       <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                       </svg>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right">
                                       <Link className="dropdown-item" to="">
                                          Details
                                       </Link>
                                       <Link
                                          className="dropdown-item text-danger"
                                          to=""
                                       >
                                          Cancel
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div className="checkbox mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox ">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="check2"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       for="check2"
                                    ></label>
                                 </div>
                              </div>
                           </td>
                           <td>#APL-0002</td>
                           <td>June 1, 2020, 08:22 AM</td>
                           <td>
                              <div className="media">
                                 <svg
                                    className="mr-3"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                       fill="#D3D3D3"
                                    />
                                    <path
                                       d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                       fill="#515151"
                                    />
                                    <path
                                       d="M12.8897 12.8887C14.465 11.3134 16.3351 10.0638 18.3933 9.21129C20.4515 8.35875 22.6575 7.91996 24.8853 7.91996C27.113 7.91996 29.319 8.35875 31.3772 9.21129C33.4354 10.0638 35.3055 11.3134 36.8808 12.8887C38.4561 14.464 39.7057 16.3341 40.5582 18.3923C41.4107 20.4505 41.8495 22.6565 41.8495 24.8842C41.8495 27.112 41.4107 29.318 40.5582 31.3762C39.7057 33.4344 38.4561 35.3045 36.8808 36.8798L30.883 30.882C31.6707 30.0944 32.2955 29.1593 32.7217 28.1302C33.148 27.1011 33.3674 25.9981 33.3674 24.8842C33.3674 23.7704 33.148 22.6674 32.7217 21.6383C32.2955 20.6092 31.6707 19.6741 30.883 18.8865C30.0954 18.0988 29.1603 17.474 28.1312 17.0478C27.1021 16.6215 25.9991 16.4021 24.8853 16.4021C23.7714 16.4021 22.6684 16.6215 21.6393 17.0478C20.6102 17.474 19.6751 18.0988 18.8875 18.8865L12.8897 12.8887Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M36.8808 12.8887C40.0622 16.0701 41.8495 20.385 41.8495 24.8842C41.8495 29.3834 40.0622 33.6984 36.8808 36.8798C33.6994 40.0612 29.3845 41.8485 24.8853 41.8485C20.3861 41.8485 16.0711 40.0612 12.8897 36.8798L18.8875 30.882C20.4782 32.4727 22.6357 33.3664 24.8853 33.3664C27.1349 33.3664 29.2923 32.4727 30.883 30.882C32.4737 29.2913 33.3674 27.1338 33.3674 24.8842C33.3674 22.6346 32.4737 20.4772 30.883 18.8865L36.8808 12.8887Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <div className="media-body text-nowrap">
                                    <h6 className="text-black font-w600 fs-16 mb-0">
                                       Funk Inc.
                                    </h6>
                                    <span className="fs-14">IT Department</span>
                                 </div>
                              </div>
                           </td>
                           <td>PART TIME</td>
                           <td>Junior UI Designer</td>
                           <td>
                              <div className="d-flex">
                                 <Link className="contact-icon" to="#">
                                    <i
                                       className="fa fa-phone"
                                       aria-hidden="true"
                                    ></i>
                                 </Link>
                              </div>
                           </td>
                           <td>
                              <div className="d-flex align-items-center">
                                 <Link
                                    className="btn btn-rounded btn-outline-danger mr-3 ml-auto"
                                    to="#"
                                 >
                                    On-Hold
                                 </Link>
                                 <div className="dropdown float-right custom-dropdown mb-0">
                                    <div className="" data-toggle="dropdown">
                                       <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                       </svg>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right">
                                       <Link className="dropdown-item" to="">
                                          Details
                                       </Link>
                                       <Link
                                          className="dropdown-item text-danger"
                                          to=""
                                       >
                                          Cancel
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div className="checkbox mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox ">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="check3"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       for="check3"
                                    ></label>
                                 </div>
                              </div>
                           </td>
                           <td>#APL-0003</td>
                           <td>June 1, 2020, 08:22 AM</td>
                           <td>
                              <div className="media">
                                 <svg
                                    className="mr-3"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                       fill="#D3D3D3"
                                    />
                                    <path
                                       d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                       fill="#BB1D85"
                                    />
                                    <path
                                       d="M12.889 36.8797C11.3138 35.3045 10.0642 33.4343 9.21165 31.3761C8.35912 29.3179 7.92032 27.112 7.92033 24.8842C7.92032 22.6564 8.35912 20.4504 9.21165 18.3922C10.0642 16.334 11.3138 14.4639 12.889 12.8886C14.4643 11.3133 16.3345 10.0638 18.3927 9.21123C20.4509 8.3587 22.6568 7.9199 24.8846 7.9199C27.1124 7.9199 29.3184 8.3587 31.3766 9.21123C33.4348 10.0638 35.3049 11.3133 36.8802 12.8886L30.8824 18.8864C30.0948 18.0988 29.1597 17.474 28.1306 17.0477C27.1015 16.6214 25.9985 16.402 24.8846 16.402C23.7707 16.402 22.6677 16.6214 21.6386 17.0477C20.6095 17.474 19.6745 18.0988 18.8868 18.8864C18.0992 19.674 17.4744 20.6091 17.0481 21.6382C16.6219 22.6673 16.4025 23.7703 16.4025 24.8842C16.4025 25.9981 16.6219 27.1011 17.0481 28.1302C17.4744 29.1593 18.0992 30.0943 18.8868 30.882L12.889 36.8797Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M36.8802 36.8797C33.6988 40.0612 29.3839 41.8485 24.8847 41.8485C20.3855 41.8485 16.0705 40.0612 12.8891 36.8797C9.7077 33.6983 7.92039 29.3834 7.92039 24.8842C7.92039 20.385 9.70769 16.0701 12.8891 12.8886L18.8869 18.8864C17.2962 20.4771 16.4025 22.6346 16.4025 24.8842C16.4025 27.1338 17.2962 29.2913 18.8869 30.882C20.4776 32.4727 22.6351 33.3663 24.8847 33.3663C27.1343 33.3663 29.2917 32.4727 30.8825 30.882L36.8802 36.8797Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <div className="media-body text-nowrap">
                                    <h6 className="text-black font-w600 fs-16 mb-0">
                                       Mosciski Inc.
                                    </h6>
                                    <span className="fs-14">
                                       Creative Design Agency
                                    </span>
                                 </div>
                              </div>
                           </td>
                           <td>FREELANCE</td>
                           <td>Intern UI Designer</td>
                           <td>
                              <div className="d-flex">
                                 <Link className="contact-icon" to="#">
                                    <i
                                       className="fa fa-whatsapp"
                                       aria-hidden="true"
                                    ></i>
                                 </Link>
                              </div>
                           </td>
                           <td>
                              <div className="d-flex align-items-center">
                                 <Link
                                    className="btn btn-rounded btn-outline-dark mr-3 ml-auto"
                                    to="#"
                                 >
                                    Pending
                                 </Link>
                                 <div className="dropdown float-right custom-dropdown mb-0">
                                    <div className="" data-toggle="dropdown">
                                       <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                       </svg>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right">
                                       <Link className="dropdown-item" to="">
                                          Details
                                       </Link>
                                       <Link
                                          className="dropdown-item text-danger"
                                          to=""
                                       >
                                          Cancel
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div className="checkbox mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox ">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="check4"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       for="check4"
                                    ></label>
                                 </div>
                              </div>
                           </td>
                           <td>#APL-0001</td>
                           <td>June 1, 2020, 08:22 AM</td>
                           <td>
                              <div className="media">
                                 <svg
                                    className="mr-3"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                       fill="#D3D3D3"
                                    />
                                    <path
                                       d="M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z"
                                       fill="#40C7CF"
                                    />
                                    <path
                                       d="M12.8892 12.8887C14.4645 11.3134 16.3346 10.0639 18.3928 9.21132C20.451 8.35878 22.657 7.91999 24.8848 7.91999C27.1126 7.91999 29.3185 8.35878 31.3767 9.21132C33.4349 10.0639 35.305 11.3134 36.8803 12.8887C38.4556 14.464 39.7052 16.3341 40.5577 18.3923C41.4103 20.4505 41.8491 22.6565 41.8491 24.8843C41.8491 27.1121 41.4103 29.318 40.5577 31.3762C39.7052 33.4344 38.4556 35.3046 36.8803 36.8798L30.8825 30.8821C31.6702 30.0944 32.295 29.1594 32.7212 28.1303C33.1475 27.1011 33.3669 25.9982 33.3669 24.8843C33.3669 23.7704 33.1475 22.6674 32.7212 21.6383C32.295 20.6092 31.6702 19.6741 30.8825 18.8865C30.0949 18.0989 29.1598 17.4741 28.1307 17.0478C27.1016 16.6215 25.9987 16.4021 24.8848 16.4021C23.7709 16.4021 22.6679 16.6215 21.6388 17.0478C20.6097 17.4741 19.6746 18.0989 18.887 18.8865L12.8892 12.8887Z"
                                       fill="#8FD7FF"
                                    />
                                    <path
                                       d="M12.8892 36.8798C9.70778 33.6984 7.92048 29.3835 7.92048 24.8843C7.92048 20.385 9.70778 16.0701 12.8892 12.8887C16.0706 9.70727 20.3856 7.91997 24.8848 7.91996C29.384 7.91996 33.6989 9.70726 36.8803 12.8887L30.8825 18.8865C29.2918 17.2958 27.1344 16.4021 24.8848 16.4021C22.6352 16.4021 20.4777 17.2958 18.887 18.8865C17.2963 20.4772 16.4026 22.6346 16.4026 24.8843C16.4026 27.1339 17.2963 29.2913 18.887 30.882L12.8892 36.8798Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <div className="media-body text-nowrap">
                                    <h6 className="text-black font-w600 fs-16 mb-0">
                                       Highspeed Studios
                                    </h6>
                                    <span className="fs-14">
                                       Creative Design Agency
                                    </span>
                                 </div>
                              </div>
                           </td>
                           <td>FULLTIME</td>
                           <td>Senior UX Designer</td>
                           <td>
                              <div className="d-flex">
                                 <Link className="contact-icon mr-3" to="#">
                                    <i
                                       className="fa fa-phone"
                                       aria-hidden="true"
                                    ></i>
                                 </Link>
                                 <Link className="contact-icon" to="#">
                                    <i className="las la-envelope"></i>
                                 </Link>
                              </div>
                           </td>
                           <td>
                              <div className="d-flex align-items-center">
                                 <Link
                                    className="btn btn-rounded btn-success mr-3 ml-auto"
                                    to="#"
                                 >
                                    Candidate
                                 </Link>
                                 <div className="dropdown float-right custom-dropdown mb-0">
                                    <div className="" data-toggle="dropdown">
                                       <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                       </svg>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right">
                                       <Link className="dropdown-item" to="">
                                          Details
                                       </Link>
                                       <Link
                                          className="dropdown-item text-danger"
                                          to=""
                                       >
                                          Cancel
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div className="checkbox mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox ">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="check5"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       for="check5"
                                    ></label>
                                 </div>
                              </div>
                           </td>
                           <td>#APL-0002</td>
                           <td>June 1, 2020, 08:22 AM</td>
                           <td>
                              <div className="media">
                                 <svg
                                    className="mr-3"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z"
                                       fill="#D3D3D3"
                                    />
                                    <path
                                       d="M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z"
                                       fill="#4B58CF"
                                    />
                                    <path
                                       d="M12.889 12.8887C14.4642 11.3134 16.3344 10.0639 18.3926 9.21132C20.4508 8.35878 22.6567 7.91999 24.8845 7.91999C27.1123 7.91999 29.3183 8.35878 31.3765 9.21132C33.4347 10.0639 35.3048 11.3134 36.8801 12.8887C38.4554 14.464 39.7049 16.3341 40.5575 18.3923C41.41 20.4505 41.8488 22.6565 41.8488 24.8843C41.8488 27.1121 41.41 29.318 40.5575 31.3762C39.7049 33.4344 38.4554 35.3046 36.8801 36.8798L30.8823 30.8821C31.6699 30.0944 32.2947 29.1594 32.721 28.1303C33.1473 27.1011 33.3667 25.9982 33.3667 24.8843C33.3667 23.7704 33.1473 22.6674 32.721 21.6383C32.2947 20.6092 31.6699 19.6741 30.8823 18.8865C30.0947 18.0989 29.1596 17.4741 28.1305 17.0478C27.1014 16.6215 25.9984 16.4021 24.8845 16.4021C23.7706 16.4021 22.6676 16.6215 21.6385 17.0478C20.6094 17.4741 19.6744 18.0989 18.8867 18.8865L12.889 12.8887Z"
                                       fill="#8FD7FF"
                                    />
                                    <path
                                       d="M12.889 36.8798C9.70754 33.6984 7.92024 29.3835 7.92024 24.8843C7.92023 20.385 9.70754 16.0701 12.889 12.8887C16.0704 9.70727 20.3853 7.91997 24.8845 7.91996C29.3837 7.91996 33.6987 9.70726 36.8801 12.8887L30.8823 18.8865C29.2916 17.2958 27.1341 16.4021 24.8845 16.4021C22.6349 16.4021 20.4774 17.2958 18.8867 18.8865C17.296 20.4772 16.4024 22.6346 16.4024 24.8843C16.4024 27.1339 17.296 29.2913 18.8867 30.882L12.889 36.8798Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <div className="media-body text-nowrap">
                                    <h6 className="text-black font-w600 fs-16 mb-0">
                                       Funk Inc.
                                    </h6>
                                    <span className="fs-14">IT Department</span>
                                 </div>
                              </div>
                           </td>
                           <td>PART TIME</td>
                           <td>Junior UI Designer</td>
                           <td>
                              <div className="d-flex">
                                 <Link className="contact-icon" to="#">
                                    <i
                                       className="fa fa-phone"
                                       aria-hidden="true"
                                    ></i>
                                 </Link>
                              </div>
                           </td>
                           <td>
                              <div className="d-flex align-items-center">
                                 <Link
                                    className="btn btn-rounded btn-outline-danger mr-3 ml-auto"
                                    to="#"
                                 >
                                    On-Hold
                                 </Link>
                                 <div className="dropdown float-right custom-dropdown mb-0">
                                    <div className="" data-toggle="dropdown">
                                       <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                       </svg>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right">
                                       <Link className="dropdown-item" to="">
                                          Details
                                       </Link>
                                       <Link
                                          className="dropdown-item text-danger"
                                          to=""
                                       >
                                          Cancel
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div className="checkbox mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox ">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="check6"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       for="check6"
                                    ></label>
                                 </div>
                              </div>
                           </td>
                           <td>#APL-0001</td>
                           <td>June 1, 2020, 08:22 AM</td>
                           <td>
                              <div className="media">
                                 <svg
                                    className="mr-3"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M0.000488281 7.27273C0.000488281 3.25611 3.2566 0 7.27322 0H42.7278C46.7444 0 50.0005 3.25611 50.0005 7.27273V42.7273C50.0005 46.7439 46.7444 50 42.7278 50H7.27321C3.2566 50 0.000488281 46.7439 0.000488281 42.7273V7.27273Z"
                                       fill="#D3D3D3"
                                    />
                                    <path
                                       d="M0.000488281 7.27273C0.000488281 3.25611 3.2566 0 7.27322 0H42.7278C46.7444 0 50.0005 3.25611 50.0005 7.27273V42.7273C50.0005 46.7439 46.7444 50 42.7278 50H7.27321C3.2566 50 0.000488281 46.7439 0.000488281 42.7273V7.27273Z"
                                       fill="#31B52F"
                                    />
                                    <path
                                       d="M12.889 12.8887C14.4642 11.3134 16.3344 10.0639 18.3926 9.21132C20.4508 8.35878 22.6567 7.91999 24.8845 7.91999C27.1123 7.91999 29.3183 8.35878 31.3765 9.21132C33.4347 10.0639 35.3048 11.3134 36.8801 12.8887C38.4554 14.464 39.7049 16.3341 40.5575 18.3923C41.41 20.4505 41.8488 22.6565 41.8488 24.8843C41.8488 27.1121 41.41 29.318 40.5575 31.3762C39.7049 33.4344 38.4554 35.3046 36.8801 36.8798L30.8823 30.8821C31.6699 30.0944 32.2947 29.1594 32.721 28.1303C33.1473 27.1011 33.3667 25.9982 33.3667 24.8843C33.3667 23.7704 33.1473 22.6674 32.721 21.6383C32.2947 20.6092 31.6699 19.6741 30.8823 18.8865C30.0947 18.0989 29.1596 17.4741 28.1305 17.0478C27.1014 16.6215 25.9984 16.4021 24.8845 16.4021C23.7706 16.4021 22.6676 16.6215 21.6385 17.0478C20.6094 17.4741 19.6744 18.0989 18.8867 18.8865L12.889 12.8887Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M12.889 36.8798C9.70754 33.6984 7.92024 29.3835 7.92024 24.8843C7.92023 20.385 9.70754 16.0701 12.889 12.8887C16.0704 9.70727 20.3853 7.91997 24.8845 7.91996C29.3837 7.91996 33.6987 9.70726 36.8801 12.8887L30.8823 18.8865C29.2916 17.2958 27.1341 16.4021 24.8845 16.4021C22.6349 16.4021 20.4774 17.2958 18.8867 18.8865C17.296 20.4772 16.4024 22.6346 16.4024 24.8843C16.4024 27.1339 17.296 29.2913 18.8867 30.882L12.889 36.8798Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <div className="media-body text-nowrap">
                                    <h6 className="text-black font-w600 fs-16 mb-0">
                                       Highspeed Studios
                                    </h6>
                                    <span className="fs-14">
                                       Creative Design Agency
                                    </span>
                                 </div>
                              </div>
                           </td>
                           <td>FULLTIME</td>
                           <td>Senior UX Designer</td>
                           <td>
                              <div className="d-flex">
                                 <Link className="contact-icon mr-3" to="#">
                                    <i
                                       className="fa fa-phone"
                                       aria-hidden="true"
                                    ></i>
                                 </Link>
                                 <Link className="contact-icon" to="#">
                                    <i className="las la-envelope"></i>
                                 </Link>
                              </div>
                           </td>
                           <td>
                              <div className="d-flex align-items-center">
                                 <Link
                                    className="btn btn-rounded btn-success mr-3 ml-auto"
                                    to="#"
                                 >
                                    Candidate
                                 </Link>
                                 <div className="dropdown float-right custom-dropdown mb-0">
                                    <div className="" data-toggle="dropdown">
                                       <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                          <path
                                             d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                             stroke="#2E2E2E"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                          ></path>
                                       </svg>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right">
                                       <Link className="dropdown-item" to="">
                                          Details
                                       </Link>
                                       <Link
                                          className="dropdown-item text-danger"
                                          to=""
                                       >
                                          Cancel
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Application;
