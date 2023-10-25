import React, { useEffect, useState } from 'react'

export default function Urunler() {

    const [data, setData] = useState([])
  
    useEffect(() => {
        
        const apiFetch = async () => {
            const request = await fetch("http://127.0.0.1:8000/api/v1/products")
            const response = await request.json()
            console.log("data geliyor",response);
            setData(response)
        }

        apiFetch()
    },[])



    return (
    <>
       
    </>
  )
}
