import NewsLogo from '../../images/logo.png'
import AdBanner from '../../images/banner-ads/ad-top-header.png'
import { NavLink } from 'react-router-dom'
const HeaderBar = () => {
    return (
        <>
            {/*  Header start  */}
            <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="logo">
                                <NavLink to="/"> <img src={NewsLogo} alt="" /> </NavLink>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 header-right">
                            <div className="ad-banner float-right">
                                <a href="/"><img src={AdBanner} className="img-fluid" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*  Header End  */}
        </>
    )
}

export default HeaderBar
