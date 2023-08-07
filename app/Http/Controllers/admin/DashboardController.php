<?php

namespace App\Http\Controllers\admin;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Image;
use Illuminate\Support\Facades\File;
class DashboardController extends Controller
{
    public function index()
    {
        $posts=Post::all();
        return view('admin.dashboard')->with('posts', $posts);
        // $admin = Auth::guard('admin')->user();
        // echo 'Welcome ' . $admin->name . ' <a href="' . route('admin.logout') . '">Logout</a>';
    }
    public function create()
    {
        return view('create');
    }
    public function store(Request $request)
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
        return redirect("/admin/dashboard");
    }

    public function edit($id)
    {
        $posts=Post::findOrFail($id);
        return view('admin.edit')->with('posts',$posts);
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

        return redirect("/admin/dashboard");
    }
    public function destroy($id)
    {
         $posts=Post::findOrFail($id);

         if (File::exists("cover/".$posts->cover)) {
             File::delete("cover/".$posts->cover);
         }
         $images=Image::where("post_id",$posts->id)->get();
         foreach($images as $image){
            if (File::exists("images/".$image->image)) {
                File::delete("images/".$image->image);
            }
         }
         $posts->delete();
         return back();
    }

    public function deleteimage($id){
        $images=Image::findOrFail($id);
        if (File::exists("images/".$images->image)) {
           File::delete("images/".$images->image);
        }

       Image::find($id)->delete();
       return back();
    }

    public function deletecover($id){
        $cover=Post::findOrFail($id)->cover;
        if (File::exists("cover/".$cover)) {
            File::delete("cover/".$cover);
        }
        return back();
    }




    public function logout()
    {

        Auth::guard('admin')->logout();
        return redirect()->route('admin.login');
    }
}
