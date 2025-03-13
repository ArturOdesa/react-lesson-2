import React from 'react'
import './react-block.css'

const ImgSrc = './src/assets/images/react-logo.png'

export default function ReactBlock () {
    const classes = {
        container: 'react-container',
        logo: 'logo'
    };
    const paragraph = React.createElement('p', {}, 'This block was created with React tools')
    const image = React.createElement('img', {className: classes.logo, src: ImgSrc, alt: 'React Logo'}, )
    const title = React.createElement('h1', {},'React container')
    const div = React.createElement('div', {className: classes.container}, title, paragraph, image)
    return (
        <>
            {div}
        </>
    )
    
}