import { createContext, useContext } from "react";

interface GlobalContextType {
    value:number | null,
    setValue: React.Dispatch<React.SetStateAction<number>>
}


export const GlobalContext = createContext<GlobalContextType>({
    value:0,
    setValue:()=>{}
})


export const useGlobalContext = ()=>{
    const context = useContext(GlobalContext)
    
    if(!context.value && context.value !==0){
        throw new Error("GlobalContext must be used with a GlobalContextProvider");
    }
    
    return context;
}


