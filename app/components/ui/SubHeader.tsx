import React from "react";

interface SubHeaderProps {
    text?: string,
    className?: string,
    children?: React.ReactNode;
}

const SubHeader: React.FC<SubHeaderProps> = ({ className = '', children }) => {
    return (
        <h2 className={`font-serif text-7xl${className}`}>
            {children}
        </h2>
    )
} 

export default SubHeader;