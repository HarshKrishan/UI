import React from 'react'

const Navbar = () => {
  return (
    <div className="flex p-5 m-0 justify-between border-b-2">
      <div className="flex">
        <img src="vercel.svg" className="h-6 mr-4" />
        <ul className="flex gap-x-4">
          <li className="text-xl">Live</li>
          <li className="text-xl">Push</li>
          <li className="text-xl">Link</li>
          <li className="text-xl">Shop</li>
          <li className="text-xl">Packs</li>
          <li className="text-xl">Help</li>
          <li className="text-xl text-orange-600">More +</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-x-4">
          <li className="text-blue-800 font-bold text-xl">
            Try Live for free
          </li>
          <li className="text-xl">Account</li>
          <li className="text-xl">Log Out</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar