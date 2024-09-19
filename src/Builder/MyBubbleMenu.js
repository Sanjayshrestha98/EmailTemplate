import { BubbleMenu } from '@tiptap/react'
import { Bold, Code, Italic, List, Strikethrough } from 'lucide-react'
import React, { useCallback } from 'react'

function MyBubbleMenu({ editor }) {

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
    }, [editor])

    if (!editor) {
        return null
    }

    return (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <div className="bg-white border gap-3 flex w-fit">
                <button onClick={setLink} className={editor.isActive('link') ? 'is-active p-1 text-blue-300' : ''}>
                    Set link
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetLink().run()}
                    disabled={!editor.isActive('link')}
                >
                    Unset link
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active p-1 text-blue-300' : 'p-1'}
                >
                    <Bold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active p-1 text-blue-300' : 'p-1'}
                >
                    <Italic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active p-1 text-blue-300' : 'p-1'}
                >
                    <Strikethrough />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    className={editor.isActive('code') ? 'is-active' : ''}
                >
                    <Code />
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('BulletList') ? 'is-active' : ''}
                >
                    <List />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    Ordered list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    Code block
                </button>
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    Horizontal rule
                </button>
            </div>
        </BubbleMenu>
    )
}

export default MyBubbleMenu