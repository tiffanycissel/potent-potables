import React from 'react';
import './App.css';
import Button from './components/Button.js';
import TheDisplay from './components/TheDisplay.js';
import InputDisplay from './components/InputDisplay.js';

class App extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      searchMode : null,
      searchValue: '',
      selIndex: -1,
      results: null
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.updateSelIndex = this.updateSelIndex.bind(this);
    this.updateResult = this.updateResult.bind(this);
  }

  handleBtnClick(newSearchMode){
    this.setState(
      {
        searchMode: newSearchMode,
        searchValue: '',
        selIndex: -1
      }
    );
  }

  updateSearchValue(newSearchValue){
    this.setState(
      {
        searchValue: newSearchValue
      }
    );
  }

  updateSelIndex(newIndex){
    this.setState(
      {
        selIndex: newIndex
      }
    );
  }

  updateResult(newResults){
    this.setState(
      {
        results: newResults
      }
    );
  }

  toggleGuide(){
    document.getElementsByClassName('App-alc-guide-header')[0].classList.toggle('open');
    document.getElementsByClassName('App-alc-guide')[0].classList.toggle('show');
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Potent Potables</h1>
          <p>Discover boozy beverages based on your preferences</p>
        </header>
        <main className="App-main">
          <div className="App-main-btnContainer">
            <Button name="Drink Name" action="name" onClick={this.handleBtnClick} />
            <Button name="Flavor" action="flavor" onClick={this.handleBtnClick}  />
            <Button name="Type" action="type" onClick={this.handleBtnClick}  />
            <Button name="Ingredient" action="ingredient" onClick={this.handleBtnClick} />
            <Button name="Keyword" action="keyword" onClick={this.handleBtnClick} />
          </div>
          <InputDisplay type={this.state.searchMode} searchValUpdate={this.updateSearchValue} selIndUpdate={this.updateSelIndex} selIndex={this.state.selIndex} result={this.updateResult} />
          <TheDisplay mode={this.state.searchMode} value={this.state.searchValue} results={this.state.results} />          
        </main>
        <div className="App-alc-guide-header" onClick={this.toggleGuide}>Alcohol Content Guide</div>
        <div className="App-alc-guide">
          <ul>
            <li>12oz Beer (5% ABV): 0.6oz</li>
            <li>4oz Wine (12% ABV): 0.48oz</li>
            <li>1oz Shot (40% ABV): 0.4oz</li>
          </ul>
        </div>
        <footer className="App-footer">
         <span>&copy;2019 Tiffany Cissel</span>
          <a href="https://forms.gle/maCkgdtcHLYirqy48" target="_blank" rel="noopener noreferrer">Suggest a cocktail or contact the admin</a>
        </footer>
      </div>
    );
  }
}

export default App;
