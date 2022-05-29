<?php

namespace App\Imports;

use App\Models\Dictionary;
use App\Models\Translation;
use Illuminate\Http\UploadedFile;

class DictionaryImport
{
    public static function model(UploadedFile $file): Dictionary
    {
        $dictionary = Dictionary::create(['title' => $file->getClientOriginalName()]);

        $rows = file($file);
        for ($i = 1; $i < count($rows); $i++) {
            $row = str_getcsv($rows[$i]);
            $translation = new Translation(['en' => $row[0], 'ru' => $row[1]]);
            $translation->dictionary()->associate($dictionary);
            $translation->save();
        }

        return $dictionary;
    }
}
