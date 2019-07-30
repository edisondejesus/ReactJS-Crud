import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/bootstrap.css';
import Form_actualizar from './Actualizar';
import { BrowserRouter, Route} from "react-router-dom";




class Crud_persona extends React.Component{

  constructor(props){
    super(props);
    this.state = {personas:[{nombre:'Edison De jesus'}]};


  }


  
  cargar_personas(){

     axios.get(`http://localhost:8000/api/personas`)
      .then(res => {

        const person = res.data;

           this.setState({
                personas:person

           });


      })


  }


  guardar_persona=()=>{

      var nomb = document.getElementById('nombre').value;
      var aped = document.getElementById('apellido').value;

         axios.get(`http://localhost:8000/api/guardar_personas/${nomb}/${aped}`)
          .then(function (response) {
            console.log(response);
             this.cargar_personas();

          })
          .catch(function (error) {
            console.log(error);
          });

  }


  eliminar(id){

    axios.get(`http://localhost:8000/api/delete/${id}`).then(data=>{


        alert('registro eliminado con exito!');
              this.cargar_personas();




    }).catch(error=>{

        alert("tenemos un problema");
    })

  }

  actualizar(id){

      window.location=`/actualizar/${id}`;
  }

  componentDidMount(){

      this.cargar_personas();
  }



  buscar_personas =()=>{

    var buscar = document.getElementById('buscar').value;

      axios.get(`http://localhost:8000/api/buscar_persona/${buscar}`).then(res=>{

          const person = res.data;
          console.log(person);
            this.setState({
                personas:person

           });

      }).catch(error=>{

          console.log("tenemos un problema");
      });



  }

  test(){

    alert("hola");
  }

  /*
  actualizar_data(nom,ap,id){
    
        ReactDOM.render(<Form_actualizar nombre={nom} apellido={ap} id_registro={id} />
          ,document.getElementById('root'));
    
  }
  */


  render(){


    return <div>
            <div>
              <h1>Crud de personas</h1>
              <strong>Nombre</strong>
              <input type='text' id='nombre' />
              <strong>Apellido</strong>
              <input type='text' id='apellido'  />
              <button onClick={this.guardar_persona}>Guradar</button><br/>
               <strong>Buscar usuario</strong>
                <input type="text" className="form-control" 
                id="buscar" placeholder="Escriba el nombre de la persona" 
                    onKeyUp={()=>this.buscar_personas()} />
              </div><br/>
                
             <table border='1' className='table'>
              <tr>
                  <td>Nombre</td>
                  <td>Apellido</td>
                  <td>Actualizar</td>
                  <td>Eliminar</td>
              </tr>
              {
                this.state.personas.map(data=>(

                     <tr>
                       <td>{data.nombre}</td>
                       <td>{data.apellido}</td>
                        <td><button className="btn-success" onClick={(e)=>this.actualizar(data.id)}>Actualizar</button> </td>
                       <td><button className="btn-danger" onClick={(e)=>this.eliminar(data.id)}>Eliminar</button></td>
                     </tr>

                  ))


              }
              </table>
              <BrowserRouter>
                  <Route path="/actualizar/:id" component={Form_actualizar} />
              </BrowserRouter>
          
          </div>
  }


}




ReactDOM.render(<Crud_persona/>,document.getElementById('root'));