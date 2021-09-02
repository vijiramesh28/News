import {NavLink} from 'react-router-dom'
import Health from '../../images/news/lifestyle/health5.jpg'
import Gadget from '../../images/news/tech/gadget2.jpg'
import LifeStyle from '../../images/news/lifestyle/travel5.jpg'
const FeaturedPost = () => {
    return (
        <>
              {/*  Featured Post Area Start  */}
            <section className="utf_featured_post_area pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 pad-r">
                            <div id="utf_featured_slider" className="owl-carousel owl-theme utf_featured_slider content-bottom">
                                <div className="item" style={{"backgroundImage": `url(${Health})`}}>
                                    <div className="utf_featured_post">
                                        <div className="utf_post_content">
                                            <NavLink className="utf_post_cat" to="/category">Health</NavLink>
                                            <h2 className="utf_post_title clamped title-extra-large"><NavLink to="/post">Zhang social media pop also known when smart innocent...</NavLink></h2>
                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i> 20 Jan, 2021</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="item" style={{"backgroundImage": `url(${Gadget})`}}>
                                    <div className="utf_featured_post">
                                        <div className="utf_post_content">
                                            <a className="utf_post_cat" href="/">Gadget</a>
                                            <h2 className="utf_post_title clamped title-extra-large"><a href="post.html">Samsung Gear S3 review: A whimper, when smartwatches need a bang</a></h2>
                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i> 20 Jan, 2021</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="item" style={{"backgroundImage": `url(${LifeStyle})`}}>
                                    <div className="utf_featured_post">
                                        <div className="utf_post_content">
                                            <a className="utf_post_cat" href="/">Travel</a>
                                            <h2 className="utf_post_title clamped title-extra-large"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i> 20 Jan, 2021</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 pad-l">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="utf_post_overaly_style text-center first clearfix">
                                        <div className="utf_post_thumb">
                                            <a href="/"><img className="img-fluid" src="images/news/tech/gadget2.jpg" alt="" /></a>
                                        </div>
                                        <div className="utf_post_content">
                                            <a className="utf_post_cat" href="/">Lifestyle</a>
                                            <h2 className="utf_post_title clamped title-medium"><a href="post.html">Samsung Gear S3 review: A whimper, when…</a></h2>
                                            <div className="utf_post_meta">
                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="utf_post_overaly_style text-center clearfix">
                                        <div className="utf_post_thumb">
                                            <a href="/"><img className="img-fluid" src="images/news/tech/game1.jpg" alt="" /></a>
                                        </div>
                                        <div className="utf_post_content">
                                            <a className="utf_post_cat" href="/">Games</a>
                                            <h2 className="utf_post_title clamped title-medium"><a href="post.html">Historical heroes and robot dinosaurs: New games...</a></h2>
                                            <div className="utf_post_meta">
                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Featured Post Area End  */}
        </>
    )
}

export default FeaturedPost
