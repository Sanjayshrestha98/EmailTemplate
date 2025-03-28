import Document from '@tiptap/extension-document'
import Link from '@tiptap/extension-link'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'
import MyBubbleMenu from '../MyBubbleMenu'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'

function ParagraphElem({ data, handleContentChange, rowId, columnId, itemId }) {

    const [isEditable, setIsEditable] = React.useState(true)

    const editor = useEditor({
        extensions: [
            BulletList,
            ListItem,
            Link.configure({
                openOnClick: true,
                autolink: true,
                defaultProtocol: 'https',
            }),
            StarterKit,
            Document,
            Paragraph,  
            Text,
        ],
        content: data.content,      
        onUpdate: ({ editor }) => {
            // Get the latest content
            const newContent = editor.getHTML();
            handleContentChange(rowId, columnId, itemId, newContent)
            // console.log('Editor content changed:', newContent);
            // You can also get JSON content
            // const jsonContent = editor.getJSON();
            
            // Here you can handle the content update
            // For example, save to state or call a parent component callback
        },
        // onBlur: ({ editor }) => {
        //     console.log('Editor content changed after blur:', editor.getHTML());
        // },
    })

    useEffect(() => {
        if (editor) {
            editor.setEditable(isEditable)
        }
    }, [isEditable, editor])

    return (
        <>

            {/* <div className="control-group">
                                <label>
                                    <input type="checkbox" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
                                    Editable
                                </label>
                            </div> */}

            {editor && <MyBubbleMenu editor={editor} />}
            <EditorContent editor={editor} onChange={(e) => { console.log('changed', e) }} />
        </>
    )
}

export default ParagraphElem