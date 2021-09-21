import React, { createContext } from 'react'
export const lang = {
    English: {
        code: "english",
        id:'1'
    },
    Marathi: {

        code: 'marathi',
        id:'2'
    },
    Hindi: {
        code: 'hindi',
        id:'3'
    }

}

export const translate = createContext(lang)

