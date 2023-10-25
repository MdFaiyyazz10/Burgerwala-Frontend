import React from 'react';
import {motion} from 'framer-motion';
import {FcGoogle} from 'react-icons/fc'
import { server } from '../../redux/store';



const Login = () => {

  const loginHandler = ()=>{
    window.open(`${server}/googlelogin`, "_self")
  }

  return <section className='login'>

    <motion.button initial={{y:"-100vh", opacity:0}} animate={{y:"0", opacity:1}} onClick={loginHandler}>
        Login With Google
        <FcGoogle />
    </motion.button>
  </section>
}

export default Login
