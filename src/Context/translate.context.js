import React,{createContext} from 'react'
export const lang = {
    English:{
        code: "eng"
    },
    Marathi:{
        
       code:'marathi'
    },
    Hindi:{
        code:'hindi'
    }

}

export const translate = createContext(lang)

