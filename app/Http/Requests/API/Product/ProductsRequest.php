<?php

namespace App\Http\Requests\API\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'page' => 'required|integer',
            'countProduct' => 'required|integer',
            'filter' => 'nullable|array',
            'sort' => 'nullable|integer',
            'search' => 'nullable|string',
        ];
    }
}
