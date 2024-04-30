"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import burger from '@/public/burger.png';
import cart from '@/public/cart.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-blue-900 px-4 py-3">
      <div className="flex items-center">
        <div className="mr-4">
          <button onClick={toggleMenu}>
            <Image src={burger} alt="Menu" className="text-white h-6 w-6 sm:hidden" />
          </button>
        </div>
        <ul className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className="mr-6">
            <Link href="/">
              <span className="text-white cursor-pointer font-bold">Home</span>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/category">
              <span className="text-white cursor-pointer font-bold">Category</span>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/contact">
              <span className="text-white cursor-pointer font-bold">Contact Us</span>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <span className="text-white flex items-center cursor-pointer font-bold">
                <Image src={cart} alt="Cart" className="text-white h-6 w-6 mr-2" />
                <span>Cart</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
