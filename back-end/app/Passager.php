<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Passager extends Model
{
    protected $fillable = [

        'id',
        'id_utilisateur',
        'nb_reservation',

    ];
}
