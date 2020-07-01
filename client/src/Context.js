import React,{useState,createContext} from 'react'

export const ShopContext = createContext()

export const ShopProvider = (props)=>{

    const [total,setTotal] = useState(0)
    const [index,handleIndex] = useState(0)
    const [user,setUser] = useState('')

    return(
        <ShopContext.Provider value={[total,setTotal,index,handleIndex,user,setUser]}>
            {props.children}
        </ShopContext.Provider>
    )
}