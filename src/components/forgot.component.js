import React, { Component } from "react";
import axios from "axios";

export class Forgot extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email
        };

        axios.post('forgot', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label className="height">Email</label>
                    <input type="email" className="form-control height" placeholder="Email"
                    onChange={e => this.email = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block height" >Submit</button>
            </form>
        )
        
    }

}