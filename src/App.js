import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';


 const customer =[
         {
             'id': '1',
             'image' : 'https://t1.daumcdn.net/cfile/blog/99B3ED345CF3303B14',
             'name': '킨타로',
             'birthday': '840214',
             'gender' : '남자',
             'jop': '귀살대'
        },
         {
             'id': '2',
             'image' : 'https://t1.daumcdn.net/cfile/blog/99D6963F5D690DCD0C',
             'name': '네츠코',
             'birthday': '840214',
             'gender' : '여자',
             'jop': '오니'
         },
         {
             'id': '3',
             'image' : 'https://t1.daumcdn.net/cfile/blog/991628475DEDAD0E16',
             'name': '젠이치',
             'birthday': '840214',
             'gender' : '남자',
             'jop': '귀살대'
         },
         {
             'id': '4',
             'image' : 'https://t1.daumcdn.net/cfile/blog/997C493E5DE1C30C24',
             'name': '이노스케',
             'birthday': '840214',
             'gender' : '남자',
             'jop': '귀살대'
         }
 ];
class App extends Component{
    render(){
        return(
        <div className="gray-background">
            <h2>Rain Forest Alliance Certified1_git_hub </h2>
            {
                customer.map( c => {
                    return(
                            <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} jop={c.jop}/>
                     );
                })
            }
            < /div>
        );
    }
}
export default App;
