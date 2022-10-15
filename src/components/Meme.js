import React from "react";

export default function Meme (){

    // const [memeImage, setMemeImage] = React.useState('');
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    })
    const [allMemeImages, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data))
    }, []);

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