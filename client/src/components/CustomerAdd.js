import React , { Component } from 'react';
import { post } from 'axios';

class CustomerAdd extends Component{
        constructor(props){
            super(props);
            this.state = {
                file : null,
                userName : '',
                birthday : '',
                gender : '',
                job : '',
                fileName : ''
            }
        }

        handleFromSubmit = (e) =>{
            e.preventDefault()
            this.addCustomer()
                .then((response) => {

                        this.props.stateRefresh(); //새로고침
                         // console.log(response.data);
                })

            this.setState( {
                file : null,
                userName : '',
                birthday : '',
                gender : '',
                job : '',
                fileName : ''
            })
           
        }

        handleFileChange = (e) =>{
                this.setState({
                    file: e.target.files[0],
                    fileName:e.target.value
                })
        }

        handleValueChange = (e) =>{
               let nextState = {};
               nextState[e.target.name] = e.target.value;
               this.setState(nextState);
               //이벤트가 발생한 인풋박스의 이름을 가지고 거기에 해당하는 state 명의 값을 셋팅한다.
        }




        addCustomer = () => {
            // const url ='http://127.0.0.1:5000/api/customers';
            const url ='/api/customers';
            const formData = new FormData();
            formData.append('image', this.state.file);
            formData.append('name', this.state.userName);
            formData.append('birthday', this.state.birthday);
            formData.append('gender', this.state.gender);
            formData.append('job', this.state.job);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return post(url, formData, config);
        }


        render(){
            return(
                <form onSubmit={this.handleFromSubmit} >
                    <h1>고객추가</h1>
                    프로필 이미지:<input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                    이름 : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} />
                    생년월일 : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} />
                    성별 : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} />
                    직업 : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} />
                    <button type="submit">추가하기</button>
                </form>

            )
        }
}

export default CustomerAdd;

// 이벤트 처리 server comunication library install is 'axios'