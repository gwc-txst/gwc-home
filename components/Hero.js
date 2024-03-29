/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NAVIGATION } from "../constants/constant";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo-dark.png";
import brightDesk from "../public/bright-desk.jpeg";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="w-screen mx-auto">
        <div className="relative bg-white z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/" passHref>
                      <div className="mt-2" href="/">
                        <span className="sr-only">Workflow</span>
                        <Image
                          alt="GWC logo"
                          className="cursor-pointer"
                          src={logo}
                          width={110}
                          height={55}
                        />
                      </div>
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:pr-4 md:space-x-8 whitespace-nowrap md:flex">
                  {NAVIGATION.map((item) => (
                    <div
                      key={item.name}
                      className="cursor-pointer whitespace-nowrap"
                    >
                      <Link href={item.href}>
                        <div
                          className={` ${item.additionalFormatting} font-medium hover:text-gray-900`}
                        >
                          {item.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Link href="/" passHref>
                        <div className="mt-2">
                          <span className="sr-only">Logo</span>
                          <Image
                            alt="GWC logo"
                            className=""
                            src={logo}
                            width={110}
                            height={55}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {NAVIGATION.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-8xl tracking-tight font-babe-sans text-gray-900">
                <span className="block xl:inline text-black">
                  Girls Who Code
                </span>{" "}
                <span className="block text-black xl:inline">TXST</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A club supporting women and non-binary students from all majors
                who want to learn how to code. We&apos;re open to all genders.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/donate" passHref>
                    <div className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gwc-blue-deep hover:bg-gwc-blue-deeper md:py-4 md:text-lg md:px-10">
                      Donate
                    </div>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/canvas">
                    <div className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gwc-blue-deep bg-gwc-blue-lightest hover:bg-gwc-blue-lighter md:py-4 md:text-lg md:px-10">
                      Join our Canvas
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-3/4 bg-blue-100">
        <picture>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </picture>
        {/* <Image
          src={brightDesk}
          alt="bright organized desk"
          width="6000"
          height="4000"
          quality={100}
          className="rounded-xl object-scale-down"
        /> */}
      </div>
    </div>
  );
}
