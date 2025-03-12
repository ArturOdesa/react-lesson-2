import './jsx-block.css'
const logoSrc = './src/assets/images/react-logo.png'

function JsxBlock () {
    return (
        <div className='jsx-container'>
            <h1>JSX container</h1>
            <p>This block (container) was created with JSX Syntax.</p>
            <img className='logo' src={logoSrc} alt="React Logo" />
        </div>
    )
}

export default JsxBlock