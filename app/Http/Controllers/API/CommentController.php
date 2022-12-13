<?php

namespace App\Http\Controllers\API;

use App\Actions\API\CommentAction;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function getComments($id){
        $resp = CommentAction::getComments($id);
        return response()->json($resp);
    }

    public function getCommentsUser(){
        return CommentAction::getCommentsUser();
    }

    public function addComment(Request $request){
        return CommentAction::addComment($request);
    }

}
