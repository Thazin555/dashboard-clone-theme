import React, { createContext, useState } from 'react'
export const GeneralContext=createContext()
const GeneralContextProvider = ({children}) => {
  return (
    <GeneralContext.Provider value={{m:"m"}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider