<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;

class Persona extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    
        $persona = App\Persona::all();

        return $persona;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($nombre,$apellido)
    {
                  
                  //header('Access-Control-Allow-Origin: *');
  
        $persona = new App\persona();
        $persona->nombre = $nombre;
        $persona->apellido = $apellido;
        $persona->save();
 

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {



    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    
        $mostrar = App\Persona::find($id);  

        return $mostrar;

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $pers)
    {

    }   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $pers)
    {
               
            $persona = App\Persona::find($pers->id);
            $persona->nombre = $pers->nombre;
            $persona->apellido = $pers->apellido;
            $persona->save();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $persona = App\Persona::find($id);
        $persona->delete();
    }

    public function buscar_persona($nombre){

            $persona =  new App\Persona();
           $persona =  $persona->where("nombre","like","$nombre%")->get();

            return  $persona;

    }

}
