import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends React.Component{
    render(){
        return(

            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" width="150" height="200"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        );
    }
}
//
// class CustomreProfile extends React.Component{
//     render(){
//         return(
//             <div>
//                 <img src={this.props.image} alt="profile" width="150" height="200"/>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         );
//     }
// }
//
// class CustomerInfo extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>name:{this.props.name}</p>
//                 <p>birthday:{this.props.birthday}</p>
//                 <p>gender:{this.props.gender}</p>
//                 <p>jop:{this.props.jop}</p>
//             </div>
//         );
//     }
// }


export default Customer;