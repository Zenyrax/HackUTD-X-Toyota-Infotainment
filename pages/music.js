import Header from '../components/header'
import Footer from '../components/footer'

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
  PauseIcon,
  PlayIcon,
  ForwardIcon,
  BackwardIcon,
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

const album = [
  {
    "number": 1,
    "name": "Nikes",
    "length": "5:14",
    "explicit": true
  },
  {
    "number": 2,
    "name": "Ivy",
    "length": "4:09",
    "explicit": false
  },
  {
    "number": 3,
    "name": "Pink + White",
    "length": "3:04",
    "explicit": false
  },
  {
    "number": 4,
    "name": "Be Yourself (Skit)",
    "length": "1:31",
    "explicit": false
  },
  {
    "number": 5,
    "name": "Solo",
    "length": "4:17",
    "explicit": false
  },
  {
    "number": 6,
    "name": "Skyline To",
    "length": "3:05",
    "explicit": false
  },
  {
    "number": 7,
    "name": "Self Control",
    "length": "4:09",
    "explicit": false
  },
  {
    "number": 8,
    "name": "Good Guy",
    "length": "1:07",
    "explicit": false
  },
  {
    "number": 9,
    "name": "Nights",
    "length": "5:07",
    "explicit": true
  },
  {
    "number": 10,
    "name": "Solo (Reprise)",
    "length": "2:31",
    "explicit": false
  },
  {
    "number": 11,
    "name": "Pretty Sweet",
    "length": "2:38",
    "explicit": true
  },
  {
    "number": 12,
    "name": "Facebook Story (Skit)",
    "length": "0:49",
    "explicit": false
  },
  {
    "number": 13,
    "name": "Close to You",
    "length": "1:25",
    "explicit": false
  },
  {
    "number": 14,
    "name": "White Ferrari",
    "length": "4:08",
    "explicit": false
  },
  {
    "number": 15,
    "name": "Siegfried",
    "length": "5:34",
    "explicit": false
  },
  {
    "number": 16,
    "name": "Godspeed",
    "length": "2:59",
    "explicit": false
  },
  {
    "number": 17,
    "name": "Futura Free",
    "length": "9:24",
    "explicit": true
  }
]



export default function Example() {
  const [songProgress, setSongProgress] = useState(78);
  const [songLength, setSongLength] = useState(254);
  const [paused, setPaused] = useState(true);
  return (
    <>
      <main className="bg">
        <Header/>
        <div class="bg-text2">
          <ul role="list" className="grid grid-cols-1 gap-6 grid-cols-6">
            <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-gray-800 shadow text-black-800" style={{"height": "684px"}}>
              <p className='text-2xl py-6 person'>FM Radio</p>
              <p className='text-2xl py-6 person'>AM Radio</p>
              <p className='text-2xl py-6 person'>SiriusXM</p>
              <p className='text-2xl py-6 person'>Spotify</p>
              <p className='text-2xl person font-bold py-6  bg-gray-900'>Bluetooth</p>
              <p className='text-2xl py-6 person'>Auxiliary</p>
              <p className='text-2xl py-6'></p>
            </li>
            <li className="col-span-3 rounded-lg bg-gray-800 text-black-800" style={{"height": "684px"}}>
              <ul role="list" className="grid grid-cols-1 gap-6 grid-cols-3">
                <li className="col-span-1 rounded-lg bg-gray-800 text-black-800">
                  <img className="rounded-xl m-4" style={{"height":"200px"}}src="./bestalbum.jpeg"/>
                </li>
                <li className="col-span-2 my-4 rounded-lg bg-gray-800 text-black-800 text-left">
                  <p className='text-4xl font-bold'>Blond</p>
                  <p className='text-2xl font-light'>Frank Ocean</p>
                  <p className='text-xl font-light'>17 Songs • 1 hr.</p>
                </li>
              </ul>
              <div style={{"height": "452px", "max-height": "452px", "overflow-y": "scroll"}}>
                <div className='h-[1px] bg-white'></div>
                {album.map((song) => (
                  <div className='person'>
                    <ul role="list" className="grid py-4 grid-cols-1 gap-2 grid-cols-12">
                      <li className="col-span-1 rounded-lg text-black-800">
                        {song.number}
                      </li>
                      <li className="col-span-9 rounded-lg text-black-800 text-left">
                        {song.name} {song.explicit ? <span className='bg-red-900 width px-1 mx-1 rounded text-gray-200 text-sm'>E</span> : ""}
                      </li>
                      <li className="col-span-2 rounded-lg text-black-800">
                        {song.length}
                      </li>
                    </ul>
                    <div className='h-[1px] bg-white'></div>
                  </div>
                ))}
              </div>
            </li>
            <li className="col-span-2 rounded-lg bg-gray-800 shadow text-black-800 p-8" style={{"height": "684px"}}>
              <div className="flex flex-col p-4 place-content-center place-items-center rounded-2xl">
                <img className="rounded-xl" style={{"height":"370px"}}src="./bestalbum.jpeg"/>
              </div>
              <div className="flex flex-col px-8 place-content-center place-items-center rounded-2xl">
                <dd className="text-2xl font-bold tracking-tight text-white-900 mb-2">Ivy</dd>
                <dd className="text-xl font-light tracking-tight text-white-900 mb-2">Frank Ocean</dd>
              </div>
              <input type="range" min="0" max={songLength} value={songProgress} className="slider mb-4" id="myRange" onChange={(event) => {setSongProgress(event.target.value)}}></input>
              <div class="grid grid-cols-2 gap-4 w-full">
                <div className='text-left'>{parseInt(songProgress/60)}:{parseInt(songProgress%60) < 10 ? "0" : ""}{parseInt(songProgress%60)}</div>
                <div className='text-right'>{parseInt(songLength/60)}:{parseInt(songLength%60) < 10 ? "0" : ""}{parseInt(songLength%60)}</div>
              </div>
              <dl className="grid grid-cols-1 place-content-center gap-0.5 overflow-hidden rounded-2xl text-center grid-cols-3">
                <div className="flex flex-col pt-8 place-content-center place-items-center notaperson rounded-2xl">
                  <BackwardIcon className="h-12 w-12 text-white-900" aria-hidden="true" />
                </div>
                <div className="flex flex-col pt-8 place-content-center place-items-center notaperson rounded-2xl" onClick={(e) => setPaused(!paused)}>
                  {paused ? <PlayIcon className="h-12 w-12 text-white-900" aria-hidden="true" /> : <PauseIcon className="h-12 w-12 text-white-900" aria-hidden="true" />}
                </div>
                <div className="flex flex-col pt-8 place-content-center place-items-center notaperson rounded-2xl">
                  <ForwardIcon className="h-12 w-12 text-white-900" aria-hidden="true" />
                </div>
              </dl>
            </li>
          </ul>
        </div>
        <Footer/>
      </main>
    </>
  )
}
