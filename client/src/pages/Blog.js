import React from 'react'
import { useParams } from 'react-router-dom';
import TextEditor from '../component/TextEditor';

function BlogPage() {
    const { blogId } = useParams();
    return (
        <div>
            <TextEditor />
        </div>
    )
}

export default BlogPage
