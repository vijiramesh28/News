import React, { useContext,useEffect } from 'react'
import { translate } from '../../Context/translate.context'

// import translate from '../../Context/translate.context'
// import { NavLink } from "react-router-dom"
import TopbarSocial from "./TopbarSocial"

const translateLang= (t)=>{

    localStorage.setItem("language","eng")
    localStorage.setItem("language",t)
    
  window.location.reload()

}

const getActiveHightlight = () =>{
    const t = localStorage.getItem("language")
    if( t=='eng')
    {
        
        document.getElementById('act1').classList.add('active')
        document.getElementById('act2').classList.remove('active')
        document.getElementById('act3').classList.remove('active')
        

    }
    else if( t=='marathi')
    {
        document.getElementById('act2').classList.add('active')
        document.getElementById('act1').classList.remove('active')
        document.getElementById('act3').classList.remove('active')


    }
    else{
        document.getElementById('act3').classList.add('active')
        document.getElementById('act1').classList.remove('active')
        document.getElementById('act2').classList.remove('active')
    }
}

// onClick={()=>t.changeLanguage(curElem.code) }
const Topbar = () => {
    useEffect(() => {
        getActiveHightlight()
    }, [])
    const langu = useContext(translate)
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div id="top-bar" className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ul className="unstyled top-nav">
                                <li><a id="act1" style={{"cursor":"pointer"}}  onClick={()=>translateLang(langu.English.code)}  >English</a></li>
                                <li><a id="act2"  style={{"cursor":"pointer"}}  onClick={()=>translateLang(langu.Marathi.code)}  >Marathi</a></li>
                                <li><a id="act3" style={{"cursor":"pointer"}}   onClick={()=>translateLang(langu.Hindi.code)}  >Hindi</a></li>


                            </ul>
                        </div>
                        <TopbarSocial />
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}
        </>
    )
}

export default Topbar
