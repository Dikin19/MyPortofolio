'use client'

import AnimatedContent from "@/app/components/AnimatedContent/AnimatedContent";
import BlurText from "@/app/components/BlurText/BlurText";
import CircularText from "@/app/components/CircularText/CircularText";
import GradientText from "@/app/components/GradientText/GradientText";
import Lanyard from "@/app/components/Lanyard/Lanyard";
import RotatingText from "@/app/components/RotatingText/RotatingText";
import ScrollVelocity from "@/app/components/ScrollVelocity/ScrollVelocity";
import SplitText from "@/app/components/SplitText/SplitText";
import Threads from "@/app/components/Threads/Threads";
import { Timeline } from "@/app/components/Timelines/Timeline";

export default function Home() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            WOC ( Warkop Or Coffee Shop ) adalah sebuah webiste restaurant yang menyediakan sebuah menu minuman dingin dari WOC, dengan adanya menu ini akan mempermudah customer untuk melihat menu langsung melalui website ini dengan beberapa feature login, register, home, products, delete, infinite scroll, search, detail product, wish , dan addWishlist  yang bisa menambah menu kedalam wihs. website ini dibuat menggunakan next.js, typescript, MongoDb, server side, TailwindCSS, dan vercel untuk deploy app ini. Anda bisa mencoba applikasi ini melalui link dibawah ini :

          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/experiences/woc.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/experiences/woc.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/experiences/woc.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/experiences/woc.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen overflow- x-hidden bg-[#001F54]">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      <div className="container mx-auto h-screen"> {/* membuat container yan ditandai mx-auto yang berarti untuk mempunya space kiri dan kanan dan h-screen membuat tampilan penuh  */}
        <div className="grid grid-cols-12">

          <div className="col-span-6 relative"> {/* membuat grid menjadi 6 untuk bagian kiri dari 12 col */}

            <AnimatedContent>
              <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} /> {/* membuat lanyard dengan posisi dan gravitasi yang ditentukan */}
              <CircularText
                text="WELLCOME*TO*MYPORTOFOLIO*"
                onHover="speedUp"
                spinDuration={25}
                className="absolute top-10 left-5"
              />
            </AnimatedContent>

          </div>

          <div className="col-span-6"> {/* membuat grid menjadi 6 untuk bagian kanan dari 12 col */}
            <div className="flex items-center h-full">

              <div className="flex flex-col gap-6">
                <AnimatedContent>
                  <div className="flex items-center gap-4">
                    <h1 className="text-2xl text-white font-bold">Hello, I&apos;m</h1>
                    <RotatingText
                      texts={['Front End', 'Back End', 'Full Stack Developer', 'Software Engineer']}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#D4AF37] text-white overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex animation-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />

                  </div>
                </AnimatedContent>

                <div className="flex flex-col items-start">
                  <SplitText
                    text="I'm Muhamad Sodikin"
                    className="text-2xl text-white font-semibold text-start"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />

                  <SplitText
                    text="Full Stack Developer"
                    className="text-2xl font-semibold text-[#D4AF37] text-start"
                    delay={100}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div> {/* membuat split text */}

                <BlurText
                  text="I am a Full Stack Developer with a solid foundation in leadership, communication, analytical skills, problem-solving, 
                  and a strong work ethic. After transitioning from the coffee industry to technology, I discovered a deep passion for programming
                  and pursued self-learning through both online and offline courses. I possess a strong ability to quickly adapt and continuously 
                  improve with focus on doing repetition practice and analyzing user requirements to deliver effective, user-centered solutions as Front-end."
                  delay={50}
                  className="text-white text-lg"
                  animateBy="words"
                  direction="bottom"
                />
                <div className="flex items-center">

                  <GradientText
                    colors={["#ffff", "#4079ff", "#001F54", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-6 py-2 rounded-lg border"
                  >
                    Contact Me
                  </GradientText>

                </div>


              </div>

            </div>
          </div>

        </div>
      </div>
      <ScrollVelocity
        texts={['Thank you for coming']}
        className="text-white text-3xl"
      />
      <Timeline data={data} />
    </div>
  );
}
