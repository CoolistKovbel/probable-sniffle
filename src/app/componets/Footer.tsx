import React from 'react'
import HeaderNav from './headerNav'

const MainFooter = () => {
  return (
    <footer className="flex items-center justify-between p-10">
    <div className="w-[60%]">
      <h2 className="text-4xl font-bold">SimpleGamish</h2>
      <p className="text-sm">
        Install Metamask and join, earn rewards and see if you can guess all
        the traits
      </p>
    </div>

    <HeaderNav />
  </footer>
  )
}

export default MainFooter