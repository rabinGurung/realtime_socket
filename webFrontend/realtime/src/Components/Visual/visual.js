import React from 'react'
import socketclient from 'socket.io-client'
import { Doughnut } from 'react-chartjs-2';

const SERVER = 'http://192.168.43.227:8000'
const socket = socketclient(SERVER)
class Visual extends React.Component{
    constructor(){
        super()
        this.state = {
            data: {
                datasets: [{
                    data: [10,20,30],
                    backgroundColor: [
                    '#FF6384',
                    '#FFCE56',
                    '#36A2EB'
                    ]
                }],
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ]
            }
        }
    }
    render(){
        return(
            <div>
            <Doughnut 
            data = {this.state.data}
            width = {400}
            height = {400}
            options={{maintainAspectRatio : false}}
            />
            </div>
        )
        }
        componentDidMount(){
            socket.on('title',(data)=>{
                
            })
            socket.on('update',(message)=>{
                if(message === "red"){
                    this.setState({
                        data: {
                            datasets: [{
                                data: [this.state.data.datasets[0].data[0]+10, this.state.data.datasets[0].data[1], this.state.data.datasets[0].data[2]],
                                backgroundColor: [
                                    '#FF6384',
                                    '#FFCE56',
                                    '#36A2EB'
                                ]
                            }],
                            labels: [
                                'Red',
                                'Yellow',
                                'Blue'
                            ]
                        }
                    })
                }else if(message === "yellow"){
                    this.setState({
                        data: {
                            datasets: [{
                                data: [this.state.data.datasets[0].data[0], this.state.data.datasets[0].data[1]+10, this.state.data.datasets[0].data[2]],
                                backgroundColor: [
                                    '#FF6384',
                                    '#FFCE56',
                                    '#36A2EB'
                                ]
                            }],
                            labels: [
                                'Red',
                                'Yellow',
                                'Blue'
                            ]
                        }
                    })
                }else if (message === "blue"){
                    this.setState({
                        data: {
                            datasets: [{
                                data: [this.state.data.datasets[0].data[0], this.state.data.datasets[0].data[1], this.state.data.datasets[0].data[2]+10],
                                backgroundColor: [
                                    '#FF6384',
                                    '#FFCE56',
                                    '#36A2EB'
                                ]
                            }],
                            labels: [
                                'Red',
                                'Yellow',
                                'Blue'
                            ]
                        }
                    })
                }

            })
        }
}


export default Visual