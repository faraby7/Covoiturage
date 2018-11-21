<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [

        'idreservation',
        'date_reservation',
        'id_trajet',
        'id_passager'

    ];
}
