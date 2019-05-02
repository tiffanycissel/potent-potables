import React from 'react';
import '../components/InputDisplay.css';
import {getDrinkNames, getDrinkFlavors, getDrinkTypes, getDrinkIngredients, getTheDrink, getDrinkList} from '../drinkInfo';

class InputDisplay extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(e){
        let updateVal = '';
        let newInd = '';
        let results = [];
        let theMode = e.target.id.replace('Opts','');
        if(e.target.id!=='keyword'){
            updateVal = e.target[e.target.selectedIndex].value;
            newInd = e.target.selectedIndex;     
        } else {
            updateVal = e.target.value.toLowerCase();
            newInd = -1;
        }
        if(theMode==='name'){
            results = getTheDrink(updateVal);
        } else {
            results = getDrinkList(theMode,updateVal);
        }
        this.props.searchValUpdate(updateVal);
        this.props.selIndUpdate(newInd);  
        this.props.result(results);
    }

    componentDidMount(){
        if(document.getElementById('nameOpts')){
            document.getElementById('nameOpts').innerHTML = getDrinkNames();
        } else if(document.getElementById('flavorOpts')){
            document.getElementById('flavorOpts').innerHTML = getDrinkFlavors();
        } else if(document.getElementById('typeOpts')){
            document.getElementById('typeOpts').innerHTML = getDrinkTypes();
        } else if(document.getElementById('ingredientOpts')){
            document.getElementById('ingredientOpts').innerHTML = getDrinkIngredients();
        } 
    }

    componentDidUpdate(){
        if(document.getElementById('nameOpts')){
            document.getElementById('nameOpts').innerHTML = getDrinkNames();
            if(this.props.selIndex!==-1){
                document.getElementById('nameOpts')[this.props.selIndex].selected = true;
            }
        } else if(document.getElementById('flavorOpts')){
            document.getElementById('flavorOpts').innerHTML = getDrinkFlavors();
            if(this.props.selIndex!==-1){
                document.getElementById('flavorOpts')[this.props.selIndex].selected = true;
            }
        } else if(document.getElementById('typeOpts')){
            document.getElementById('typeOpts').innerHTML = getDrinkTypes();
            if(this.props.selIndex!==-1){
                document.getElementById('typeOpts')[this.props.selIndex].selected = true;
            }
        } else if(document.getElementById('ingredientOpts')){
            document.getElementById('ingredientOpts').innerHTML = getDrinkIngredients();
            if(this.props.selIndex!==-1){
                document.getElementById('ingredientOpts')[this.props.selIndex].selected = true;
            }
        } 
    }

    render(){
        if(this.props.type===null){
            return null;
        } else if(this.props.type!=='keyword'){
            return(
                <React.Fragment>
                    <label className="InputDisplay-label">Select {this.props.type}: </label>
                    <select id={this.props.type+'Opts'} onChange={this.handleChange} className="InputDisplay-select"></select>
                </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
                    <label className="InputDisplay-label">Keyword: </label>
                    <input type="text" id="keyword" onKeyUp={this.handleChange} className="InputDisplay-input"></input>
                </React.Fragment>
            );
        }       
    }
}

export default InputDisplay;