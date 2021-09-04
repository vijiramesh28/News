import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import dateFormat from 'dateformat'
import instance from '../../../Api/axios'
const CategoryList = () => {
 
    const [postdata, setPostData] = useState([])
    
    const getPostData = async() =>{
       const res =  await instance.get('https://wcprojects.in/api/english')
       console.log(res.data.language);
       setPostData(res.data.language.categories)
    }
 
    useEffect(() => {
        getPostData()
        
    }, [])
  
    
   
    return (
        <>
              {/* <!-- 2rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-top-0 p-bottom-0">
                <div className="container">
                    <div className="row">

                        {
                           postdata.slice(0,3).map((currElem, index)=>{
                               
                                  return(
                                        <div className="col-lg-4">
                                    <div className="block color-default">
                                       
                                        <h3 className="utf_block_title"><span>{currElem.name}</span></h3>
                                            {
                                                currElem.posts.slice(0,1).map((onepost,ind)=>{
                                                    const postdate =  onepost.updated_at
                                                    const postmoddate = dateFormat(postdate,"dd mmmm , yyyy")
                                                    return(
                                                        <div className="utf_post_overaly_style clearfix">
                                                        <div className="utf_post_thumb">
                                                            <a href="/"> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${onepost.img_1}`} alt="" /> </a>
                                                        </div>
                                                        <div className="utf_post_content">
                                                            <h2 className="utf_post_title"><NavLink to="/post">{onepost.title}</NavLink></h2>
                                                            <div className="utf_post_meta">
                                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                })
                                            }
                                     
                    
                                        <div className="utf_list_post_block">
                                            <ul className="utf_list_post">
                    
                                                {
                                                    currElem.posts.map((post, ind) => {
                                                        const postdate =  post.updated_at;
                                                        const postmoddate = dateFormat(postdate,"dd mmmm , yyyy");
                                                        
                                                   if((currElem.posts.length<=4) && (currElem.posts.length!=0 ) )
                                                   {
                                                    return (
                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">{post.title}</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> {postmoddate}</span>
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                        </li>
                                                    )
                                                   }
                                                  
                                                   
                                                
                                                        
                    
                                                    })
                                                }
                                            </ul>
                                        </div>
                    
                                    </div>
                                </div>
                                    ) 
                                
                               

                            })
                        }
                        
                        
             
                    </div>
                </div>
            </section>
            {/* <!-- 2rd Block Wrapper End --> */}
        </>
    )
}

export default CategoryList
