import React, { Component } from 'react'
import {Consumer} from '../../context'
import PropTypes from 'prop-types';
class Contact extends Component {

  static PropTypes = {
    contact :PropTypes.object.isRequired,
};
onDelete = (id,dispatch)=>{
  dispatch({type:'DELETE_CONTACT',payload:id});

}

  state={
    showContact : false,
  }
  render() {
    const {id,name,email,number} = this.props.contact;
    const {showContact} = this.state;
    return(
      <Consumer>
        {value =>{
          const {dispatch} = value;
        return (
          <div className="card card-body mb-3">
          <h4>{name}<i 
          onClick={() =>
            this.setState({showContact : !this.state.showContact}) 
          }
          class="fas fa-caret-down"/>
          <i className="fas fa-times"
          style={{ cursor:'pointer',float:'right',color:'red' }}
          onClick={this.onDelete.bind(this,id,dispatch) }
          />
          </h4>
          {showContact? (<ul className="list-group">
              <li className="list-group-item">Email : {email}</li>
              <li className="list-group-item">Phone No : {number}</li>
          </ul>):null}

        </div>

        )
        }}
      </Consumer>
    )
  }
}

export default Contact
