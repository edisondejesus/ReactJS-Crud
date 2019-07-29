<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/Post','Post@index');


Route::get('/form_post','Post@render_form');


Route::get('/api/personas','Persona@index');

Route::get('/api/guardar_personas/{nombre}/{apellido}','Persona@create');

Route::get('/api/mostrar_persona/{id}','Persona@show');

Route::get('/api/delete/{id}','Persona@destroy');
Route::get('/api/buscar_persona/{nombre}','Persona@buscar_persona');