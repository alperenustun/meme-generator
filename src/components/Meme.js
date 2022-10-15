import React from "react";
import memesData from "../memesData.js"

export default function Meme (){

    // const [memeImage, setMemeImage] = React.useState('');
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function handleGenerateClick(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={handleGenerateClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {
            meme.randomImage &&
            <div className="meme">
            <img src={meme.randomImage} alt={meme.randomImage} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> 
            }
        </main>
    )
}