import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import Swal from "sweetalert2";
import AddDeliveryAdvice from "../components/models/AddDeliveryAdvice";
import UpdateDeliveryAdvice from "../components/models/UpdateDeliveryAdvice";

const DeliveryAdvice = () => {
  const deleteOrder = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Please confirm whether you intend to delete this Order`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        const msgText = err.message.split("Error: ")[1];
        swal.fire("Error!", msgText, "error");
      });
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <Sidebar />
        <div
          className="h-full   pt-14 pb-14 md:ml-64"
          style={{
            backgroundImage: `url(${Cover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "1200px",
          }}>
          <div
            className="flex justify-center"
            style={{ marginRight: "40px", display: "grid" }}>
            <AddDeliveryAdvice />
            <div className="overflow-x-auto ml-10">
              <div className="w-full lg:w-5/6">
                <div className="bg-white shadow-md rounded my-6">
                  <table className="min-w-max w-full table-auto">
                    <thead>
                      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Delivery ID</th>
                        <th className="py-3 px-6 text-left">Order ID</th>
                        <th className="py-3 px-6 text-center">
                          Delivery Items
                        </th>
                        <th className="py-3 px-6 text-center">
                          Delivered Date
                        </th>
                        <th className="py-3 px-6 text-center">Quantity</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-medium">test</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-medium">test</span>
                          </div>
                        </td>

                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-medium">test</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-medium">test</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-medium">test</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 ">
                          <div className="flex item-center justify-center">
                            <UpdateDeliveryAdvice />

                            <div
                              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                              onClick={deleteOrder}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAdvice;
