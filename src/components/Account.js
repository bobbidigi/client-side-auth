import React, {useState, useEffect } from 'react'
import api from '../utils/api'


export default function Account(props) {

    const [user, setUser] = useState()

    useEffect(() =>{
        api().get("/me")
        .then(result => {
            setUser({
                name: result.config.data.name,
                email: result.data.email,
            })
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return (
        <div>
            
        </div>
    )
}
