import { ReactNode } from "react";
import Sidebar from "../Sidebar/page";

interface Props {
    children: ReactNode | ReactNode[];
    sidebarOverlay?: ReactNode; // 👈 tambahkan ini untuk menerima Threads
}

export default function BaseLayout({ children }: Props) {
    return (
        <div className="flex min-h-screen ">
            <div className="relative">
                <Sidebar />
            </div>
            <main className="main-content flex-1 p-4">
                {children}
            </main>
        </div>
    );
}

