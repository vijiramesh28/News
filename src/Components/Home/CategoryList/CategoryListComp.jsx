import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import dateFormat from 'dateformat'
import { Col } from 'react-bootstrap'

const CategoryListComp = ({LatestNews,Latestcat}) => {
    const [loading, setLoading] = useState(false)
    
     const LoadData =  () => {
        setLoading(true)
    }

     useEffect(() => {
        LoadData()
    }, [])

    return (
        <>
            {/* <!-- 2rd Block Wrapper Start --> */}
            
                        {loading?(

                LatestNews.slice(0,1).map((currElem,ind)=> {
                                    const postdate = currElem.updated_at
                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                    return (
                                        <Col lg={4} key={ind}>
                                            <div className="block color-default">

                                                <h3 className="utf_block_title"><span>{Latestcat.name}</span></h3>


                                                <div key={currElem.id} className="utf_post_overaly_style clearfix">
                                                    <div className="utf_post_thumb">
                                                        <Link to={`post/${currElem.id}`}> <img className="img-fluid" src={`https://dn.wcprojects.in/${currElem.img_3}`} alt="" /> </Link>
                                                    </div>
                                                    <div className="utf_post_content">
                                                        <h2 className="utf_post_title"><Link to={`/post/${currElem.id}`}>{currElem.title}</Link></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="utf_list_post_block">
                                                    <ul className="utf_list_post">

                                                        {
                                                            LatestNews.slice(0,4).map((post, ind) => {
                                                                const postdate = post.updated_at;
                                                                const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");


                                                                return (
                                                                    <li key={post.id} className="clearfix">
                                                                        <div className="utf_post_block_style post-float clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <Link to={`post/${post.id}`}> <img className="img-fluid" src={`https://dn.wcprojects.in/${post.img_4}`} alt="" /> </Link>
                                                                            </div>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title clamped title-small"><Link to={`post/${post.id}`}>{post.title}</Link></h2>
                                                                                <div className="utf_post_meta">
                                                                                    <span className="utf_post_date"><i className="fa fa-clock-o"></i> {postmoddate}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )






                                                            })
                                                        }
                                                    </ul>
                                                </div>

                                            </div>
                                        </Col>
                                    )

    
                            

                                })
                                ):(<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                                <rect width="400" height="300" fill="#fcfcfc"></rect>
                                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
                            </svg></div>)
                            
                        }



                   
            {/* <!-- 2rd Block Wrapper End --> */}
        </>
    )
}

export default CategoryListComp
