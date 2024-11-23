import React from "react";

interface TextHeaderProps {
    text?: string,
    className?: string,
    children?: React.ReactNode;
}

const TextHeader: React.FC<TextHeaderProps> = ({ className = '', children }) => {
    return (
        <h1 className={`font-serif text-6xl text-pretty md:text-9xl ${className}`}>
            {children}
        </h1>
    )
} 

export default TextHeader;