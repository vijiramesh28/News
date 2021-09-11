import React, { useContext } from 'react'
import { translate } from '../../Context/translate.context'

// import translate from '../../Context/translate.context'
// import { NavLink } from "react-router-dom"
import TopbarSocial from "./TopbarSocial"

const translateLang= (t)=>{
    localStorage.setItem("language","eng")
    localStorage.setItem("language",t)
    window.location.reload(true)
    // console.log(`you have clicked language ${tr}`)
}

// onClick={()=>t.changeLanguage(curElem.code) }
const Topbar = () => {
    const langu = useContext(translate)
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div id="top-bar" className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ul className="unstyled top-nav">
                                <li><a class="active" style={{"cursor":"pointer"}} onClick={()=>translateLang(langu.English.code)}>English</a></li>
                                <li><a style={{"cursor":"pointer"}} onClick={()=>translateLang(langu.Marathi.code)}>Marathi</a></li>
                                <li><a style={{"cursor":"pointer"}}  onClick={()=>translateLang(langu.Hindi.code)}>Hindi</a></li>


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
