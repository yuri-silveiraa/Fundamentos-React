import '../styles/PostForm.css';

import userIcon from '../images/user.svg'
import paperPlaneIcon from '../images/paper-plane.svg'
import { useState } from 'react'


export default function PostForm (props){
    const [historys, setHistory] = useState('') 
    const [userName, setUsername] = useState('')

    function handleSubmit (event) {
        event.preventDefault()

        props.onSubmit({ historys, userName})

        setHistory('')
        setUsername('')
    }
    return (
    <form className='post-form' onSubmit={handleSubmit}>
        <input
            value={historys}
            placeholder='Escreva uma nova história...' 
            onChange={(event)=> setHistory(event.target.value)}
        />
        <div>
            <img src={userIcon} alt='User'/>
            <input 
                value={userName}
                placeholder='Digite seu nome...'
                onChange={(event)=> setUsername(event.target.value)}
            />

            <button type='submit'>
                <img src={paperPlaneIcon} alt='Paper Plane' />
                Publicar
            </button>
        </div> 
    </form>
    )
}