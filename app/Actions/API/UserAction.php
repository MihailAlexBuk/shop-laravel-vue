<?php

namespace App\Actions\API;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserAction{
    public function updateUserData($data){
        $user = User::where('id', Auth::id())->first();

        if($data['new_password'] !== null || $data['new_password_confirmation'] !== null || $data['old_password'] !== null){
            if($data['new_password'] === $data['new_password_confirmation']){
                if(Hash::check($data['old_password'], $user->password)){
                    $user->password = Hash::make($data['new_password']);
                    $user->update();
                }else{
                    return response()->json('The old password was entered incorrectly');
                }
            }else{
                return response()->json('Passwords do not match');
            }
        }

        if($data['name'] !== null){
            $user->name = $data['name'];
            $user->update();
        }

        return response()->json('Success');
    }
}
