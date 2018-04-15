import React, { Component } from 'react';
import classes from './ItemsList.css';
import Worker from "./Worker/Worker";
import {connect} from "react-redux";
import {getEmployees} from "../../../actions/employees";
import OrderComponent from "./OrderComponent/OrderComponent";
import Wrapper from '../../../hoc/wrapper';


class ItemsList extends Component{
    state= {
        page : 1,
        ordering : '',
        field :'',
        order : ''
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
            if(!this.props.employees.loading) {
                let page = this.state.page;
                page++;
                this.setState({page});
                this.props.dispatch(getEmployees(page))
            }
        }
    }
    changedOrder (field, order) {
            if(!(this.state.field === field && this.state.order === order)) {
                this.setState({
                    field, order
                })
            }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.onScroll, false);
    }

    load() {
            this.props.dispatch(getEmployees(this.state.page))
    }

    render() {
        const {employees} = this.props;
        const data = employees.data;
        const {field, order} = this.state;
        if(this.state.field && this.state.order) {
            data.sort((a, b)=>{
                let nameA=a[field].toLowerCase(), nameB=b[field].toLowerCase();
                if(order ==='asc') {

                    if (nameA < nameB)
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0;
                } else {
                    if (nameA > nameB)
                        return -1;
                    if (nameA < nameB)
                        return 1;
                    return 0;
                }

            });
        }
        return <Wrapper >
                <OrderComponent reorder={(field, order)=>{this.changedOrder(field, order)}} />
                <div className={classes.ItemsList} ref={list=>this.list = list}>
                    {data.map(item=> <Worker data={item} key={item.id}/>)}
                </div>
                {employees.loading? <p className={classes.LoadingTime}>loading...</p>:null}
                {employees.error? <p className={classes.Error}>Smth went wrong. <button onClick={()=>this.load()}>Try again</button> </p>: null}
             </Wrapper>
    }
}
function mapStateToProps(state) {
    const {employees} = state;
    return {employees}
}
export default connect(mapStateToProps)(ItemsList);

