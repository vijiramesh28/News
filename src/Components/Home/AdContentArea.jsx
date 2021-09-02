import AdImage from '../../images/banner-ads/ad-content-two.png'

const AdContentArea = () => {
    return (
        <>
              {/*  Ad Content Area Start  */}
            <div className="utf_ad_content_area text-center utf_banner_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><img className="img-fluid" src={AdImage} alt="" /></div>
                    </div>
                </div>
            </div>
            {/*  Ad Content Area End  */}
        </>
    )
}

export default AdContentArea
