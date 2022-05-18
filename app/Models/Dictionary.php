<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Dictionary extends Model
{
    use HasFactory;

    public function translations(): HasMany
    {
        return $this->hasMany(Translation::class);
    }
}
