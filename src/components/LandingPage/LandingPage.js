import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap"
import React from 'react';
import ReactDOM from 'react-dom';

import QuotesData from '../../staticData/QuotesData';

function LandingPage() {

    // Modal open state
    const [modal, setModal] = React.useState(false);

    const [quote, setQuote] = React.useState(QuotesData[0]);

    const [currentBtn, setCurrentBtn] = React.useState(0)

    const quotesBtns = QuotesData.map(item => (
        <button className={`landing__quote__btn ${currentBtn === item.id ? 'landing__quote__btn--click' : ''}`}
                id={item.id}
                onClick={() => changeQuote(item.id)}
        >
            {item.typeBtn}
        </button>
    ))

    const changeQuote = (id) => {
        setQuote(QuotesData[id])
        setCurrentBtn(id)
    }
    // Toggle for Modal
    const toggleModal = () => setModal(!modal);

    const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div class="modal">
                <div className="modal__container">
                    <iframe width="1350" height="488" src="https://www.youtube.com/embed/-TL-8Baj2eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <span onClick={toggleModal} className="modal__icon"><i class="fas fa-times"></i></span>
                </div>
            </div>
        </React.Fragment >, document.body
    ) : null;

    return (
        <div className="landing">
            <h1 className="landing__title1">Organize it all</h1>
            <h1 className="landing__title2">with Todoist</h1>
            
            <button className="landing__start__btn">Get Started</button>

            <img className="landing__image1" alt="" src="https://todoist.com/_next/static/images/header@2x_b52d8f7c7bf19d6c702569d1072ed6a2.webp" />
            <img alt="" src="https://todoist.com/_next/static/images/screenshot@2x_44c1cf78bc12457546d889573e04345a.webp" />

            <div className="landing__intro">
                <h1 className="landing__intro__title">Free up your mental space</h1>
                <p className="landing__intro__description">Regain clarity and calmness by getting all those tasks out of your head and onto</p>
                <p className="landing__intro__description">your to-do list (no matter where you are or what device you use).</p>

                <div className="landing__intro__links">
                    <a className="landing__intro__link" href="google.com"><span><i class="fa-solid fa-arrow-right"></i></span>Browse Todoist’s features</a>
                    <a className="landing__intro__link" href="google.com"><span><i class="fa-solid fa-circle-play"></i></span>See Todoist in action</a>
                </div>
            </div>

            <div className="landing__rate">
                <img className="landing__rate__background" alt="" src="https://todoist.com/_next/static/images/reviews@2x_4876e995d30e1f2f847bb8fde9e0008c.webp" />
                <div className="landing__rate__wrapper">
                    <div className="landing__rate__item">
                        <p>Google Play</p>
                        <p>★★★★★</p>
                        <p>Editor’s Choice<br></br>4.7 stars, 187K+ reviews</p>
                    </div>
                    <div className="landing__rate__item">
                        <p>App Store</p>
                        <p>★★★★★</p>
                        <p>Featured app<br></br>4.8 stars, 30K+ reviews</p>
                    </div>
                    <div className="landing__rate__item">
                        <p>The Verge</p>
                        <p>9/10</p>
                        <p>“The best to-do list app<br></br>right now”</p>
                    </div>
                </div>
            </div>

            <div className="landing__intro1">
                <div className="landing__intro1__title">
                    <p className="landing__intro1__title1">Todoist has helped<br></br> millions of people complete</p>
                    <h1 className="landing__intro1__title2">over 1.5 billion tasks<br></br>in 150+ million projects.</h1>
                </div>
                <div className="landing__intro1__video">
                    <img className="intro1__video__background" alt="" src="https://todoist.com/_next/static/images/video-bg@2x_953b123494df03a8bd55fc7caf8b0faf.webp" />
                    <img onClick={toggleModal} className="intro1__video__play" alt="" src="https://todoist.com/_next/static/images/video@2x_971845317b8ca02c1eac96939b47d9b9.webp" />
                    <a className="landing__intro1__link" href="google.com"><span><i class="landing__intro1__icon fa-solid fa-arrow-right"></i></span>Learn more about the Todoist community</a>

                    <Modal
                        isShowing={modal}
                        hide={toggleModal}
                    />

                </div>
            </div>

            <div className="landing__quotes">
                <div className="landing__quote__container">
                    <div className="landing__quote__card">
                        <strong>“</strong>
                        <p className="landing__quote__text">{quote.quote}</p>
                        <p className="landing__quote__author">{quote.author}</p>
                        <div className="landing__card__footer">
                            <p className="landing__author__career">{quote.authorCareer}</p>
                            <a className="landing__card__more" href="google.ocm"><span><i class="fas fa-arrow-right"></i></span>Read more</a>
                        </div>
                    </div>

                    <div className="landing__quote__image">
                        <img alt="" src={quote.imageAuthorUrl} />
                    </div>
                </div>

                <div className="landing__quote__btns">
                    {quotesBtns}
                </div>
            </div>

            <div className="landing__intro2">
                <div className="landing__intro2-text">
                    <h1 className="landing__intro2__header">A task manager you <br></br> can trust for life</h1>
                    <p className="landing__intro2__body">In the 15 years and 31 days that we’ve been building Todoist, we’ve never considered selling out or becoming acquired.<br></br></p>
                    <p className="landing__intro2__body">Our team is committed to staying independent and earning your trust for as long as you need our apps.</p>
                    <a className="landing__intro2__link" href="google.com"><span><i class="fas fa-arrow-right"></i></span>Learn about our long-term mission</a>
                </div>

                <img alt="" className="landing__intro2__image" src="https://todoist.com/_next/static/images/mission@2x_14c0f4a5fedd3c66ca5d91982d823c97.webp" />
            </div>

            <div className="landing__intro3">
                <img alt="" className="landing__intro3__image" src="https://todoist.com/_next/static/images/peace@2x_158f4453627629ae1dd3ec115a559630.webp" />
                <div className="landing__intro3__wrapper">
                    <h1 className="landing__intro3__header">Achieve peace of mind<br></br>with Todoist</h1>
                    <button className="landing__start__btn">Get started</button>
                </div>
            </div>

        </div>
    )
}

export default LandingPage