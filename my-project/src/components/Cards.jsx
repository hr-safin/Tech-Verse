import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = ({handleTheme,theme}) => {
    const [count, setCount] = useState([])
    
    const handleRemove = (id) => {
        
        const removed = count.filter(p => p.id !== id)
        setCount(removed)
    }

    const handleRemoveAll = () => {

        if(count.length > 0){
            setCount([])
        }
        
    }

    
     useEffect(() => {
         fetch("data.json")
         .then(res => res.json())
         .then(data => setCount(data))
     }, [])

    return (
        <>
        
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-10 lg:px-0 px-6">
            {count && count?.map(data => <Card handleTheme={handleTheme} theme={theme}handleRemove={handleRemove}  key={data.id} data={data}/>)} 
        </div>
        <div className={count.length > 0 ? "flex justify-center my-5" : "hidden"}>
            <button onClick={handleRemoveAll} className=" px-3 py-2 bg-yellow-500 text-black rounded-md">Remove All</button>
        </div>
        </>
    );
};

export default Cards;