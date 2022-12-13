<?php

namespace App\Actions\API;


use App\Models\Comment;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class CommentAction
{
    public function getComments($id){
        $comments = Comment::query()->where('product_id', $id)->get();
        $resp = [];
        foreach ($comments as $comment) {
            $date = Carbon::parse($comment->created_at);
            $user = User::where('id', $comment->user_id)->first();
            array_push($resp, [
                'message' => $comment->message,
                'date' => $suborder['payment_date'] = $date->diffForHumans(),
                'name' => $user->name,
            ]);
        }
        return $resp;
    }

    public function getCommentsUser(){
        if(Auth::check()){
            $comments = Comment::query()->where('user_id', Auth::id())->get();
            $product = [];

            foreach ($comments as $comment) {
                $date = Carbon::parse($comment->created_at);
                $prod = Product::where('id', $comment->product_id)->first();
                array_push($product, [
                    'message' => $comment->message,
                    'date' => $suborder['payment_date'] = $date->toDayDateTimeString(),
                    'prod_id' => $prod->id,
                    'prod_name' => $prod->title,
                ]);
            }
            return response()->json($product);
        }else{
            return response()->json(['status' => 'Login to Continue']);
        }
    }

    public function addComment($request){
        if(Auth::check()){
            $comment = new Comment();
            $comment->user_id = Auth::id();
            $comment->product_id = $request->input('product_id');
            $comment->message = $request->input('message');
            $comment->save();
            return response()->json(['status' => 'Success']);
        }else{
            return response()->json(['status' => 'Login to Continue']);
        }
    }

}
