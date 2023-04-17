"use client"

import { type NextPage } from "next";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

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

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 2])
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 600])
  const paragraphOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <>
      <motion.section ref={targetRef} style={{ opacity }} className="flex min-h-screen flex-col items-center justify-center bg-pattern">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <motion.h1 style={{ scale, translateY }} className="text-7xl font-extrabold tracking-tight sm:text-9xl">
            NORI
          </motion.h1>
          <motion.p style={{ opacity: paragraphOpacity }} className="text-center">
            We prepare healthy, colorful & tasty Japanese meals
            <br />
            Let´s make your guest happy together
          </motion.p>
        </div>
      </motion.section >
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
