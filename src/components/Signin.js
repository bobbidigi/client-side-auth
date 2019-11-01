import React, { useState } from "react"
import axios from "axios"
import api from '../utils/api.js'

function Signin(props) {

	const [error, setError] = useState()
	const [data, setData] = useState({
		email: "",
		password: "",
    })

    const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        api()
        axios.post("http://localhost:8080/signin", data)
			.then(result => {
				localStorage.setItem("token", result.data.token)
			})
			.catch(err => {
				setError(err.response.data.message)
			})
    }
    	
	return (
		<form onSubmit={handleSubmit}>
			{error && <div className="error">{error}</div>}
​
			<input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
			<input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />
​
			<button type="submit">Sign In</button>
		</form>
	)
}

export default Signin