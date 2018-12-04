<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trajet extends Model
{
    protected $fillable = [

        'id',
        'date_depart',
        'date_arrive',
        'lieu_depart',
        'lieu_arrive',
        'prix',
        'id_conducteur',
        'nbplace',
        'etats',
        'description'
    ];
}

