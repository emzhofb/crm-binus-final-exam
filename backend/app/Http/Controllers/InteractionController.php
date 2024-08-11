<?php

namespace App\Http\Controllers;

use App\Models\Interaction;
use App\Models\Contact;
use Illuminate\Http\Request;

class InteractionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'contact_id' => 'required|exists:contacts,id',
            'type' => 'required|string',
            'details' => 'required|string',
        ]);

        $interaction = Interaction::create($request->all());

        return response()->json($interaction, 201);
    }

    public function index()
    {
        $interactions = Interaction::all();
        return response()->json($interactions, 200);
    }
}
