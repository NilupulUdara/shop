import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      
      <div className="max-w-screen-xl flex flex-wrap justify-between ">
        <Link to="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="text-2xl font-semibold dark:text-white">Shopping Cart</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" >
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Link to="/cart">
          <span>Cart: 2</span>
        </Link>
      </div>
    </header>
  )
}