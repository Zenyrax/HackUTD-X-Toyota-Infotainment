import Header from '../components/header'
import Footer from '../components/footer'
import SimpleMap from '../components/map'

import '../styles/Profiles.module.css'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  MagnifyingGlassIcon,
  PauseIcon,
  PlayIcon,
  ForwardIcon,
  BackwardIcon,
} from '@heroicons/react/24/outline'
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

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
  const [songProgress, setSongProgress] = useState(78);
  const [songLength, setSongLength] = useState(254);
  const [paused, setPaused] = useState(true);
  const [searching, setSearching] = useState(true);
  
  return (
    <>
      <main className="bg">
        <Header/>
        <div class="bg-text2">
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <li key={1} id={'1'}className="col-span-1 divide-y divide-gray-200 rounded-lg bg-gray-800 shadow text-black-800" style={{"height": "684px"}}>
              <SimpleMap/>
              <div className="bg-gray-800 w-32 h-32 rounded-full notaperson" style={{"position": "absolute", "bottom": "40px", "left": "60px", "padding-top":"32px", "padding-left":"32px"}}>
                <MagnifyingGlassIcon className="h-16 w-16 text-white" aria-hidden="true" />
              </div>
            </li>
            <li key={2} id={'2'}>
              <div key={3} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-gray-800 shadow text-black-800" style={{"height": "330px"}}>
                <dl className="grid grid-cols-1 place-content-center gap-0.5 overflow-hidden rounded-2xl text-center grid-cols-1">
                  <div className="flex flex-col p-8 place-content-center place-items-center rounded-2xl">
                    <dl className="grid grid-cols-1 place-content-center gap-0.5 overflow-hidden rounded-2xl text-center grid-cols-2 mb-8">
                      <div className="flex flex-col px-8 place-content-center place-items-center rounded-2xl">
                        <img className="rounded-xl" style={{"height":"150px"}}src="./bestalbum.jpeg"/>
                      </div>
                      <div className="flex flex-col px-8 place-content-center place-items-center rounded-2xl">
                        <dd className="text-2xl font-bold tracking-tight text-white-900 mb-2">Ivy</dd>
                        <dd className="text-xl font-light tracking-tight text-white-900 mb-2">Frank Ocean</dd>
                      </div>
                    </dl>
                    <input type="range" min="0" max={songLength} value={songProgress} className="slider mb-4" id="myRange" onChange={(event) => {setSongProgress(event.target.value)}}></input>
                    <div class="grid grid-cols-2 gap-4 w-full">
                      <div className='text-left'>{parseInt(songProgress/60)}:{parseInt(songProgress%60) < 10 ? "0" : ""}{parseInt(songProgress%60)}</div>
                      <div className='text-right'>{parseInt(songLength/60)}:{parseInt(songLength%60) < 10 ? "0" : ""}{parseInt(songLength%60)}</div>
                    </div>
                    <dl className="grid grid-cols-1 place-content-center gap-0.5 overflow-hidden rounded-2xl text-center grid-cols-3">
                      <div className="flex flex-col px-8 place-content-center place-items-center person rounded-2xl">
                        <BackwardIcon className="h-10 w-10 text-white-900" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col px-8 place-content-center place-items-center person rounded-2xl" onClick={(e) => setPaused(!paused)}>
                        {paused ? <PlayIcon className="h-10 w-10 text-white-900" aria-hidden="true" /> : <PauseIcon className="h-10 w-10 text-white-900" aria-hidden="true" />}
                      </div>
                      <div className="flex flex-col px-8 place-content-center place-items-center person rounded-2xl">
                        <ForwardIcon className="h-10 w-10 text-white-900" aria-hidden="true" />
                      </div>
                    </dl>
                  </div>
                </dl>
              </div>
              <div key={4} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-gray-800 shadow text-black-800 mt-6" style={{"height": "330px"}}>
                notifs
              </div>
            </li>
          </ul>
        </div>
        <Footer/>
      </main>
    </>
  )
}
