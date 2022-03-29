import React, { Component } from 'react';
import footerLogo from '../../styles/image/logo_black.png';

function Footer() {

    const arrayLanguage = ['English', 'VietNamese', 'Thailand', 'Chinese']

    const footerLanguageItems = arrayLanguage.map(item => (
        <option value={item}>{item}</option>
    ))

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {/*  */}
                        <div className="footer__logo"><a href><img src={footerLogo} alt="" /></a></div>
                        <p>Join millions of people who organize work and life with Todoist.</p>
                        <div className="footer__icons">
                            <a href="/#"><i className="footer__icon fa fa-twitter" /></a>
                            <a href="/#"><i className="footer__icon fa fa-youtube-play" /></a>
                            <a href="/#"><i className="footer__icon fa fa-facebook-official br-50" /></a>
                            <a href="/#"><i className="footer__icon fa fa-instagram" /></a>
                        </div>
                    </div>
                    <div className="col-6 footer__support">
                        <div className="footer__category">
                            <p>FEATURES</p>
                            <ol>
                                <a href="/#"><li className="footer__item">How It Works</li></a>
                                <a href="/#"><li className="footer__item">For Teams</li></a>
                                <a href="/#"><li className="footer__item">Pricing</li></a>
                                <a href="/#"><li className="footer__item">Templates</li></a>
                            </ol>
                        </div>
                        <div className="footer__category">
                            <p>RESOURCES</p>
                            <ol>
                                <a href="/#"><li className="footer__item">Download Apps</li></a>
                                <a href="/#"><li className="footer__item">Help Center</li></a>
                                <a href="/#"><li className="footer__item">Productivity Methods</li></a>
                                <a href="/#"><li className="footer__item">Refer a Friend</li></a>
                                <a href="/#"><li className="footer__item">Integrations</li></a>
                                <a href="/#"><li className="footer__item">Channel Partners</li></a>
                                <a href="/#"><li className="footer__item">Developer API</li></a>
                            </ol>
                        </div>
                        <div className="footer__category">
                            <p>COMPANY</p>
                            <ol>
                                <a href="/#"><li className="footer__item">About Us</li></a>
                                <a href="/#"><li className="footer__item">We are hiring!</li></a>
                                <a href="/#"><li className="footer__item">Blog</li></a>
                                <a href="/#"><li className="footer__item">Press</li></a>
                                <a href="/#"><li className="footer__item">Twist</li></a>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__right">
                <div className="container">
                    <div className="footer__right__item">
                        <a href="/#">Security</a>|
                        <a href="/#">Privacy</a>|
                        <a href="/#">Terms</a>
                        <p>© Doist Inc.</p>
                    </div>
                    <div className="footer__language">
                        <form>
                            <i className="footer__language__icon fa fa-globe" />
                            <select name="languages" id="language">
                                {footerLanguageItems}
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer;