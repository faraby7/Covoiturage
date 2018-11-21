<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    //
    protected $fillable = [

        'id',
        'nom',
        'prenom',
        'sex',
        'adresse',
        'email',
        'password',
        'telephone',
        'description',
        'img_prf',
        'date_naissance'

    ];
}
