import React, { useState, useEffect } from "react";

const AddDeliveryAdvice = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className=" text-black  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[20rem]"
        type="button"
        onClick={() => setShowModal(true)}
        style={{ marginLeft: "500px", backgroundColor: "blue" }}>
        Add Delivery Advice
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Delivery Advice
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="flex items-center justify-center p-12">
                  <div className="w-full px-3 " style={{ width: "500px" }}>
                    <form>
                      <div className="mb-3">
                        <label
                          for="guest"
                          className="mb-3 block text-base font-medium text-[#07074D]">
                          Order ID
                        </label>
                        <select
                          id="countries"
                          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required>
                          <option value="Select">Select </option>
                          <option value="1 table spoon">1 table spoon</option>
                          <option value="2 table spoon">2 table spoon</option>
                          <option value="1 tablet">1 tablet</option>
                          <option value="2 tablet">2 tablet</option>
                          <option value="none">none</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label
                          for="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                          Delivery Items
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Your message..."></textarea>
                      </div>

                      <div className="relative mb-2">
                        <label
                          for="hobby"
                          className="mb-3 block text-base font-medium text-[#07074D]">
                          Delivered Date
                        </label>
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <input
                          datepicker
                          datepicker-format="mm/dd/yyyy"
                          type="date"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Select date"
                        />
                      </div>

                      <div className="w-full">
                        <div className="mb-3">
                          <label
                            for="hobby"
                            className="mb-3 block text-base font-medium text-[#07074D]">
                            Quantity
                          </label>
                          <input
                            type="number"
                            name="hobby"
                            id="hobby"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                          type="submit">
                          Submit
                        </button>

                        <button
                          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none ml-2"
                          onClick={() => setShowModal(false)}>
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddDeliveryAdvice;
