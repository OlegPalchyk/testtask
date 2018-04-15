import React from 'react';
import classes from './About.css';
import Wrapper from '../../hoc/wrapper';
import PageTitle from "../RepeatableComponents/PageTitle/PageTitle";
import AboutSection from "./AboutSection/AboutSection";

const about = () => {
    return <Wrapper>
        <PageTitle>About</PageTitle>
        <AboutSection>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores!</AboutSection>
        <AboutSection>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Asperiores eius fugit rem repellendus repudiandae sint voluptatibus. Deleniti
            et id obcaecati.
        </AboutSection>
        <AboutSection>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aperiam dicta esse iure molestias odio perspiciatis ratione, sint vero
            voluptate! Accusantium culpa cum debitis dolor eius et eveniet expedita fugiat, laborum libero magni
            molestias neque placeat possimus, provident quibusdam quis reiciendis. At earum iure libero mollitia optio
            perferendis, placeat unde ut!
        </AboutSection>
    </Wrapper>
};

export default about;