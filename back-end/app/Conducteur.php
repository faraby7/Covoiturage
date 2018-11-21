<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conducteur extends Model
{
    protected $fillable = [

        'id',
        'id_utilisateur',
        'nb_etoils',

    ];
}
