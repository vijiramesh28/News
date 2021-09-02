import OtherNewsComp from './OtherNewsComp'
import PostRelatedNews from './PostRelatedNews'

const OtherNews = () => {
    return (
        <>
            {/* <!-- 3rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-bottom-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="utf_more_news block color-default">
                                <h3 className="utf_block_title"><span>Other News</span></h3>
                                <div id="utf_more_news_slide" className="owl-carousel owl-theme utf_more_news_slide">
                                    <div className="item">

                                    <OtherNewsComp />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <div className="sidebar utf_sidebar_right">
                                <div className="widget color-default">
                                    <h3 className="utf_block_title"><span>Job Related News</span></h3>
                                    <div className="utf_list_post_block">
                                        <ul className="utf_list_post review-post-list">

                                         <PostRelatedNews />


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- 3rd Block Wrapper End --> */}
        </>
    )
}

export default OtherNews
