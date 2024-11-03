import profilePic from "../assets/myProfile.jpg";
import Image from "next/image";
import { HERO_CONTENT } from "../constants";
import * as motion from "framer-motion/client";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

export default function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src={profilePic}
                alt="Agustiar Fajar Abdillah"
                width={500}
                height={500}
                className="rounded-3xl border border-stone-900"
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-10 flex flex-col items-center lg:items-start"
          >
            <motion.h2
              variants={childVariants}
              className="tracking-lighter pb-2 text-4xl lg:text-8xl"
            >
              Agustiar Fajar Abdillah
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/Resume_Agustiar Fajar Abdillah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mb-10 rounded-full bg-white p-4 text-sm text-stone-800"
            >
              Unduh Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
