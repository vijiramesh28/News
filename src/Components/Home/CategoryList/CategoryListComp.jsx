import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'
import TravelImg from '../../../images/news/lifestyle/travel2.jpg'
import dateFormat from 'dateformat'

const CategoryListComp = (props) => {
    const [postdata, setPostData] = useState([])

    const GetPostData = async () => {
        const res = await Axios.get('https://wcprojects.in/api/english')
        console.log(res.data.language.categories);
        setPostData(res.data.language.categories)
    }
    useEffect(() => {
        GetPostData()

    }, [])
    return (

        <>
            <div className="col-lg-4">
                <div className="block color-default">
                    <h3 className="utf_block_title"><span>{props.CategoryName}</span></h3>
                    <div className="utf_post_overaly_style clearfix">
                        <div className="utf_post_thumb">
                            <a href="/"> <img className="img-fluid" src={TravelImg} alt="" /> </a>
                        </div>
                        <div className="utf_post_content">
                            <h2 className="utf_post_title"><NavLink to="/post">Zhang social media pop also known when smart innocent...</NavLink></h2>
                            <div className="utf_post_meta">
                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="utf_list_post_block">
                        <ul className="utf_list_post">
                            {
                                postdata.map((curElem,ind)=>curElem.posts.map((post,ind)=>{
                                    const postdate =  post.updated_at
                                    console.log(post);
                                    const postmoddate = dateFormat(postdate,"dd mmmm , yyyy")
                                    if (curElem.name===props.CategoryName) {
                                        return (
                                            <li className="clearfix">
                                                <div className="utf_post_block_style post-float clearfix">
                                                    <div className="utf_post_thumb">
                                                        <a href="/"> <img className="img-fluid" src={TravelImg} alt="" /> </a>
                                                    </div>
                                                    <div className="utf_post_content">
                                                        <h2 className="utf_post_title clamped title-small"><a href="post.html">{posts.title}</a></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                }))
                            }
                            {/* {
                                postdata.map((curElem, ind) =>curElem.posts.map((post,ind)=>{ 
                                    const postdate =  post.updated_at
                                    console.log(postdate);
                                    const postmoddate = dateFormat(postdate,"dd mmmm , yyyy")
                                    if (curElem.name===props.CategoryName) {
                                        return (
                                            <li className="clearfix">
                                                <div className="utf_post_block_style post-float clearfix">
                                                    <div className="utf_post_thumb">
                                                        <a href="/"> <img className="img-fluid" src={TravelImg} alt="" /> </a>
                                                    </div>
                                                    <div className="utf_post_content">
                                                        <h2 className="utf_post_title clamped title-small"><a href="post.html">{curElem.posts.title}</a></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                }
                            } */}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CategoryListComp
