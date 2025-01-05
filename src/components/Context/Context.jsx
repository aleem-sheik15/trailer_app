import { ContextStore } from "./ContextStore";
import allMovies from "./../../assets/allMovies"
import { useState } from "react";

const Context = ({ children }) => {
    const [duration,setDuration]=useState(0);
    const [year,setYear]=useState(0);
    const [gener,setGener]=useState('All')
    const contextValues = {
        all_Movies: allMovies,
        duration,
        setDuration,
        year,
        setYear,
        gener,
        setGener
    }
    return (
        <ContextStore.Provider value={contextValues}>
            {children}
        </ContextStore.Provider>
    )
}
export default Context