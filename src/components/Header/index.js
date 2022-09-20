import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="bg-[#6366f1] navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  />
                </svg>
              </button>
            </div>
            <div
              className="navbar-collapse collapse grow items-center"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row items-center">
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    style={({ isActive }) => ({
                      color: isActive && 'rgb(226,232,240)',
                    })}
                    to="/home"
                    className="nav-link block pr-2 lg:px-2 py-2 text-[rgb(255,255,255)] hover:text-[rgb(226,232,240)] focus:text-[rgb(148,163,184)] transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <FontAwesomeIcon className="mr-1" icon={faBars} />
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    style={({ isActive }) => ({
                      color: isActive && 'rgb(226,232,240)',
                    })}
                    to="/product"
                    className="nav-link block pr-2 lg:px-2 py-2 text-[rgb(255,255,255)] hover:text-[rgb(226,232,240)] focus:text-[rgb(148,163,184)] transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Product
                  </NavLink>
                </li>
                <li>
                  <form>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      {/* eslint-disable-next-line react/void-dom-elements-no-children */}
                      <input
                        type="search"
                        id="default-search"
                        className="block p-3 pl-10 w-[400px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-[#6366f1] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
