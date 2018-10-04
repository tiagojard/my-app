import React, { Component } from 'react';
import '../pagina.css';
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
      document.getElementById("anuncio-topo").innerHTML ='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="8091665402"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
      document.getElementById("anuncio-esquerdo").innerHTML ='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="7212185231"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
    }
		return (<div className="corpo-pagina">
                    <div id="anuncio-topo" className="anuncio-topo">
                    </div>
                    <div id="anuncio-esquerdo" className="anuncio-esquerdo">
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