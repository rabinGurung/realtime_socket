import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Visual from '../Components/Visual/visual'
import Input1 from './Inputs/Input1'
export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" render={()=>{
                    return(
                        <Visual/>
                    )
                }}/>
                <Route exact path="/input" render={()=>{
                    return(
                        <Input1/>
                    )
                }}/>

                </Switch>
        )
    }
}