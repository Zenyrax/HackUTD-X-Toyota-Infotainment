import Header from '../components/header'

import '../styles/Profiles.module.css'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
  BuildingOfficeIcon,
  HomeIcon,
  CloudIcon,
} from '@heroicons/react/24/outline'
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import Chart from 'chart.js/auto';

import { Bar, Line } from "react-chartjs-2"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

Date.prototype.mmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('/');
};

const stats = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
]

const people = [
  {id: 1, pfp: "/fawwaz.jpg", name: "Fawwaz Ashraf", pin: 1234},
  {id: 2, pfp: "/korbin.jpg", name: "Korbin Schulz", pin: 1234},
  {id: 3, pfp: "/raul.webp", name: "Raul Hernandez", pin: 1234},
  {id: 4, pfp: "/eric.png", name: "Eric Medina", pin: 1234},

]
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Company', href: '#' },
]
export default function Example() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Authenticating user...");
  return (
    <>
      <main className="bg">
        <Header/>
        {!loading && <div class="bg-text" hidden={loading}>
          <dd className="text-4xl font-bold tracking-tight text-white-900 mb-4">Welcome Back! Who's driving today?</dd>
          <dl className="grid grid-cols-1 place-content-center gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {people.map((person) => (
              <div key={person.id} className="flex flex-col p-8 place-content-center place-items-center person rounded-2xl" onClick={(e) => setLoading(!loading)}>
                <img className="pfp" src={person.pfp}/>
                <dd className="text-3xl font-semibold tracking-tight text-white-900 mt-4">{person.name}</dd>
              </div>
            ))}
          </dl>
        </div>}
        {loading && <div class="bg-text">
          <dd className="text-4xl font-bold tracking-tight text-white-900 mb-4">{message}</dd>
          <dl className="grid grid-cols-1 place-content-center gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex flex-col p-8 place-content-center place-items-center rounded-2xl">
              <img className="pfp" src="./loading.gif"/>
            </div>
          </dl>
        </div>}
      </main>
    </>
  )
}
