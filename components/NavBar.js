import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="border-gray-200 w-screen m-auto bg-slate-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/logo.png"
              className="h-8"
              alt="Logo"
              width={50}
              height={50}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              foodies
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 border  rounded-lgmd:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-800 md:bg-gray-950 border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-white rounded md:p-0 md:hover:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 px-3 rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
