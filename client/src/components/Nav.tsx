import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="nav-brand flex lg:flex-1">
          <Link className="flex gap-2 items-center -m-1.5 p-1.5" to="/">
            <img
              className="brand-logo h-8 w-auto"
              src="/jats.svg"
              alt="jats logo"
            />
            <h2 className="brand-name text-2xl font-medium text-white">Jats</h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={openMenu}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="text-white h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-12">
          <Link
            to="/about"
            className="text-white p-1.5 rounded-md hover:opacity-80 duration-150 ease-in"
          >
            About
          </Link>
          <span className="text-white opacity-10">|</span>
          <Link
            to="/features"
            className="text-white p-1.5 rounded-md hover:opacity-80 duration-150 ease-in"
          >
            Features
          </Link>
        </PopoverGroup>
        <div className="hidden z-10 lg:flex lg:items-center lg:gap-x-3 lg:flex-1 lg:justify-end">
          <Link
            to="/create-account"
            className="text-white p-1.5 rounded-md hover:opacity-80 duration-150 ease-in"
          >
            Sign Up
          </Link>
          <Link
            to="sign-in"
            className="text-white p-1.5 hover:opacity-80 duration-150 ease-in"
          >
            Sign In <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link className="flex gap-2 items-center -m-1.5 p-1.5" to="/">
              <img
                className="brand-logo h-8 w-auto"
                src="/jats.svg"
                alt="jats logo"
              />
              <h2 className="brand-name text-2xl font-medium text-white">
                Jats
              </h2>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={closeMenu}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="text-white h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800 duration-150 ease-in"
                >
                  About
                </Link>
                <Link
                  to="/features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800 duration-150 ease-in"
                >
                  Features
                </Link>
                <Link
                  to="/create-account"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800 duration-150 ease-in"
                >
                  Sign Up
                </Link>
                <Link
                  to="sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800 duration-150 ease-in"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Nav;
