import React, { Component } from 'react';
class anuncioConteudo extends Component {


	render(){
		var anunciosConteudo = document.getElementById("anuncios-conteudo-esquerdo");
		if(anunciosConteudo != null){
			document.getElementById("anuncios-conteudo-esquerdo").innerHTML = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="2067669765"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
			document.getElementById("anuncios-conteudo-direito").innerHTML = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-8019971282281713" data-ad-slot="1538306282"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
		}
		return (<div>
			        <hr className="hr"/>
			        <div id="anuncios-conteudo-esquerdo" className="anuncios-conteudo-esquerdo">
					</div>
                    <div id="anuncios-conteudo-direito" className="anuncios-conteudo-direito">
					</div>
		        </div>);
	}	

}
export default anuncioConteudo;