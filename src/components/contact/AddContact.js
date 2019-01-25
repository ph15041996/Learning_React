import React,{Component} from 'react';
import {Consumer} from './../../context' 
import InputGroup from './../layout/InputGroup'
import uuid from 'uuid'
// import { error } from 'util';
class AddContact extends Component{
    state={
        name:'',
        email:'', 
        number:'', 
        errors:{},
    };
    onChange = e =>{this.setState({[e.target.name]:e.target.value})};
    
    onSubmit = (dispatch,e) =>{
        e.preventDefault();
        const {name,email,number} =this.state;

        if(name === ''){
            this.setState({errors:{name:'Name is required'}});
            return;
        }
        if(email === ''){
            this.setState({errors:{email:'Email is required'}});
            return;
        }
        if(number === ''){
            this.setState({errors:{number:'Phone Number is required'}});
            return;
        }

        // const newContact ={id:uuid(),
        //     name:name,
        //     email:email,
        //     number:number}   
        const newContact ={id:uuid(),name,email,number} //Same as above 
 
        dispatch({type:'ADD_CONTACT',payload:newContact})
        this.setState({
            name:'',
            email:'',
            number:'',
            errors:{},
        })
    }
    render(){
        const {name,email,number,errors} = this.state
        return(
            <Consumer>
                {value=>{
                    const {dispatch}= value;
                    return(
                <div className="container">
                    <div className="card">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                    <InputGroup
                        name="name"
                        label="Name"
                        type="text"
                        value={name}
                        placeholder="Enter Name"
                        onChange={this.onChange}
                        error={errors.name}
                    />
      
                    <InputGroup
                        name="email"
                        label="Email"
                        type="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={this.onChange}
                        error={errors.email}
                    />

                    <InputGroup
                        name="number"
                        label="Ph Number"
                        type="number"
                        value={number}
                        placeholder="Enter Phone Number"
                        onChange={this.onChange}
                        error={errors.number}
                    />

                    <input 
                    type="submit" 
                    value ="Add Contact"
                    className = "btn btn-block btn-dark"
                    />
                </form>
                </div>
            </div>
        </div>
                    )
                }}
            </Consumer>
        )

        
    }
}

export default AddContact