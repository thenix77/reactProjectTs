import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

class Logout extends Component{
    constructor(props:RouteComponentProps){
        super(props)

        localStorage.removeItem('token')
        props.history.push('/')
        console.log(props.history);
    }
    
    
    render(){
        return(
            <div>
                <h1>Saliendo del sistema...</h1>
            </div>
        )
    }
}
export default Logout