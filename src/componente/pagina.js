import React, { Component } from 'react';
import '../pagina.css';
import banner728x90 from '../img/banner-728x90.png';
import banner160x600 from '../img/banner-160x600.png';
import Destaque from '../componente/destaque';
import AnuncioConteudo from '../componente/anuncioConteudo';
import Relacionado from '../componente/relacionado';

class pagina extends Component {
	constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        item: null,
        id_assunto:0,
        id_pagina:0
      };
  }

	componentDidMount() {
    console.log(this.props.match.params.id);
          fetch("https://tiagojardim.000webhostapp.com/getPagina.php?pagina="+this.props.match.params.id)
            .then(res => res.json())
            .then(
              (result) => {
                document.getElementById("busca").value = result.pesquisa;

                if(result != null)
                {
                  this.setState({
                    isLoaded: true,
                    item: result,
                    id_assunto: result.id_assunto,
                    id_pagina: result.id
                  });
                }
                else{
                  this.setState({
                    isLoaded: false,
                    item: result,
                    id_assunto: 0,
                    id_pagina: 0
                  });
                }

              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )

            fetch("https://tiagojardim.000webhostapp.com/setVisualizacaoPagina.php?id_pagina="+this.props.match.params.id)
            .then(res => res.json())
            .then(
              (result) => {

              },
              (error) => {
                
              }
            )
  }

	render(){
    var conteudo = document.getElementById("conteudo");
    if(conteudo != null && this.state.isLoaded == true){
      conteudo.innerHTML = this.state.item.conteudo;
    }
		return (<div className="corpo-pagina">
                    <div className="anuncio-topo">
                      <img src={banner728x90} alt="" />
                    </div>
                    <div className="anuncio-esquerdo">
                      <img src={banner160x600} alt="" />
                    </div>
                    <div className="conteudo">
                      <div id="conteudo"></div>
                      <AnuncioConteudo />
                      <Relacionado idAssunto={this.state.id_assunto} idPagina={this.state.id_pagina}/>
                    </div>
                    <div className="destaque-direito">
                    <div className="titulo-destaque">
                      Destaques
                    </div>
                        <Destaque idPagina={this.state.id_pagina}/>
                    </div>
                </div>);
	}
}
export default pagina;