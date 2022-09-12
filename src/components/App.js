// create your App component here


import React, { useEffect, useState } from "react";

function App(){
    const [dogBread,setDogBread] = useState ([])
    // const [isLoaded, setIsLoaded] = useState(false);



    useEffect (() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((images) =>setDogBread(images));
            // setIsLoaded(true);
    },[]);
    
    if (!dogBread) return <p>Loading...</p>;

    return (
    <>
    <img src={dogBread} alt="A Random Dog" />
    </>
    
      
    )
}

export default App