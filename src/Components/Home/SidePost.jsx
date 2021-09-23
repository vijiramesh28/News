import React, { useState, useEffect } from 'react'
import BaseUrl from '../../Api/RestApi'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'

const SidePost = () => {
    const [sidepost, setSidepost] = useState([])
    const [loading, setLoading] = useState(false)

    const GetPostData = async (l) => {
        if (l != null) {
            const re = await BaseUrl.get(`${l}/slider`)
            setSidepost(re.data.twoPosts)
            setLoading(true)
        }
        else {
            const re = await BaseUrl.get('1/slider')
            setSidepost(re.data.twoPosts)
            setLoading(true)
        }
    }

    useEffect(() => {
        const langData = localStorage.getItem("lang")
        GetPostData(langData)
    }, [])

    return (
        <div className="col-lg-4 col-md-12 pad-l">
            <div className="row">
            
                {loading?(
                    sidepost.map((curElem, ind) => {

                        const postdate = curElem.updated_at
                        const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")

                        return (
                            <div className="col-md-12">
                                <div className="utf_post_overaly_style text-center first clearfix">
                                    <div className="utf_post_thumb">
                                        <Link to={`/post/${curElem.id}`}><img className="img-fluid" src={`https://dn.wcprojects.in/${curElem.img_1}`} alt="" /></Link>
                                    </div>
                                    <div className="utf_post_content">
                                        <Link to={`/post/${curElem.id}`} className="utf_post_cat" >{curElem.category.name}</Link>
                                        <h2 className="utf_post_title clamped title-medium"><a href="post.html">{curElem.title}</a></h2>
                                        <div className="utf_post_meta">
                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })

                    ):(<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                    <rect width="400" height="300" fill="#fcfcfc"></rect>
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
                </svg></div>)
                }

            </div>
        </div>
    )
}

export default SidePost
