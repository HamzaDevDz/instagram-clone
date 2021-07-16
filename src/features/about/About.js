import React from "react";
import './about.css'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Zoom, Bounce, Fade, Slide} from "react-reveal";

export const About = () => {

    return(
        <div id={'about'} className={'about'}>
            <p className={'about__title'}>
                ABOUT
                <span className={'about__title__line'}></span>
            </p>
            <div className={'about__services'}>
                <Zoom appear={true}>
                    <div className={'about__services__service'}>
                        <div className={'about__services__service__img'}>
                            <img src={'./services/service.png'} alt={'Service'} />
                        </div>
                        <p className={'about__services__service__title'}>At your service</p>
                        <p className={'about__services__service__desc'}>For the realization and concretization of your ideas.</p>
                    </div>
                    <div className={'about__services__service'}>
                        <div className={'about__services__service__img'}>
                            <img src={'./services/dynamic.png'} alt={'Service'} />
                        </div>
                        <p className={'about__services__service__title'}>Dynamic</p>
                        <p className={'about__services__service__desc'}>Websites don't have to be static, I love making pages come to life.</p>
                    </div>
                    <div className={'about__services__service'}>
                        <div className={'about__services__service__img'}>
                            <img src={'./services/responsive.png'} alt={'Service'} />
                        </div>
                        <p className={'about__services__service__title'}>Responsive</p>
                        <p className={'about__services__service__desc'}>My layouts will work on any device, big or small.</p>
                    </div>
                </Zoom>
            </div>

            <div className={'about__whoiam'}>
                <div className={'about__whoiam__me'}>
                    <Bounce left>
                        <div className={'about__whoiam__me__img'}>
                            <img src={'./hamza.jpg'} alt={'My_Photo'} />
                        </div>
                    </Bounce>
                    <Fade left delay={300}>
                        <Card className={'about__whoiam__me__card'}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Who I am?
                                </Typography>
                                <Typography color="textSecondary">
                                    I am an Algerian Front-End Developer, from the city of <span className={'algiers'} onClick={()=>{
                                        window.open('https://en.wikipedia.org/wiki/Algiers')
                                }}>Algiers</span>.
                                </Typography>
                                <Typography color="textSecondary">
                                    Coding, for me, is above all a way to materialize my imagination, my perspectives and my desires.
                                    <br/>
                                    How beautiful they are, the CSS and the JS, isn't it? ;) <br/>
                                    It is my pen to write, my keyboard to code and my magic wand to make magic ^_^. <br/>
                                </Typography>
                                <Typography variant="h5" component="h5">
                                    So, making magic together.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Fade>
                </div>
                <div className={'about__whoiam__skills'}>
                    <Slide right>
                        <div className={'about__whoiam__skills__skill about__whoiam__skills__react'}>
                            <span className={'about__whoiam__skills__skill__name'}>React</span>
                            <span className={'about__whoiam__skills__skill__percentage'}>80%</span>
                        </div>
                        <div className={'about__whoiam__skills__skill about__whoiam__skills__redux'}>
                            <span className={'about__whoiam__skills__skill__name'}>Redux</span>
                            <span className={'about__whoiam__skills__skill__percentage'}>80%</span>
                        </div>
                        <div className={'about__whoiam__skills__skill about__whoiam__skills__js'}>
                            <span className={'about__whoiam__skills__skill__name'}>JavaScript</span>
                            <span className={'about__whoiam__skills__skill__percentage'}>75%</span>
                        </div>
                        <div className={'about__whoiam__skills__skill about__whoiam__skills__css'}>
                            <span className={'about__whoiam__skills__skill__name'}>CSS</span>
                            <span className={'about__whoiam__skills__skill__percentage'}>70%</span>
                        </div>
                        <div className={'about__whoiam__skills__skill about__whoiam__skills__express'}>
                            <span className={'about__whoiam__skills__skill__name'}>Express</span>
                            <span className={'about__whoiam__skills__skill__percentage'}>50%</span>
                        </div>
                        <div className={'about__whoiam__skills__skill about__whoiam__skills__mongodb'}>
                            <span className={'about__whoiam__skills__skill__name'}>MongoDB</span>
                            <span className={'about__whoiam__skills__skill__percentage'}>50%</span>
                        </div>
                        <div className={'about__whoiam__skills__skill about__whoiam__skills__mysql'}>
                            <span className={'about__whoiam__skills__skill__name'}>MySQL</span>
                            <span className={'about__whoiam__skills__skill__percentage'}>60%</span>
                        </div>
                        <div className={'about__whoiam__skills__skill about__whoiam__skills__firebase'}>
                            <span className={'about__whoiam__skills__skill__name'}>Firebase</span>
                            <span className={'about__whoiam__skills__skill__percentage'}>60%</span>
                        </div>
                    </Slide>

                </div>
            </div>
        </div>
    )
}