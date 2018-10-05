import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import sitemap from './sitemap.xml';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Pagina from './componente/pagina';
import Home from './componente/home';
class App extends Component {
  constructor(props){
    super(props);
    this.handleAutoComplete = this.handleAutoComplete.bind(this);
  }

  handleAutoComplete(e){
    var texto = e.target.value;
      fetch("https://tiagojardim.000webhostapp.com/getPesquisa.php?pesquisa="+texto)
      .then(res => res.json())
      .then(
        (result) => {
        debugger;
          this.autocompleteBusca(document.getElementById("busca"), result);
        },
        (error) => {
          
        }
      )

    
  }

  render() {
    //<Router>
    //<Link to="/pagina">Pagina</Link>
    //</Router>
    return (
      <div>
        <div>
          <header className="App-header">
           <div className="bloco-logo">
              <a href="/" title="Home">
                <img src={sitemap} alt="Logo" className="App-logo"/>
              </a>
           </div>
              <div>
                <div className="busca">
                  <input type="text" id="busca" placeholder="Pesquisar" className="input-busca" />
                  <input id="id" type="hidden" />
                  </div>  
                  <svg fill="#fff" class="search-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
    </svg> 
              </div>
          </header>
        </div>
        
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/pagina/:id/:titulo" component={Pagina} />
          </div>
        </Router>
        
         <div className="rodape"></div>
      </div>
    );
  }
}

export default App;
