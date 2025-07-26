import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import image from '../assets/images/about-me-image-cropped-1.png';
import HorizontalDivider from '../components/HorizontalDivider';

export default function AboutMe() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section
      ref={ref}
      className="rounded-100 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-green-900/45 px-6 py-12 shadow-2xl"
    >
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4 flex w-full items-center justify-center md:mb-8">
          <div className="relative h-auto w-64 overflow-hidden drop-shadow-xl select-none md:h-auto md:w-[370px]">
            <img
              src={image}
              alt="Lucie Svobodová"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <h2 className="mb-6 bg-gradient-to-r from-green-700 to-green-950 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
          Poznejte umění doteku
        </h2>
        <HorizontalDivider />
        <p className="text-dark mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
          Jmenuji se <strong>Lucie Svobodová</strong> a masáže jsou mou vášní i
          posláním. <br /> Věřím, že dotek má sílu nejen uvolnit svaly, ale i
          harmonizovat mysl a dodat novou energii. Každá masáž, kterou provádím,
          je přizpůsobena individuálním potřebám klienta – ať už hledáte
          hlubokou relaxaci, úlevu od napětí nebo regeneraci těla a mysli.
        </p>
        <p className="text-dark mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
          Vytvořila jsem prostor, kde můžete na chvíli zpomalit, odložit stres a
          nechat se unést jemností vědomého doteku.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            href="#portfolio"
            className="rounded-150 w-full bg-gray-200 px-8 py-4 text-lg font-semibold shadow-lg transition hover:opacity-80 md:w-auto"
          >
            Moje služby
          </a>
          <a
            href="#contact"
            className="rounded-150 w-full border-2 border-green-900 px-8 py-4 text-lg font-semibold text-green-900 shadow-lg transition hover:bg-green-800 hover:text-white md:w-auto"
          >
            Kontakt
          </a>
        </div>
        <div className="mt-12 flex w-full flex-wrap justify-center gap-6 md:gap-4">
          <a href="">
            <span className="w-full rounded-full bg-gray-200 px-4 py-2 text-sm font-medium shadow-md md:mx-0 md:w-auto">
              Klasická relaxační masáž
            </span>
          </a>
          <a href="">
            <span className="w-full rounded-full bg-gray-200 px-4 py-2 text-sm font-medium shadow-md md:mx-0 md:w-auto">
              Medová masáž
            </span>
          </a>
          <a href="">
            <span className="w-full rounded-full bg-gray-200 px-4 py-2 text-sm font-medium shadow-md md:mx-0 md:w-auto">
              Masáž lávovými kameny
            </span>
          </a>
          <a href="">
            <span className="w-full rounded-full bg-gray-200 px-4 py-2 text-sm font-medium shadow-md md:mx-0 md:w-auto">
              Uvolnění svalů baňkováním
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
