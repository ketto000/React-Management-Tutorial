import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

class App extends Component{
    render(){
        return(
        <div className="gray-background">
            <h2>Rain Forest Alliance Certified1_git_hub </h2>
            <Customer/>
        </div>
        );
    }
}

export default App;
