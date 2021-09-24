import React from 'react'
import { Col } from 'react-bootstrap'
import PostRelatedNews from './PostRelatedNews'
import dateFormat from 'dateformat'

const JobRelatedNews = ({ JobNews, JobCategory }) => {
    return (
     
          
                <div className="sidebar utf_sidebar_right">
                    <div className="widget color-default">
                        {

                            <h3 className="utf_block_title"><span>{JobCategory.name}</span></h3>


                        }

                        <div className="utf_list_post_block">
                            <ul className="utf_list_post review-post-list">
                                {
                                    JobNews.map((curElem, ind) => {
                                        const postdate = curElem.updated_at;
                                        const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                                        return (
                                            <PostRelatedNews key={curElem.id} postImg={`https://dn.wcprojects.in/${curElem.img_3}`} categoryTitle={curElem.name} postTitle={curElem.title} postDate={postmoddate} />
                                        )
                                    })

                                }

                            </ul>
                        </div>
                    </div>
                </div>
        
        
    )
}

export default JobRelatedNews
