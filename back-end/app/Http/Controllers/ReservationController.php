<?php

namespace App\Http\Controllers;

use App\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reservation = Reservation::all();
        return $reservation;

    }



    public function getIdReservation($idTrajet)
    {
       return DB::table('reservations')->select('reservations.*','passagers.*','utilisateurs.*')
            ->join('passagers','passagers.id','=','reservations.id_passager')
           ->join('utilisateurs','utilisateurs.id','=','passagers.id_utilisateur')
           ->where('reservations.id_trajet' ,'=' ,$idTrajet)
            ->get();


    }


    public function getReservationPassager($idPassager)
    {
        return DB::table('reservations')->select('reservations.*','passagers.*','trajets.*')
            ->join('passagers','passagers.id','=','reservations.id_passager')
            ->join('trajets','trajets.id','=','reservations.id_trajet')
            ->where('passagers.id' ,'=' ,$idPassager)
            ->get();
    }



    public function Accceptation($idReservation)
    {
        if($reservation =DB::update("update reservations set acceptation = 2 where idreservation = $idReservation"))
        {
            return response()->json($reservation, 202);
        }else
            return response()->json(['data'=>'error in the update'], 500);

    }


    public function Refus($idReservation)
    {
        if($reservation =DB::update("update reservations set acceptation = 0 where idreservation = $idReservation"))
        {
            return response()->json($reservation, 202);
        }else
            return response()->json(['data'=>'error in the update'], 500);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reservation $reservation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reservation $reservation)
    {
        //
    }
}
