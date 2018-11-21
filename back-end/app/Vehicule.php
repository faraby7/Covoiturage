<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicule extends Model
{
    protected $fillable = [

        'id',
        'coleur',
        'nb_places',
        'puissance',
        'idconducteur'
    ];
}
