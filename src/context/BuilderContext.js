import React, { createContext, useReducer, useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';

// Create a Context for the theme
const BuilderContext = createContext();

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
            borderLeft: 0,
            borderRight: 0,
            borderTop: 0,
            borderBottom: 0,
            borderColor: '#000000',
            borderType: 'solid',

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
        columns: [
            {
                span: "6",
                id: uuidv1(),
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
                // Update styles of the selected row
                row.styles[styleKey] = value;
                // Update styles of columns inside the selected row
                // row.columns = row.columns.map(col => {
                //     if (col.id === columnId) {
                //         col.styles[styleKey] = value;
                //     }
                //     return col;
                // });
            }
            return row;
        });
        localStorage.setItem('rowsList', JSON.stringify(updatedRows));
        setRowsList(updatedRows);
    };

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
            handleRowStyleChange
        }}>
            {children}
        </BuilderContext.Provider>
    );
};

// Export both the Context and the Provider
export { BuilderContext, BuilderProvider };
