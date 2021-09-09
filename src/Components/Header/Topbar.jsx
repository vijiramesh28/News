import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import TopbarSocial from "./TopbarSocial"

const LangName = [{
    code:'en',
    name:'English'
},
{
    code:'mr',
    name:'Marathi'
},
{
    code:'hi',
    name:'Hindi'
}
]
// onClick={()=>t.changeLanguage(curElem.code) }
const Topbar = () => {
    const { t } = useTranslation()
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div id="top-bar" className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ul className="unstyled top-nav">
                                {
                                    LangName.map((curElem, ind)=>{
                                        return <li key={ind}><NavLink to="/" activeClassName="active">{curElem.name}</NavLink></li>
                                    })
                                }
                                
                             
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
