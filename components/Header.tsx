"use client"

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {Dialog, Disclosure, Popover, Transition} from "@headlessui/react";

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#013B94]">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8" aria-label="Global">

        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img 
              className="sr-only w-auto" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Booking.com_Logo_Grey.svg/2560px-Booking.com_Logo_Grey.svg.png" 
              alt="Booking.com Logo" 
            />
          </Link>
        </div>

        <div className="flex lg:hidden ml-auto">
          <button 
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                    Stays
                    <ChevronDownIcon
                        className="h-5 w-5 flex-none text-white"
                        aria-hidden="true"
                    />
                </Popover.Button>
                <Transition
                as={fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-1"
                leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md
                                                overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">

                    </Popover.Panel>
            </Popover>
        </Popover.Group>
        
      </nav>
    </header>
  );
}

export default Header;
