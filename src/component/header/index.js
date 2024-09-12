import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";

const Header = ({ lang }) => {
    const { t } = useTranslation();
    const location = useLocation();

    const switchLanguage = (newLang) => {
        const pathSegments = location.pathname.split('/');
        pathSegments[1] = newLang;
        return pathSegments.join('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
            <a className="navbar-brand text-white" href="#">
            <i class="fa-brands fa-leanpub pr-2"></i>{t('nav.WardiereInc')}
            </a>
            <button
                className="navbar-toggler bg-light"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse pl-5" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item mx-3 pl-5">
                        <Link className="nav-link text-white font-weight-bold" to={`/${lang}/`}>
                            {t('nav.solution')}
                        </Link>
                    </li>
                    <li className="nav-item mx-3 pl-5">
                        <Link className="nav-link text-white font-weight-bold" to={`/${lang}/pricing`}>
                            {t('nav.pricing')}
                        </Link>
                    </li>
                    <li className="nav-item mx-3 pl-5">
                        <Link className="nav-link text-white font-weight-bold" to={`/${lang}/about`}>
                            {t('nav.about')}
                        </Link>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-0 pl-5">
                    <button className="btn signup-btn " type="submit">
                    {t('nav.sign')} <span className="btn-icon">
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </span>
                    </button>
                </form>

                {/* Language Switcher Dropdown */}
                <ul className="navbar-nav pl-5">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle text-white"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fa fa-globe"></i>
                        </a>
                        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item text-light bg-dark" to={switchLanguage('en')}>EN</Link>
                            <Link className="dropdown-item text-light bg-dark" to={switchLanguage('hi')}>HI</Link>
                            <Link className="dropdown-item text-light bg-dark" to={switchLanguage('mi')}>MI</Link>
                            <Link className="dropdown-item text-light bg-dark" to={switchLanguage('fr')}>FR</Link>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Header;
