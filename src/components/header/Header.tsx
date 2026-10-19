import { type JSX } from "react";

// import Button from "../ui/Button.tsx";
import { FaBars } from "react-icons/fa6";
// import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
function Header(): JSX.Element {
  return (
    <nav className="bg-transparent flex pt-4 justify-between items-center  text-gray-700">
      <h1 className="text-xl font-bold">
        <a href="#">logo</a>
      </h1>
      <div className="items-center text-gray-900 md:flex">
        <ul className="flex flex-col bg-gray-400 gap-5 md:flex-row h-full right-0 top-0 bottom-0 z-100 fixed md:-right-full md:static md:bg-gray-200 px-8 md:px-0">
          <RxCross2 className="text-right md:hidden cursor-pointer text-2xl mt-5 ml-10" />
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">About</li>
          <li className="cursor-pointer hover:text-gray-600">Contact</li>
        </ul>
        {/* <Button text="sign up" /> */}
      </div>

      <div className="md:hidden">
        {/* <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign Up
        </button> */}
        <FaBars className="text-xl cursor-pointer" />
      </div>
    </nav>
  );
}

export default Header;
