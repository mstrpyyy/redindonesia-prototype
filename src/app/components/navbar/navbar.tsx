'use client'


import { Input } from "@/components/ui/input"
import {  Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useEffectEvent, useState } from "react"
import { NavButton } from "./nav-button"
import { LargeDropdown } from "./large-dropdown"
import { SmallDropdown } from "./small-dropdown"
import { navMenus } from "@/lib/data"
import { SidebarMenu } from "./sidebar"
import Image from "next/image"

export const Navbar = () => {
  const pathname = usePathname()
  const pathSegment = pathname.split('/')[1] || '/'
  const [darkenBg, setDarkenBg] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Determine if navbar should be white
  const isWhiteNav = scrolled || pathname !== '/'
  const NAVBAR_HEIGHT = isWhiteNav ? 'h-14' : 'h-20'
  const TOP_HEIGHT = isWhiteNav ? 'top-14' : 'top-20'
  const DROPDOWNSIZE = isWhiteNav ? 'h-[calc(100vh-56px)]' : 'h-[calc(100vh-80px)]'
  const textColor = isWhiteNav ? 'text-black' : 'text-white'

  const updateScrollEvent = useEffectEvent((isScrolled:boolean)=>{
    setScrolled(isScrolled)
  })
    
  useEffect(() => {
    updateScrollEvent(window.scrollY > 100)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`
        fixed flex items-center z-50 px-4 text-base transition-all duration-300
        ${NAVBAR_HEIGHT} w-full ${textColor}
        ${darkenBg && !isWhiteNav ? 'bg-black/70' : isWhiteNav ? 'bg-white shadow-md' : 'bg-linear-to-b from-black/50 to-transparent'}
        
      `}
    >
      <div className="flex-1 max-w-64 lg:max-w-52">
       <Image 
         src={isWhiteNav ? "/image/Logo-RED_2020_small_final_black.png" : "/image/Logo-RED_2020_small_final_white.png"} 
         alt="logo" 
         width={362} 
         height={91} 
         className={`${isWhiteNav ? 'w-32' : 'w-32 lg:w-48'}`} 
       />
      </div>

      <nav className="max-md:hidden ml-auto mr-8 lg:mx-auto">
        <ul className="flex items-center justify-center gap-4 lg:gap-6 xl:gap-10">
          {
            navMenus.map((menu, index) => {
              if (menu.type === 'largeDropdown') {
                return (
                  <li key={index}>
                    <LargeDropdown
                      name={menu.name}
                      NAVBAR_HEIGHT={NAVBAR_HEIGHT}
                      TOP_HEIGHT={TOP_HEIGHT}
                      setDarkenBg={setDarkenBg} 
                      isWhiteNav={isWhiteNav} 
                    />
                  </li>
                )
              }
              if (menu.type === 'smallDropdown') {
                return (
                  <li key={index}>
                    <SmallDropdown
                      name={menu.name}
                      NAVBAR_HEIGHT={NAVBAR_HEIGHT}
                      isWhiteNav={isWhiteNav} 
                    />
                  </li>
                )
              }
              return (
                <li key={index}>
                  <NavButton
                    NAVBAR_HEIGHT={NAVBAR_HEIGHT}
                    string={menu.name}
                    href={menu.slug ?? ''} 
                    isActive={pathSegment === menu.slug}
                    isWhiteNav={isWhiteNav} 
                  />
                </li>
              )
            })
          }
        </ul>
      </nav>

      <div className="max-lg:hidden flex-1 lg:max-w-52 xl:max-w-64 flex items-center justify-end relative">
        <Input 
          className={`
            max-lg:hidden w-28 focus:w-full rounded-full pr-8 border-2 transition-all duration-150 
            ${isWhiteNav ? 'border-black placeholder:text-neutral-600' : 'border-white placeholder:text-neutral-300'}
          `} 
          placeholder="Search" 
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2" size={20} />
      </div>

      <button aria-label="Open Search" className="max-md:hidden lg:hidden">
        <Search aria-hidden className="" size={20} strokeWidth={3} />
      </button>

      <SidebarMenu
        pathname={pathSegment}
        DROPDOWNSIZE={DROPDOWNSIZE}
        TOP_HEIGHT={TOP_HEIGHT}
        setDarkenBg={setDarkenBg}
      />
    </header>
  )
}