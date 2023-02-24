import React, { useState, useContext } from 'react'
import game from './Gamedata';

const AppContext = React.createContext()

export const AppProvider=({children})=>{
   
    const [isSubmenuOpen,setIsSubmenuOpen]=useState(false);
    const [id,setId]=useState({id:'',image:'',title:'',price:'',desp:''})
    
     



    const openSubmenu=(text)=>{
        const id = game.find((link)=> link.id === text);
        setId(id);
    }

    const closeSubmenu=()=>{
       setIsSubmenuOpen(false);
    }
  
    return(
        <AppContext.Provider 
        value={{
        
        isSubmenuOpen,
        closeSubmenu,
        openSubmenu,
            id
       
        }}>
            {children}
        </AppContext.Provider>
    )

}


export const useGlobalContext=()=>{
    return useContext(AppContext)
}

