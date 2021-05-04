import React, { Component } from 'react';

class customerDelete extends Component{

    deleteCustomer(id){
        const url ='./api/customers/'+id;
        fetch(url,{
            method:'delete',
            id: id
        });
        this.props.stateRefresh();

    }

    render(){
        return(
            <button onClick={(e) => { this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }

}
export default customerDelete;