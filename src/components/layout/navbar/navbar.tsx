'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TSettings } from '@/types/settings';
import { CurrencySection } from './sections/currency-section';
import { ShoppingCartSection } from './sections/shopping-cart-section';

type NavbarProps = {
   settings: TSettings;
};

export const Navbar: FC<NavbarProps> = ({ settings }) => {
   return (
      <nav className="z-20 flex h-[63px] w-full items-center justify-between bg-[url(/navbar.png)] px-9 md:rounded-[10px]">
         {/* Left Upper Corner */}
         <div className="flex space-x-4">
            <Link href="/" className="text-white uppercase">Home</Link>
            <Link href="/" className="text-white uppercase">Store</Link>
            <Link href="http://map.voidcraftmc.net:25562" className="text-white uppercase">Map</Link>
            <Link href="/bans" className="text-white uppercase">Bans</Link>
            <Link href="/forum" className="text-white uppercase">Forum</Link>
         </div>

         {/* Right Upper Corner */}
         <div className="flex items-center space-x-4">
            <Link href="/profile" className="flex items-center">
               <Image
                  src="https://mc-heads.net/head/${profile.username}"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
               />
               <span className="ml-2 text-white uppercase">Profile</span>
            </Link>
            <CurrencySection settings={settings} />
            <ShoppingCartSection />
         </div>
      </nav>
   );
};
