import React from 'react';
import {alcLevel} from '../drinkInfo';
import '../components/ResultItem.css';

class ResultItem extends React.Component{

    constructor(props){
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleLinkClick(e){
        const theDiv = e.target.nextElementSibling;
        theDiv.classList.toggle('ResultItem-Detail-Hide');
        theDiv.classList.toggle('ResultItem-Detail-Show');
    }

    render(){
        const type = this.props.info.type.length>0?this.props.info.type:'--';
        const flavors = this.props.info.flavors.length>0?this.props.info.flavors:'--';
        const alcPercent = this.props.info.alcPerc>0?alcLevel(this.props.info.alcPerc)*100+'%':'--';
            return(
                <li className="ResultItem">
                    <span onClick={this.handleLinkClick}>{this.props.info.name}</span>
                    <div className="ResultItem-Detail-Hide">
                        <p>Type: {type}</p>
                        <p>Flavors: {flavors}</p>
                        <p>Ingredients: {this.props.info.ingredients}</p>
                        <p>Appx. ABV: {alcPercent}</p>
                        <p>Appx. alcohol: {alcLevel(this.props.info.alcOz)} oz</p>
                        <p>Source: {this.props.info.source}</p>
                    </div>
                </li>
        );
    }
}

export default ResultItem;