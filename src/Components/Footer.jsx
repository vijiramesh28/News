import Copyrights from './Footer/Copyrights'
import PopularPost from './Footer/PopularPost'

const Footer = () => {
    return (
        <>
               {/*  Footer Start  */}
            <footer id="footer" className="footer">
                <div className="utf_footer_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 col-xs-12 footer-widget contact-widget">
                                <h3 className="widget-title">About Us</h3>
                                <ul>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since has five...</li>
                                    <li><i className="fa fa-home"></i> 15 Cliff St, New York NY 10038, USA</li>
                                    <li><i className="fa fa-phone"></i> <a href="/">+91 234 567 8765</a></li>
                                    <li><i className="fa fa-envelope-o"></i> <a href="/">mail@example.com</a></li>
                                </ul>
                                <ul className="unstyled utf_footer_social">
                                    <li>
                                        <a title="Facebook" href="/"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a title="Twitter" href="/"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a title="Google+" href="/"><i className="fa fa-google-plus"></i></a>
                                    </li>
                                    <li>
                                        <a title="Linkdin" href="/"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a title="Skype" href="/"><i className="fa fa-skype"></i></a>
                                    </li>
                                    <li>
                                        <a title="Skype" href="/"><i className="fa fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 footer-widget widget-categories">
                                <h3 className="widget-title">Popular Categories</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-angle-double-right"></i><a href="/"><span className="catTitle">Make-Up</span><span className="catCounter"> (05)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-double-right"></i><a href="/"><span className="catTitle">Health</span><span className="catCounter"> (06)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-double-right"></i><a href="/"><span className="catTitle">Audio</span><span className="catCounter"> (15)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-double-right"></i><a href="/"><span className="catTitle">Travel</span><span className="catCounter"> (25)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-double-right"></i><a href="/"><span className="catTitle">Health</span><span className="catCounter"> (05)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-double-right"></i><a href="/"><span className="catTitle">Gadgets</span><span className="catCounter"> (12)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-double-right"></i><a href="/"><span className="catTitle">Food</span><span className="catCounter"> (14)</span></a>
                                    </li>
                                </ul>
                            </div>

                         <PopularPost/>
                        </div>
                    </div>
                </div>
            </footer>
            {/*  Footer End  */}

           <Copyrights/>
        </>
    )
}

export default Footer
