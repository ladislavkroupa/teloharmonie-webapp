import { useState } from 'react';
import icon from '../assets/icons/icon.webp';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  console.log('Test');

  return (
    <header className="font-inter mx-8 mt-4 flex h-auto w-11/12 items-center justify-between rounded-[8px] bg-green-900/75 px-4 py-2 md:mx-0 md:mt-8 md:w-[1200px] md:justify-start md:px-8">
      <div className="flex flex-row items-center gap-2 pr-4">
        <a href="/">
          <img
            src={icon}
            alt="Masáže Těloharmonie Lysá nad Labem"
            className="h-[60px] md:h-[90px]"
          />
        </a>
        <h1 className="font-pretty text-[35px] font-bold text-[#fff] select-none md:hidden">
          Těloharmonie
        </h1>
      </div>
      <div className="flex w-auto items-center gap-10">
        <h1 className="font-pretty hidden text-7xl font-bold text-white select-none md:flex">
          Těloharmonie
        </h1>
        {/* Desktop navigation */}
        <nav className="md:text-l ml-[60px] hidden h-[60px] items-center gap-16 px-4 font-bold text-white md:flex">
          <a
            href="#o-mne"
            className="rounded-50 flex h-full w-full items-center justify-center px-4 hover:bg-black/5"
          >
            O mně
          </a>
          <a
            href="#services"
            className="rounded-50 flex h-full w-full items-center justify-center px-4 hover:bg-black/5"
          >
            Masáže
          </a>
          <a
            href="#reservation"
            className="rounded-50 flex h-full w-full items-center justify-center px-4 hover:bg-black/5"
          >
            Rezervace
          </a>
          <a
            href="#contact"
            className="rounded-50 flex h-full w-full items-center justify-center px-4 hover:bg-black/5"
          >
            Kontakt
          </a>
        </nav>
      </div>
      {/* Hamburger menu for mobile */}
      <button
        className="z-10 text-white md:hidden"
        onClick={() => setOpen(!open)}
      >
        <motion.div
          animate={{ rotate: open ? 180 : 0, opacity: open ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.div>
      </button>
      {/* Mobile navigation menu */}
      {open && (
        <nav className="absolute top-[90px] right-4 flex w-auto flex-col items-center justify-center gap-4 rounded-[12px] bg-white px-6 py-4 shadow-md md:hidden">
          <a
            href="#o-mne"
            className="rounded-50 flex h-full w-full items-center justify-center px-4 hover:bg-black/5"
            onClick={() => setOpen(false)}
          >
            O mně
          </a>
          <a
            href="#services"
            className="rounded-50 flex h-full w-full items-center justify-center px-4 hover:bg-black/5"
            onClick={() => setOpen(false)}
          >
            Masáže
          </a>
          <a
            href="#reservation"
            className="rounded-50 flex h-full w-full items-center justify-center px-4 hover:bg-black/5"
            onClick={() => setOpen(false)}
          >
            Rezervace
          </a>
          <a
            href="#contact"
            className="rounded-50 flex h-full w-full items-center justify-center px-4 hover:bg-black/5"
            onClick={() => setOpen(false)}
          >
            Kontakt
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
