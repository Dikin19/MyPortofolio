import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
};

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
    highlightColor?: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children, highlightColor = "text-white" }) => {
    const textColor = active ? highlightColor : "text-[#D4AF37]";
    const underlineColor = active ? highlightColor.replace("text-", "bg-") : "bg-transparent";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${textColor}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className={`h-1 mt-2 mr-3 ${underlineColor}`}
            ></motion.div>
        </button>
    );
};

export default TabButton;