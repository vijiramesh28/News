import axios from 'axios'
import React,{useState, useEffect} from 'react'
import dateFormat from 'dateformat'
import OwlCarousel  from 'react-owl-carousel'
import { Link } from 'react-router-dom'


const LatNewsSlider = () => {
    const [LatestNews, setLatestNews] = useState([])

    const GetPostData = async () => {
        const res = await axios.get('https://wcprojects.in/api/english')
        console.log(res.data.language.categories);
        setLatestNews(res.data.language.categories)
    }
    useEffect(() => {
        GetPostData()
            

    }, [])
    return (
        <>
        {
            LatestNews.length && (
            <OwlCarousel className="owl-carousel owl-theme utf_latest_news_slide" items={4} responsiveRefreshRate={200} lazyLoad loop={true} arrow={true} dots={false} margin={10} nav  id="utf_latest_news_slide"  >
            {
                
                LatestNews.map((currElem,ind)=>currElem.posts.map((post,ind)=>{
                    
                   const postdate =  post.updated_at
                   const postmoddate = dateFormat(postdate,"dd mmmm , yyyy")
                //    const postmoddate = new Date(postdate).toLocaleDateString()
                        return (
                            <>
                        <div key={post.id} className="item" >
                            <ul className="utf_list_post">
                                <li className="clearfix">
                                    <div className="utf_post_block_style clearfix">
                                        <div className="utf_post_thumb">
                                            <Link to={`post/${post.id}`}><img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} width="50px" alt="" /></Link>
                                        </div>
                                        <Link className="utf_post_cat" to={`post/${post.id}`}>{currElem.name}</Link>
                                        <div className="utf_post_content">
                                            <h2 className="utf_post_title clamped title-medium"><a href="post.html">{post.title}</a></h2>
                                            <div className="utf_post_meta">
                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate} </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                       </>
                        )
                    })
                     
               
                )
            }
                            
    
           </OwlCarousel>
           )
        }
        
       </>
    )
}

export default LatNewsSlider
