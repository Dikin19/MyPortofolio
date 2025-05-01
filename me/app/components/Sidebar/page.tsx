'use client'
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoArrowUndoOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { SidebarContext } from "../SideBarContext/SideBarContext";


const sidebarItems = [
    {
        name: "Home",
        href: "/",
        icon: AiOutlineHome
    },
    {
        name: "About",
        href: "/about",
        icon: BsPeople
    },
    {
        name: "Projects",
        href: "/about",
        icon: BsPeople
    },
    {
        name: "Skills",
        href: "/about",
        icon: BsPeople
    },
    {
        name: "Experiences",
        href: "/",
        icon: BsPeople
    },
    {
        name: "Contact",
        href: "/contact",
        icon: TiContacts
    },
];

export default function Sidebar() {

    const { isCollapsedSidebbar, toogleSidebarCollapsedHandler } = useContext(SidebarContext);


    return (
        <div className="sidebar_wrapper">
            <button className="btn" onClick={toogleSidebarCollapsedHandler}><IoArrowUndoOutline /></button>
            <aside className="sidebar" data-collapse={isCollapsedSidebbar}>
                <div className="sidebar__top">
                    <Image
                        src="/images/experiences/prg.png"
                        width={80}
                        height={80}
                        alt="Muhamad Sodikin"
                        className="sidebar__logo" />

                    <p className="sidebar__logo-name">Full Stack Developer</p>
                </div>
                <ul className="sidebar__list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li className="sidebar__item" key={name}>
                            <Link href={href} className="sidebar__link text-black">
                                <span className="sidebar__icon">
                                    <Icon />
                                </span>
                                <span className="sidebar__name">
                                    {name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}