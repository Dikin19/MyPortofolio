'use client'
import Link from "next/link";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import { motion } from "framer-motion";
import Lanyard from "./components/Lanyard/Lanyard";
import AnimatedContent from "@/app/components/AnimatedContent/AnimatedContent";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import AchievementsSection from "./components/Achivement/Achivement";

export default function Home() {
  return (
    <div className="bg-[#001F54] min-h-fit">
      <BaseLayout>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 text-white">
          <AchievementsSection />
          <section className="flex flex-col-reverse sm:grid sm:grid-cols-12 gap-y-0 sm:gap-y-0 items-center mt-[-8px]" id="about">



            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="sm:col-span-7 text-center sm:text-left"
            >
              <AnimatedContent>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                  <h1 className="text-2xl sm:text-3xl font-bold">Hello, I&apos;m</h1>
                  <RotatingText
                    texts={['Muhamad Sodikin', 'Front End', 'Back End', 'Full Stack Developer', 'Software Engineer']}
                    mainClassName="px-3 bg-[#D4AF37] text-white rounded-lg text-xl sm:text-2xl font-bold inline-flex"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
              </AnimatedContent>
              <BlurText
                text="I specialize in building high-performance, full-stack web applications that solve real-world problems. 
                With a strong foundation in both frontend and backend technologies, I bring ideas to life—from wireframe to production."
                delay={50}
                className="text-white text-base sm:text-lg"
                animateBy="words"
                direction="bottom"
              />
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Link
                  href="/images/experiences/CV.pdf"
                  className="px-1 py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white"
                >
                  <span className="block bg-[#D4AF37] rounded-full px-5 py-2">
                    Download CV
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="sm:col-span-5 flex justify-center sm:justify-end mb-12 sm:mb-0"
            >
              <div className="w-[180px] sm:w-[250px] lg:w-[350px] relative">
                <AnimatedContent>
                  <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
                </AnimatedContent>
              </div>
            </motion.div>

          </section>
        </div>
      </BaseLayout>
    </div>
  );
}
