import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ENtertainmentSlider from './ENtertainmentSlider'
import HealthNewsMain from './HealthNewsMain'
// import Tabs from './TabLists'
// import TabLists from './TabLists'
// import TabMainNews from './TabMainNews'

const NewsTabs = () => {
    // const [CrimeNews, setCrimeNews] = useState([])
    // const [ImportantNews, setImportantNews] = useState([])
    const [HealthNews, setHealthNews] = useState([])
    const [HealthNewsCat, setHealthNewsCat] = useState([])
    const [loading, setLoading] = useState(false)


    const getPostData = async (l) => {
        if(l!=null)
        {
        // const res = await axios.get(`https://dn.wcprojects.in/api/${l}/crime/crime`)
        // const imp = await axios.get(`https://dn.wcprojects.in/api/${l}/imp/important-news`)
        const health = await axios.get(`https://dn.wcprojects.in/api/${l}/health/health`)
        
       
        // console.log(res.data.allposts);
        // setCrimeNews(res.data.allposts)
        // setImportantNews(res.data.allposts)
        setHealthNews(health.data.posts)
        setHealthNewsCat(health.data.category)
        setLoading(true)
        }
        else{
            // const res = await axios.get(`https://dn.wcprojects.in/api/1/crime/crime`)
            const imp = await axios.get(`https://dn.wcprojects.in/api/1/imp/important-news`)
            const health = await axios.get(`https://dn.wcprojects.in/api/1/health/health`)
        
        // console.log(res.data.language.allposts);
        // setCrimeNews(res.data.allposts)
        // setImportantNews(res.data.allposts)
        setHealthNews(health.data.posts)
        setHealthNewsCat(health.data.category)
        setLoading(true)
        }
        
    }
    useEffect(() => {
        const langData = localStorage.getItem("lang")
        getPostData(langData)
    }, [])



    return (
        <>
            {/* <!-- 1rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-bottom-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">

                            {/* {
                                loading ? (

                                    CrimeNews.map((curElem, ind) => {
                                        return (
                                            <div className="utf_featured_tab color-default">

                                                <h3 className="utf_block_title"><span>{curElem.name}</span></h3>

                                                <ul className="nav nav-tabs">
                                                    <Tabs submenuList={CrimeNews} />

                                                </ul>
                                                <div className="tab-content">
                                                    <div className="tab-pane active animated fadeInRight" id="tab_a">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <TabMainNews postData={CrimeNews} />
                                                            </div>

                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="utf_list_post_block">
                                                                    <ul className="utf_list_post">
                                                                        <TabLists postData={CrimeNews} />
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                                    <rect width="400" height="300" fill="#fcfcfc"></rect>
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
                                </svg></div>)
                            } */}

                            <div className="gap-30"></div>

                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar utf_sidebar_right">
                               <ENtertainmentSlider />

                                <HealthNewsMain healthNews={HealthNews} HealthNewsCat={HealthNewsCat} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- 1rd Block Wrapper End --> */}
        </>
    )
}

export default NewsTabs
