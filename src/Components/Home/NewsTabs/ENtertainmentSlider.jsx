import React, { useState, useEffect } from 'react'
import BaseUrl from '../../../Api/RestApi'
import OwlCarousel from 'react-owl-carousel'
import SingleSlider from "./SingleSlider"
import dateFormat from 'dateformat'

const ENtertainmentSlider = () => {
    const [EntertNews, setEntertNews] = useState([])
    const [EnterNewsCat, setEnterNewsCat] = useState([])
    const [loading, setLoading] = useState(false)

    const getPostData = async (l) => {
        if (l != null) {
            const entert = await BaseUrl.get(`${l}/entertainment/entertainment`)
            setEntertNews(entert.data.posts)
            setEnterNewsCat(entert.data.category)
            setLoading(true)
        }
        else {
            const entert = await BaseUrl.get('1/entertainment/entertainment')
            setEntertNews(entert.data.posts)
            setEnterNewsCat(entert.data.category)
            setLoading(true)
        }


    }
    useEffect(() => {
        const langData = localStorage.getItem("lang")
        getPostData(langData)
    }, [])

    return (
        <div className="widget color-default">

            {

                <h3 className="utf_block_title"><span>{EnterNewsCat.name}</span></h3>

            }

            {loading ? (
                EntertNews.length && (
                    <OwlCarousel items={1} responsiveRefreshRate={200} lazyLoad loop={true} autoplay={true} dots={false} nav className="owl-carousel owl-theme utf_post_slide" id="utf_post_slide" >
                        {
                            EntertNews.map((postElem, ind) => {
                                const PostDate = postElem.updated_at;
                                const Postmoddate = dateFormat(PostDate, "dd mmmm , yyyy");
                                return (
                                    <SingleSlider postImg={`https://dn.wcprojects.in/${postElem.img_4}`} Categorytitle={EnterNewsCat.name} postTile={postElem.title} postDate={Postmoddate} />
                                )
                            })
                        }


                    </OwlCarousel>
                )
            ) : (<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                <rect width="400" height="300" fill="#fcfcfc"></rect>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
            </svg></div>)
            }

        </div>
    )
}

export default ENtertainmentSlider
