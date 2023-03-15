import '../styles/Feed.css';

import clockIcon from '../images/clock.svg'
import emptyFolderIcon from '../images/empty-folder.svg'
import userIcon from '../images/user.svg'

export default function Feed(props) {
    const posts = props.posts
    
    if(posts.length === 0){
        return (
            <div className='feed-status'>
                <img src={emptyFolderIcon} alt="Empty Folder" />
                <h1>Não encontramos nada</h1>
                <h2>
                Parece que seus amigos não publicaram nada.<br/>
                Comece a escrever uma história
                </h2>
            </div>)
    }

    return (
        <>
            <header>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
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
    )
}