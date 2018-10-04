import React, { Component } from 'react';
import banner300x250 from '../img/banner-300x250.png';
class anuncioConteudo extends Component {
	render(){
		return (<div>
			        <hr className="hr"/>
			        <div className="anuncios-conteudo-esquerdo">
						<img src={banner300x250} alt=""/>
					</div>
                    <div className="anuncios-conteudo-direito">
						<img src={banner300x250} alt=""/>
					</div>
		        </div>);
	}	

}
export default anuncioConteudo;