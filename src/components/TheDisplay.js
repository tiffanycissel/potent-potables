import React from 'react';
import {alcLevel} from '../drinkInfo';
import '../components/TheDisplay.css';
import ResultItem from '../components/ResultItem'

class TheDisplay extends React.Component {    
      
    render(){
        if(this.props.mode===null){
            return null;            
        } else {
            if(this.props.value===''){
                return null;
            } else {
                if(this.props.mode==='name'){
                    const type = this.props.results.type.length>0?this.props.results.type:'--';
                    const flavors = this.props.results.flavors.length>0?this.props.results.flavors:'--';
                    const alcPercent = this.props.results.alcPerc>0?alcLevel(this.props.results.alcPerc)*100+'%':'--';
                    return(
                        <div className="TheDisplay">
                            <p>Type: {type}</p>
                            <p>Flavors: {flavors}</p>
                            <p>Ingredients: {this.props.results.ingredients}</p>
                            <p>Appx. ABV: {alcPercent}</p>
                            <p>Appx. alcohol: {alcLevel(this.props.results.alcOz)} oz</p>
                            <p>Source: {this.props.results.source}</p>
                        </div>                        
                    );
                } else {
                    const items = this.props.results.map(item=>{
                        return <ResultItem info={item} key={item.name.replace(' ','').toLowerCase()}/>
                    });
                    return(<ul className="TheDisplay">{items}</ul>);
                } 
            }
        }
    }
    
}

export default TheDisplay;