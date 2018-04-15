import React, { Component } from 'react';
import classes from './ItemsList.css';
import Worker from "./Worker/Worker";
import {connect} from "react-redux";
import {getEmployees} from "../../../actions/employees";


class ItemsList extends Component{
    state= {
        page : 1
    };
        constructor(props){
            super(props);
            this.onScroll = this.onScroll.bind(this);
        }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        const {employees} = this.props;
        if(!employees.loaded) {
            this.props.dispatch(getEmployees(this.state.page))
        }
    }
    onScroll(e) {
        let d = document.documentElement;
        let  offset = d.scrollTop + window.innerHeight;
        let height = d.offsetHeight;
        /**
         * this is custom number of px, that allow to load data, before user will scroll to bottom
         * **/
        const CustomCount = 100;
        if (offset + CustomCount >= height ) {
            console.log(123);
            if(!this.props.employees.loading) {
                let page = this.state.page;
                page++;
                this.setState({page});
                this.props.dispatch(getEmployees(page))
            }
        }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.onScroll, false);
    }

    render() {
        const {employees} = this.props;
        const data = employees.data;
        return <div className={classes.ItemsList} ref={list=>this.list = list}>
            {data.map(item=> <Worker data={item} key={item.id}/>)}

        </div>
    }
}
function mapStateToProps(state) {
    const {employees} = state;
    return {employees}
}
export default connect(mapStateToProps)(ItemsList);

