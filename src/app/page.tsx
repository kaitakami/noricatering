"use client"

import { type NextPage } from "next";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import Image from "next/image";
import heroImg from "~/../public/images/Bento-box--768x1024.jpg"

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Main />
    </main>
  );
};

export default Home;


const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  })

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const titleScale = useTransform(scrollYProgress, [0, 0.8], [1, 2])
  const titleTranslateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 600])
  const paragraphOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <>
      <motion.section ref={targetRef} style={{ opacity: sectionOpacity }} className="flex min-h-screen items-center justify-center bg-pattern">
        <motion.div
          className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 4, delay: 0.4 }} style={{ scale: titleScale, translateY: titleTranslateY }} className="text-7xl font-extrabold tracking-tight sm:text-9xl">
            NORI
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4, delay: 1 }} style={{ opacity: paragraphOpacity }} className="text-center">
            We prepare healthy, colorful & tasty Japanese meals
            <br />
            Let´s make your guest happy together
          </motion.p>
        </motion.div>
        <motion.div initial={{ opacity: 0, display: "none" }} animate={{ opacity: 1, display: "block" }} transition={{
          opacity: {
            duration: 4,
            delay: 6
          },
        }} className="">
          <Image src={heroImg} alt="" />
        </motion.div>
      </motion.section>
    </>)
}

const Main = () => {
  return (
    <section className="min-h-screen">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <p className="text-7xl font-extrabold tracking-tight sm:text-9xl">
          This is where everything starts. Order now.
        </p>
      </div>
    </section>
  )
}
