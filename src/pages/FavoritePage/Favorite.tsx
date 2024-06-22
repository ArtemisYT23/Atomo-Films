import React, { useEffect, useState } from 'react'
import { MovieCard } from '@/components'
import { motion, AnimatePresence } from 'framer-motion'

const Favorite: React.FC = () => {
  const [localStorageData, setLocalStorageData] = useState<Storage | Record<string, string>>({})

  useEffect(() => {
    const data = localStorage
    setLocalStorageData(data)
  }, [])

  return (
    <>
      <div className="w-full min-h-screen bg-[#10141e] md:p-10 mb-20 md:mb-0">
        <motion.div
          layout
          className="w-full h-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around"
        >
          <AnimatePresence>
            {Object.keys(localStorageData).filter(key => !isNaN(parseInt(key))).length == 0 ? (
              <p className="text-xl text-white">No Bookmark Yet!</p>
            ) : (
              Object.keys(localStorageData)
                .filter(key => !isNaN(parseInt(key)))
                .map((key, index) => (
                  <MovieCard
                    key={index}
                    movie={{ ...JSON.parse(localStorageData[parseInt(key)]) }}
                  />
                ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default Favorite
