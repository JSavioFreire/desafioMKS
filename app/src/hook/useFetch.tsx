import { useState, useEffect } from "react"

export const useFetch = (url:string) =>{

    const [data,setData] = useState()
    const [ loading, setLoading ] =  useState(false)

    useEffect(()=>{
        const fetchData = async () => {

            setLoading(true)

            fetch(url)
            .then(data => {
            return data.json();
            })
            .then(data => {
                setData(data.products)
                setLoading(false)
            });
        }
        
        fetchData()
        

        },[])
    


    return { data,loading }

}