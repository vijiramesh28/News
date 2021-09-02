import TabLists from "./TabLists"
import TabMainNews from "./TabMainNews"
import Tabs from "./Tabs"


const NewsTabs = () => {
    return (
        <>
             {/* <!-- 1rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-bottom-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="utf_featured_tab color-default">
                                <h3 className="utf_block_title"><span>Crime News</span></h3>
                                <ul className="nav nav-tabs">
                                    <Tabs />
                                  
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active animated fadeInRight" id="tab_a">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                               <TabMainNews />
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="utf_list_post_block">
                                                    <ul className="utf_list_post">
                                                  <TabLists />

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane animated fadeInLeft" id="tab_b">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="utf_post_block_style clearfix">
                                                    <div className="utf_post_thumb">
                                                        <a href="/"> <img className="img-fluid" src="images/news/tech/robot1.jpg" alt="" /> </a>
                                                    </div>
                                                    <a className="utf_post_cat" href="/">Traveling</a>
                                                    <div className="utf_post_content">
                                                        <h2 className="utf_post_title"><a href="/">Ratcliffe to be Director nation intelligence Trump ignored...</a></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_author"><a href="/">John Wick</a></span> <span className="utf_post_date">25 Jan, 2021</span>
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since has five...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="utf_list_post_block">
                                                    <ul className="utf_list_post">
                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/robot2.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="/">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/robot3.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="/">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/robot4.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="/">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/robot5.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-30"></div>
                            <div className="utf_featured_tab color-default">
                                <h3 className="utf_block_title"><span>Important News</span></h3>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link animated fadeIn active" href="#tab_a" data-toggle="tab">
                                            <span className="tab-head"> <span className="tab-text-title">National News</span> </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link animated fadeIn" href="#tab_b" data-toggle="tab">
                                            <span className="tab-head"> <span className="tab-text-title">State News</span> </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active animated fadeInRight" id="tab_a">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="utf_post_block_style clearfix">
                                                    <div className="utf_post_thumb">
                                                        <a href="/"> <img className="img-fluid" src="images/news/tech/gadget1.jpg" alt="" /> </a>
                                                    </div>
                                                    <a className="utf_post_cat" href="/">Lifestyle</a>
                                                    <div className="utf_post_content">
                                                        <h2 className="utf_post_title"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since has five...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="utf_list_post_block">
                                                    <ul className="utf_list_post">
                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/gadget2.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/gadget3.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/gadget4.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/gadget5.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane animated fadeInLeft" id="tab_b">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="utf_post_block_style clearfix">
                                                    <div className="utf_post_thumb">
                                                        <a href="/"> <img className="img-fluid" src="images/news/tech/robot1.jpg" alt="" /> </a>
                                                    </div>
                                                    <a className="utf_post_cat" href="/">Traveling</a>
                                                    <div className="utf_post_content">
                                                        <h2 className="utf_post_title"><a href="post.html">Ratcliffe to be Director nation intelligence Trump ignored...</a></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_author"><a href="/">John Wick</a></span> <span className="utf_post_date">25 Jan, 2021</span>
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since has five...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="utf_list_post_block">
                                                    <ul className="utf_list_post">
                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/robot2.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/robot3.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/robot4.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/robot5.jpg" alt="" /> </a>
                                                                </div>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar utf_sidebar_right">
                                <div className="widget color-default">
                                    <h3 className="utf_block_title"><span>Entertainment</span></h3>
                                    <div id="utf_post_slide" className="owl-carousel owl-theme utf_post_slide">
                                        <div className="item">
                                            <div className="utf_post_overaly_style text-center clearfix">
                                                <div className="utf_post_thumb">
                                                    <a href="/"> <img className="img-fluid" src="images/news/tech/gadget1.jpg" alt="" /> </a>
                                                </div>
                                                <div className="utf_post_content">
                                                    <a className="utf_post_cat" href="/">Lifestyle</a>
                                                    <h2 className="utf_post_title"><a href="post.html">The best MacBook Pro alternatives in 2021 for Appl…</a></h2>
                                                    <div className="utf_post_meta">
                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="utf_post_overaly_style text-center clearfix">
                                                <div className="utf_post_thumb">
                                                    <a href="/"> <img className="img-fluid" src="images/news/lifestyle/health5.jpg" alt="" /> </a>
                                                </div>
                                                <div className="utf_post_content">
                                                    <a className="utf_post_cat" href="/">Health</a>
                                                    <h2 className="utf_post_title"><a href="post.html">Netcix cuts out the chill with an integrated perso…</a></h2>
                                                    <div className="utf_post_meta">
                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget color-default">
                                    <h3 className="utf_block_title"><span>Health News</span></h3>
                                    <div className="utf_post_overaly_style clearfix">
                                        <div className="utf_post_thumb">
                                            <a href="/"> <img className="img-fluid" src="images/news/lifestyle/health4.jpg" alt="" /> </a>
                                        </div>
                                        <div className="utf_post_content">
                                            <a className="utf_post_cat" href="/">Health</a>
                                            <h2 className="utf_post_title"><a href="post.html">Smart packs parking sensor tech and beeps when col…</a></h2>
                                            <div className="utf_post_meta">
                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="utf_list_post_block">
                                        <ul className="utf_list_post">
                                            <li className="clearfix">
                                                <div className="utf_post_block_style post-float clearfix">
                                                    <div className="utf_post_thumb">
                                                        <a href="/"> <img className="img-fluid" src="images/news/tech/gadget3.jpg" alt="" /> </a> <a className="utf_post_cat" href="/">Lifestyle</a>
                                                    </div>
                                                    <div className="utf_post_content">
                                                        <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="clearfix">
                                                <div className="utf_post_block_style post-float clearfix">
                                                    <div className="utf_post_thumb">
                                                        <a href="/"> <img className="img-fluid" src="images/news/lifestyle/travel5.jpg" alt="" /> </a> <a className="utf_post_cat" href="/">Travel</a>
                                                    </div>
                                                    <div className="utf_post_content">
                                                        <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="clearfix">
                                                <div className="utf_post_block_style post-float clearfix">
                                                    <div className="utf_post_thumb">
                                                        <a href="/"> <img className="img-fluid" src="images/news/tech/robot5.jpg" alt="" /> </a> <a className="utf_post_cat" href="/">Traveling</a>
                                                    </div>
                                                    <div className="utf_post_content">
                                                        <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
