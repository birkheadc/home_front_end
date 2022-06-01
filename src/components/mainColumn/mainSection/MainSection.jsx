import React from 'react';
import './MainSection.css'

function MainSection(props) {
    return(
        <section>
            <h2>{props.section.title}</h2>
            <hr></hr>
            <h3>{props.section.subtitle}</h3>
            <p>{props.section.body}</p>
        </section>
    );
}

export default MainSection;