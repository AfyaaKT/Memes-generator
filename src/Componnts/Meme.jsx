import React from 'react'
import Draggable from 'react-draggable';

const Meme = (props) => {

  const [memeImage , setMemeImage]=React.useState('https://i.imgflip.com/1g8my4.jpg')

  const handleClick=()=>{
    const randomNumber = Math.floor(Math.random()* allMemes.length)
    const url = allMemes[randomNumber].url
    console.log(url);
    setMemeImage(url)
    setFormData({
      topText:'',
      bottomText:''
    })

  }
  const [formData , setFormData]=React.useState({
    topText:'',
    bottomText:'',
    memeImage:''
  })

  const[allMemes, setAllMemes]=React.useState([])

  const handleChange = (event) => {
    const {name , value}= event.target
    setFormData((prevState=> {
      return {...prevState,
            [name]:value 
            }
    }))
  }

  React.useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(result=>setAllMemes(result.data.memes))

  },[])

  return (
    <main className={props.darkMode? 'dark' :''}>
        <div className='form'>
          <div className='input'>

            <div className="top--input">
            
              <label className={props.darkMode? 'light--label' : ''} >Top Text</label>

              <input 
                 type="text"
                 name='topText'
                 value={formData.topText}
                 onChange={handleChange}
                 placeholder='Top Text'
              />
            </div>

            <div className="bottom--input">

              <label className={props.darkMode? 'light--label' : ''} >Bottom Text</label>
              <input
                 type="text"
                 name='bottomText'
                 value={formData.bottomText}
                 onChange={handleChange}
                 placeholder='Bottom Text'
               />
            </div>
           
          </div>
          <button onClick={handleClick}>Get a new meme image  🖼</button>
        </div>
        <div className='meme'>
        <img src={memeImage} className='meme--img' alt='memes'/>
        <Draggable>
        <h2 className='meme--text top'>{formData.topText}</h2>
        </Draggable>
        <Draggable>
        <h2 className='meme--text bottom'>{formData.bottomText} </h2>
        </Draggable>
        </div>

    </main>
  )
}

export default Meme