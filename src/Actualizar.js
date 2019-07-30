import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/bootstrap.css'
import { BrowserRouter, Route} from "react-router-dom";



class Form_actualizar extends React.Component{




	regresar(){

			window.location='/'


	}

	getDataForm(){

	    var nomb = document.getElementById('nombre').value;
		var ape = document.getElementById('apellido').value;
		var id_r = document.getElementById('id_registro').value

		return  {nombre:nomb,apellido:ape,id:id_r};
	}


    componentDidMount(){
    	const { match: { params } } = this.props;

    	//alert(params.id)
    }

    cargar_usuario(id_usuario){

   		axios.get(`http://localhost:8000/api/mostrar_persona/${id_usuario}`).then(resp=>{
   						

   		}).catch(error=>{

   			console.log(error);

   		});


    }

	actualizar_data(){

			const data =this.getDataForm();

			axios.get(`http://localhost:8000/api/actualizar/${data.nombre}/${data.apellido}/${data.id}`).then(data=>{

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
					<input type='text' value="" id="nombre" className="form-control" /><br/>
					<strong>apellido</strong><br/>
					<input type='text' value="" id="apellido" className="form-control" /><br/>
					<input type='hidden'  value="" id="id_registro" />

					<button onClick={(e)=>this.actualizar_data()} className="btn btn-primary">Actualizar</button>
				</div>
			   )

	}

}

export default Form_actualizar

