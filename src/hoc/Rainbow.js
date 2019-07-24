import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['orange', 'green', 'blue', 'black', 'yellow', 'cyan']
    const randomColour = colours[Math.floor(Math.random() * 6)]
    console.log(randomColour)
    const className = randomColour + '-text'

    return (props) => {

        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow