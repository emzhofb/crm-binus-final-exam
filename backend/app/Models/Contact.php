<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
	// Menambahkan atribut yang dapat diisi secara massal
    protected $fillable = [
        'name',
        'company',
        'email',
        'phone',
    ];
}
