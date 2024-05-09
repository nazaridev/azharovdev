"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/about',
    title: 'About'
  },
  {
    path: '/contact',
    title: 'Contact'
  },
  {
    path: '/portfolio',
    title: 'Portfolio'
  },
]

const variantNav = {
  close: {
    x: '100vw'
  },
  open: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
}

const variantNavItem = {
  open: {
    x: 0,
    opacity: 1
  },
  close: {
    x: -20,
    opacity: 0
  }
}

const variantTopNav = {
  open: {
    y: 13.5
  },
  close: {
    y: 0
  }
}

const variantCenterNav = {
  open: {
    opacity: 1
  },
  close: {
    opacity: 1
  }
}

const variantBottomNav = {
  open: {
    y: -13.5
  },
  close: {
    y: 0
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const pathname = usePathname()

  const onHandleOpenNav = () => {
    setOpen(prev => !prev)
  }

  const onHandleScroll = () => {
    const y = window.scrollY

    if (y > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onHandleScroll)

    return () => window.removeEventListener('scroll', onHandleScroll)
  }, [])

  return (
    <div className={`flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 fixed bg-white ${scroll && 'shadow-md'} duration-700 transition-shadow top-0 left-0 right-0 h-16 z-10`}>
      {/* Nav Desktop */}
      <div className='gap-4 hidden md:flex'>
        {
          links.map((link, index) => (
            <Link key={link.title} href={link.path} className={`p-1 rounded-md ${pathname === link.path && 'bg-black text-white'}`}>{link.title}</Link>
          ))
        }
      </div>
      {/* Logo */}
      <div className={`${open ? 'bg-white' : 'bg-black'} p-1 font-bold rounded select-none cursor-pointer relative z-20`}>
        <span className={`${open ? 'text-black' : 'text-white'}`}>Nazirov</span>
        <span className={`${open ? 'text-white bg-black' : 'text-black bg-white'} px-2 ml-1 rounded`}>Dev.</span>
      </div>
      {/* Nav Mobile */}
      <div className='block md:hidden relative z-20'>
        <button className='w-10 h-8 flex flex-col justify-between' onClick={onHandleOpenNav}>
          <motion.span
            className={`w-full h-1 bg-yellow-500 block rounded-full`}
            variants={variantTopNav}
            animate={open ? 'open' : 'close'}></motion.span>
          <motion.span
            className={`w-full h-1 bg-yellow-500 block rounded-full`}
            variants={variantCenterNav}
            animate={open ? 'open' : 'close'}></motion.span>
          <motion.span
            className={`w-full h-1 bg-yellow-500 block rounded-full`}
            variants={variantBottomNav}
            animate={open ? 'open' : 'close'}></motion.span>
        </button>
      </div>
      {
        open && (
          // <motion.div className='w-screen h-screen bg-black absolute left-0 top-0' variants={variantNav} initial="close" animate="open" >
          //   <ul className='h-full w-full flex flex-col justify-center items-center gap-y-8'>
          //     {
          //       links.map(link => (
          //         <motion.div>
          //           <Link className='text-white text-4xl' href={link.path} key={link.title} onClick={onHandleOpenNav}>{link.title}</Link>
          //         </motion.div>
          //       ))
          //     }
          //   </ul>
          // </motion.div>
          <motion.div className='w-screen h-screen bg-black absolute left-0 top-0 flex flex-col justify-center items-center gap-y-8' variants={variantNav} initial="close" animate="open" >
            {
              links.map(link => (
                <motion.div variants={variantNavItem}>
                  <Link className='text-white text-4xl' href={link.path} key={link.title} onClick={onHandleOpenNav}>{link.title}</Link>
                </motion.div>
              ))
            }
          </motion.div>
        )
      }
    </div>
  )
}
