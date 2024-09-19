import React from 'react'

function IndividualSections() {
    return (
        <td id='mp101-2' className='border' width={100}>
            <>
                {/* <div className="control-group">
                                <label>
                                    <input type="checkbox" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
                                    Editable
                                </label>
                            </div> */}

                {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <div className="bubble-menu bg-white border gap-3 flex">
                        <button
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            className={editor.isActive('bold') ? 'is-active p-1 text-blue-300' : 'p-1'}
                        >
                            Bold
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            className={editor.isActive('italic') ? 'is-active p-1 text-blue-300' : 'p-1'}
                        >
                            Italic
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            className={editor.isActive('strike') ? 'is-active p-1 text-blue-300' : 'p-1'}
                        >
                            Strike
                        </button>
                    </div>
                </BubbleMenu>}
                <EditorContent editor={editor} onChange={() => { console.log('changed') }} />
            </>
        </td>
    )
}

export default IndividualSections