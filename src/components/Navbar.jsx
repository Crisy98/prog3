import React from "react";
import sensor from '../img/sensor.ico';
import silueta from '../img/silueta.ico';
import planta from '../img/planta.ico';
import nodo from '../img/nodo.ico';
import equipo from '../img/equipo.ico';
const Navbar = () => {
  return (
    <aside class="w-64" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul class="space-y-2">
          <li>
            <a
              href="/cliente"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
            >
              <img src={silueta} alt="logo" className="w-8 h-8" />
              <span class="ml-3">Cliente</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img src={silueta} alt="logo" className="w-8 h-8" />
              <span class="flex-1 ml-3 whitespace-nowrap">Persona</span>
              <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
              </span>
            </a>
          </li>

          <li>
            <a
              href="/Planta"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              
              <img src={planta} alt="logo" className="w-8 h-8" />
              <span class="flex-1 ml-3 whitespace-nowrap">Plantas</span>
            </a>
          </li>
          <li>
            <a
              href="/Equipos"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              
              <img src={equipo} alt="logo" className="w-8 h-8" />
              <span class="flex-1 ml-3 whitespace-nowrap">Equipos</span>
            </a>
          </li>
          <li>
            <a
              href="/Nodo"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img src={nodo} alt="logo" className="w-8 h-8" />
              <span class="flex-1 ml-3 whitespace-nowrap">Nodos</span>
            </a>
          </li>
          <li>
            <a
              href="/Sensor"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >

              <img src={sensor} alt="logo" className="w-8 h-8" />
              <span class="flex-1 ml-3 whitespace-nowrap">Sensores</span>
            </a>
          </li>
         
          <li>
            <a
              href="/Grafica"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Grafica</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Navbar;
