"use client";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "../components/ProjectsTag/projectTag";
import ProjectCard from "../components/ProjectCard/projectCard";
import Footer from "../components/Footer/foteer";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tag: string[];
    gitUrl: string;

}

const projectsData: Project[] = [
    {
        id: 1,
        title: "WOC ( Warkop or Coffee Shop)",
        description: "WOC ( Warkop Or Coffee Shop ) adalah sebuah webiste restaurant yang menyediakan sebuah menu minuman dingin dari WOC, dengan adanya menu ini akan mempermudah customer untuk melihat menu langsung melalui website ini dengan beberapa feature login, register, home, products, delete, infinite scroll, search, detail product, wish , dan addWishlist  yang bisa menambah menu kedalam wish. website ini dibuat menggunakan next.js, typescript, MongoDb, server side, TailwindCSS, dan vercel untuk deploy app ini.",
        image: "/images/experiences/woc.png",
        tag: ["All", "Web"],
        gitUrl: "https://woc.msodikin.web.id",

    },
    {
        id: 2,
        title: "WisataApp",
        description: "🌍 WisataApp Temukan Pesona Indonesia dalam Genggaman WisataApp adalah platform eksplorasi wisata yang dirancang untuk memperkenalkan keindahan destinasi di seluruh Indonesia melalui pengalaman digital yang modern dan responsif. Website ini menyajikan konten informatif dan inspiratif berupa diary perjalanan, rekomendasi tempat wisata, serta media interaktif yang memperkaya pengalaman pengguna dalam mencari dan menikmati informasi wisata.",
        image: "/images/experiences/wisataIMG.png",
        tag: ["All", "Web"],
        gitUrl: "https://wisataapp.msodikin.web.id/",

    },
    {
        id: 3,
        title: "Fastbook",
        description: "Fastbook adalah sebuah mobile app yang dibuat mirip dengan facebook, karena fastbook mempunya feature login, register, post, like, comment, search, follow, following, logout, dan profile, anda bisa melihat profile anda dan profile teman anda. saya menggunakan react native, graphQL, Apollo Server, dan MongoDb sebagai database. kekurangan nya adalah anda bisa membuka menggunakan App expo di link expo dibawah atau anda bisa git clone dengan klik foto project ini.",
        image: "/images/experiences/fastbook.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://shorturl.at/FWvNS",

    },
    {
        id: 4,
        title: "Geography Bandung",
        description: "Geography bandung Proyek ini bertujuan untuk memberikan gambaran umum mengenai geografi Bandung, seperti Letak geografis Bandung , Sejarah , dan Wisata.Semua informasi disajikan dalam tampilan halaman web statis yang responsif dan menarik, tanpa menggunakan JavaScript.",
        image: "/images/experiences/Gp.png",
        tag: ["All", "Web"],
        gitUrl: "https://dikin19.github.io/geografi-bandung/",

    },
    {
        id: 5,
        title: "MyHomepage",
        description: "Website ini merupakan hasil dari pengembangan dan latihan pribadi dalam meningkatkan keterampilan HTML dan CSS. Halaman yang ditampilkan memiliki desain yang bersih, responsif, dan terstruktur dengan baik. Berbagai elemen seperti header, navigasi, konten utama, gambar, dan tombol interaktif ditata menggunakan teknik modern seperti Flexbox dan Grid untuk menciptakan tampilan yang rapi dan fungsional.Beberapa fitur unggulan dari website ini meliputi navigasi yang sederhana dan mudah diakses, konten yang terpusat dan tersusun rapi, tampilan yang responsif di berbagai ukuran layar, serta efek hover yang memberikan kesan interaktif dan profesional.Website ini juga berfungsi sebagai portofolio sederhana untuk menunjukkan pemahaman dasar serta penerapan praktik terbaik dalam membangun antarmuka web menggunakan HTML dan CSS murni..",
        image: "/images/experiences/Mhp.png",
        tag: ["All", "Web"],
        gitUrl: "https://dikin19.github.io/improve-html-css/",

    },
];

export default function Project() {
    const [tag, setTag] = useState<string>("All");
    const ref = useRef<HTMLUListElement | null>(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <div className="bg-[#001F54] min-h-screen">
            <BaseLayout>
                <section id="projects">
                    <h2 className="text-center text-4xl font-bold text-white mt-10 mb-10 md:mb-12">
                        My Projects
                    </h2>
                    <div className="text-white mb-10 flex flex-row justify-center items-center gap-2 py-6 flex-wrap px-4">
                        <ProjectTag
                            onClick={handleTagChange}
                            name="All"
                            isSelected={tag === "All"}
                        />
                        <ProjectTag
                            onClick={handleTagChange}
                            name="Web"
                            isSelected={tag === "Web"}
                        />
                        <ProjectTag
                            onClick={handleTagChange}
                            name="Mobile"
                            isSelected={tag === "Mobile"}
                        />
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
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imgUrl={project.image}
                                    gitUrl={project.gitUrl}
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
