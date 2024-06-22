import React, { ReactNode } from 'react'
import { NavBar, SearchBar } from '@/components'
import "./DefaultLayout.styles.css"

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex max-h-screen">
      <div className="relative basis-0 grow-0 h-screen shrink-0 overflow-x-auto sm:basis-[220px]">
        <NavBar />
      </div>
      <div className="flex flex-col w-full bg-[#151924]">
        <div className="h-[4rem] max-h-[4rem] w-full">
          <SearchBar />
        </div>
        <div className="flex w-full overflow-auto px-4 grow relative justify-center custom-scrollbar">
          <div className="w-full sm:max-w-[1024px]">
          {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
