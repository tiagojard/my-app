import React, { Component } from 'react';
import AdSense from 'react-adsense';
class anuncioConteudo extends Component {
	render(){
		return (<div>
			        <hr className="hr"/>
			        <div className="anuncios-conteudo-esquerdo">
						<AdSense.Google
                            className='adsbygoogle'
                            style={{display:'inline-block',width:'300px',height:'250px'}}
                            client='ca-pub-8019971282281713'
                            slot='2067669765'
                            />
					</div>
                    <div className="anuncios-conteudo-direito">
						<AdSense.Google
                            className='adsbygoogle'
                            style={{display:'inline-block',width:'300px',height:'250px'}}
                            client='ca-pub-8019971282281713'
                            slot='1538306282'
                            />
					</div>
		        </div>);
	}	

}
export default anuncioConteudo;