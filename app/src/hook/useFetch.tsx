import { useState } from "react"

export const useFetch = (url:string) =>{

    const [data] = useState()

    fetch(url)
    .then(data => {
    return data.json();
    })
    .then(data => {
    console.log(data);
    });



    return { data }

}