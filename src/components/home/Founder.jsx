import React from 'react';
import { motion } from 'framer-motion';
import me from '../../assets/Founder.png';

const Founder = () => {
    const options = {
        initial:{
            x:'-100%',
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        }
    }
  return (
    <section className='founder'>
        <motion.div {...options} >
            <img src={me} alt="Founder" height={200} width={200} />
            <h3>Mohammad Faiyyazz</h3>
            <p>Hey, Everyone I am Faiyyazz founder of MF Burger wala. <br />
            Our aim is to make the most tastier Burger in all over India.
            </p>
        </motion.div>
    </section>
  )
}

export default Founder
