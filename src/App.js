import { useState } from 'react';

import './styles/App.css';



import Feed from './components/Feed'
import PostForm from './components/Form'


export default function App() {   
    const [posts, setPosts] = useState([])

    function handleSubmit ({historys, userName}) {
        setPosts([
                ...posts,
                {
                    id: Math.random(),
                    content: historys,
                    userName,
                    publishAt: new Date()
                },
            ])
    }


    return (
    <div className='wrapper'>
            <PostForm onSubmit={handleSubmit}/>
        <main>
            <Feed  posts={posts}/>
        </main>
    </div>
    )
}