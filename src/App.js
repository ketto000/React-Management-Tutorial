import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';


 const customer ={
     'name': '이상길',
     'birthday': '840214',
     'gender' : '남자',
     'jop': '마법사'

 }
class App extends Component{
    render(){
        return(
        <div className="gray-background">
            <h2>Rain Forest Alliance Certified1_git_hub </h2>
            <Customer
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            jop={customer.jop}
             />
        </div>
        );
    }
}

export default App;
