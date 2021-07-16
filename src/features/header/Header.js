import React from "react"
import './header.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Fade} from "react-reveal";

export const Header = () => {

    return(
        <div id={'header'} className={'header'}>

            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>

            <Fade cascade top >
                <p className={'description'}>
                    Hello, I'm <span>Hamza</span> <br/>
                    I'm a front-end web developer
                </p>
                <AnchorLink href={'#projects'} className={'view-my-work-btn'}>
                    <p className={'text'}>
                        View my work
                    </p>
                    <span className={'arrow'}>
                    &#8594;
                </span>
                </AnchorLink>
            </Fade>

        </div>
    )
}