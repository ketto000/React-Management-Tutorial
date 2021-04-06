import React from 'react';

class Customer extends React.Component{
    render(){
      return(
          <div>
              <div class='profiles'>
            <CustomreProfile image={this.props.image} name={this.props.name} id={this.props.id}/>
            <CustomerInfo           name={this.props.name}          birthday={this.props.birthday}          gender={this.props.gender}          jop={this.props.jop}          />
              </div>
          </div>
      );
    }
}

class CustomreProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile" width="150" height="200"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>name:{this.props.name}</p>
                <p>birthday:{this.props.birthday}</p>
                <p>gender:{this.props.gender}</p>
                <p>jop:{this.props.jop}</p>
            </div>
        );
    }

}


export default Customer;