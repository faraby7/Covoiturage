<?php

namespace App\Http\Controllers;

use App\Conducteur;
use App\Passager;
use App\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UtilisateurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $users = Utilisateur::all();
        return $users;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if($utilisateur =  Utilisateur::create($request->all()))
        {
            return response()->json($utilisateur, 201);
        }else
            return response()->json(['data'=>'error in the insert'], 500);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Utilisateur  $utilisateur
     * @return \Illuminate\Http\Response
     */
    public function show(Utilisateur $utilisateur)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Utilisateur  $utilisateur
     * @return \Illuminate\Http\Response
     */
    public function edit(Utilisateur $utilisateur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Utilisateur  $utilisateur
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $utilisateurUpdate = Utilisateur::findOrFail($request->input('id'));

        if($utilisateur = $utilisateurUpdate->update($request->all()))
        {
            return response()->json($utilisateur, 201);
        }else
            return response()->json(['data'=>'error in the update'], 500);
    }

    public function login(Request $request)
    {
        $utilisateur =  Utilisateur::where(['email'=> $request->input('email')])->where(['password'=> $request->input('password')])->get();

        if(!empty($utilisateur[0]))
        {
            return response()->json($utilisateur, 201);
        }else
            return response()->json(['data'=>'error in the login'], 500);

    }

    public function Passager($idUtilisateur)
    {
        $passager =  Passager::where('id_utilisateur','=',$idUtilisateur)->get();

        if(!empty($passager[0]))
        {
            return response()->json($passager, 201);
        }else{
                return response()->json(['data'=>'error in the login'], 500);
            }
       }

    public function Conducteur($idUtilisateur)
    {
            $conducteur =  Conducteur::where('id_utilisateur','=',$idUtilisateur)->get();

            if(!empty($conducteur[0]))
            {
                return response()->json($conducteur, 201);

            }else {
                return response()->json(['data'=>'error in the login'], 500);
            }

    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Utilisateur  $utilisateur
     * @return \Illuminate\Http\Response
     */
    public function destroy(Utilisateur $utilisateur)
    {
        //
    }
}
