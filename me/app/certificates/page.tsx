"use client";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Certificate1 from "../components/certificates/certificate";
import Footer from "../components/Footer/foteer";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    gitUrl: string;
    issue: string;
    expired: string;
}

const projectsData: Project[] = [
    {
        id: 7,
        title: "Dcoding Indonesia",
        description: "Basic Dasar JavaScript",
        issue: "Issue date June 2025",
        expired: "Expired date -",
        image: "/images/experiences/DasarJS.png",
        gitUrl: "https://shorturl.at/qG9Wy",
    },
    {
        id: 6,
        title: "Hacktiv8 Indonesia",
        description: "Full Stack JavaScript Immersive",
        issue: "Issue date April 2025",
        expired: "Expired date -",
        image: "/images/experiences/Hck.png",
        gitUrl: "https://shorturl.at/pQefm",
    },
    {
        id: 1,
        title: "HackerRank",
        description: "Basic Web Pemrograman",
        issue: "Issue date March 2025",
        expired: "Expire date -",
        image: "/images/experiences/Hackerank.png",
        gitUrl: "https://www.hackerrank.com/certificates/debf90e9d31c",
    },
    {
        id: 2,
        title: "Dcoding Indonesia",
        description: "Basic Web Pemrograman",
        issue: "Issue date March 2024",
        expired: "Expired date March 2027",
        image: "/images/experiences/Dcoding.png",
        gitUrl: "https://shorturl.at/88Hs4",
    },
    {
        id: 3,
        title: "Coffee Training Academy",
        description: "Training Coffee",
        issue: "Issue date August 2021",
        expired: "Expired date -",
        image: "/images/experiences/Acta.png",
        gitUrl: "https://tinyurl.com/43n6v4x5",
    },
    {
        id: 4,
        title: "Ukm-F Excellent",
        description: "As Speaker Of Education Training",
        issue: "Issue date January 2021",
        expired: "Expired date -",
        image: "/images/experiences/Speaker.png",
        gitUrl: "https://tinyurl.com/5hza96dv",
    },
    {
        id: 5,
        title: "Basic English Course",
        description: "English",
        issue: "Issue date August 2020",
        expired: "Expired date -",
        image: "/images/experiences/Bec.png",
        gitUrl: "https://shorturl.at/KiysY",
    }
];

export default function Project() {
    const [tag, setTag] = useState<string>("All");
    const ref = useRef<HTMLUListElement | null>(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <div className="bg-[#001F54] min-h-screen">
            <BaseLayout>
                <section>
                    <div className="max-w-5xl mx-auto mt-10 px-4 md:px-8 lg:px-10 mb-20">
                        <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl">
                            My certificates
                        </h2>
                        <p className="text-white text-sm md:text-base max-w-sm">
                            I&apos;ve been taking certification on some division for the past some years. Here&apos;s
                            a timeline of my certificates.
                        </p>
                    </div>
                    <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 ml-10">
                        {filteredProjects.map((project, index) => (
                            <motion.li
                                key={project.id}
                                variants={cardVariants}
                                initial="initial"
                                animate={isInView ? "animate" : "initial"}
                                transition={{ duration: 0.3, delay: index * 0.4 }}
                            >
                                <Certificate1
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imgUrl={project.image}
                                    gitUrl={project.gitUrl}
                                    issue={project.issue}
                                    expired={project.expired}
                                />
                            </motion.li>
                        ))}
                    </ul>
                </section>
            </BaseLayout>
            <Footer />
        </div>
    );
}
