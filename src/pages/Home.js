import { useState } from "react"

import Feed from '../components/Feed'
import PostForm from '../components/Form'

export default function HomePage(){
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

    return(
        <>
        <PostForm onSubmit={handleSubmit}/>
        <main>
            <Feed  posts={posts}/>
        </main>
        </>
    )

}