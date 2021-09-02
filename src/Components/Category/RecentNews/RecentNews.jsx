import EntertainmentComp from "../Entertainment/EntertainmentComp"
import RecentNewsComp from "./RecentNewsComp"
import Adsidebar from '../../../images/banner-ads/ad-sidebar.png'

const RecentNews = () => {
    return (
        <>

            <div className="sidebar utf_sidebar_right">
                <div className="widget color-default">
                    <h3 className="utf_block_title"><span>Recent News</span></h3>
                    <div className="utf_list_post_block">
                        <ul className="utf_list_post">
                            <RecentNewsComp />
                            <RecentNewsComp />
                            <RecentNewsComp />
                            <RecentNewsComp />

                        </ul>
                    </div>
                </div>


                <div className="widget text-center"> <img className="banner img-fluid" src={Adsidebar} alt="" /> </div>

                {/* Entertainment Slider */}
                <div className="widget color-default">
                    <h3 className="utf_block_title"><span>Entertainment</span></h3>
                    <div id="utf_post_slide" className="owl-carousel owl-theme utf_post_slide">
                        <EntertainmentComp />
                        <EntertainmentComp />
                    </div>
                </div>


            </div>

        </>
    )
}

export default RecentNews
