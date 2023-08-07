<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Image;
use Illuminate\Support\Facades\File;
class HomeController extends Controller
{



    public function index()
    {
        $posts=Post::all();
        return view('frontend.index')->with('posts', $posts);
    }




    public function store(Request $request,$id)
    {
        if($request->hasFile("cover")){
            $file=$request->file("cover");
            $imageName=time().'_'.$file->getClientOriginalName();
            $file->move(\public_path("cover/"),$imageName);

            $post =new Post([
                "title" =>$request->title,
                "author" =>$request->author,
                "body" =>$request->body,
                "cover" =>$imageName,
            ]);
            $post->save();
            }
            if($request->hasFile("images")){

                $files=$request->file("images");
                foreach($files as $file){
                    $imageName=time().'_'.$file->getClientOriginalName();
                    $request['post_id']=$post->id;
                    $request['image']=$imageName;
                    $file->move(\public_path("/images"),$imageName);
                    Image::create($request->all());
                }

            }

    }
    public function update(Request $request,$id)
    {
     $post=Post::findOrFail($id);
     if($request->hasFile("cover")){
         if (file::exists("cover/".$post->cover)) {
             File::delete("cover/".$post->cover);
         }
         $file=$request->file("cover");
         $post->cover=time()."_".$file->getClientOriginalName();
         $file->move(\public_path("/cover"),$post->cover);
         $request['cover']=$post->cover;
     }

        $post->update([
            "title"=>$request->title,
            "author"=>$request->author,
            "body"=>$request->body,
            "cover"=>$post->cover,

        ]);

        if($request->hasFile("images")){
            $files=$request->file("images");
            foreach($files as $file){
                $imagename=time()."-".$file->getClientOriginalName();
                $request["post_id"]=$id;
                $request["image"]=$imagename;
                $file->move(\public_path("images"),$imagename);
                Image::create($request->all());
            }
        }

        return redirect("/dashboard-layout");
    }
}





