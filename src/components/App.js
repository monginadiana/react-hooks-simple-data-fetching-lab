// create your App component here


import React, { useEffect, useState } from "react";

function App(){
    const [dogBread,setDogBread] = useState ([])
    const [isLoaded, setIsLoaded] = useState(false);



    useEffect (() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((image) => {
            setDogBread(image.message)
            setIsLoaded(true);
        })
    }, [])
    if (!isLoaded) return <p>Loading...</p>;

    return (
    
    <img src={dogBread.map((image1) => image1.image)} alt="A Random Dog" />
      
    )
}

export default App