

const TopbarSocial = () => {
    return (
        <>
            <div className="col-md-4 top-social text-lg-right text-md-center">
                <ul className="unstyled">
                    <li>
                        <a title="Skype" href="/">
                            <span className="social-icon"><i className="fa fa-whatsapp"></i></span>
                        </a>
                        <a title="Facebook" href="/">
                            <span className="social-icon"><i className="fa fa-facebook"></i></span>
                        </a>
                        <a title="Twitter" href="/">
                            <span className="social-icon"><i className="fa fa-twitter"></i></span>
                        </a>
                        <a title="Linkdin" href="/">
                            <span className="social-icon"><i className="fa fa-linkedin"></i></span>
                        </a>

                        <a title="Rss" href="/">
                            <span className="social-icon"><i className="fa fa-rss"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TopbarSocial
