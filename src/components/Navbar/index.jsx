/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from  "../../assets/logo.webp"
import React from "react";

const index = () => {
  return (
    <nav class="w-full z-20 top-0 left-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ul class="flex flex-row space-x-8 mt-0 p-0 font-medium rounded-lg ">
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-black"
              aria-current="page"
            >
              SHOP
            </a>
          </li>
          <li>
            <a
              href="https://decemdrinks.com/pages/our-story"
              class="block py-2 pl-3 pr-4 text-black"
            >
              STORY
            </a>
          </li>
        </ul>
        <div class="flex order-2">
          <button
            type="button"
            class="text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 hover:text-blue-700 focus:text-blue-800"
          >
            Basket (0)
          </button>
        </div>
        <div
          class="items-center justify-between flex order-1"
          id="navbar-sticky"
        >
          <a href="https://decemdrinks.com/" class="flex items-center">
            <img
              src={Logo}
              class="h-28 w-32"
              alt="DECEM Logo"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default index;
