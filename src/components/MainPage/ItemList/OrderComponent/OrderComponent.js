import React, {Component} from 'react';
import classes from './OrderComponent.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const OPTIONS_FIELD = [
    { value: 'email', label: 'Email' },
    { value: 'first_name', label: 'First Name' },
    { value: 'last_name', label: 'Last Name' },

];
const OPTIONS_ORDER = [
    { value: 'asc', label: 'ascending' },
    { value: 'desc', label: 'descending' },
];

class OrderComponent extends Component{
   state = {
       field : '',
       order : 'asc'

   };
    handleChangeSelect (name, e) {
        this.setState({
            [name] : e.value
        })
    }
    reorder() {
        if(this.state.field && this.state.order){
            this.props.reorder(this.state.field.slice(0) , this.state.order.slice(0));
        }
    }
    render() {
        return <div className={classes.OrderWrapper}>
            <Select
                name="ordering"
                value={this.state.field}
                onChange={(e)=>this.handleChangeSelect('field',e)}
                options={OPTIONS_FIELD}
                className={classes.Select}
                clearable={false}
            />
            <Select
                name="ordering"
                value={this.state.order}
                onChange={(e)=>this.handleChangeSelect('order', e)}
                options={OPTIONS_ORDER}
                className={classes.Select}
                clearable={false}

            />
            <button className={classes.OrderChoose} onClick={()=>this.reorder()}> choose </button>

        </div>
    }
}

export default OrderComponent;