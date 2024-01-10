import React from 'react'

const Header = (props) => {
  return (
    <header className={props.darkMode? 'dark' : ''}>
        
        <img src="./TrollFace.webp" alt="Troll Face" height='26px' width='32px' className='logo--img' />
        <h2 className='logo--text'>Meme Generator</h2>
        <p>React Project</p>
        <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
    </header>
  )
}

export default Header