<?php

namespace App\Http\Controllers;

use App\Trajet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TrajetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $trajet = Trajet::all();
        return $trajet;
        //
    }


    public function historique($idConducteur)
    {
        return Trajet::where('id_conducteur', '=', $idConducteur)->orderBy('id', 'DESC')->get();
    }



    public function create(Request $request)
    {
        Trajet::create();
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($trajet = Trajet::create($request->all()))
        {
            return response()->json($trajet, 201);
        }else
            return response()->json(['data'=>'error in the create'], 500);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Trajet  $trajet
     * @return \Illuminate\Http\Response
     */
    public function show(Trajet $trajet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Trajet  $trajet
     * @return \Illuminate\Http\Response
     */
    public function edit(Trajet $trajet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Trajet  $trajet
     * @return \Illuminate\Http\Response
     */


    public function update(Request $request)
    {
        $TrajetUpdate = Trajet::findOrFail($request->input('id'));
        if($Trajet = $TrajetUpdate->update($request->all()))
        {
            return response()->json($Trajet, 201);
        }else
            return response()->json(['data'=>'error in the update'], 500);
    }

    public function close($idTrajet)
    {
        if($trajet =DB::update("update trajets set etats = 1 where id = $idTrajet"))
        {
            return response()->json($trajet, 202);
        }else
            return response()->json(['data'=>'error in the update'], 500);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Trajet  $trajet
     * @return \Illuminate\Http\Response
     */

    public function destroy($idTrajet)
    {
        if ($trajet= Trajet::findOrFail($idTrajet)) {
            $trajet->delete();
            return response()->json(null, 202);
        } else
            return response()->json(['data' => 'error in the delete'], 500);

    }
}
