import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface ISmallDropdown {
  name: string,
  NAVBAR_HEIGHT: string,
  isWhiteNav: boolean
}

export const SmallDropdown = ({name, NAVBAR_HEIGHT, isWhiteNav}: ISmallDropdown) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <button
      onPointerEnter={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
      className={`font-base text-base p-0 gap-1 ${isWhiteNav ? 'text-black' : 'text-white'} flex items-center relative ${NAVBAR_HEIGHT}`}
    >
      <span>{name}</span>
      <ChevronDown strokeWidth={1.5} />
      <div 
        className={`
          absolute h-1 bg-brand-red
          ${isWhiteNav ? 'bottom-0' : 'bottom-4'}
          transition-all duration-150
          ${isActive ? 'left-0 right-0' : 'left-1/2 right-1/2 group-hover:left-0 group-hover:right-0'} 
        `}
      />
    </button>
  )
}