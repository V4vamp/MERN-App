import React from 'react'
import { Link } from "react-router-dom";
import avatar from "../assets/Profile_avatar.png";
import styles from "../styles/Username.module.css";
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';



export const Password = () => {

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
        console.log(values)
    }


  })

  return (
    <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass}>  
                <div className='title flex flex-col items-center'>

                <h4 className='text-5xl font=bold'> Hello!</h4>

                <h4 className={styles.title}>Welcome to Otaku Circle</h4>

                    <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                        Explore Anime and Weebs by connecting with us!
                    </span>
                </div>
                <form className='py-1' onSubmit={formik.handleChange}>
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} className={styles.profile_img} alt='avatar'/>
                    </div>

                    <div className="textbox flex flex-col items-center gap-6">
                        <input className={styles.textbox} type='password' placeholder='Password'/>
                        <button className={styles.btn} type='submit' >
                            Login
                        </button>
                    </div>

                    <div className='text-center'>
                        <span className='text-gray-500'>Forgot your Password? Reset it <Link to='/reset' className={styles.link}>Here</Link> </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
