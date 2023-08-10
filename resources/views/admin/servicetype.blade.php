@extends('admin.includes.app')

@section('content')
    <div class="page order-2 flex-grow-1">
        <!--[ Start:: page header link ]-->
        @include('admin.includes.header')
        <!--[ Start:: page body area ]-->
        <main class="page-body">
            <div class="container-fluid">
                <!--[ Start:: My Dashboard ]-->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h2>Add Service Type</h2>
                            </div>
                            <div class="card-body">
                                <form action="/admin/add-service-type" name="categoryForm" id="categoryForm" method="post"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <input type="text" name="type" id="name" class="form-control m-2"
                                        placeholder="Enter Type Name" required>

                                    <input type="text" name="slug" id="slug" class="form-control m-2 slug"
                                        placeholder="Slug" readonly>

                                    <select name="service" id="service" value="" class="form-control m-2" required>
                                        <option value=""><- Select Service -></option>
                                        @foreach ($pservices as $item)
                                            <option value="{{ $item->id }}">
                                                {{ $item->service_name }}
                                            </option>
                                        @endforeach
                                    </select>

                                    <button type="submit" class="btn btn-success mt-3">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container" style="padding-top:20px;">

                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h2>All Service Types</h2>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-custom mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Type Name</th>
                                                    <th>Service</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                @foreach ($stypes as $type)
                                                    <tr>
                                                        <td>{{ $type->stype_name }}</td>
                                                        <td>{{ $type->pservices->service_name }}</td>
                                                        <td>
                                                            <a href="" class="btn btn-sm btn-outline-primary">
                                                                Edit
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="" class="btn btn-sm btn-outline-danger">
                                                                Delete
                                                            </a>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
        <!--[ Start:: page footer link copywrite ]-->
        @include('admin.includes.footer')
    </div>
@endsection

@section('customJs')
    <script>
        $(function() {
            $(".checkme").click(function() {
                var video = $(this).is(":checked");
                if (video == true) {
                    $(this).parents(".video-card").find(".video-box").show();
                } else {
                    $(this).parents(".video-card").find(".video-box").hide();
                }
            });
        });

        $('#name').change(function() {

            element = $(this);
            $.ajax({
                url: '{{ route('getSlug') }}',
                type: 'get',
                data: {
                    title: element.val()
                },
                dataType: 'json',
                success: function(response) {
                    if (response["status"] == true) {
                        $("#slug").val(response["slug"]);
                    }
                }
            })
        });
    </script>
@endsection