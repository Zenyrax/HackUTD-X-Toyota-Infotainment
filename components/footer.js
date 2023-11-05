import { Fragment, useState } from 'react'
import { HomeModernIcon, MapIcon, MusicalNoteIcon, FireIcon, PhoneIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { Popover, Dialog, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

const navigation = [
  { name: 'Home', icon: HomeModernIcon, pathname: '/home'},
  { name: 'Navigation', icon: MapIcon, pathname: '/nav' },
  { name: 'Music', icon: MusicalNoteIcon, pathname: '/music' },
  { name: 'Climate', icon: FireIcon },
  { name: 'Phone', icon: PhoneIcon },
  { name: 'Settings', icon: WrenchScrewdriverIcon },

]

export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();

  return (
    <div className="footer">
      <dl className="grid grid-cols-1 place-content-center gap-0.5 overflow-hidden text-center grid-cols-6">
        {navigation.map((elem) => (
          <div className="flex flex-col p-4 place-content-center place-items-center person" onClick={(e) => router.push(elem.pathname)}>
            <elem.icon className="h-10 w-10 text-white-900" aria-hidden="true" />
            <dd className={`text-3xl ${router.pathname == elem.pathname ? "font-bold" : "font-light"} tracking-tight text-white-900 mt-2`}>{elem.name}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}