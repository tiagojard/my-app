import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

class relacionado extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  itens: null
		};
	}

	componentDidUpdate(prevProps) {
		if(this.props.idAssunto != prevProps.idAssunto){
		fetch("https://tiagojardim.000webhostapp.com/getRelacionado.php?id_assunto="+this.props.idAssunto+"&id_pagina="+this.props.idPagina)
		  .then(res => res.json())
		  .then(
			(result) => {
				
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
	}

	render(){
		var result = [];
		if(this.state.isLoaded == true){
			result = this.state.itens.map((item) =>
			<div className="item-relacionado" key={item.url}>
				<a href={"/pagina"+item.url} title={item.titulo}>
						<img src="/static/media/logo.5d5d9eef.svg" className="item-relacionado-img" alt={item.titulo} />
						<p>{item.titulo}. {item.descricao}</p>
					</a>
			</div>
			);
		}
		return (<div>
			<div className="titulo-relacionado">Relacionados</div>
			{result}	
			</div>);
	}	

}
export default relacionado;