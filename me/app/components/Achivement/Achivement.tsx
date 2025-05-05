"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Achievement = {
    metric: string;
    value: string;
    prefix?: string;
    postfix?: string;
};

const achievementsList: Achievement[] = [
    { metric: "Projects", value: "2", postfix: "+" },
    { prefix: "~", metric: "Users", value: "10" },
    { metric: "Awards", value: "5" },
    { metric: "Years", value: "2" },
];

const AchievementsSection: React.FC = () => {
    return (
        <div className="pt-2 px-4">
            <div className="rounded-md pt-4 pb-0 px-4 sm:px-16 flex flex-col sm:flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => {
                    const { ref, inView } = useInView({ triggerOnce: true });

                    return (
                        <div
                            key={index}
                            ref={ref}
                            className="flex flex-col items-center justify-center mx-2 my-1 sm:my-0"
                        >
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                {achievement.prefix}
                                <span className="text-white text-4xl font-bold">
                                    {inView && (
                                        <CountUp
                                            end={parseInt(achievement.value.replace(/,/g, ""))}
                                            duration={2}
                                            separator=","
                                        />
                                    )}
                                </span>
                                {achievement.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchievementsSection;
