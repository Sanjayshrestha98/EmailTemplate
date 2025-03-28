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
import { debounce } from 'lodash'

function TitleElem({ data, handleContentChange, rowId, columnId, itemId }) {

    const [isEditable, setIsEditable] = React.useState(true)

    const debouncedUpdate = React.useCallback(
        debounce((content) => {
            handleContentChange(rowId, columnId, itemId, content);
        }, 1000),
        [rowId, columnId, itemId, handleContentChange]
    );
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
            const newContent = editor.getHTML();
            debouncedUpdate(newContent);
        }
    })  



    useEffect(() => {
        if (editor) {
            editor.setEditable(isEditable)
        }
    }, [isEditable, editor])

    return (
        <>
            {editor && <MyBubbleMenu editor={editor} />}
            <EditorContent editor={editor} onChange={() => { console.log('changed') }} />
        </>
    )
}

export default TitleElem