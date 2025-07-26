import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import HorizontalDivider from '../components/HorizontalDivider';

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section ref={ref}>
      <motion.div
        className="relative flex items-center justify-center px-2 py-4 text-center md:h-[80vh] md:p-0"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-dark relative z-10">
          <h1 className="mb-8 bg-gradient-to-r from-green-900 to-green-700 bg-clip-text text-4xl leading-tight font-bold text-transparent drop-shadow-lg md:text-6xl">
            Masáže Těloharmonie
          </h1>
          <HorizontalDivider />

          <h1 className="text-4xl leading-tight font-bold md:text-4xl">
            Uvolněte se a nechte starosti odplynout
          </h1>
          <div className="font-inter mt-4 flex w-auto flex-col gap-y-4 px-4 text-lg">
            <p className="mt-4 opacity-90 md:text-2xl">
              Každý dotek přináší úlevu, uvolňuje svalové napětí a obnovuje
              vnitřní rovnováhu.
            </p>
            <p className="mt-2 opacity-85 md:text-xl">
              Vstupte do světa harmonie a obnovy – masáže Těloharmonie jsou
              cestou zpět k sobě.
            </p>

            <div>
              <a
                target="_blank"
                href="https://noona.app/cs/teloharmonie"
                className="mt-6 inline-block rounded-full border-2 border-transparent bg-gradient-to-r from-green-800 to-green-900 px-6 py-3 text-lg font-semibold text-white shadow-lg drop-shadow-md transition duration-300 hover:border-2 hover:border-black/40 hover:bg-transparent hover:from-green-800 hover:to-green-900 hover:bg-clip-text hover:text-transparent"
              >
                Rezervovat termín
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
