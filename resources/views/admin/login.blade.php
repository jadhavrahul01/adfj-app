<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
    <meta name="author" content="PIXINVENT">
    <title>Login</title>
    <link rel="apple-touch-icon" href="{{ asset('user-assets/img/logo/favicon.ico')}}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('user-assets/img/logo/favicon.ico')}}">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600" rel="stylesheet">


    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/vendors/css/vendors.min.css')}}">
    <!-- END: Vendor CSS-->

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/bootstrap.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/bootstrap-extended.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/colors.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/components.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/themes/dark-layout.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/themes/bordered-layout.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/themes/semi-dark-layout.css')}}">

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/core/menu/menu-types/vertical-menu.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/plugins/forms/form-validation.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/pages/page-auth.css')}}">
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/css/style.css')}}">
    <!-- END: Custom CSS-->

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body class="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
    <!-- BEGIN: Content-->
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <div class="auth-wrapper auth-v1 px-2">



                    <div class="auth-inner py-2">

                        <!-- Login v1 -->
                        <div class="card mb-0">
                            <div class="card-body">
                                <a href="javascript:void(0);" class="brand-logo">
                                    <?xml version="1.0" encoding="utf-8"?>
                                    <!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 774.18 259.41" style="enable-background:new 0 0 774.18 259.41;height: 35px;" xml:space="preserve">
                                    <style type="text/css">
                                        .st0{fill:#2EBBC4;}
                                        .st1{fill:#EB1971;}
                                        .st2{fill:#261A50;}

                                    </style>
                                    <g>
                                        <g>
                                            <path class="st0" d="M165.58,112.85c-1.11,1.53-2.01,2.41-2.49,3.48c-16.04,35.44-32.04,70.91-48.06,106.36
                                                c-4.27,9.44-8.39,18.94-13.03,28.19c-0.95,1.9-3.91,3.97-5.95,3.99c-29.39,0.27-58.8,0.21-88.2,0.2c-0.94,0-1.88-0.35-3.57-0.68
                                                c3.52-7.96,7.7-17.39,11.22-25.34C48.77,154.01,82.33,79.11,116.2,4.33C132.66,40.51,149.12,76.68,165.58,112.85z"/>
                                            <path class="st1" d="M328.02,255.53c-3.11,0.19-5.07,0.4-7.04,0.4c-27.72,0.02-55.45-0.1-83.18,0.11
                                                c-5.24,0.04-8.04-1.61-10.23-6.52c-19.57-43.75-39.4-87.39-59.16-131.05c-0.75-1.65-1.63-3.24-2.83-5.62
                                                c16.53-36.17,33.06-72.35,49.59-108.52c8.77,20.01,22.28,50.6,40.28,90.35c1.29,2.85,2.07,4.57,3.2,7.07
                                                c22.2,48.98,44.44,97.94,66.64,146.92C326.16,250.59,326.86,252.6,328.02,255.53z"/>
                                            <path class="st2" d="M215.17,4.33c-16.53,36.17-33.06,72.35-49.59,108.52C149.12,76.68,132.66,40.51,116.2,4.33
                                                C149.19,4.33,182.18,4.33,215.17,4.33z"/>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path class="st2" d="M356.52,144.09L425.18,5.18h2.04l67.18,138.91h-33.64l-8.55-19.6h-54.63l-8.73,19.6H356.52z M406.88,101.25
                                                        h35.4l-17.47-42.18L406.88,101.25z"/>
                                                    <path class="st2" d="M587.04,7.5v136.59l-25.55,4l-1.11-6.5c-4.09,2.23-8.12,3.87-12.08,4.92c-3.96,1.05-7.99,1.58-12.08,1.58
                                                        c-11.71,0-20.85-3.87-27.41-11.61c-6.57-7.74-9.85-18.46-9.85-32.15c0-14.37,3.86-25.89,11.57-34.56
                                                        c7.71-8.67,17.92-13.01,30.62-13.01c2.97,0,5.82,0.3,8.55,0.88c2.73,0.59,5.45,1.5,8.18,2.74V11.5L587.04,7.5z M557.87,81.65
                                                        c-1.73-0.99-3.39-1.7-4.97-2.14c-1.58-0.43-3.14-0.65-4.69-0.65c-5.51,0-10.16,2.31-13.94,6.92
                                                        c-3.78,4.62-5.67,10.42-5.67,17.42c0,6.57,1.66,12.03,4.97,16.4c3.31,4.37,7.36,6.55,12.13,6.55c1.86,0,3.79-0.39,5.81-1.16
                                                        c2.01-0.77,4.14-1.97,6.37-3.58V81.65z"/>
                                                    <path class="st2" d="M613.34,144.09V9.36h83.72v27.41H645.3v26.85h46.27v27.22H645.3v53.24H613.34z"/>
                                                    <path class="st2" d="M702.91,115.93c3.41,1.49,6.54,2.62,9.38,3.39c2.85,0.78,5.36,1.16,7.53,1.16c6.38,0,10.93-2.09,13.66-6.27
                                                        c2.73-4.18,4.09-11.29,4.09-21.32V9.36h32.33v91.15c0,15.55-4,27.43-11.99,35.63c-7.99,8.21-19.54,12.31-34.66,12.31
                                                        c-2.85,0-5.68-0.19-8.5-0.56c-2.82-0.37-5.75-0.93-8.78-1.67L702.91,115.93z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path class="st2" d="M367.39,248.8v-12.37c2.97,3.41,5.8,5.86,8.51,7.36c2.7,1.5,5.59,2.25,8.65,2.25
                                                        c3.25,0,5.81-0.76,7.69-2.27c1.88-1.51,2.81-3.57,2.81-6.16c0-2.13-0.63-3.99-1.9-5.6c-1.27-1.61-4.29-3.93-9.07-6.96
                                                        c-7.41-4.78-12.05-8.48-13.94-11.11c-1.89-2.62-2.84-5.75-2.84-9.37c0-5.09,1.8-9.27,5.41-12.54s8.26-4.9,13.95-4.9
                                                        c2.53,0,5.02,0.37,7.48,1.1c2.45,0.73,4.93,1.87,7.43,3.4v10.64c-2.87-2.31-5.53-3.99-7.97-5.04c-2.44-1.05-4.88-1.57-7.31-1.57
                                                        c-2.94,0-5.34,0.73-7.19,2.18c-1.86,1.45-2.79,3.32-2.79,5.6c0,3.25,3.86,7.28,11.58,12.09l1.41,0.84
                                                        c6.28,3.91,10.39,7.35,12.33,10.33c1.94,2.99,2.91,6.68,2.91,11.09c0,5-1.81,9.13-5.44,12.4c-3.62,3.26-8.27,4.9-13.92,4.9
                                                        c-3.53,0-6.72-0.5-9.56-1.5C372.75,252.58,370.01,250.98,367.39,248.8z"/>
                                                    <path class="st2" d="M434.35,253.91v-57.04h-24.09v-8.53h57.51v8.53h-24.09v57.04H434.35z"/>
                                                    <path class="st2" d="M476.66,188.33h9.33v37.64c0,4.19,0.23,7.16,0.68,8.91c0.45,1.75,1.21,3.27,2.27,4.55
                                                        c1.94,2.28,4.23,3.98,6.89,5.11c2.65,1.13,5.67,1.69,9.05,1.69c5.69,0,10.26-1.47,13.73-4.41c3.47-2.94,5.2-6.81,5.2-11.62
                                                        v-41.86h9.33v42.14c0,7.31-2.61,13.24-7.83,17.79c-5.22,4.55-12.03,6.82-20.44,6.82c-4.97,0-9.45-0.88-13.45-2.65
                                                        c-4-1.76-7.37-4.35-10.12-7.76c-1.69-2.03-2.88-4.29-3.58-6.8c-0.7-2.5-1.05-6.34-1.05-11.53V188.33z"/>
                                                    <path class="st2" d="M572.58,188.33c4.84,0,9.01,0.46,12.49,1.36c3.48,0.91,6.68,2.34,9.59,4.31c4.44,3,7.87,6.85,10.29,11.55
                                                        c2.42,4.7,3.63,9.88,3.63,15.54c0,5.66-1.22,10.85-3.66,15.59c-2.44,4.73-5.86,8.59-10.26,11.55c-2.84,1.97-6.03,3.41-9.56,4.31
                                                        c-3.53,0.91-7.7,1.36-12.51,1.36h-24.09v-65.57H572.58z M572.58,197.28h-14.81V245h14.81c8.09,0,14.45-2.12,19.08-6.37
                                                        c4.62-4.25,6.94-10.06,6.94-17.44c0-7.41-2.31-13.24-6.94-17.51C587.04,199.42,580.68,197.28,572.58,197.28z"/>
                                                    <path class="st2" d="M621.55,253.91v-65.57h9.37v65.57H621.55z"/>
                                                    <path class="st2" d="M643.32,220.86c0-4.37,0.89-8.62,2.67-12.75c1.78-4.13,4.31-7.77,7.59-10.92
                                                        c3.34-3.22,7.12-5.67,11.34-7.36c4.22-1.69,8.66-2.53,13.31-2.53c4.75,0,9.26,0.85,13.52,2.55c4.27,1.7,8.02,4.15,11.27,7.34
                                                        c3.41,3.31,5.97,7,7.69,11.06c1.72,4.06,2.58,8.47,2.58,13.22c0,4.47-0.88,8.76-2.65,12.87s-4.27,7.73-7.52,10.85
                                                        c-3.41,3.25-7.21,5.71-11.41,7.38c-4.2,1.67-8.69,2.51-13.47,2.51c-4.66,0-9.12-0.86-13.38-2.58
                                                        c-4.27-1.72-8.02-4.16-11.27-7.31c-3.37-3.28-5.93-6.98-7.66-11.11C644.19,229.95,643.32,225.55,643.32,220.86z M653.3,221.19
                                                        c0,3.34,0.62,6.53,1.88,9.56c1.25,3.03,3.05,5.72,5.39,8.06c2.28,2.34,4.96,4.15,8.04,5.41c3.08,1.27,6.29,1.9,9.63,1.9
                                                        c3.44,0,6.66-0.62,9.68-1.85s5.71-3.05,8.09-5.46c2.34-2.34,4.15-5.03,5.41-8.06c1.27-3.03,1.9-6.22,1.9-9.56
                                                        c0-3.34-0.63-6.51-1.88-9.49c-1.25-2.98-3.09-5.71-5.53-8.18c-2.34-2.41-5.03-4.24-8.06-5.51c-3.03-1.27-6.23-1.9-9.61-1.9
                                                        c-3.25,0-6.4,0.64-9.44,1.92c-3.05,1.28-5.79,3.11-8.23,5.48c-2.34,2.28-4.14,4.95-5.39,8.02
                                                        C653.93,214.6,653.3,217.81,653.3,221.19z"/>
                                                    <path class="st2" d="M722,248.8v-12.37c2.97,3.41,5.8,5.86,8.51,7.36c2.7,1.5,5.59,2.25,8.65,2.25c3.25,0,5.81-0.76,7.69-2.27
                                                        c1.88-1.51,2.81-3.57,2.81-6.16c0-2.13-0.63-3.99-1.9-5.6c-1.27-1.61-4.29-3.93-9.07-6.96c-7.41-4.78-12.05-8.48-13.94-11.11
                                                        c-1.89-2.62-2.84-5.75-2.84-9.37c0-5.09,1.8-9.27,5.41-12.54s8.26-4.9,13.95-4.9c2.53,0,5.02,0.37,7.48,1.1
                                                        c2.45,0.73,4.93,1.87,7.43,3.4v10.64c-2.87-2.31-5.53-3.99-7.97-5.04c-2.44-1.05-4.88-1.57-7.31-1.57
                                                        c-2.94,0-5.34,0.73-7.19,2.18c-1.86,1.45-2.79,3.32-2.79,5.6c0,3.25,3.86,7.28,11.58,12.09l1.41,0.84
                                                        c6.28,3.91,10.39,7.35,12.33,10.33c1.94,2.99,2.91,6.68,2.91,11.09c0,5-1.81,9.13-5.44,12.4c-3.62,3.26-8.27,4.9-13.92,4.9
                                                        c-3.53,0-6.72-0.5-9.56-1.5C727.36,252.58,724.62,250.98,722,248.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    </svg>

                                    {{-- <h2 class="brand-text text-primary ml-1">ADFJ</h2> --}}
                                </a>

                                <h4 class="card-title mb-1">Welcome to Dashboard! 👋</h4>
                                <p class="card-text mb-2">Please sign-in to your account and start the adventure</p>

                                <form action="{{ route('admin.authenticate') }}" method="post">
                                    @csrf
                                    <div class="form-group">
                                        <label class="form-label">Username</label>
                                        <input type="text" class="form-control" name="username" placeholder="Username"autofocus="" required>
                                    </div>

                                    <div class="form-group">
                                        <div class="d-flex justify-content-between">
                                            <label>Password</label>

                                        </div>
                                        <div class="input-group input-group-merge form-password-toggle">
                                            <input type="password" class="form-control form-control-merge" name="password" placeholder="Password" required>
                                            <div class="input-group-append">
                                                <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    @include('admin.message')
                                    <button class="btn btn-primary btn-block" tabindex="4">Sign in</button>
                                </form>

                            </div>
                        </div>
                        <!-- /Login v1 -->
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- END: Content-->


    <!-- BEGIN: Vendor JS-->
    <script src="{{ asset('admin-assets/vendors/js/vendors.min.js')}}"></script>
    <!-- BEGIN Vendor JS-->

    <!-- BEGIN: Page Vendor JS-->
    <script src="{{ asset('admin-assets/vendors/js/forms/validation/jquery.validate.min.js')}}"></script>
    <!-- END: Page Vendor JS-->

    <!-- BEGIN: Theme JS-->
    <script src="{{ asset('admin-assets/js/core/app-menu.js')}}"></script>
    <script src="{{ asset('admin-assets/js/core/app.js')}}"></script>
    <!-- END: Theme JS-->

    <!-- BEGIN: Page JS-->
    <script src="{{ asset('admin-assets/js/scripts/pages/page-auth-login.js')}}"></script>
    <!-- END: Page JS-->

    <script>
        $(window).on('load', function() {
            if (feather) {
                feather.replace({
                    width: 14,
                    height: 14
                });
            }
        })
    </script>
</body>
<!-- END: Body-->
</html>
