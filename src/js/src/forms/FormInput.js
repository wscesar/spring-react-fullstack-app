import { Component } from "react";
import {Input} from 'antd';

// class FormInput extends Component {
//     render(){
//         return(
//             <label>props.title</label>
//         )
//     }

// }

export const FormInput =  props => (
    
    <label>
        <span className="title">{props.title}</span>
        <Input
            name={props.title}
            placeholder={props.title}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value[props.title]}
        />

        <span classList="message">
            {/* {props.errors[props.title] && props.touched[props.title] && props.errors[props.title]} */}
        </span>

    </label>
    
)
