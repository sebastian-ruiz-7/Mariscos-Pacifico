//Import dependencies
import React from 'react'

//Import styles
import '@components/LoginForm/LoginForm.css'

const LoginForm = () => {
    return (
        <section className='LoginForm'>
            <form className='LoginForm__form' action="">
                <label className='LoginForm__label' htmlFor="email">Correo electrónico</label>
                <input className='LoginForm__input' type="email" placeholder='mariscos@gmail.com' />
                <label className='LoginForm__label' htmlFor="password">Contraseña</label>
                <input className='LoginForm__input' type="password" placeholder='********'/>
                <button className='LoginForm__button' >Login</button>
            </form>

            <p className='LoginForm__p'>¿Olvidaste tu contraseña?</p>        
        </section>

    )
}

export {LoginForm}
