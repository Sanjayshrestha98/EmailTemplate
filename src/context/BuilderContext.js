import React, { createContext, useReducer, useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';

// Create a Context for the theme
const BuilderContext = createContext();

const newEmptyColumn = {
    // id: uuidv1(),
    id: uuidv1(),
    styles: {

        backgroundColor: '#ffffff',

        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,

        advancedPadding: false,

        // Border   
        borderLeft: {
            type: "none",
            width: 0,
            color: "#000000",
        },
        borderRight: {
            type: "none",
            width: 0,
            color: "#000000",
        },
        borderTop: {
            type: "none",
            width: 0,
            color: "#000000",
        },
        borderBottom: {
            type: "none",
            width: 0,
            color: "#000000",
        },
    },
    span: "1",
    content: []
}

const inititalrowsList = [
    {
        id: uuidv1(),
        styles: {
            // Background
            backgroundColor: '#ffffff',
            contentAreaBackgroundColor: '#ffffff',
            hasBackgroundImage: false,
            url: null,
            backgroundRepeat: false,
            backgroundFit: false,
            backgroundCenter: false,
            applyImageTo: "row",

            // Border   
            borderLeft: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            borderRight: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            borderTop: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            borderBottom: {
                type: "none",
                width: 0,
                color: "#000000",
            },

            advancedBorder: false,
            advancedRadius: false,

            borderRadiusTopLeft: 0,
            borderRadiusTopRight: 0,
            borderRadiusBottomLeft: 0,
            borderRadiusBottomRight: 0,

            // Layout
            verticalAlign: 'top',

            // Cards style
            cellSpacing: 0,


        },
        columns: [
            {
                id: uuidv1(),
                styles: {

                    backgroundColor: '#ffffff',

                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,

                    advancedPadding: false,

                    // Border   
                    borderLeft: {
                        type: "none",
                        width: 0,
                        color: "#000000",
                    },
                    borderRight: {
                        type: "none",
                        width: 0,
                        color: "#000000",
                    },
                    borderTop: {
                        type: "none",
                        width: 0,
                        color: "#000000",
                    },
                    borderBottom: {
                        type: "none",
                        width: 0,
                        color: "#000000",
                    },
                },
                span: "12",
                content: [
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is 0,0. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>  ` },
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is a 0,1 reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>
              <p>
                The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
              </p>
            `
                    },
                ]

            },
        ]
    },
    {
        id: uuidv1(),
        styles: {
            // Background
            backgroundColor: '#ffffff',
            contentAreaBackgroundColor: '#ffffff',
            hasBackgroundImage: false,
            url: null,
            backgroundRepeat: false,
            backgroundFit: false,
            backgroundCenter: false,
            applyImageTo: "row",

            // Border   
            borderLeft: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            borderRight: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            borderTop: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            borderBottom: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            advancedBorder: false,
            advancedRadius: false,

            borderRadiusTopLeft: 0,
            borderRadiusTopRight: 0,
            borderRadiusBottomLeft: 0,
            borderRadiusBottomRight: 0,

            // Layout
            verticalAlign: 'top',

            // Cards style
            cellSpacing: 0,


        },
        columns: [
            {
                id: uuidv1(),
                styles: {
                    backgroundColor: '#ffffff',
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                    borderBottom: 0,
                    borderColor: '#000000',
                    borderType: 'solid',
                },
                span: "6",
                content: [
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is 0,0. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
                This is 0,0. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
                This is 0,0. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
                This is 0,0. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>  ` },
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is a 0,1 reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>
              <p>
                The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
              </p>
            `
                    },
                ]

            },
            {
                id: uuidv1(),
                styles: {

                    backgroundColor: '#ffffff',

                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,

                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                    borderBottom: 0,
                    borderColor: '#000000',
                    borderType: 'solid',
                },
                span: "6",
                content: [
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is 0,0. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>  ` },
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is a 0,1 reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>
              <p>
                The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
              </p>
            `
                    },
                ]

            },
        ]
    },
    {
        id: uuidv1(),
        styles: {
            // Background
            backgroundColor: '#ffffff',
            contentAreaBackgroundColor: '#ffffff',
            hasBackgroundImage: false,
            url: null,
            backgroundRepeat: false,
            backgroundFit: false,
            backgroundCenter: false,
            applyImageTo: "row",

            // Border   
            borderLeft: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            borderRight: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            borderTop: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            borderBottom: {
                type: "none",
                width: 0,
                color: "#000000",
            },
            advancedBorder: false,
            advancedRadius: false,

            borderRadiusTopLeft: 0,
            borderRadiusTopRight: 0,
            borderRadiusBottomLeft: 0,
            borderRadiusBottomRight: 0,

            // Layout
            verticalAlign: 'top',

            // Cards style
            cellSpacing: 0,


        },
        columns: [
            {
                span: "6",
                id: uuidv1(),
                styles: {

                    backgroundColor: '#ffffff',

                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,

                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                    borderBottom: 0,
                    borderColor: '#000000',
                    borderType: 'solid',
                },
                content: [
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is a 1,0 reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>
              <p>
                The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
              </p>
            `
                    },
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is a 1,1 reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>
              <p>
                The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
              </p>
            `
                    },
                ]

            },
            {
                span: "6",
                id: uuidv1(),
                styles: {

                    backgroundColor: '#ffffff',

                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,

                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                    borderBottom: 0,
                    borderColor: '#000000',
                    borderType: 'solid',
                },
                content: [
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is a radically reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>
              <p>
                The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
              </p>
            `
                    },
                    {
                        styles: {
                            padding: 10,
                            margin: 0,
                        },
                        id: uuidv1(),
                        type: 'paragraph',
                        content: `
              <p>
                This is a radically reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
              </p>
              <p>
                The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
              </p>
            `
                    },
                ]

            },
        ]
    }
]

const applyChanges = (rowid, columnid, nodeid, type, payload) => {

}

// Create a Provider component
const BuilderProvider = ({ children }) => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [rowsList, setRowsList] = useState(JSON.parse(localStorage.getItem('rowsList')) || inititalrowsList);

    const handleRowStyleChange = (rowId, styleKey, value) => {
        const updatedRows = rowsList?.map(row => {
            if (row.id === rowId) {
                // Split the styleKey to handle nested objects (like 'borderLeft.width')
                const keys = styleKey.split('.');  // Split the key by dot
                if (keys.length === 1) {
                    // If it's a single key (no nesting)
                    row.styles[styleKey] = value;
                } else {
                    // If it's a nested key, iterate and update
                    let currentObject = row.styles;
                    for (let i = 0; i < keys.length - 1; i++) {
                        currentObject = currentObject[keys[i]];  // Traverse to the correct nested object
                    }
                    currentObject[keys[keys.length - 1]] = value;  // Set the value to the final key
                }
            }
            return row;
        });
        localStorage.setItem('rowsList', JSON.stringify(updatedRows));
        setRowsList(updatedRows);
    };

    function handleColumnStyleChange(rowId, columnId, newStyle, value) {
        const updatedRows = rowsList.map((row) => {
            if (row.id !== rowId) return row; // Skip rows that don't match

            // Process only the targeted row
            const updatedRow = {
                ...row,
                columns: row.columns.map((column) => {
                    if (column.id !== columnId) return column; // Skip columns that don't match

                    if (newStyle === "span") {
                        return { ...column, [newStyle]: value };
                    }

                    // Handle nested styles
                    const updatedStyles = { ...column.styles };

                    const keys = newStyle.split(".");


                    if (keys.length === 1) {
                        return {
                            ...column,
                            styles: {
                                ...updatedStyles,
                                [newStyle]: value
                            }
                        };
                    }

                    let currentObject = updatedStyles;
                    for (let i = 0; i < keys.length - 1; i++) {
                        const key = keys[i];
                        if (!currentObject[key]) currentObject[key] = {}; // Ensure nested structure
                        currentObject = currentObject[key];
                    }
                    currentObject[keys[keys.length - 1]] = value;

                    return { ...column, styles: updatedStyles };
                }),
            };
            return updatedRow;
        });

        setRowsList(updatedRows);

        // Optimize row selection
        const selectedRow = updatedRows.find(row => row.id === rowId);
        setSelectedRow(selectedRow);

        localStorage.setItem("rowsList", JSON.stringify(updatedRows));
    }


    const handleAddColumn = (rowId) => {
        const updatedRows = rowsList?.map((row, index) => {
            if (row.id === rowId) {
                const newColumn = { ...newEmptyColumn, id: uuidv1() };

                // Check if the column at `index` can reduce its span
                if (row.columns[index].span > 1) {
                    row.columns[index].span -= 1;
                    row.columns.splice(index + 1, 0, newColumn); // Insert after the current index
                } else {
                    console.warn("Cannot add a new column. Column span is insufficient.");
                }
            }
            return row;
        });

        localStorage.setItem("rowsList", JSON.stringify(updatedRows));
        setRowsList(updatedRows);
    };

    const handleDeleteColumn = (rowId, columnId) => {
        const updatedRows = rowsList?.map(row => {
            if (row.id === rowId) {
                const columnIndex = row.columns.findIndex(col => col.id === columnId);

                // Ensure the column exists
                if (columnIndex !== -1) {
                    // Ensure the row has more than one column
                    if (row.columns.length > 1) {
                        // Convert span to a number for calculations
                        const removedSpan = parseInt(row.columns[columnIndex].span, 10);

                        // Adjust the span of the adjacent column
                        if (columnIndex > 0) {
                            // Add the removed span to the previous column
                            row.columns[columnIndex - 1].span = (
                                parseInt(row.columns[columnIndex - 1].span, 10) + removedSpan
                            ).toString();
                        } else if (columnIndex < row.columns.length - 1) {
                            // Add the removed span to the next column if it's the first column being deleted
                            row.columns[columnIndex + 1].span = (
                                parseInt(row.columns[columnIndex + 1].span, 10) + removedSpan
                            ).toString();
                        }

                        // Remove the column
                        row.columns.splice(columnIndex, 1);
                    } else {
                        console.warn("Cannot delete column. A row must have at least one column.");
                    }
                } else {
                    console.warn("Column with the specified ID not found.");
                }
            }
            return row;
        });

        localStorage.setItem("rowsList", JSON.stringify(updatedRows));
        setRowsList(updatedRows);
    };



    // function handleAddColumn(rowId, index) {
    //     const updatedRows = rowsList?.map(row => {
    //         if (row.id === rowId) {
    //             const newColumn = { ...newEmptyColumn };
    //             row.columns.splice(index, 0, newColumn);
    //         }
    //         return row;
    //     });
    //     localStorage.setItem('rowsList', JSON.stringify(updatedRows));
    //     setRowsList(updatedRows);
    // }

    // Define the initial state
    const initialRootContentState = {
        width: 500,
        alignment: 'center',
        backgroundColor: '#ffffff',
        hasBackgroundImage: false,
        url: null,
        contentAreaBackgroundColor: '#ffffff',
        backgroundRepeat: false,
        backgroundFit: false,
        backgroundCenter: false,
        linkColor: '#4182d8',
    };

    // Load state from localStorage if it exists, otherwise use the initial state
    const loadStateFromLocalStorage = () => {
        const savedState = localStorage.getItem('rootState');
        return savedState ? JSON.parse(savedState) : initialRootContentState;
    };

    const [rootState, rootStyleDispatch] = useReducer(rootReducer, loadStateFromLocalStorage());
    const [selectedTab, setSelectedTab] = useState('content');
    const [selectedNode, setSelectedNode] = useState(null);
    // Define the reducer function
    function rootReducer(state, action) {
        switch (action.type) {
            case 'setWidth':
                return { ...state, width: action.payload };
            case 'setContentAlignment':
                return { ...state, alignment: action.payload };
            case 'setBackgroundColor':
                return { ...state, backgroundColor: action.payload };
            case 'setHasBackgroundImage':
                return { ...state, hasBackgroundImage: action.payload };
            case 'setUrl':
                return { ...state, url: action.payload };
            case 'setContentAreaBackgroundColor':
                return { ...state, contentAreaBackgroundColor: action.payload };
            case 'setFitToBackground':
                return { ...state, backgroundFit: action.payload };
            case 'setRepeat':
                return { ...state, backgroundRepeat: action.payload };
            case 'setBackgroundCenter':
                return { ...state, backgroundCenter: action.payload };
            case 'setLinkColor':
                return { ...state, linkColor: action.payload };
            case 'reset':
                return initialRootContentState;
            default:
                throw new Error(`Unknown action: ${action.type}`);
        }
    }

    // Save rootState to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('rootState', JSON.stringify(rootState));
    }, [rootState]);
 
    return (
        <BuilderContext.Provider value={{
            selectedTab,
            setSelectedTab,
            selectedRow,
            setSelectedRow,
            rootState,
            rootStyleDispatch,
            rowsList,
            setRowsList,
            selectedNode,
            setSelectedNode,
            handleRowStyleChange,
            handleColumnStyleChange,
            handleAddColumn,
            handleDeleteColumn
        }}>
            {children}
        </BuilderContext.Provider>
    );
};

// Export both the Context and the Provider
export { BuilderContext, BuilderProvider };
