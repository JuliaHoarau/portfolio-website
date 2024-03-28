import React from 'react'

const Footer = () => {
  return (
      <footer className=' text-secondary'>
        <div className='container mx-auto flex justify-center align-center mt-10 pb-5'>
          <p>&copy;Julia Hoarau {new Date().getFullYear()} </p>
        </div>

      </footer>
  )
}

export default Footer