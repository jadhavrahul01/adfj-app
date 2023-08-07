@extends('admin.includes.app')

@section('content')
    <div class="container" style="padding-top:20px;">

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h2>Add New Post</h2>
                    </div>
                    <div class="card-body">
                        <form action="/post" method="post" enctype="multipart/form-data">
                            @csrf
                            <input type="text" name="title" class="form-control m-2" placeholder="title">
                            <input type="text" name="author" class="form-control m-2" placeholder="author">
                            <input type="text" name="location" class="form-control m-2" placeholder="location">
                            <input type="date" name="datetime" class="form-control m-2" placeholder="date-time">
                            <label class="m-2">Cover Image</label>
                            <input type="file" id="input-file-now-custom-3" class="form-control m-2" name="cover">
                            {{-- <label class="m-2">Images</label>
                        <input type="file" id="input-file-now-custom-3" class="form-control m-2" name="images[]" multiple> --}}

                            <button type="submit" class="btn btn-success mt-3 ">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endsection