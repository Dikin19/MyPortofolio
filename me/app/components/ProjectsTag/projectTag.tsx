import React from "react";

interface ProjectTagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-white border-primary-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white";

    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-4 md:px-6 py-2 md:py-3 text-sm md:text-xl cursor-pointer whitespace-nowrap`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>

    );
};

export default ProjectTag;
