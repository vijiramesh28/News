
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import instance from "../../Api/axios"
const MainNav = () => {

    const [menus, setMenus] = useState([])

    const GetMenusApi = async () => {
        const res = await instance.get('/categories')
        console.log(res.data.language.categories);
        setMenus(res.data.language.categories)
    }

    useEffect(() => {
        GetMenusApi()
    }, [])

    
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
                                        <li className="nav-item active"><Link to="/">Home</Link></li>

                                        {
                                            menus.map((currElem, id) => {

                                                if (currElem.subcategories.length !==0) {
                                                    return <li key={currElem.subcategories.id} className="nav-item dropdown ">
                                                        <Link to={`/category/:${currElem.id}`} className="nav-link" >{currElem.name}<i className="fa fa-angle-down" ></i></Link>
                                                        <ul className="utf_dropdown_menu" role="menu">
                                                            {
                                                                currElem.subcategories.map((sub,ind) => {
                                                                    return(
                                                                        <li className="nav-link">
                                                                        <Link to="/subcategory"><i className="fa fa-angle-double-right"></i>{sub.name}</Link>
                                                                    </li>
                                                                    )
                                                                 
                                                                })
                                                            }


                                                        </ul>
                                                    </li>
                                                    
                                                }
                                                 return <li className="nav-item" ><Link to={`/category/:${currElem.id}`}  >{currElem.name}</Link></li>
                                            
                                            })
                                        }


                                        {/* <li className="nav-item dropdown utf_mega_dropdown">
                                            <NavLink to="/category" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">City <i className="fa fa-angle-down"></i></NavLink>
                                            <div className="utf_dropdown_menu utf_mega_menu_content clearfix">
                                                <div className="menu-tab">
                                                    <div className="row">
                                                        <ul className="nav nav-tabs flex-column col-2" data-toggle="tab-hover">
                                                            <li className="nav-item">
                                                                <a className="animated fadeIn active" href="tab-one" data-toggle="tab">
                                                                    <span className="tab-head">
                                                                        <span className="tab-text-title"><i className="fa fa-angle-double-right"></i> Pune</span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="animated fadeIn" href="tab-two" data-toggle="tab">
                                                                    <span className="tab-head">
                                                                        <span className="tab-text-title"><i className="fa fa-angle-double-right"></i> Mumbai</span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="animated fadeIn" href="#tab-three" data-toggle="tab">
                                                                    <span className="tab-head">
                                                                        <span className="tab-text-title"><i className="fa fa-angle-double-right"></i> Gujrat</span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content col-10">
                                                            <div className="tab-pane fade show active" id="tab-one">
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/health1.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Health</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">That wearable on your wrist could soon track your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/health2.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Health</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Can't shed those Gym? The problem might be in your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/health3.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Health</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Deleting fears from the brain means you might neve…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/health4.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Health</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Smart packs parking sensor tech and beeps when col…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 text-center mt-2 view-btn">
                                                                        <a href="/subcategory">View all</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="tab-pane animated fadeIn" id="tab-two">
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/travel1.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Travel</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">That wearable on your wrist could soon track your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/travel2.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Travel</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Can't shed those Gym? The problem might be in your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/travel3.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Travel</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Deleting fears from the brain means you might neve…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/travel4.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Travel</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Smart packs parking sensor tech and beeps when col…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 text-center mt-2 view-btn">
                                                                        <a href="/subcategory">View all</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane animated fadeIn" id="tab-three">
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/food1.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Food</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">That wearable on your wrist could soon track your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/food2.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Food</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Can't shed those Gym? The problem might be in your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/food3.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Food</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Deleting fears from the brain means you might neve…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/food4.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Food</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Smart packs parking sensor tech and beeps when col…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 text-center mt-2 view-btn">
                                                                        <a href="/subcategory">View all</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="utf_nav_search">
                            <span id="search"><i className="fa fa-search"></i></span>
                        </div>
                        <div className="utf_search_block" style={{ "display": "none" }}>
                            <input type="text" className="form-control" placeholder="Enter your keywords..." />
                            <span className="utf_search_close">&times;</span>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Main Nav Start  */}
            {/* <div className="utf_main_nav_area clearfix utf_sticky">
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg col">
                            <div className="utf_site_nav_inner float-left">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div id="navbarSupportedContent" className="collapse navbar-collapse navbar-responsive-collapse">
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item active"><NavLink to="/">Home</NavLink></li>
                                        

                                        <li className="nav-item"><NavLink to="/category">Latest News</NavLink></li>
                                        <li className="nav-item"><NavLink to="/category">Politics</NavLink></li>
                                        <li className="nav-item dropdown">
                                            <NavLink to="/category" className="nav-link">Crime <i className="fa fa-angle-down"></i></NavLink>
                                            <ul className="utf_dropdown_menu" role="menu">
                                                <li>
                                                    <NavLink to="/subcategory"><i className="fa fa-angle-double-right"></i>Anti Curroption</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/subcategory"><i className="fa fa-angle-double-right"></i> Police News</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink to="/category" className="nav-link">Important News <i className="fa fa-angle-down"></i></NavLink>
                                            <ul className="utf_dropdown_menu" role="menu">
                                                <li>
                                                    <NavLink to="/subcategory"><i className="fa fa-angle-double-right"></i>National News</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/subcategory"><i className="fa fa-angle-double-right"></i>State News</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink to="/category" className="nav-link">Health <i className="fa fa-angle-down"></i></NavLink>
                                            <ul className="utf_dropdown_menu" role="menu">
                                                <li>
                                                    <NavLink to="/subcategory"><i className="fa fa-angle-double-right"></i>Life Style</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item"><NavLink to="/category">Entertainment</NavLink></li>
                                        <li className="nav-item"><NavLink to="/category">Jobs</NavLink></li>

                                        <li className="nav-item dropdown">
                                            <NavLink to="/category" className="nav-link">Other <i className="fa fa-angle-down"></i></NavLink>
                                            <ul className="utf_dropdown_menu" role="menu">
                                                <li>
                                                    <NavLink to="/subcategory"><i className="fa fa-angle-double-right"></i>Education</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/subcategory"><i className="fa fa-angle-double-right"></i>Knowledge</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/subcategory"><i className="fa fa-angle-double-right"></i>Third Eye</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown utf_mega_dropdown">
                                            <NavLink to="/category" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">City <i className="fa fa-angle-down"></i></NavLink>
                                            <div className="utf_dropdown_menu utf_mega_menu_content clearfix">
                                                <div className="menu-tab">
                                                    <div className="row">
                                                        <ul className="nav nav-tabs flex-column col-2" data-toggle="tab-hover">
                                                            <li className="nav-item">
                                                                <a className="animated fadeIn active" href="tab-one" data-toggle="tab">
                                                                    <span className="tab-head">
                                                                        <span className="tab-text-title"><i className="fa fa-angle-double-right"></i> Pune</span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="animated fadeIn" href="tab-two" data-toggle="tab">
                                                                    <span className="tab-head">
                                                                        <span className="tab-text-title"><i className="fa fa-angle-double-right"></i> Mumbai</span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="animated fadeIn" href="#tab-three" data-toggle="tab">
                                                                    <span className="tab-head">
                                                                        <span className="tab-text-title"><i className="fa fa-angle-double-right"></i> Gujrat</span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content col-10">
                                                            <div className="tab-pane fade show active" id="tab-one">
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/health1.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Health</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">That wearable on your wrist could soon track your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/health2.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Health</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Can't shed those Gym? The problem might be in your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/health3.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Health</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Deleting fears from the brain means you might neve…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/health4.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Health</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Smart packs parking sensor tech and beeps when col…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 text-center mt-2 view-btn">
                                                                        <a href="/subcategory">View all</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="tab-pane animated fadeIn" id="tab-two">
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/travel1.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Travel</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">That wearable on your wrist could soon track your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/travel2.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Travel</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Can't shed those Gym? The problem might be in your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/travel3.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Travel</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Deleting fears from the brain means you might neve…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/travel4.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Travel</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Smart packs parking sensor tech and beeps when col…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 text-center mt-2 view-btn">
                                                                        <a href="/subcategory">View all</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane animated fadeIn" id="tab-three">
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/food1.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Food</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">That wearable on your wrist could soon track your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/food2.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Food</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Can't shed those Gym? The problem might be in your…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/food3.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Food</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Deleting fears from the brain means you might neve…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="/"><img className="img-fluid" src="images/news/lifestyle/food4.jpg" alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="/">Food</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><a href="post.html">Smart packs parking sensor tech and beeps when col…</a></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 text-center mt-2 view-btn">
                                                                        <a href="/subcategory">View all</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
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
             Main Nav End  */}
        </>
    )
}

export default MainNav
