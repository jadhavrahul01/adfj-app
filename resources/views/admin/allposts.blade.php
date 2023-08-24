@extends('admin.includes.app')
@section('title', 'All Posts')
@section('content')
    <div class="page order-2 flex-grow-1">
        <!--[ Start:: page header link ]-->
        @include('admin.includes.header')
        <div style="text-align: right;margin-bottom:10px;" class="ms-sm-auto mb-10 mt-sm-0 addpost">

            <a href="{{ route('admin.addposts') }}" title="Widget" class="btn btn-primary">Add Post</a>
        </div>
        <!--[ Start:: page body area ]-->
        <main class="page-body">
            <div class="container-fluid">
                <!--[ Start:: My Dashboard ]-->
                <div class="row g-3 row-deck">
                    <div class="col-md-5 alert-message">
                        @include('admin.message')
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title fw-normal mb-0">All Posts</h5>
                                <form action="" method="get">
                                    <div class="card-tools d-flex">
                                        <div class="card-title mt-1 me-2">
                                            <a href="{{ route('admin.allposts') }}" class="btn btn-sm text-grey">X</a>
                                        </div>
                                        <div class="input-group input-group" style="width: 100%; height:15px">

                                            <input type="text" name="keyword" class="form-control float-right"
                                                placeholder="Search" value="{{ Request::get('keyword') }}">
                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn-default">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </form>

                                <div class="card-action">
                                    <div class="dropdown">
                                        {{-- <a href="#" class="card-options-remove text-danger"
                                            data-toggle="card-remove">
                                            <svg width="16" height="16" viewbox="0 0 16 16" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-opacity="0.4"
                                                    d="M14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14ZM2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0Z">
                                                </path>
                                                <path fill-opacity="1"
                                                    d="M5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11V5C12 4.73478 11.8946 4.48043 11.7071 4.29289C11.5196 4.10536 11.2652 4 11 4H5ZM6.677 6.323L8 7.6465L9.323 6.323C9.34624 6.29976 9.37384 6.28132 9.40421 6.26874C9.43458 6.25616 9.46713 6.24968 9.5 6.24968C9.53287 6.24968 9.56542 6.25616 9.59579 6.26874C9.62616 6.28132 9.65376 6.29976 9.677 6.323C9.70024 6.34624 9.71868 6.37384 9.73126 6.40421C9.74384 6.43458 9.75032 6.46713 9.75032 6.5C9.75032 6.53287 9.74384 6.56542 9.73126 6.59579C9.71868 6.62616 9.70024 6.65376 9.677 6.677L8.3535 8L9.677 9.323C9.70024 9.34624 9.71868 9.37384 9.73126 9.40421C9.74384 9.43458 9.75032 9.46713 9.75032 9.5C9.75032 9.53287 9.74384 9.56542 9.73126 9.59579C9.71868 9.62616 9.70024 9.65376 9.677 9.677C9.65376 9.70024 9.62616 9.71868 9.59579 9.73126C9.56542 9.74384 9.53287 9.75032 9.5 9.75032C9.46713 9.75032 9.43458 9.74384 9.40421 9.73126C9.37384 9.71868 9.34624 9.70024 9.323 9.677L8 8.3535L6.677 9.677C6.65376 9.70024 6.62616 9.71868 6.59579 9.73126C6.56542 9.74384 6.53287 9.75032 6.5 9.75032C6.46713 9.75032 6.43458 9.74384 6.40421 9.73126C6.37384 9.71868 6.34624 9.70024 6.323 9.677C6.29976 9.65376 6.28132 9.62616 6.26874 9.59579C6.25616 9.56542 6.24968 9.53287 6.24968 9.5C6.24968 9.46713 6.25616 9.43458 6.26874 9.40421C6.28132 9.37384 6.29976 9.34624 6.323 9.323L7.6465 8L6.323 6.677C6.27606 6.63006 6.24968 6.56639 6.24968 6.5C6.24968 6.43361 6.27606 6.36994 6.323 6.323C6.36994 6.27606 6.43361 6.24968 6.5 6.24968C6.56639 6.24968 6.63006 6.27606 6.677 6.323V6.323Z">
                                                </path>
                                            </svg>
                                        </a> --}}
                                        <a href="#" class="card-fullscreen small text-warning"
                                            data-bs-toggle="tooltip" title="Card Full Screen">
                                            <svg width="16" height="16" viewbox="0 0 16 16" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-opacity="0.4"
                                                    d="M10 0.5C10 0.367392 10.0527 0.240215 10.1464 0.146447C10.2402 0.0526784 10.3674 0 10.5 0L14.5 0C14.8978 0 15.2794 0.158035 15.5607 0.43934C15.842 0.720644 16 1.10218 16 1.5V5.5C16 5.63261 15.9473 5.75979 15.8536 5.85355C15.7598 5.94732 15.6326 6 15.5 6C15.3674 6 15.2402 5.94732 15.1464 5.85355C15.0527 5.75979 15 5.63261 15 5.5V1.5C15 1.36739 14.9473 1.24021 14.8536 1.14645C14.7598 1.05268 14.6326 1 14.5 1H10.5C10.3674 1 10.2402 0.947322 10.1464 0.853553C10.0527 0.759785 10 0.632608 10 0.5ZM0.5 10C0.632608 10 0.759785 10.0527 0.853553 10.1464C0.947322 10.2402 1 10.3674 1 10.5V14.5C1 14.6326 1.05268 14.7598 1.14645 14.8536C1.24021 14.9473 1.36739 15 1.5 15H5.5C5.63261 15 5.75979 15.0527 5.85355 15.1464C5.94732 15.2402 6 15.3674 6 15.5C6 15.6326 5.94732 15.7598 5.85355 15.8536C5.75979 15.9473 5.63261 16 5.5 16H1.5C1.10218 16 0.720644 15.842 0.43934 15.5607C0.158035 15.2794 0 14.8978 0 14.5L0 10.5C0 10.3674 0.0526784 10.2402 0.146447 10.1464C0.240215 10.0527 0.367392 10 0.5 10ZM15.5 10C15.6326 10 15.7598 10.0527 15.8536 10.1464C15.9473 10.2402 16 10.3674 16 10.5V14.5C16 14.8978 15.842 15.2794 15.5607 15.5607C15.2794 15.842 14.8978 16 14.5 16H10.5C10.3674 16 10.2402 15.9473 10.1464 15.8536C10.0527 15.7598 10 15.6326 10 15.5C10 15.3674 10.0527 15.2402 10.1464 15.1464C10.2402 15.0527 10.3674 15 10.5 15H14.5C14.6326 15 14.7598 14.9473 14.8536 14.8536C14.9473 14.7598 15 14.6326 15 14.5V10.5C15 10.3674 15.0527 10.2402 15.1464 10.1464C15.2402 10.0527 15.3674 10 15.5 10Z">
                                                </path>
                                                <path fill-opacity="0.9"
                                                    d="M1.14645 1.14645C1.24021 1.05268 1.36739 1 1.5 1H5.5C5.63261 1 5.75979 0.947322 5.85355 0.853553C5.94732 0.759785 6 0.632608 6 0.5C6 0.367392 5.94732 0.240215 5.85355 0.146447C5.75979 0.0526784 5.63261 0 5.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V5.5C0 5.63261 0.0526784 5.75979 0.146447 5.85355C0.240215 5.94732 0.367392 6 0.5 6C0.632608 6 0.759785 5.94732 0.853553 5.85355C0.947322 5.75979 1 5.63261 1 5.5V1.5C1 1.36739 1.05268 1.24021 1.14645 1.14645Z">
                                                </path>
                                                <rect fill-opacity="0.9" x="3" y="5" width="11"
                                                    height="6" rx="1"></rect>
                                            </svg>
                                        </a>


                                        {{-- <a href="#" class="dropdown-toggle after-none text-primary"
                                            data-bs-toggle="dropdown" aria-expanded="false" title="More Action">
                                            <svg width="16" height="16" viewbox="0 0 16 16" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-opacity="0.4"
                                                    d="M2 10H5C5.26522 10 5.51957 10.1054 5.70711 10.2929C5.89464 10.4804 6 10.7348 6 11V14C6 14.2652 5.89464 14.5196 5.70711 14.7071C5.51957 14.8946 5.26522 15 5 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V11C1 10.7348 1.10536 10.4804 1.29289 10.2929C1.48043 10.1054 1.73478 10 2 10ZM11 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V5C15 5.26522 14.8946 5.51957 14.7071 5.70711C14.5196 5.89464 14.2652 6 14 6H11C10.7348 6 10.4804 5.89464 10.2929 5.70711C10.1054 5.51957 10 5.26522 10 5V2C10 1.73478 10.1054 1.48043 10.2929 1.29289C10.4804 1.10536 10.7348 1 11 1ZM11 10C10.7348 10 10.4804 10.1054 10.2929 10.2929C10.1054 10.4804 10 10.7348 10 11V14C10 14.2652 10.1054 14.5196 10.2929 14.7071C10.4804 14.8946 10.7348 15 11 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10H11ZM11 0C10.4696 0 9.96086 0.210714 9.58579 0.585786C9.21071 0.960859 9 1.46957 9 2V5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H14C14.5304 7 15.0391 6.78929 15.4142 6.41421C15.7893 6.03914 16 5.53043 16 5V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L11 0ZM2 9C1.46957 9 0.960859 9.21071 0.585786 9.58579C0.210714 9.96086 0 10.4696 0 11L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H5C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14V11C7 10.4696 6.78929 9.96086 6.41421 9.58579C6.03914 9.21071 5.53043 9 5 9H2ZM9 11C9 10.4696 9.21071 9.96086 9.58579 9.58579C9.96086 9.21071 10.4696 9 11 9H14C14.5304 9 15.0391 9.21071 15.4142 9.58579C15.7893 9.96086 16 10.4696 16 11V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H11C10.4696 16 9.96086 15.7893 9.58579 15.4142C9.21071 15.0391 9 14.5304 9 14V11Z">
                                                </path>
                                                <path fill-opacity="0.9"
                                                    d="M0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.53043 0.210714 6.03914 0.585786 6.41421C0.960859 6.78929 1.46957 7 2 7H5C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5V2C7 1.46957 6.78929 0.960859 6.41421 0.585786C6.03914 0.210714 5.53043 0 5 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786Z">
                                                </path>
                                            </svg>
                                        </a> --}}
                                        {{-- <div class="dropdown-menu dropdown-menu-end shadow border-0 rounded-4 p-2">
                                            <a href="javascript:void(0)" class="dropdown-item"><i
                                                    class="me-3 fa fa-share"></i>Share</a>
                                            <a href="javascript:void(0)" class="dropdown-item"><i
                                                    class="me-3 fa fa-pencil"></i>Rename</a>
                                            <div class="dropdown-divider"></div>
                                            <a href="javascript:void(0)" class="dropdown-item"><i
                                                    class="me-3 fa fa-circle-o"></i>No status</a>
                                            <a href="javascript:void(0)" class="dropdown-item"><i
                                                    class="me-3 fa fa-link"></i>Copy Link Address</a>
                                            <a href="javascript:void(0)" class="dropdown-item"><i
                                                    class="me-3 fa fa-folder"></i>Move to</a>
                                            <a href="javascript:void(0)" class="dropdown-item"><i
                                                    class="me-3 fa fa-copy"></i>Copy to</a>
                                            <a href="javascript:void(0)" class="dropdown-item"><i
                                                    class="me-3 fa fa-edit"></i> Make Private</a>
                                            <a href="javascript:void(0)" class="dropdown-item"><i
                                                    class="me-3 fa fa-download"></i> Download</a>
                                            <div class="dropdown-divider"></div>
                                            <a href="javascript:void(0)" class="dropdown-item"><i
                                                    class="me-3 fa fa-trash"></i> Delete</a>
                                        </div> --}}
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">

                                <div class="table-responsive">
                                    <table class="table table-custom mb-0">
                                        <thead>
                                            <tr>
                                                <th>#No</th>
                                                <th>Media</th>
                                                <th>Project Title</th>
                                                <th>Service Category</th>
                                                <th>Sub-Service Category</th>
                                                <th>Date</th>
                                                <th>Location</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                                <th class="text-center">Featured Post</th>
                                            </tr>
                                        </thead>


                                        <tbody>
                                            @if ($posts->isNotEmpty())
                                                @foreach ($posts as $post)
                                                    <tr style="vertical-align: middle;">
                                                        <th scope="row">
                                                            {{ $post->id }}</th>
                                                        <td><img src="/posts/{{ $post->media }}" class="img-responsive"
                                                                style="max-height:100px; max-width:100px" alt=""
                                                                srcset=""></td>
                                                        <td>{{ $post->title }}</td>
                                                        <td>{{ $post->pservices->service_name }}</td>
                                                        <td>{{ $post->stypes->stype_name }}</td>
                                                        <td>{{ $post->date }}</td>
                                                        <td>{{ $post->location }}</td>
                                                        <td><a href="/admin/edit/{{ $post->id }}"
                                                                class="btn btn-outline-primary">Edit</a>
                                                        </td>
                                                        <td>
                                                            <form action="/admin/delete/{{ $post->id }}"
                                                                method="post">
                                                                <button class="btn btn-outline-danger"
                                                                    onclick="return confirm('Are you sure?');"
                                                                    type="submit">Delete</button>
                                                                @csrf
                                                                @method('delete')
                                                            </form>
                                                        </td>
                                                        {{-- @if ($post->featured_post == 1)
                                                            <td class="text-center vertical-center">
                                                                @if ($post->fstatus == 1)
                                                                    <p class="text-success">Added</p>
                                                                @else
                                                                    <p class="text-danger">Removed</p>
                                                                @endif
                                                                <form action="/admin/fstatus/{{ $post->id }}"
                                                                    method="POST">
                                                                    @csrf
                                                                    @method('put')
                                                                    <select name="fstatus" id="status"
                                                                        class="form-control">
                                                                        <option value="1">Add</option>
                                                                        <option value="0">Remove</option>
                                                                    </select>
                                                                    <button class="btn btn-sm btn-outline-secondary mt-2"
                                                                        type="submit">Submit</button>
                                                                </form>
                                                            </td>
                                                        @endif --}}
                                                        <td>
                                                            <div class="toggle-button-cover">
                                                                <div class="button-cover">
                                                                    <div class="button r" id="button-3">
                                                                        <input type="hidden" value="{{ $post->id }}"
                                                                            id="id">
                                                                        <input type="checkbox" id="fstatus" value="0"
                                                                            name="featured" class="checkbox"
                                                                            {{ $post->featured_post == 1 ? '' : 'checked' }} />
                                                                        <div class="knobs"></div>
                                                                        <div class="layer"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            @else
                                                <tr>
                                                    <td colspan="10" class="text-center">No records found!</td>
                                                </tr>
                                            @endif
                                        </tbody>
                                    </table>
                                    {{ $posts->links() }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        @include('admin.includes.footer')
    </div>
@endsection

@section('customJs')
    <script>
        $('#fstatus').click(function(event) {
            event.preventDefault();
            var element = $(this);
            var id = $('#id').val();
            $.ajax({
                url: '/admin/status/'
                id,
                type: 'post',

                data: element.serializeArray(),
                dataType: 'json',
                success: function(response) {
                    if (response['status'] == true) {
                        return 200;
                    }
                },
                error: function(jqXHR, exception) {
                    alert('Something went wrong');
                }
            })
        });
    </script>
@endsection
