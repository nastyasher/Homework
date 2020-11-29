import React, { Component } from 'react';
import './App.css'
class App extends Component {
    render() {
        const ProgramCard = ({image, title, text, end="Ashtanga - Hatha"}) =>
            <div className="program-card">
                <div className="program-image">
                    <img src={image}/>
                </div>
                <article className="article">
                    <h4 className="article-title">YOGA FOR {title}</h4>
                    <p className="article-text">{text}</p>
                    <span className="article-end">{end}</span>
                </article>
            </div>
        const Feature = ({image,children,text="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com."}) =>
            <div className="feature">
                <div className="feature-img">
                    <img src={image}/>
                </div>
                <span className="title-feature">{children}</span>
                <div className="text-feature">{text}</div>
            </div>
        const Features = () =>
            <div className="features">
                <Feature image="images/ico-01.png"> IMPROVED OVERALL <br/> HEALTH </Feature>
                <Feature image="images/ico-02.png"> INCREASED <br/>CONCENTRATION </Feature>
                <Feature image="images/ico-03.png"> YOUR <br/>MIND </Feature>
                <Feature image="images/ico-04.png"> BETTER </Feature>
                <Feature image="images/ico-05.png">WEIGHT <br/>LOSS</Feature>
                <Feature image="images/ico-06.png"> STRENGTHENS <br/>YOUR BONES </Feature>
                <Feature image="images/ico-07.png"> INCREASED <br/>FLEXIBILITY </Feature>
                <Feature image="images/ico-08.png"> LOWER BLOOD<br/> PRESSURE </Feature>
            </div>
        const Picture = ({image}) =>
            <div className="picture">
                <div className="overlay"><span className="icon-search"></span></div>
                <a className="picture-link" href="#"><img src={image}/></a>
            </div>
        const Form =({dollar="$", price, month="/ month", days, time, advicer}) =>
            <form method="post" className="subscription-form">
                <div className="title-subscription">
                    <div className="all-title-subscription">
                        <span className="dollar">{dollar}</span>
                        <span className="price">{price}</span>
                        <span className="month">{month}</span>
                    </div>
                </div>
                <div className="subscription-options">
                    <div className="input-subscription item-subscription">ENTRY DATE: {days}</div>
                    <div className="input-subscription item-subscription">ENTRY TIME: {time}</div>
                    <div className="item-subscription">NUTRITION ADVICER: {advicer}</div>
                </div>
                <div className="button buy-now"><input type="submit" value="Buy now"/></div>
            </form>
        const NavigationItem = ({item}) =>
            <li>
                <a href="#">{item}</a>
            </li>


        return <div className="page-wrapper">
            <header className="page-header">
                <div className="logo">
                    <a href="#">
                        <img src="images/logo.png" alt="logo"/>
                    </a>
                </div>
                <div className="nav-holder">
                    <nav className="nav-menu">
                        <ul>
                            <NavigationItem item="About us"/>
                            <NavigationItem item="Reservation"/>
                            <NavigationItem item="Gallery"/>
                            <NavigationItem item="Blog"/>
                            <NavigationItem item="Elements"/>
                            <NavigationItem item="Shop"/>
                        </ul>
                    </nav>
                    <button className="opener">
                    <span></span>
                    </button>
                </div>
            </header>
            <main className="main">
                <div className="container-form">
                    <div className="form">
                        <div className="form-title">Trial Class</div>
                        <form method="post" className="custom-select">
                            <input className="input-form" type="text" placeholder="Enter your name"/>
                                <input className="input-form" type="text" placeholder="Enter your phone"/>
                                    <div className="select-block">
                                        <select>
                                            <option>Choose your class</option>
                                            <option value="0">Lite</option>
                                            <option value="1">Normal</option>
                                            <option value="2">Hard</option>
                                        </select>
                                    </div>
                        </form>
                        <div className="button"><input type="submit" value="Try it"/></div>
                    </div>
                    <div className="text-form">
                        <h3>JUST BALANCE<br/>YOUR MIND & BODY</h3>
                        <p>Create the healthy living<br/> for yourself</p>
                    </div>
                </div>
                <div className="program-page">
                    <div className="title-program-page">YOGA FEATURE PROGRAM</div>
                    <div className="sub-title-page">Our Classes</div>
                    <div className="program-cards">
                        <ProgramCard image="images/img-01.jpg" title="HEALTH" text="Minim veniam, ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt."/>
                        <ProgramCard image="images/img-02.jpg" title="LOSE WEIGH" text="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo sed do eiusmod tempor incididunt."/>
                        <ProgramCard image="images/img-03.jpg" title="CHILDREN" text="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  elit, sed do eiusmod tempor incididunt."/>
                        <ProgramCard image="images/img-04.jpg" title="ELDERLY" text="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tempor incididunt."/>
                    </div>
                </div>
                <div className="pictures">
                    <Picture image="images/img-05.jpg"/>
                    <Picture image="images/img-06.jpg"/>
                    <Picture image="images/img-07.jpg"/>
                    <Picture image="images/img-08.jpg"/>
                    <Picture image="images/img-09.jpg"/>
                    <Picture image="images/img-10.jpg"/>
                    <Picture image="images/img-11.jpg"/>
                    <Picture image="images/img-12.jpg"/>
                </div>
                <div className="about-us">
                    <div className="about-us-block">
                        <div className="about-us-title">About us</div>
                        <div className="text-about-us">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation toui ullamcomi laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor
                            it in lorei voluptate velit esse cillum dolore eu fugiat nulla pariatur lorem ispum loting
                            sokui.
                        </div>
                    </div>
                    <div className="slider">
                        <div><img src="images/img-13.jpg" alt="13"/></div>
                        <div><img src="images/home-II-3-570x300-1.jpg" alt="13"/></div>
                        <div><img src="images/570381a8a47fe.jpg" alt="13"/></div>
                    </div>
                </div>
                <Features/>
                <div className="subscription">
                    <div className="subscription-forms">
                        <Form price="49" days="MON – FRI" time="8A.M – 8P.M" advicer="NO"/>
                        <Form price="69" days="MON – FRI" time="8A.M – 8P.M" advicer="YES"/>
                        <Form price="99" days="MON – SUN" time="8A.M – 8P.M" advicer="YES"/>
                    </div>
                </div>
            </main>
            <footer className="page-footer">
                <div className="first-footer">
                    <div className="about">
                        <div className="title-about-footer">About</div>
                        <p className="text-about-footer">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                            do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m inim veniam, quis nostrud
                            exercitation toui ullamcomi laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="contact-us">
                        <div className="title-contact-us">Contact us</div>
                        <div className="contact-us-items">
                            <div className="telephone-address">
                                <div className="address contact">
                                    <span className="icon-contact icon-location"></span>
                                    <span className="contact-us-item-text">5419 Joseph Mountains <br/>Apt. 716</span>
                                </div>
                                <div className="telephone contact">
                                    <span className="icon-contact icon-call"></span>
                                    <div className="telephone-numbers">
                                        <a className="contact-us-item-text" href="tel:+123456789">+1 234 567 89</a><br/>
                                        <a className="contact-us-item-text" href="tel:+123467890">+1 234 678 90</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mail-website">
                                <div className="mail contact">
                                    <span className="icon-contact icon-envelope"></span>
                                    <a className="contact-us-item-text"
                                       href="mailto:joga.info@example.com">joga.info@example.com</a>
                                </div>
                                <div className="website contact">
                                    <span className="icon-contact icon-planet"></span>
                                    <a className="contact-us-item-text" href="www.example.com">www.example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="socials">
                    <ul className="socials-list">
                        <li>
                            <a href="https://www.pinterest.com/">
                                <span className="icon-pinterest"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/">
                                <span className="icon-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://uk-ua.facebook.com/">
                                <span className="icon-facebook"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://myaccount.google.com/">
                                <span className="icon-google-plus"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">
                                <span className="icon-instagram"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-footer">
                    <div className="copyright">Copyright&nbsp;&nbsp;©&nbsp;&nbsp;2016-2017 Yoga classes</div>
                </div>
            </footer>
        </div>;
    }

}
export default App;