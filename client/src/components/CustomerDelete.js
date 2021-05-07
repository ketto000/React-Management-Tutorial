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


    deleteCustomerRS(id){
        const url ='./api/customers/rs/'+id;
        fetch(url,{
            method:'delete',
            id: id
        });
        this.props.stateRefresh();
    }

    useConfirm = (message = null, onConfirm, onCancel) => {
        if (!onConfirm || typeof onConfirm !== "function") {  return;   }
        if (onCancel && typeof onCancel !== "function") {  return;   }
        const confirmAction = () => {
            if (window.confirm(message)) {
                onConfirm();
            } else {
                onCancel();
            }
        };
        return confirmAction;
    };

    deleteConfirm = () => {
        this.deleteCustomer(this.props.id)
        console.log("삭제했습니다.");
    };

    deleteConfirmRS = () => {
        this.deleteCustomerRS(this.props.id)
        console.log("삭제했습니다.");
    };

    cancelConfirm = () => console.log("취소했습니다.");

    confirmDelete = this.useConfirm(
        "소프트삭제하시겠습니까?",
        this.deleteConfirm,
        this.cancelConfirm
    );

    confirmDeleteRS = this.useConfirm(
        "삭제하시겠습니까?",
        this.deleteConfirmRS,
        this.cancelConfirm
    );

    render(){
        return(
            <div><button onClick={(e) => {this.confirmDelete() }} >소프트 삭제</button>
                <button onClick={(e) => { this.confirmDeleteRS()}}>삭제</button></div>
        )
    }
}

export default customerDelete;