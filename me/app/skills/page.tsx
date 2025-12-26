'use client';
import React from "react";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import Image from "next/image";
import javascript from "../../public/images/skills/javascript.gif";
import postgresql from "../../public/images/skills/postgresql.svg";
import html from "../../public/images/skills/html5.png";
import css from "../../public/images/skills/css.png";
import apolloserver from "../../public/images/skills/apolloserver.png";
import aws from "../../public/images/skills/aws.png";
import digitalocean from "../../public/images/skills/digitalocean.png";
import firebase from "../../public/images/skills/firebase.png";
import graphql from "../../public/images/skills/graphql.png";
import mongodb from "../../public/images/skills/mongodb.png";
import nextjs from "../../public/images/skills/next.js.png";
import nodejs from "../../public/images/skills/node-js.png"
import react from "../../public/images/skills/react.gif"
import restapi from "../../public/images/skills/restapi.png"
import tailwindcss from "../../public/images/skills/tailwindcss.png"
import Footer from "../components/Footer/foteer";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Skill = () => {
    const skills = [
        { icon: javascript, title: "JavaScript" },
        { icon: postgresql, title: "Postgresql" },
        { icon: html, title: "HTML" },
        { icon: css, title: "CSS" },
        { icon: apolloserver, title: "Apolloserver" },
        { icon: aws, title: "AWS" },
        { icon: digitalocean, title: "Digitaloceans" },
        { icon: firebase, title: "Firebase" },
        { icon: graphql, title: "Graphql" },
        { icon: mongodb, title: "Mongodb" },
        { icon: nextjs, title: "Next.Js" },
        { icon: nodejs, title: "Node.js" },
        { icon: react, title: "React.js" },
        { icon: restapi, title: "RestAPI" },
        { icon: tailwindcss, title: "TailwindCSS" }
    ];

    return (
        <div className="bg-[#001F54] min-h-screen relative">
            <BaseLayout>
                <div className="container mx-auto px-2 sm:px-6 lg:px-12 py-2 text-white">

                    <section id="skills">
                        <div className="container mx-auto px-2">
                            <div className="text-center mb-12">
                                <h2 className="text-[#D4AF37] text-4xl font-bold">Full Stack Developer Skills</h2>
                                <p className="text-white mt-4 max-w-2xl mx-auto">
                                    Belajar keterampilan dari frontend hingga backend, dengan fokus pada performa dan
                                    skalabilitas.
                                </p>
                            </div>

                            {/* Swiper Vertical Carousel */}
                            <div className="w-full max-w-md mx-auto h-[500px] overflow-hidden">
                                <Swiper
                                    direction="vertical"
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="h-full"
                                >
                                    {skills.map((skill, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl py-4 p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300">
                                                <Image src={skill.icon} alt={skill.title} width={80} height={80} className="mx-auto" />
                                                <h5 className="text-[#D4AF37] mt-2 font-semibold">{skill.title}</h5>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </section>

                </div>
            </BaseLayout>
            <Footer />
        </div>
    );
};

export default Skill;
