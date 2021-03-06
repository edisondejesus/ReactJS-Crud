import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/bootstrap.css'
import { BrowserRouter, Route} from "react-router-dom";



class Form_actualizar extends React.Component{




	constructor(props){
		super(props);
		this.state={nombre:'David',apellido:'Ortiz',id:1}
		this.handleChange = this.handleChange.bind(this);

	}

	regresar(){

			window.location='/'


	}

	getDataForm(){

	    var nomb = document.getElementById('nombre').value;
		var ape = document.getElementById('apellido').value;
		var id_r = document.getElementById('id_registro').value

		return  {nombre:nomb,apellido:ape,id:id_r};
	}
	
	handleChange(e) {

		if(e.target.id=="nombre"){
    	   
    	   this.setState({ nombre: e.target.value });
    	
    	}else{

    	    this.setState({ apellido: e.target.value });

    	}
    
    }


    componentDidMount(){
    	const { match: { params } } = this.props;
		this.cargar_usuario(params.id);
    	//alert(params.id)
    }

    cargar_usuario(id_usuario){

   		axios.get(`http://localhost:8000/api/mostrar_persona/${id_usuario}`).then(resp=>{
   						
   					this.setState({nombre:resp.data.nombre,
   						           apellido:resp.data.apellido,
   						           id:resp.data.id
   						       });		

   		}).catch(error=>{

   			console.log(error);

   		});


    }

	actualizar_data(){


			axios.get(`http://localhost:8000/api/actualizar/${this.state.nombre}/${this.state.apellido}/${this.state.id}`).then(data=>{

					alert('datos actualizado conexito');
					this.regresar();


			}).catch(error=>{

				console.log("un problemita");
			});


	}

	render(){

		return (
				<div className='col-md-12'><hr/>
				<h3 className='text-center'>Actualizar Informacion</h3>
					<strong>nombre</strong><br/>
					<input type='text' value={this.state.nombre} id="nombre" onChange={this.handleChange} defaultValue={this.state.nombre} className="form-control" /><br/>
					<strong>apellido</strong><br/>
					<input type='text' value={this.state.apellido} id="apellido" onChange={this.handleChange} defaultValue={this.state.apellido} className="form-control" /><br/>
					<input type='hidden'  value={this.state.id} id="id_registro" />

					<button onClick={(e)=>this.actualizar_data()} className="btn btn-primary">Actualizar</button>
				</div>
			   )

	}

}

export default Form_actualizar

