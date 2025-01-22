import { createContext } from "react";

export const HobbiesContext = createContext();

export const HobbiesProvider = ({children})=>{
    const hobbies = [
        {id:1,name: "Patinaje", image: "assets/patinaje.svg"},
        {id:2,name: "Tocar Guitarra", image: "assets/guitar.svg"},
        {id:3,name: "Oir Musica", image: "assets/headphones.svg"},
        {id:4,name: "Ver Series", image: "assets/tv.svg"},
        {id:5,name: "Cocinar", image: "assets/cook.svg"},
        {id:6,name: "Tomar Fotos", image: "assets/camera.svg"}
    ]

    return(
        <HobbiesContext.Provider value={{hobbies}}>
            {children}
        </HobbiesContext.Provider>
    )
}