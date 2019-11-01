import React, {useState, useEffect } from 'react'
import api from '../utils/api'


export default function Account(props) {

    const [user, setUser] = useState({
        name: "",
        email: "",
    })

    useEffect(() => {
        api().get("/me")
        .then(result => {
            setUser({
                name: result.data.name,
                email: result.data.email,
            })
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return (
        <div>
            <h1>My Account</h1>
            <div className="account-row">Name: {user.name}</div>
            <div className="account-row">Email: {user.email}</div>
        </div>
    )
}
