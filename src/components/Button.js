import React from 'react';
import '../components/Button.css';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
       this.props.onClick(e.target.id);
    }

    render(){
        return (
            <button className="Button" id={this.props.action} onClick={this.handleClick}>{this.props.name}</button>
        )
    }
}

export default Button;