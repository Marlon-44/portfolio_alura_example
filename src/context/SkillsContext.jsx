import { Children, createContext, useState } from "react";

export const SkillsContext = createContext();

export const SkillsProvider = ({children})=>{
    const skills = [
        {id:1,name: "Html 5", image: "assets/html.svg"},
        {id:2,name: "Javascript", image: "assets/js.svg"},
        {id:3,name: "PHP", image: "assets/php.svg"},
        {id:4,name: "React", image: "assets/react.svg"},
        {id:5,name: "Node.js", image: "assets/node.svg"},
        {id:6,name: "CSS", image: "assets/css.svg"}
    ]

    return (
        <SkillsContext.Provider value={{skills}}>
            {children}
        </SkillsContext.Provider>
    )
}

