import React,{Component} from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';

// https://material-ui.com/components/progress/

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    },
    progress:{
        margin: theme.spacing(2)
    }
});

//
// 1) constructor()
// 2) componentWillMount()
// 3) render()
// 4) componentDidMount()
// props or state => shouldComponentUpdate()


class App extends Component{

    state = {
        customers: "",
        completed: 0
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 800);
        this.callApi()
            .then(res => this.setState({customers:res}))
            .catch(err => console.log(err));
    }



    callApi = async  () =>  {

        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
    }

    progress = () => {
        const { completed } =this.state;
        this.setState({completed : completed >= 100 ? 0 : completed + 10});
        // console.log(completed);
    }



//proxy 문제 발생
// npm install http-proxy-middleware --save 설치
// src -> setupProxy.js 생성후 작성

//npm install --save mysql
    render(){
            const { classes } = this.props;
            return(
            <div className="gray-background">
            <h2>Rain Forest Alliance Certified1_git_hub </h2>

                <CustomerAdd/>
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
                                     this.state.customers ? this.state.customers.map( c => {
                                            return(
                                                    <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} jop={c.jop}/>
                                            );
                                        }) :
                                        <TableRow>
                                            <TableCell colSpan="6" align="center">
                                                <CircularProgress   className={classes.progress} variant="determinate" value={this.state.completed} />
                                            </TableCell>
                                        </TableRow>

                                    }

                                </TableBody>
                            </Table>
                        </Paper>




                < /div>



        );
    }
}

                export default withStyles(styles)(App);

