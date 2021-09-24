import React from 'react'

const LeftNewsTabs = () => {
    return (
        <div>
             {/* {
                                loading ? (

                                    CrimeNews.map((curElem, ind) => {
                                        return (
                                            <div className="utf_featured_tab color-default">

                                                <h3 className="utf_block_title"><span>{curElem.name}</span></h3>

                                                <ul className="nav nav-tabs">
                                                    <Tabs submenuList={CrimeNews} />

                                                </ul>
                                                <div className="tab-content">
                                                    <div className="tab-pane active animated fadeInRight" id="tab_a">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <TabMainNews postData={CrimeNews} />
                                                            </div>

                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="utf_list_post_block">
                                                                    <ul className="utf_list_post">
                                                                        <TabLists postData={CrimeNews} />
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                                    <rect width="400" height="300" fill="#fcfcfc"></rect>
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
                                </svg></div>)
                            } */}
        </div>
    )
}

export default LeftNewsTabs
