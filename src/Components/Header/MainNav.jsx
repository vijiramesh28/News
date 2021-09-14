
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import instance from "../../Api/axios"
const MainNav = () => {

    const [menus, setMenus] = useState([])
    const [activeIndex,setActiveIndex] = useState(0)
    const [subActiveIndex, setSubActiveIndex] = useState(0)
    const GetMenusApi = async () => {
        const res = await instance.get('/categories')
        console.log(res.data.language.categories);
        setMenus(res.data.language.categories)
    }

    useEffect(() => {
        GetMenusApi()
    }, [])

    const handleOnClick = index => {
        setActiveIndex(index); // remove the curly braces
        setSubActiveIndex(index)
      };
    
    return (
        <>

            <div className="utf_main_nav_area clearfix utf_sticky">
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg col">
                            <div className="utf_site_nav_inner float-left">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div id="navbarSupportedContent" className="collapse navbar-collapse navbar-responsive-collapse">
                                    <ul className="nav navbar-nav">
                                        
                                        <li className="nav-item" onClick={() => handleOnClick(-1)} 
                                                    className={activeIndex === -1 ? "active" : ""} ><Link to="/">Home</Link></li>

                                        {
                                            
                                            menus.map((currElem, id) => {
                                                var subtype =null 

                                                if (currElem.subcategories.length !==0) {
                                                    return <li key={currElem.id} className="nav-item dropdown" onClick={() => handleOnClick(currElem.id)}
                                                    className={activeIndex === currElem.id ? "active" : ""} >
                                                        <Link to={`/category/${currElem.id}/${subtype}`}  className="nav-link" >{currElem.name}<i className="fa fa-angle-down" ></i></Link>
                                                        <ul className="utf_dropdown_menu" role="menu">
                                                            {                         
                                                                currElem.subcategories.map((sub) => {
                                                                    return(
                                                                        <li key={sub.id} className="nav-link" >
                                                                        <Link to={`/category/${currElem.id}/${sub.name}`} onClick={() => handleOnClick(sub.name)}
                                                                        className={subActiveIndex === sub.id ? "active" : ""} ><i className="fa fa-angle-double-right"></i>{sub.name}</Link>
                                                                    </li>
                                                                    )
                                                                 
                                                                })
                                                            }


                                                        </ul>
                                                    </li>
                                                    
                                                }
                                             
                                                 return <li className="nav-item" onClick={() => handleOnClick(currElem.id)}
                                                 className={activeIndex === currElem.id ? "active" : ""} ><Link to={`/category/${currElem.id}/${subtype}`} >{currElem.name}</Link></li>
                                            
                                            })
                                        }


                                       
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="utf_nav_search">
                            <span id="search"><i className="fa fa-search"></i></span>
                        </div>
                        <div className="utf_search_block" style={{"display": "none"}}>
                            <input type="text" className="form-control" placeholder="Enter your keywords..." />
                            <span className="utf_search_close">&times;</span>
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    )
}

export default MainNav
