<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDictionaryRequest;
use App\Imports\DictionaryImport;
use App\Models\Dictionary;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\RedirectResponse;

class DictionaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Collection
     */
    public function index(): Collection
    {
        return Dictionary::all(['id', 'title']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreDictionaryRequest $request
     * @return RedirectResponse
     */
    public function store(StoreDictionaryRequest $request): RedirectResponse
    {
        $file = $request->file('dictionary');
        $dictionary = DictionaryImport::model($file);
        return redirect()->route('dictionary.show', $dictionary);
    }

    /**
     * Display the specified resource.
     *
     * @param Dictionary $dictionary
     * @return array
     */
    public function show(Dictionary $dictionary): array
    {
        return [
            'id' => $dictionary->getKey(),
            'title' => $dictionary->title,
            'translations' => $dictionary->translations->map->only(['en', 'ru']),
        ];
    }
}
