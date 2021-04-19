import React,{Component} from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';





const styles = theme => ({
    root: {
        width: '100%',
        overflowX: "auto"
    },

    table: {
        minWidth: 1080
    }
});




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
            const { classes } = this.props;
            return(
            <div className="gray-background">
            <h2>Rain Forest Alliance Certified1_git_hub </h2>

                        <Paper className ={ classes.root } >
                            <Table className ={ classes.table }>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>번호</TableCell>
                                        <TableCell>이미지</TableCell>
                                        <TableCell>이름</TableCell>
                                        <TableCell>생년월일</TableCell>
                                        <TableCell>성별</TableCell>
                                        <TableCell>직업</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        customer.map( c => {
                                            return(
                                                    <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} jop={c.jop}/>
                                            );
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </Paper>

            < /div>
        );
    }
}
export default withStyles(styles)(App);
