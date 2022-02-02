//Import dependencies
import React from 'react'
//Import hooks
import { useMakeLogin } from '@hooks/useMakeLogin'
//Import styles
import '@components/LoginForm/LoginForm.css'

const LoginForm = () => {

    if (localStorage.getItem('sessionJWT')) {
        location.href='/abrir-mesa'
    }

    const form=React.useRef(null);
    const [loading,setLoading]=React.useState(true);

    const handleSubmit=async(event)=>{
        try {
            event.preventDefault();
            const formData=new FormData(form.current);
    
            const data={
                email:formData.get('email'),
                password:formData.get('password')
            };        
            
            const response=await useMakeLogin(data);
            const token=localStorage.getItem('sessionJWT')
            if (token) {
                location.href='/abrir-mesa'
            }
        } catch (error) {
            //setBadLogin(error.data);
            console.log(error)
        }
    }

    React.useEffect(()=>{
        if (!localStorage.getItem('sessionJWT')) {
            setLoading(false)
        }
    },[])

    return (
    <>
        {loading===false && 
            (<section className='LoginForm'>
                <form ref={form} className='LoginForm__form' action="">
                    <label className='LoginForm__label' htmlFor="email" >Correo electrónico</label>
                    <input className='LoginForm__input' type="email" name='email' placeholder='mariscos@gmail.com' />
                    <label className='LoginForm__label' htmlFor="password" >Contraseña</label>
                    <input className='LoginForm__input' type="password" name='password' placeholder='********'/>
                    <button className='LoginForm__button' onClick={handleSubmit}>Login</button>
                </form>
    
                <p className='LoginForm__p'>¿Olvidaste tu contraseña?</p>        
            </section>)
        }
    </>
    )
}

export {LoginForm}
