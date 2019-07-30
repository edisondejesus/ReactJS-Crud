<?php

namespace App\Http\Controllers;
use App;
use Illuminate\Http\Request;

class Post extends Controller
{
  

 	public function index(){

 		$posts = App\post::all();


 		return view('post',compact('posts'));

 	}


 	function guardar_post(Request $request){

 			$post = new App\post();
 			$post->titulo = $request->titulo;
 			$post->cuerpo=  $request->cuerpo;
 			$post->save();



 	}

 	function eliminar($id){

 			$post = App\post::find($id);
 			$post->delete();


 	}

 	function update(Request $request){

 		$post = App\post::find($request->id);
 		$post->titulo = $request->nombre;
 		$post->cuerpo = $request->cuerpo;
 		$post->save();

 	}

 	function render_form(){


 		return view('guardar_post');

 	}



}
