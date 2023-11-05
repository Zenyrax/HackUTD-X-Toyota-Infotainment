import { Fragment, useState } from 'react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, Battery100Icon } from '@heroicons/react/24/outline'
import { Popover, Dialog, Menu, Transition } from '@headlessui/react'
import Weather from './weather'
import CurrentTime from './clock'

const navigation = [
  { name: 'Explore', href: 'explore' },
  // { name: 'Compare', href: '#' },
  { name: 'Handbook', href: 'handbook' },
  { name: 'About', href: 'about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="mx-auto flex max-w-7xl bg-transparent items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <a href="#" className="text-3xl font-semibold leading-6 text-white-900 inline">
            <CurrentTime/> | <Weather/>
          </a>
        </div>
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-16 w-auto" src="./toyota.svg" alt="" />
        </a>
        <div className="flex flex-1 justify-end">
          <dt className="text-3xl font-semibold leading-6 text-white-900 inline">
            {/*<Battery100Icon className="h-8 w-8 text-white-900" aria-hidden="true" />*/}209 mi.
          </dt>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <div className="flex flex-1 justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-white-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}