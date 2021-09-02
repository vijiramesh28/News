import { NavLink } from "react-router-dom"

const PageNotFoundError = () => {
    return (
        <>

            <section className="utf_block_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="error-page text-center col">
                            <div className="error-code">
                                <h2><strong>404</strong></h2>
                            </div>
                            <div className="error-message">
                                <h3>Error 404 Page Not Found</h3>
                            </div>
                            <div className="error-body">We're sorry, the page you have looked for does not exist!<br />home page or try to use a search?<br />
                                <NavLink to="/" activeClassName="btn btn-primary">Back to Home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PageNotFoundError
