import { ReactNode } from "react";
import Sidebar from "../Sidebar/page";

interface Props {
    children: ReactNode | ReactNode[];
    sidebarOverlay?: ReactNode; // 👈 tambahkan ini untuk menerima Threads
}

export default function BaseLayout({ children }: Props) {
    return (
        <div className="layout flex">
            <div className="relative">
                <Sidebar />
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
}
