import React from "react";
import viteLogo from '../assets/react.svg'
import market from '../assets/market.png'
import menu from '../assets/menu.png'
import search from '../assets/search.png'
import cart from '../assets/shopping-cart.png'
import user from '../assets/user.png'

const Dashboard = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <img
              src={menu}
              alt="Menu"
              className="w-5 h-5"
            />
          </button>

          <a href="#" className="flex items-center space-x-1">
            <img
              src={viteLogo}
              alt="Logo"
              className="h-8"
            />
          </a>
        </div>

        <div className="flex items-center w-1/2 bg-gray-100 px-3 py-2">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <img
            src={search}
            alt="Search"
            className="max-h-5"
          />
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <img
              src={market}
              alt="Seller"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Become a Seller</span>
          </a>

          <a href="#" className="relative flex items-center text-gray-700 hover:text-blue-600">
            <img
              src={cart}
              alt="Cart"
              className="w-6 h-6"
            />
            <span className="ml-1 text-sm font-medium">Cart</span>
          </a>

          <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <img
              src={user}
              alt="Profile"
              className="w-6 h-6"
            />
            <span className="text-sm font-medium">You</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Dashboard;
