'use client'

import React, { createContext, useState, ReactNode } from "react";

const initialValue = {
    isCollapsedSidebbar: false,
    toogleSidebarCollapsedHandler: () => { }
}

export const SidebarContext = createContext(initialValue)

interface Props {
    children: ReactNode | ReactNode[];
}

const SidebarProvider = ({ children }: Props) => {
    const [isCollapsedSidebbar, setIsCollapsedSidebbar] = useState<boolean>(false);

    const toogleSidebarCollapsedHandler = () => {
        setIsCollapsedSidebbar((prev) => !prev);
    };

    return (
        <SidebarContext.Provider
            value={{
                isCollapsedSidebbar,
                toogleSidebarCollapsedHandler
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;