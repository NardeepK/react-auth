import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router";




export class Reset extends Component{
    state = {};

    handleSubmit = e => {
        e.preventDefault(); 

        const data = {
            token: this.props.match.param.id,
            password: this.password,
            password_confirm: this.password_confirm
        }

        axios.post('reset', data).then(
            res => {
                console.log(res);
                this.setState({
                    reset: true
                });
            }
        ).catch(
           err => {
                console.log(err);
           } 
        )
    };
    render() {
        if(this.state.reset){
            return <Navigate to = {'/login'} />
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Reset Password</h3>

                <div className="form-group">
                    <label className="height">Password</label>
                    <input type="password" className="form-control height" placeholder="Password"
                    onChange={e => this.password = e.target.value} />
                </div>

                <div className="form-group">
                    <label className="height">Confirm Password</label>
                    <input type="password" className="form-control height" placeholder="Confirm Password"
                    onChange={e => this.password_confirm = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block height" >Submit</button>
               
            </form>
        )
        
    }

    

}