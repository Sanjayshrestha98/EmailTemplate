import React, { createContext, useState } from 'react';

// Create a Context for the theme
const BuilderContext = createContext();

// Create a Provider component
const BuilderProvider = ({ children }) => {
    const [contentWidth, setContentWidth] = useState(500);
    const [selectedRow, setSelectedRow] = useState(null);

    return (
        <BuilderContext.Provider value={{ contentWidth, setContentWidth, selectedRow, setSelectedRow }}>
            {children}
        </BuilderContext.Provider>
    );
};

// Export both the Context and the Provider
export { BuilderContext, BuilderProvider };
