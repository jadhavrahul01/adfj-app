<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Testimonial;
use App\Models\Image;
use Illuminate\Support\Facades\File;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::all();
        return view('admin.testimonial')->with('testimonials', $testimonials);
    }
    public function create()
    {


        return view('admin.addtestimonial');
    }

 public function store(Request $request)
    {
        if ($request->hasFile("cover")) {
            $file = $request->file("cover");
            $imageName = time() . '_' . $file->getClientOriginalName();
            $file->move(\public_path("testiimages/"), $imageName);

            $testimonials = new Testimonial([
                "custname" => $request->custname,
                "custreview" => $request->custreview,
                "custimg" => $imageName,
                "custstar" => $request->custstar,

            ]);
            $testimonials->save();
        }


        return redirect("/admin/allposts");
    }

    // ?Edit function for posts
    public function edit($id)
    {
        $posts = Post::findOrFail($id);
        $pservices = Pservices::all();
        $stypes = Stypes::all();
        return view('admin.edit')->with('posts', $posts)->with('pservices', $pservices)->with('stypes', $stypes);
    }

    // ?Update function for posts
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        if ($request->hasFile("cover")) {
            if (file::exists("posts/" . $post->media)) {
                File::delete("posts/" . $post->media);
            }
            $file = $request->file("cover");
            $post->media = time() . "_" . $file->getClientOriginalName();
            $file->move(\public_path("/posts"), $post->media);
            $request['cover'] = $post->media;
        }

        $post->update([
            "custname" => $request->custname,
            "custreview" => $request->custreview,
            "custimg" => $request->custimg,
            "custstar" => $request->custstar,
        ]);

        if ($request->hasFile("images")) {
            $files = $request->file("images");
            foreach ($files as $file) {
                $imagename = time() . "-" . $file->getClientOriginalName();
                $request["post_id"] = $id;
                $request["image"] = $imagename;
                $file->move(\public_path("images"), $imagename);
                Image::create($request->all());
            }
        }

        return redirect("/admin/allposts");
    }

    public function destroy($id)
    {
        $posts = Post::findOrFail($id);

        if (File::exists("cover/" . $posts->cover)) {
            File::delete("cover/" . $posts->cover);
        }
        $posts->delete();
        return back();
    }

    public function deletecover($id)
    {
        $cover = Post::findOrFail($id)->cover;
        if (File::exists("cover/" . $cover)) {
            File::delete("cover/" . $cover);
        }
        return back();
    }

    public function addtype(Request $request)
    {
        $stypes = new Stypes([
            "stype_name" => $request->type,
            "slug" => $request->slug,
            "pservices_id" => $request->service,
        ]);
        $stypes->save();
        return redirect("/admin/add-type");
    }

    public function stypeedit($id)
    {
        $stypes = Stypes::findOrFail($id);
        $pservices = Pservices::all();
        return view('admin.stypesedit')->with('stypes', $stypes)->with('pservices', $pservices);
    }




}


