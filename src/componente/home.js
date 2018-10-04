import React, { Component } from 'react';
import '../home.css';
import banner160x600 from '../img/banner-160x600.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          item: null,
        };
    }

    componentDidMount() {
        fetch("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina=0")
			.then(res => res.json())
			.then(
			  (result) => {

				result.push(result[0]);
				result.push(result[1]);
				result.push(result[0]);
				result.push(result[1]);
				

				this.setState({
				  isLoaded: result != null?true:false,
				  itens: result
				});
			  },
			  (error) => {
				this.setState({
				  isLoaded: true,
				  error
				});
			  }
			);
    }

    render(){
/*
        <p>{item.descricao}</p>
        <p>{item.data}</p>
        <p>{item.assunto}</p>
        <p>{item.qtdeAcesso}</p>
*/
        var result = [];
		if(this.state.isLoaded == true){
            document.getElementById("anuncio-topo").innerHTML ='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="8091665402"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
            document.getElementById("anuncio-esquerdo").innerHTML ='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="7212185231"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
            document.getElementById("anuncio-direito").innerHTML = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="6680443014"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'; result = this.state.itens.map((item, index) =>
            <div key={index}>
                <div  className="conteudo-home-container">
                    <div className="conteudo-home-img">
                        <img src="/static/media/logo.5d5d9eef.svg" className="img-destaque" />
                    </div>
                    <div className="conteudo-home-detalhe">
                        <a href={"/pagina"+item.url}>{item.titulo}</a>
                        <div><br/>
                            {item.descricao} First, let’s review how you transform lists in JavaScript. Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it
                        </div>
                        <div className="conteudo-home-info">
                        {item.qtdeAcesso} | <span className="assunto">{item.assunto}</span> | {new Date(item.data).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <hr className="hr-margin"/>
            </div>
			
           
			);
		}
        return (<div className="corpo-pagina">
                    <div id="anuncio-topo" className="anuncio-topo">
                    </div>
                    <div id="anuncio-esquerdo" className="anuncio-esquerdo">
                    </div>
                    <div className="conteudo-home">
                    {result}
                    </div>
                    <div id="anuncio-direito" className="anuncio-direito">
                    </div>
            </div>);
    }
}
export default home;