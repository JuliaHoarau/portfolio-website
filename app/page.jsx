import React from 'react'
import Tabs from './components/Tabs'
import styles from './styles.module.css'

const Home = () => {
  return (
    <div className="bg-primary">

    
      <div className='relative flex items-center justify-center h-screen'>
      <div className='bg-none p-8 xl:w-2/3 w-4/5 shadow-deep outline outline-3 outline-green-800 flex justify-center items-center'>
        <h1 className='text-3xl font-body'>Welcome to the daisyUI crash course</h1>
        <div className="absolute bottom-0 w-full">
    <img className={`w-full ${styles.largeScaleMushrooms}`} src="/images/mushroom-hero.png" alt="Mushrooms" />
  </div>
        </div>
        </div>
  


    <div>
    <Tabs />
    </div>
    </div>
  )
}

export default Home