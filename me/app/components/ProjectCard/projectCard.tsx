import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    // previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    imgUrl,
    title,
    description,
    gitUrl,
    // previewUrl,
}) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-lg bg-[#001F54]">
            {/* Image Section */}
            <div
                className="relative group h-52 md:h-72 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                }}
            >
                {/* Overlay with Icons */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center transition-all duration-500">
                    <div className="flex space-x-4">
                        <a
                            href={gitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 w-14 flex items-center justify-center border-2 border-[#ADB7BE] hover:border-white rounded-full transition-colors duration-300"
                        >
                            <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white transition-colors duration-300" />
                            {/* <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white transition-colors duration-300" /> */}
                        </a>
                        {/* <a
                            href={previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 w-14 flex items-center justify-center border-2 border-[#ADB7BE] hover:border-white rounded-full transition-colors duration-300"
                        >
                            <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white transition-colors duration-300" />
                        </a> */}
                    </div>
                </div>
            </div>

            {/* Text Section */}
            <div className="p-4">
                <h5 className="text-xl font-semibold mb-2" style={{ color: '#FFD700' }}>
                    {title}
                </h5>

                <p className="text-[#ffff]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
