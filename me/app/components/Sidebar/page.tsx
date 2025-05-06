'use client'
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoArrowUndoOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { SidebarContext } from "../SideBarContext/SideBarContext";
import { VscSettingsGear } from "react-icons/vsc";
import { GrCertificate } from "react-icons/gr";
import { FaCodeBranch } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";

const sidebarItems = [
    { name: "Home", href: "/", icon: AiOutlineHome },
    { name: "About", href: "/about", icon: BsPeople },
    { name: "Experiences", href: "/experiences", icon: MdOutlineWorkHistory },
    { name: "Projects", href: "/projects", icon: FaCodeBranch },
    { name: "Skills", href: "/skills", icon: VscSettingsGear },
    { name: "Certificates", href: "/certificates", icon: GrCertificate },
    { name: "Contact", href: "/contact", icon: TiContacts },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { isCollapsedSidebbar, toogleSidebarCollapsedHandler } = useContext(SidebarContext);

    return (
        <div className={`sidebar_wrapper ${isCollapsedSidebbar ? 'collapsed' : ''}`}>
            <aside className={`sidebar ${isCollapsedSidebbar ? 'collapsed' : ''}`}>
                <div className="sidebar__top">
                    <button className="btn" onClick={toogleSidebarCollapsedHandler}>
                        <IoArrowUndoOutline size={24} />
                    </button>
                    <Image
                        src="/images/experiences/prg.png"
                        width={80}
                        height={80}
                        alt="Developer"
                        className="sidebar__logo"
                    />
                    <p className={`sidebar__logo-name ${isCollapsedSidebbar ? 'hidden' : ''}`}>
                        Full Stack Developer
                    </p>
                </div>
                <ul className="sidebar__list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li className="sidebar__item" key={name}>
                            <Link
                                href={href}
                                className={`sidebar__link ${pathname === href ? 'active' : ''}`}
                            >
                                <span className="sidebar__icon"><Icon /></span>
                                <span className={`sidebar__name ${isCollapsedSidebbar ? 'hidden' : ''}`}>
                                    {name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}
