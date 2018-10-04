import React, { Component } from 'react';

class destaque extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  itens: null
		};
	}

	componentDidUpdate(prevProps){
		if(this.props.idPagina != prevProps.idPagina){
			fetch("https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina="+this.props.idPagina)
			.then(res => res.json())
			.then(
			  (result) => {

				result.push(result[0]);
				result.push(result[0]);
				result.push(result[0]);
				result.push(result[0]);
				

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
			result = this.state.itens.map((item, index) =>
			<div key={index}>
				<div className="item-destaque">
					<a href={"/pagina"+item.url} title={item.titulo}>
						<p>
							<img src="/static/media/logo.5d5d9eef.svg" className="img-destaque App-logo" align="left" alt={item.titulo}/>{item.titulo}. {item.descricao}
						</p>
					</a>
				</div>
				<hr className="hr-destaque"/>
				{ index % 2 != 0 ?<div className="item-destaque-anuncio"></div>:"" }
			</div>
			);
		}
		return (<div>
					{result}
		        </div>);
	}	

}
export default destaque;