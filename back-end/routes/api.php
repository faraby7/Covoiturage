<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Table User
Route::get('/user', 'UtilisateurController@index');
Route::post('/user/add', 'UtilisateurController@create');
Route::post('/user/login', 'UtilisateurController@login');
Route::post('/user/update', 'UtilisateurController@update');
Route::get('/user/passager/{id}','UtilisateurController@Passager');
Route::get('/user/conducteur/{id}','UtilisateurController@Conducteur');

//Table trajet
Route::get('/trajet', 'TrajetController@index');
Route::get('/trajet/conducteur/{id}', 'TrajetController@historique');
Route::post('/trajet/add', 'TrajetController@store');
Route::delete('/trajet/del/{id}', 'TrajetController@destroy');
Route::delete('/trajet/close/{id}', 'TrajetController@close');
Route::post('trajet/update', 'TrajetControllerr@update');

//Table Conducteur
Route::get('/conducteur/{id}', 'ConducteurController@index');

//Table Vehicule
Route::get('/vehicule/conducteur/{id}', 'VehiculeController@ConducteurVoiture');



//Table Reservation
Route::get('/reservation/{id}','ReservationController@getIdReservation');
Route::get('/reservation/historique/{id}','ReservationController@getReservationPassager');
Route::delete('/reservation/acceptation/{id}','ReservationController@Accceptation');
Route::delete('/reservation/refus/{id}','ReservationController@Refus');


