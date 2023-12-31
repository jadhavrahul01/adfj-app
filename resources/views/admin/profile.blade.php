@extends('admin.includes.app')
@section('title', 'Dashboard')
@section('content')


    <!-- BEGIN: Content-->
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class=" content-header row">
                <div style="margin-bottom: 30px;" class="content-header-left col-md-9 col-12">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="content-header-title float-left mb-0">Account Settings</h2>
                            <div class="breadcrumb-wrapper">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a>
                                    </li>

                                    <li class="breadcrumb-item active"> Account Settings
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="content-body">
                <!-- account setting page -->
                <section id="page-account-settings">
                    <div class="row">
                        <!-- left menu section -->
                        <div class="col-md-3 mb-2 mb-md-0">
                            <ul class="nav nav-pills flex-column nav-left">
                                <!-- general -->
                                <li class="nav-item">
                                    <a class="nav-link active" id="account-pill-general" data-toggle="pill" href="#account-vertical-general" aria-expanded="true">
                                        <i data-feather="user" class="font-medium-3 mr-1"></i>
                                        <span class="font-weight-bold">General</span>
                                    </a>
                                </li>
                                <!-- change password -->
                                <li class="nav-item">
                                    <a class="nav-link" id="account-pill-password" data-toggle="pill" href="#account-vertical-password" aria-expanded="false">
                                        <i data-feather="lock" class="font-medium-3 mr-1"></i>
                                        <span class="font-weight-bold">Change Password</span>
                                    </a>
                                </li>
                                <!-- information -->
                                {{-- <li class="nav-item">
                                    <a class="nav-link" id="account-pill-info" data-toggle="pill" href="#account-vertical-info" aria-expanded="false">
                                        <i data-feather="info" class="font-medium-3 mr-1"></i>
                                        <span class="font-weight-bold">Information</span>
                                    </a>
                                </li> --}}
                                <!-- social -->
                                {{-- <li class="nav-item">
                                    <a class="nav-link" id="account-pill-social" data-toggle="pill" href="#account-vertical-social" aria-expanded="false">
                                        <i data-feather="link" class="font-medium-3 mr-1"></i>
                                        <span class="font-weight-bold">Social</span>
                                    </a>
                                </li> --}}
                                <!-- notification -->
                                {{-- <li class="nav-item">
                                    <a class="nav-link" id="account-pill-notifications" data-toggle="pill" href="#account-vertical-notifications" aria-expanded="false">
                                        <i data-feather="bell" class="font-medium-3 mr-1"></i>
                                        <span class="font-weight-bold">Notifications</span>
                                    </a>
                                </li> --}}
                            </ul>
                        </div>
                        <!--/ left menu section -->

                        <!-- right content section -->
                        <div class="col-md-9">
                            @include('admin.message')
                            @if (session('message'))
                                <h5 class="alert alert-success mb-2">{{ session('message') }}</h5>
                            @endif

                            @if ($errors->any())
                                <ul style="color: rgb(255, 255, 255)!important" class="alert alert-danger">
                                    @foreach ($errors->all() as $error)
                                        <li style="color: rgb(255, 255, 255)!important" class=" alert-danger">
                                            {{ $error }}</li>
                                    @endforeach
                                </ul>
                            @endif
                            <div class="card">
                                <div class="card-body">
                                    <div class="tab-content">

                                        <!-- general tab -->
                                        <div role="tabpanel" class="tab-pane active" id="account-vertical-general" aria-labelledby="account-pill-general" aria-expanded="true">
                                            <form action="/admin/update-profile/{{ Auth::guard('admin')->user()->id }}" method="POST"
                                                enctype="multipart/form-data">
                                                @csrf
                                                @method('put')
                                            <!-- header media -->
                                            <div class="mb-20 media">
                                                <a href="javascript:void(0);" class="mr-25">
                                                    <img src="/profile/{{ Auth::guard('admin')->user()->profile_img }}" id="account-upload-img" class="rounded mr-50" alt="profile image" height="80" width="80">
                                                </a>
                                                <!-- upload and reset button -->
                                                <div class="media-body mt-75 ml-1">

                                                    <label for="account-upload" class="btn btn-sm btn-primary mb-75 mr-75">Change Profile Picture</label>

                                                    <input type="file" name="cover" id="account-upload" hidden="" accept="image/*">
                                                    {{-- <button class="btn btn-sm btn-outline-secondary mb-75">Reset</button> --}}
                                                    <p>Dimensions 85x85 px</p>
                                                </div>
                                                <!--/ upload and reset button -->
                                            </div>
                                            <!--/ header media -->

                                            <!-- form -->
                                            <form class="validate-form mt-2">
                                                <div style="margin-top: 15px;" class="row">
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-username">Full Name</label>
                                                            <input type="text" class="form-control" id="account-username" name="name" placeholder="Username"
                                                            value="{{ Auth::guard('admin')->user()->name }}">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-name">Company Name</label>
                                                            <input type="text" class="form-control" id="account-name" name="company_name" placeholder="Name" value="{{ Auth::guard('admin')->user()->company_name }}">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-e-mail">Email (for contact and smtp
                                                                purpose)</label>
                                                            <input type="email" class="form-control" id="account-e-mail" name="email" placeholder="Email" value=" {{ Auth::guard('admin')->user()->email }}">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-company">Phone No.</label>
                                                            <input type="text" class="form-control" id="account-company" name="phone" minlength="10"
                                                            maxlength="10" placeholder="Enter Your Phone No."value=" {{ Auth::guard('admin')->user()->phone }}">
                                                        </div>
                                                    </div>
                                                    {{-- <div class="col-12 mt-75">
                                                        <div class="alert alert-warning mb-50" role="alert">
                                                            <h4 class="alert-heading">Your email is not confirmed. Please check your inbox.</h4>
                                                            <div class="alert-body">
                                                                <a href="javascript: void(0);" class="alert-link">Resend confirmation</a>
                                                            </div>
                                                        </div>
                                                    </div> --}}
                                                    <div class="col-12">
                                                        <button type="submit" class="btn btn-primary mt-2 mr-1">Save changes</button>
                                                        {{-- <button type="reset" class="btn btn-outline-secondary mt-2">Cancel</button> --}}
                                                    </div>
                                                </div>
                                            </form>
                                            <!--/ form -->
                                        </div>
                                        <!--/ general tab -->

                                        <!-- change password -->
                                        <div class="tab-pane fade" id="account-vertical-password" role="tabpanel" aria-labelledby="account-pill-password" aria-expanded="false">
                                            <!-- form -->


                                                <form action="/admin/update-pass/{{ Auth::guard('admin')->user()->id }}" method="POST"
                                                    enctype="multipart/form-data">
                                                    @csrf
                                                    @method('put')

                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-old-password">Current Password</label>
                                                            <div class="input-group form-password-toggle input-group-merge">
                                                                <input type="text" name="current_password" class="form-control"
                                                placeholder="current Password">
                                                                <div class="input-group-append">
                                                                    <div class="input-group-text cursor-pointer">
                                                                        <i data-feather="eye"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-new-password">New Password</label>
                                                            <div class="input-group form-password-toggle input-group-merge">
                                                                <input type="text" name="password" class="form-control"
                                                                placeholder="Password">
                                                                <div class="input-group-append">
                                                                    <div class="input-group-text cursor-pointer">
                                                                        <i data-feather="eye"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-retype-new-password">Confirm Password</label>
                                                            <div class="input-group form-password-toggle input-group-merge">
                                                                <input type="text" name="password_confirmation" class="form-control"
                                                                placeholder="Confirm Password">
                                                                <div class="input-group-append">
                                                                    <div class="input-group-text cursor-pointer"><i data-feather="eye"></i></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <button type="submit" class="btn btn-primary mr-1 mt-1">Save changes</button>
                                                        {{-- <button type="reset" class="btn btn-outline-secondary mt-1">Cancel</button> --}}
                                                    </div>

                                            </form>
                                            <!--/ form -->
                                        </div>
                                        <!--/ change password -->

                                        <!-- information -->
                                        <div class="tab-pane fade" id="account-vertical-info" role="tabpanel" aria-labelledby="account-pill-info" aria-expanded="false">
                                            <!-- form -->
                                            <form class="validate-form">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label for="accountTextarea">Bio</label>
                                                            <textarea class="form-control" id="accountTextarea" rows="4" placeholder="Your Bio data here..."></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-birth-date">Birth date</label>
                                                            <input type="text" class="form-control flatpickr" placeholder="Birth date" id="account-birth-date" name="dob">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="accountSelect">Country</label>
                                                            <select class="form-control" id="accountSelect">
                                                                <option>USA</option>
                                                                <option>India</option>
                                                                <option>Canada</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-website">Website</label>
                                                            <input type="text" class="form-control" name="website" id="account-website" placeholder="Website address">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-phone">Phone</label>
                                                            <input type="text" class="form-control" id="account-phone" placeholder="Phone number" value="(+656) 254 2568" name="phone">
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <button type="submit" class="btn btn-primary mt-1 mr-1">Save changes</button>
                                                        <button type="reset" class="btn btn-outline-secondary mt-1">Cancel</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <!--/ form -->
                                        </div>
                                        <!--/ information -->

                                        <!-- social -->
                                        <div class="tab-pane fade" id="account-vertical-social" role="tabpanel" aria-labelledby="account-pill-social" aria-expanded="false">
                                            <!-- form -->
                                            <form class="validate-form">
                                                <div class="row">
                                                    <!-- social header -->
                                                    <div class="col-12">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <i data-feather="link" class="font-medium-3"></i>
                                                            <h4 class="mb-0 ml-75">Social Links</h4>
                                                        </div>
                                                    </div>
                                                    <!-- twitter link input -->
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-twitter">Twitter</label>
                                                            <input type="text" id="account-twitter" class="form-control" placeholder="Add link" value="https://www.twitter.com">
                                                        </div>
                                                    </div>
                                                    <!-- facebook link input -->
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-facebook">Facebook</label>
                                                            <input type="text" id="account-facebook" class="form-control" placeholder="Add link">
                                                        </div>
                                                    </div>
                                                    <!-- google plus input -->
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-google">Google+</label>
                                                            <input type="text" id="account-google" class="form-control" placeholder="Add link">
                                                        </div>
                                                    </div>
                                                    <!-- linkedin link input -->
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-linkedin">LinkedIn</label>
                                                            <input type="text" id="account-linkedin" class="form-control" placeholder="Add link" value="https://www.linkedin.com">
                                                        </div>
                                                    </div>
                                                    <!-- instagram link input -->
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-instagram">Instagram</label>
                                                            <input type="text" id="account-instagram" class="form-control" placeholder="Add link">
                                                        </div>
                                                    </div>
                                                    <!-- Quora link input -->
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="account-quora">Quora</label>
                                                            <input type="text" id="account-quora" class="form-control" placeholder="Add link">
                                                        </div>
                                                    </div>

                                                    <!-- divider -->
                                                    <div class="col-12">
                                                        <hr class="my-2">
                                                    </div>

                                                    <div class="col-12 mt-1">
                                                        <!-- profile connection header -->
                                                        <div class="d-flex align-items-center mb-3">
                                                            <i data-feather="user" class="font-medium-3"></i>
                                                            <h4 class="mb-0 ml-75">Profile Connections</h4>
                                                        </div>

                                                        <div class="row">
                                                            <!-- twitter user -->
                                                            <div class="col-6 col-md-3 text-center mb-1">
                                                                <p class="font-weight-bold">Your Twitter</p>
                                                                <div class="avatar mb-1">
                                                                    <span class="avatar-content">
                                                                        <img src="../../../app-assets/images/avatars/11-small.png" alt="avatar img" width="40" height="40">
                                                                    </span>
                                                                </div>
                                                                <p class="mb-0">@johndoe</p>
                                                                <a href="javascript:void(0)">Disconnect</a>
                                                            </div>
                                                            <!-- facebook button -->
                                                            <div class="col-6 col-md-3 text-center mb-1">
                                                                <p class="font-weight-bold mb-2">Your Facebook</p>
                                                                <button class="btn btn-outline-primary">Connect</button>
                                                            </div>
                                                            <!-- google user -->
                                                            <div class="col-6 col-md-3 text-center mb-1">
                                                                <p class="font-weight-bold">Your Google</p>
                                                                <div class="avatar mb-1">
                                                                    <span class="avatar-content">
                                                                        <img src="../../../app-assets/images/avatars/3-small.png" alt="avatar img" width="40" height="40">
                                                                    </span>
                                                                </div>
                                                                <p class="mb-0">@luraweber</p>
                                                                <a href="javascript:void(0)">Disconnect</a>
                                                            </div>
                                                            <!-- github button -->
                                                            <div class="col-6 col-md-3 text-center mb-2">
                                                                <p class="font-weight-bold mb-1">Your GitHub</p>
                                                                <button class="btn btn-outline-primary">Connect</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <!-- submit and cancel button -->
                                                        <button type="submit" class="btn btn-primary mr-1 mt-1">Save changes</button>
                                                        <button type="reset" class="btn btn-outline-secondary mt-1">Cancel</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <!--/ form -->
                                        </div>
                                        <!--/ social -->

                                        <!-- notifications -->
                                        <div class="tab-pane fade" id="account-vertical-notifications" role="tabpanel" aria-labelledby="account-pill-notifications" aria-expanded="false">
                                            <div class="row">
                                                <h6 class="section-label mx-1 mb-2">Activity</h6>
                                                <div class="col-12 mb-2">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" checked="" id="accountSwitch1">
                                                        <label class="custom-control-label" for="accountSwitch1">
                                                            Email me when someone comments onmy article
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" checked="" id="accountSwitch2">
                                                        <label class="custom-control-label" for="accountSwitch2">
                                                            Email me when someone answers on my form
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="accountSwitch3">
                                                        <label class="custom-control-label" for="accountSwitch3">Email me hen someone follows me</label>
                                                    </div>
                                                </div>
                                                <h6 class="section-label mx-1 mt-2">Application</h6>
                                                <div class="col-12 mt-1 mb-2">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" checked="" id="accountSwitch4">
                                                        <label class="custom-control-label" for="accountSwitch4">News and announcements</label>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" checked="" id="accountSwitch6">
                                                        <label class="custom-control-label" for="accountSwitch6">Weekly product updates</label>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-75">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="accountSwitch5">
                                                        <label class="custom-control-label" for="accountSwitch5">Weekly blog digest</label>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <button type="submit" class="btn btn-primary mt-2 mr-1">Save changes</button>
                                                    <button type="reset" class="btn btn-outline-secondary mt-2">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!--/ notifications -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--/ right content section -->
                    </div>
                </section>
                <!-- / account setting page -->

            </div>
        </div>
    </div>
    <!-- END: Content-->
@endsection
