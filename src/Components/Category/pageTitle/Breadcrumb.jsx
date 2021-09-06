import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({categoryname}) => {
    return (
        <div>
            {/* <!-- Page Title Start --> */}
            <div className="page-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li>{categoryname}</li>
                                {/* <li>{subcategoryname}</li> */}
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
