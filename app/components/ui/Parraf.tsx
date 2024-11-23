import React from "react";

interface ParrafProps {
    text?: string,
    className?: string,
    children?: React.ReactNode;
}

const Parraf: React.FC<ParrafProps> = ({ className = '', children }) => {
    return (
        <p className={`font-sans text-xs md:text-xl text-pretty ${className}`}>
            {children}
        </p>
    )
} 

export default Parraf;