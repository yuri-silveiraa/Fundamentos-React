import { useState } from 'react';

import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import userIcon from './images/user.svg'
import paperPlaneIcon from './images/paper-plane.svg'
import clockIcon from './images/clock.svg'
import emptyFolderIcon from './images/empty-folder.svg'

export default function App() {
    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            content: 'Conteudo do Post',
            userName: 'Yuri',
            publishAt: new Date()
        },
    ])

    function handleSubmit (event) {
        event.preventDefault()

        setPosts([
                ...posts,
                {
                    id: Math.random(),
                    content: `Conteudo do Post ${Math.random()}`,
                    userName: 'Yuri',
                    publishAt: new Date()
                },
            ]
        )
    }


    return (
    <div className='wrapper'>
        <form className='post-form' onSubmit={handleSubmit}>
            <input placeholder='Escreva uma nova história...' />
            <div>
                <img src={userIcon} alt='User'/>

                <input placeholder='Digite seu nome...' />

                <button type='submit'>
                    <img src={paperPlaneIcon} alt='Paper Plane' />

                    Publicar
                </button>
            </div>
        </form>
        <main>
            {posts.length === 0 && (
                <div className='feed-status'>
                    <img src={emptyFolderIcon} alt="Empty Folder" />
                    <h1>Não encontramos nada</h1>
                    <h2>
                    Parece que seus amigos não publicaram nada.<br/>
                    Comece a escrever uma história
                    </h2>
            </div>
            )}
    
            {posts.length > 0 && (
                <>
                <header>
                    <h1>Seu Feed</h1>
                    <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
                </header>

                <section className='feed'>
                    {posts.map(post =>(
                    <article key={post.id}>
                        <p>
                            {post.content}
                        </p>

                        <footer>
                            <div className='user-details'>
                                <img src={userIcon} alt='User Icon'/>
                                <strong>{post.userName}</strong>
                            </div>
                            <div className='time'>
                                <img src={clockIcon} alt="Relogio" />
                                <span>Publicado em {post.publishAt.toLocaleDateString('pt-br')}</span>
                            </div>
                        </footer>
                    </article>
                    ))}
                </section>
                </>
            )}

            
        </main>
    </div>
    )
}