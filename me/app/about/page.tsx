"use client";
import React, { useTransition, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import TabButton from "../components/TabButton/TabButton";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import CircularText from "../components/CircularText/CircularText";
import GradientText from "../components/GradientText/GradientText";
import RotatingText from "../components/RotatingText/RotatingText";
import BlurText from "../components/BlurText/BlurText";

interface TabItem {
    title: string;
    id: string;
    content: ReactNode;
}

const TAB_DATA: TabItem[] = [
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>University of Binasarana Informatika, Depok.</li>
                <li>Hacktiv8, Jakarta.</li>
                <li>Basic English course, Kediri Jawa Timur.</li>
            </ul>
        ),
    },
    {
        title: "Organizatition",
        id: "organizatition",
        content: (
            <ul className="list-disc pl-2">
                <li>Official futsal dudep.</li>
                <li>Official futsal 13.</li>
                <li>Ukm of UBSI.</li>
            </ul>
        ),
    },
];

export default function Contact() {
    const [tab, setTab] = useState<string>("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const currentTab = TAB_DATA.find((t) => t.id === tab);

    return (
        <div className="bg-[#001F54] min-h-fit">
            <BaseLayout>
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-16 text-white">
                    <section className="flex flex-col-reverse sm:grid sm:grid-cols-12 gap-x-8 sm:gap-y-12 space-y-reverse space-y-12 sm:space-y-0 items-center" id="about">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="sm:col-span-7 text-center sm:text-left"
                        >
                            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                                <AnimatedContent>
                                    <div className="flex items-center gap-4 mb-8 mt-16">
                                        <RotatingText
                                            texts={['About Me', 'About Me']}
                                            mainClassName="px-2 sm:px-2 md:px-3 bg-[#D4AF37] text-4xl font-bold text-white mb-4 overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex animation-all"
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
                                <AnimatedContent>
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
                                    <div className="flex flex-col h-full">
                                        <GradientText
                                            colors={["#ffff", "#4079ff", "#001F54", "#4079ff", "#40ffaa"]}
                                            animationSpeed={3}
                                            showBorder={false}
                                            className="px-4 py-1 mb-15"
                                        >
                                            <div className="flex flex-row justify-start mt-8">
                                                {TAB_DATA.map((t) => (
                                                    <TabButton
                                                        key={t.id}
                                                        selectTab={() => handleTabChange(t.id)}
                                                        active={tab === t.id}
                                                        highlightColor={
                                                            t.id === "education"
                                                                ? "text-white"
                                                                : t.id === "organizatition"
                                                                    ? "text-white"
                                                                    : "text-white"
                                                        }
                                                    >
                                                        {t.title}
                                                    </TabButton>
                                                ))}
                                            </div>
                                            <div className="mt-8">{currentTab?.content}</div>
                                        </GradientText>
                                    </div>
                                </AnimatedContent>
                            </div>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="sm:col-span-5 flex justify-center sm:justify-end mb-12 sm:mb-0"
                        >
                            <div className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] relative mb-6 sm:mb-4">
                                <AnimatedContent>
                                    <CircularText
                                        text="WELLCOME*TO CONNECTION*EACH OTHER*"
                                        onHover="speedUp"
                                        spinDuration={25}
                                        className="absolute mt-10 ml-10"
                                        color="#D4AF37"
                                    />
                                </AnimatedContent>
                            </div>
                        </motion.div>

                    </section>
                </div>
            </BaseLayout >
        </div >
    );
}
