import React from 'react'
import Tabs from './Tabs'
import TabLists from './TabLists'
import TabMainNews from './TabMainNews'

const LeftNewsTabComp = ({ CrimeNews, CrimeNewsCat, CrimeSubCat }) => {

    return (
        <div>
            {

                <div className="utf_featured_tab color-default">

                    <h3 className="utf_block_title"><span>{CrimeNewsCat.name}</span></h3>

                    <ul className="nav nav-tabs">
                        <Tabs submenuList={CrimeSubCat} />

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


            }
        </div>
    )
}

export default LeftNewsTabComp
