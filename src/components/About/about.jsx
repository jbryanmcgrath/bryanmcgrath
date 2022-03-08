import React from 'react'
import Roll from 'react-reveal/Roll'

import styled from 'styled-components'

class About extends React.Component {
    render() {
        return (

            <div className='homeTextDiv'>
                <Roll left cascade>
                    <div>
                        <h2 className='hi'>Hi</h2>
                        <h2>I'm Bryan</h2>
                        <h2>A Full Stack Web Developer</h2>
                    </div>
                </Roll>
            </div>
        );
    }
}

export default About;



