import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
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
          <a href="/" title="Home">
          <img src={logo} alt="Logo" className="App-logo"/>
          </a>
           
            <div className="busca">
              <input type="text" id="busca" placeholder="Pesquisar" className="input-busca" />
              <input id="id" type="hidden" />
              
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
