import React, { ReactNode } from 'react'
import { NavBar, SearchBar } from '@/components'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex max-h-screen">
      <div className="relative basis-0 grow-0 h-screen shrink-0 overflow-x-auto sm:basis-[220px]">
        <NavBar />
      </div>
      <div className="flex flex-col w-full bg-[#10141e]">
        <div className="h-[4rem] max-h-[4rem] w-full drop-shadow">
          <SearchBar />
        </div>
        <div className="flex w-full overflow-auto px-5 py-8 grow relative justify-center">

          <div className="w-full sm:max-w-[1024px]">
          {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
