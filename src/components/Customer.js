import React from 'react';

class Customer extends React.Component{
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