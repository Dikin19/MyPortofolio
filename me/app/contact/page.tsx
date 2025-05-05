"use client";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import GithubIcon from "../../public/images/experiences/github.svg";
import LinkedinIcon from "../../public/images/experiences/linkedin.svg";
import Instagramicon from "../../public/images/experiences/instagram.svg";
import WhatsappIcon from "../../public/images/experiences/whatsapp.svg";
import GmailIcon from "../../public/images/experiences/gmail.svg";
import Link from "next/link";
import Image from "next/image";
import AnimatedContent from "@/app/components/AnimatedContent/AnimatedContent";
import { motion } from "framer-motion";
import Footer from "../components/Footer/foteer";

export default function Contact() {
    return (
        <div className="bg-[#001F54] min-h-screen relative overflow-hidden">
            {/* Background Gradient Blur */}
            <div className="absolute top-1/3 left-[-100px] w-[400px] h-[400px] bg-blue-900 rounded-full blur-[150px] opacity-30 z-0"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-700 rounded-full blur-[150px] opacity-20 z-0"></div>

            <BaseLayout>
                <AnimatedContent>

                    <div className="container mx-auto px-10 py-40 text-white relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-2xl mx-auto"
                        >
                            <h2 className="text-4xl font-bold mb-4">Let&apos;s Connect</h2>
                            <p className="text-[#ADB7BE] text-lg mb-6">
                                I&apos;m currently open to new opportunities. Whether you have a project idea,
                                collaboration, or just want to say hello, my inbox is always open!
                            </p>
                            <div className="flex justify-center gap-6">
                                <Link href="https://github.com/Dikin19" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={GithubIcon}
                                        alt="Github Icon"
                                        className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                                    />
                                </Link>
                                <Link href="https://www.linkedin.com/in/muhamad-sodikin/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={LinkedinIcon}
                                        alt="Linkedin Icon"
                                        className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                                    />
                                </Link>
                                <Link href="https://www.instagram.com/m.dikin77/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={Instagramicon}
                                        alt="Linkedin Icon"
                                        className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                                    />
                                </Link>
                                <Link href="https://https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={WhatsappIcon}
                                        alt="Linkedin Icon"
                                        className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                                    />
                                </Link>
                                <Link href="https://mail.google.com/mail/u/0/?pli=1#inbox/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={GmailIcon}
                                        alt="Linkedin Icon"
                                        className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </AnimatedContent>
            </BaseLayout>
            <Footer />
        </div>
    );
}
