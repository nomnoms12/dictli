<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDictionaryRequest;
use App\Imports\DictionaryImport;

class DictionaryController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreDictionaryRequest $request
     * @return void
     */
    public function store(StoreDictionaryRequest $request)
    {
        $file = $request->file('dictionary');
        $dictionary = DictionaryImport::model($file);
    }
}
