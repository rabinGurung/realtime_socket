import React from 'react'
import socketclient from 'socket.io-client'
import "./input.css"

const SERVER = 'http://192.168.43.227:8000'
const socket = socketclient(SERVER)
class Input1 extends React.Component{
    constructor(props){
        super(props)
        this.upthevalue = this.upthevalue.bind(this)
        this.lowerthevalue = this.lowerthevalue.bind(this)
        this.lowerblue = this.lowerblue.bind(this)
    }
    render(){
        return(
            <div className="container">
                <button className="red" onClick={this.upthevalue}>Red Button</button>
                <button className="yellow" onClick={this.lowerthevalue}>Yellow Button</button>
                <button className="blue" onClick={this.lowerblue}>Blue Button</button>
            </div>
        )
    }

    componentDidMount(){

    }

    upthevalue(e){
        e.preventDefault()
        socket.emit('message','red')
    }
    lowerthevalue(e){
        e.preventDefault()
        socket.emit('message','yellow')
    }
    lowerblue(e){
        e.preventDefault()
        socket.emit('message','blue')
    }
}


export default Input1