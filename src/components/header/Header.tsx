import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="relative bg-[#286AF6]">
        <div className="px-4 sm:px-12">
          <div className="flex justify-between items-center border-gray-100 py-3 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 css-logo">
              <Link href="#">
                <Image src={logo} height={34} width={29} />
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="#">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
