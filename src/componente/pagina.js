import React, { Component } from 'react';
import '../pagina.css';
import AdSense from 'react-adsense';
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
                document.title = result.titulo;
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
                      <AdSense.Google
                            className='adsbygoogle'
                            style={{display:'inline-block',width:'970px',height:'90px'}}
                            client='ca-pub-8019971282281713'
                            slot='8091665402'
                            />
                    </div>
                    <div className="anuncio-esquerdo">
                        <AdSense.Google
                                className='adsbygoogle'
                                style={{display:'inline-block',width:'160px',height:'600px'}}
                                client='ca-pub-8019971282281713'
                                slot='7212185231'
                                />
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