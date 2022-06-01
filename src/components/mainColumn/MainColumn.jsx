import React from 'react';
import './MainColumn.css'
import MainSection from './mainSection/MainSection';

function MainColumn(props) {

    if (props.sections == null) {
        return null;
    }
    return(
            props.sections.map(
                section => 
                <MainSection key={section.id} section={section} />
            )
    );
}

export default MainColumn;