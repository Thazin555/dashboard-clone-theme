import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' max-w-[1200px] p-[24px] mx-auto'>
        {children}
    </div>
  )
}

export default Container