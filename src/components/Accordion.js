import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

// Accordion Section Component
const Accordion = ({ title, children, className, defaultOpen }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen || false);

    const toggleSection = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className={"text-sm  " + "" + className}>
            {/* Header Section */}
            <div
                className="p-3 flex justify-between items-center gap-2 bg-gray-100 cursor-pointer "
                onClick={toggleSection}
            >
                <h3 className="font-semibold text-gray-800 select-none ">{title}</h3>

                <ChevronDown className={` transition-all duration-200 ease-in-out ${isOpen ? "rotate-180" : ""}`} />
            </div>

            {/* Content Section */}
            {isOpen && (
                <div className="bg-white text-gray-700 ">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;