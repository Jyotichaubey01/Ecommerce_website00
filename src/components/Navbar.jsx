```jsx
import React, { useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const profileMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium border-b">

        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            className="w-32"
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">

          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
          </NavLink>

          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
          </NavLink>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <img
            src={assets.search}
            className="w-5 cursor-pointer"
            alt=""
          />

          {/* Profile */}
          <div className="relative" ref={profileMenuRef}>
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
              onClick={() =>
                setShowProfileMenu(!showProfileMenu)
              }
            />

            {showProfileMenu && (
              <div className="absolute right-0 top-6 z-20">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">

                  <Link to="/profile">
                    <p className="cursor-pointer hover:text-black">
                      My Profile
                    </p>
                  </Link>

                  <Link to="/orders">
                    <p className="cursor-pointer hover:text-black">
                      Orders
                    </p>
                  </Link>

                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={() => {
                      localStorage.removeItem('token')
                      window.location.href = '/login'
                    }}
                  >
                    Logout
                  </p>

                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-5"
              alt=""
            />
            <p className="absolute -right-2 -bottom-2 w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[8px]">
              0
            </p>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setVisible(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 z-50 overflow-hidden ${
          visible ? 'w-64' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-700">

          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-4 border-b cursor-pointer"
          >
            <span>←</span>
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border-b"
            to="/"
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border-b"
            to="/collection"
          >
            COLLECTION
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border-b"
            to="/about"
          >
            ABOUT
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border-b"
            to="/contact"
          >
            CONTACT
          </NavLink>

        </div>
      </div>
    </>
  )
}

export default Navbar
```
