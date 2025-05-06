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
import Footer from "../components/Footer/foteer";

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
            <ul className="list-disc pl-5">
                <li>University of Binasarana Informatika, Depok.</li>
                <li>Hacktiv8, Jakarta.</li>
                <li>Basic English course, Kediri Jawa Timur.</li>
            </ul>
        ),
    },
    {
        title: "Organization",
        id: "organization",
        content: (
            <ul className="list-disc pl-5">
                <li>Official futsal dudep.</li>
                <li>Official futsal 13.</li>
                <li>UKM of UBSI.</li>
            </ul>
        ),
    },
];

export default function About() {
    const [tab, setTab] = useState<string>("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const currentTab = TAB_DATA.find((t) => t.id === tab);

    return (
        <div className="bg-[#001F54] text-white">
            <BaseLayout>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center text-center space-y-8"
                    >


                        <AnimatedContent>
                            <RotatingText
                                texts={["About Me", "About Me"]}
                                mainClassName="px-4 bg-[#D4AF37] text-lg sm:text-xl md:text-2xl font-bold text-white py-2 rounded-lg inline-flex"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </AnimatedContent>

                        <AnimatedContent>
                            <BlurText
                                text="I am a Full Stack Developer with a solid foundation in leadership, communication, analytical skills, and problem-solving. After transitioning from the coffee industry to tech, I discovered a deep passion for programming and pursued self-learning both online and offline. I’m focused on rapid improvement and building user-centered solutions."
                                delay={50}
                                className="text-sm sm:text-base leading-relaxed max-w-xl"
                                animateBy="words"
                                direction="bottom"
                            />
                        </AnimatedContent>

                        <AnimatedContent>
                            <GradientText
                                colors={["#ffffff", "#4079ff", "#001F54", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="w-full"
                            >
                                <div className="flex flex-wrap justify-center gap-2 mt-6">
                                    {TAB_DATA.map((t) => (
                                        <TabButton
                                            key={t.id}
                                            selectTab={() => handleTabChange(t.id)}
                                            active={tab === t.id}
                                            highlightColor="text-white"
                                        >
                                            {t.title}
                                        </TabButton>
                                    ))}
                                </div>
                                <div className="mt-6 text-sm sm:text-base text-left mx-auto max-w-md">
                                    {currentTab?.content}
                                </div>
                            </GradientText>
                            <div className="w-40 sm:w-52 md:w-72 h-40 sm:h-52 md:h-72 relative">
                                <AnimatedContent>
                                    <CircularText
                                        text="WELLCOME*TO CONNECTION*EACH OTHER*"
                                        onHover="speedUp"
                                        spinDuration={25}
                                        className="absolute mt-4 ml-4"
                                        color="#D4AF37"
                                    />
                                </AnimatedContent>
                            </div>
                        </AnimatedContent>
                    </motion.div>
                </div>
            </BaseLayout>
            <Footer />
        </div>
    );
}
