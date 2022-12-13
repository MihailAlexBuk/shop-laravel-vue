<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class CheckoutRequest extends FormRequest
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
            'user.fname' => 'required',
            'user.lname' => 'required',
            'user.email' => 'required',
            'user.phone' => 'required',
            'user.address1' => 'required',
            'user.address2' => 'required',
            'user.country' => 'required',
            'user.city' => 'required',
            'cart.total' => 'required',
            'user.pincode' => 'required',
        ];
    }
}
