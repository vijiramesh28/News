import React from 'react'

const Breadcrumb = () => {
    return (
        <div>
            {/* <!-- Page Title Start --> */}
            <div className="page-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li>Crime</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Page title end --> */}
        </div>
    )
}

export default Breadcrumb
