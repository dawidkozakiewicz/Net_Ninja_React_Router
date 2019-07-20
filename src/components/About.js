import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat ea vel nesciunt repellendus beatae nihil aperiam quod fugiat asperiores doloremque voluptate labore, possimus nisi nulla maxime ex debitis sit.</p>
        </div>
    )
}

export default Rainbow(About)