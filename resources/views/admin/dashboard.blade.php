@extends('admin.includes.app')

@section('content')
    <div class="page order-2 flex-grow-1">
        <!--[ Start:: page header link ]-->
        <header class="page-header sticky-top">
            <div class="container-fluid">
                <div class="d-flex justify-content-between align-items-center">
                    <a class="me-4 d-lg-inline-flex d-none menu-toggle" href="#" title="Sidebar Toggle">
                        <svg width="24" viewbox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill="var(--accent-color)"
                                d="M14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L12.4142 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H12.4142L14.7071 15.2929C15.0976 15.6834 15.0976 16.3166 14.7071 16.7071C14.3166 17.0976 13.6834 17.0976 13.2929 16.7071L9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289Z">
                            </path>
                            <path fill="var(--accent-color)" fill-opacity="0.3"
                                d="M4 3C4.55228 3 5 3.44772 5 4V20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z">
                            </path>
                        </svg>
                    </a>
                    <a class="me-4 d-lg-none d-inline-flex text-decoration-none text-accent align-items-center"
                        href="index.html">
                        <svg width="24" height="28" viewbox="0 0 24 28" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-accent"
                                d="M10.123 17.0196H14.7278L17.0428 19.9893L19.3201 22.6346L23.6121 28H18.5568L15.6038 24.3815L14.0897 22.2353L10.123 17.0196ZM24 13.1266C24 15.9133 23.4703 18.284 22.4108 20.2389C21.3598 22.1937 19.9249 23.6869 18.1064 24.7184C16.2961 25.7415 14.2607 26.2531 12 26.2531C9.72263 26.2531 7.67883 25.7374 5.86861 24.7059C4.05839 23.6744 2.62774 22.1812 1.57664 20.2264C0.525548 18.2715 0 15.9049 0 13.1266C0 10.3399 0.525548 7.9691 1.57664 6.01426C2.62774 4.05942 4.05839 2.57041 5.86861 1.54724C7.67883 0.515746 9.72263 0 12 0C14.2607 0 16.2961 0.515746 18.1064 1.54724C19.9249 2.57041 21.3598 4.05942 22.4108 6.01426C23.4703 7.9691 24 10.3399 24 13.1266ZM18.5068 13.1266C18.5068 11.3215 18.2357 9.79917 17.6934 8.55972C17.1595 7.32026 16.4046 6.38028 15.4286 5.73975C14.4526 5.09923 13.3097 4.77897 12 4.77897C10.6903 4.77897 9.54745 5.09923 8.57143 5.73975C7.59541 6.38028 6.83629 7.32026 6.29406 8.55972C5.76017 9.79917 5.49322 11.3215 5.49322 13.1266C5.49322 14.9317 5.76017 16.454 6.29406 17.6934C6.83629 18.9329 7.59541 19.8728 8.57143 20.5134C9.54745 21.1539 10.6903 21.4742 12 21.4742C13.3097 21.4742 14.4526 21.1539 15.4286 20.5134C16.4046 19.8728 17.1595 18.9329 17.6934 17.6934C18.2357 16.454 18.5068 14.9317 18.5068 13.1266Z"
                                fill="#5BC43A"></path>
                        </svg>
                        <span class="fs-4 ps-2 d-none d-sm-inline-flex">Boat</span>
                    </a>
                    <!-- Example single danger button -->
                    <ul class="header-menu flex-grow-1">
                        <li class="w-100 d-none d-md-inline-flex">
                            <!--[ Start:: main search ]-->
                            <div class="search">
                                <svg width="14" height="14" viewbox="0 0 14 14" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-muted"
                                        d="M10.2742 9.051C11.1215 7.89485 11.501 6.46142 11.3368 5.0375C11.1725 3.61358 10.4767 2.30417 9.38854 1.37124C8.30034 0.438302 6.90002 -0.0493505 5.46772 0.0058385C4.03543 0.0610275 2.67678 0.654988 1.6636 1.66889C0.650425 2.68279 0.0574364 4.04186 0.00327226 5.4742C-0.0508918 6.90654 0.437763 8.30651 1.37147 9.39404C2.30519 10.4816 3.61509 11.1764 5.03913 11.3396C6.46317 11.5028 7.89633 11.1223 9.05187 10.2742H9.05099C9.07724 10.3092 9.10524 10.3425 9.13674 10.3749L12.5055 13.7436C12.6696 13.9078 12.8921 14.0001 13.1242 14.0002C13.3564 14.0003 13.579 13.9081 13.7432 13.7441C13.9074 13.58 13.9997 13.3574 13.9997 13.1253C13.9998 12.8932 13.9077 12.6706 13.7436 12.5064L10.3749 9.13762C10.3436 9.10596 10.3099 9.0767 10.2742 9.05012V9.051ZM10.5 5.6875C10.5 6.31948 10.3755 6.94528 10.1337 7.52916C9.89181 8.11304 9.53733 8.64357 9.09044 9.09045C8.64356 9.53733 8.11304 9.89182 7.52916 10.1337C6.94528 10.3755 6.31948 10.5 5.68749 10.5C5.05551 10.5 4.42971 10.3755 3.84583 10.1337C3.26195 9.89182 2.73142 9.53733 2.28454 9.09045C1.83766 8.64357 1.48317 8.11304 1.24132 7.52916C0.999471 6.94528 0.874992 6.31948 0.874992 5.6875C0.874992 4.41114 1.38202 3.18706 2.28454 2.28455C3.18706 1.38203 4.41114 0.874997 5.68749 0.874997C6.96385 0.874997 8.18793 1.38203 9.09044 2.28455C9.99296 3.18706 10.5 4.41114 10.5 5.6875Z">
                                    </path>
                                </svg>
                                <input class="form-control rounded-pill" type="search" placeholder="Search"
                                    aria-label="Search" />
                            </div>
                        </li>
                        <li class="dropdown d-none d-lg-inline-block">
                            <a class="dropdown-toggle text-white fullscreen" href="javascript:void(0);"
                                onclick="toggleFullScreen()">
                                <svg width="20" viewbox="0 0 18 18" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-opacity="0.4"
                                        d="M10 0.5C10 0.367392 10.0527 0.240215 10.1464 0.146447C10.2402 0.0526784 10.3674 0 10.5 0L14.5 0C14.8978 0 15.2794 0.158035 15.5607 0.43934C15.842 0.720644 16 1.10218 16 1.5V5.5C16 5.63261 15.9473 5.75979 15.8536 5.85355C15.7598 5.94732 15.6326 6 15.5 6C15.3674 6 15.2402 5.94732 15.1464 5.85355C15.0527 5.75979 15 5.63261 15 5.5V1.5C15 1.36739 14.9473 1.24021 14.8536 1.14645C14.7598 1.05268 14.6326 1 14.5 1H10.5C10.3674 1 10.2402 0.947322 10.1464 0.853553C10.0527 0.759785 10 0.632608 10 0.5ZM0.5 10C0.632608 10 0.759785 10.0527 0.853553 10.1464C0.947322 10.2402 1 10.3674 1 10.5V14.5C1 14.6326 1.05268 14.7598 1.14645 14.8536C1.24021 14.9473 1.36739 15 1.5 15H5.5C5.63261 15 5.75979 15.0527 5.85355 15.1464C5.94732 15.2402 6 15.3674 6 15.5C6 15.6326 5.94732 15.7598 5.85355 15.8536C5.75979 15.9473 5.63261 16 5.5 16H1.5C1.10218 16 0.720644 15.842 0.43934 15.5607C0.158035 15.2794 0 14.8978 0 14.5L0 10.5C0 10.3674 0.0526784 10.2402 0.146447 10.1464C0.240215 10.0527 0.367392 10 0.5 10ZM15.5 10C15.6326 10 15.7598 10.0527 15.8536 10.1464C15.9473 10.2402 16 10.3674 16 10.5V14.5C16 14.8978 15.842 15.2794 15.5607 15.5607C15.2794 15.842 14.8978 16 14.5 16H10.5C10.3674 16 10.2402 15.9473 10.1464 15.8536C10.0527 15.7598 10 15.6326 10 15.5C10 15.3674 10.0527 15.2402 10.1464 15.1464C10.2402 15.0527 10.3674 15 10.5 15H14.5C14.6326 15 14.7598 14.9473 14.8536 14.8536C14.9473 14.7598 15 14.6326 15 14.5V10.5C15 10.3674 15.0527 10.2402 15.1464 10.1464C15.2402 10.0527 15.3674 10 15.5 10Z">
                                    </path>
                                    <path fill-opacity="0.9"
                                        d="M1.14645 1.14645C1.24021 1.05268 1.36739 1 1.5 1H5.5C5.63261 1 5.75979 0.947322 5.85355 0.853553C5.94732 0.759785 6 0.632608 6 0.5C6 0.367392 5.94732 0.240215 5.85355 0.146447C5.75979 0.0526784 5.63261 0 5.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V5.5C0 5.63261 0.0526784 5.75979 0.146447 5.85355C0.240215 5.94732 0.367392 6 0.5 6C0.632608 6 0.759785 5.94732 0.853553 5.85355C0.947322 5.75979 1 5.63261 1 5.5V1.5C1 1.36739 1.05268 1.24021 1.14645 1.14645Z">
                                    </path>
                                    <rect fill-opacity="0.9" x="3" y="5" width="11" height="6"
                                        rx="1"></rect>
                                </svg>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle text-white" href="#site_map" data-bs-toggle="offcanvas"
                                role="button">
                                <svg width="20" viewbox="0 0 18 18" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.14286 1.92857C5.14286 1.41708 5.36862 0.926543 5.77049 0.564866C6.17235 0.203188 6.71739 0 7.28571 0H8.71429C9.28261 0 9.82765 0.203188 10.2295 0.564866C10.6314 0.926543 10.8571 1.41708 10.8571 1.92857V3.21429C10.8571 3.72577 10.6314 4.21631 10.2295 4.57799C9.82765 4.93967 9.28261 5.14286 8.71429 5.14286V6.42857H12.2857C12.4752 6.42857 12.6568 6.4963 12.7908 6.61686C12.9247 6.73742 13 6.90093 13 7.07143V8.35714C13 8.52764 12.9247 8.69115 12.7908 8.81171C12.6568 8.93227 12.4752 9 12.2857 9C12.0963 9 11.9146 8.93227 11.7806 8.81171C11.6467 8.69115 11.5714 8.52764 11.5714 8.35714V7.71429H4.42857V8.35714C4.42857 8.52764 4.35332 8.69115 4.21936 8.81171C4.08541 8.93227 3.90373 9 3.71429 9C3.52485 9 3.34316 8.93227 3.20921 8.81171C3.07526 8.69115 3 8.52764 3 8.35714V7.07143C3 6.90093 3.07526 6.73742 3.20921 6.61686C3.34316 6.4963 3.52485 6.42857 3.71429 6.42857H7.28571V5.14286C6.71739 5.14286 6.17235 4.93967 5.77049 4.57799C5.36862 4.21631 5.14286 3.72577 5.14286 3.21429V1.92857ZM8.71429 3.85714C8.90373 3.85714 9.08541 3.78941 9.21936 3.66885C9.35332 3.5483 9.42857 3.38478 9.42857 3.21429V1.92857C9.42857 1.75808 9.35332 1.59456 9.21936 1.474C9.08541 1.35344 8.90373 1.28571 8.71429 1.28571H7.28571C7.09627 1.28571 6.91459 1.35344 6.78064 1.474C6.64668 1.59456 6.57143 1.75808 6.57143 1.92857V3.21429C6.57143 3.38478 6.64668 3.5483 6.78064 3.66885C6.91459 3.78941 7.09627 3.85714 7.28571 3.85714H8.71429Z">
                                    </path>
                                    <path fill-opacity="0.6"
                                        d="M1.61508 11.5492C1.22125 11.9008 1 12.3777 1 12.875V14.125C1 14.6223 1.22125 15.0992 1.61508 15.4508C2.0089 15.8025 2.54305 16 3.1 16H4.5C5.05695 16 5.5911 15.8025 5.98492 15.4508C6.37875 15.0992 6.6 14.6223 6.6 14.125V12.875C6.6 12.3777 6.37875 11.9008 5.98492 11.5492C5.5911 11.1975 5.05695 11 4.5 11H3.1C2.54305 11 2.0089 11.1975 1.61508 11.5492Z">
                                    </path>
                                    <path fill-opacity="0.9"
                                        d="M10.0151 11.5492C9.62125 11.9008 9.4 12.3777 9.4 12.875V14.125C9.4 14.6223 9.62125 15.0992 10.0151 15.4508C10.4089 15.8025 10.943 16 11.5 16H12.9C13.457 16 13.9911 15.8025 14.3849 15.4508C14.7788 15.0992 15 14.6223 15 14.125V12.875C15 12.3777 14.7788 11.9008 14.3849 11.5492C13.9911 11.1975 13.457 11 12.9 11H11.5C10.943 11 10.4089 11.1975 10.0151 11.5492Z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle text-white" href="#rightbar" data-bs-toggle="offcanvas"
                                role="button">
                                <svg width="20" viewbox="0 0 18 18" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3"
                                        d="M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12z">
                                    </path>
                                    <path d="M13 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <!--[ Start:: notification ]-->
                        <li class="dropdown">
                            <a class="dropdown-toggle text-white" href="#NotificationsDiv" role="button"
                                data-bs-toggle="offcanvas" aria-expanded="false">
                                <span class="bullet-dot bg-accent animation-blink"></span>
                                <svg width="20" viewbox="0 0 18 18" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.3" cx="11" cy="11" r="4"></circle>
                                    <path
                                        d="M9 18C9.59674 18 10.169 17.7629 10.591 17.341C11.0129 16.919 11.25 16.3467 11.25 15.75H6.75C6.75 16.3467 6.98705 16.919 7.40901 17.341C7.83097 17.7629 8.40326 18 9 18ZM9 2.15775L8.10337 2.33888C7.08633 2.5461 6.17212 3.09837 5.51548 3.9022C4.85884 4.70603 4.50011 5.71206 4.5 6.75C4.5 7.4565 4.34925 9.22162 3.98362 10.9597C3.80362 11.8226 3.56063 12.7215 3.23775 13.5H14.7622C14.4394 12.7215 14.1975 11.8237 14.0164 10.9597C13.6507 9.22162 13.5 7.4565 13.5 6.75C13.4996 5.71225 13.1408 4.70649 12.4842 3.90289C11.8275 3.09929 10.9135 2.54719 9.89662 2.34L9 2.15663V2.15775ZM15.9975 13.5C16.2484 14.0029 16.5386 14.4011 16.875 14.625H1.125C1.46137 14.4011 1.75162 14.0029 2.0025 13.5C3.015 11.475 3.375 7.74 3.375 6.75C3.375 4.0275 5.31 1.755 7.88063 1.23637C7.86492 1.07995 7.88218 0.921967 7.93129 0.77262C7.98039 0.623273 8.06026 0.485876 8.16573 0.36929C8.27119 0.252705 8.39993 0.159519 8.54362 0.0957427C8.68732 0.0319665 8.84279 -0.000984192 9 -0.000984192C9.15721 -0.000984192 9.31268 0.0319665 9.45638 0.0957427C9.60007 0.159519 9.72881 0.252705 9.83428 0.36929C9.93974 0.485876 10.0196 0.623273 10.0687 0.77262C10.1178 0.921967 10.1351 1.07995 10.1194 1.23637C11.3909 1.49501 12.534 2.18516 13.3551 3.18994C14.1762 4.19472 14.6248 5.4524 14.625 6.75C14.625 7.74 14.985 11.475 15.9975 13.5Z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <!--[ Start:: user detail ]-->
                        <li class="dropdown user">
                            <a class="dropdown-toggle text-decoration-none" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" title="User">
                                <img class="avatar sm rounded-circle shadow border border-2"
                                    src="{{ asset('admin-assets/img/profile_av.png') }}" alt="avatar" />
                                <span class="ps-1 fs-6 text-white d-none d-lg-inline-block">Brian</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end shadow border-0 p-4 rounded-4">
                                <li class="mb-3">
                                    <a class="h5" href="crafted-profile.html" title="">Brian Hughes</a>
                                    <p>brian.hughes@example.com</p>
                                    <a class="btn bg-dark text-white w-100" href="{{ route('admin.logout') }}"
                                        role="button">Logout</a>
                                </li>
                                <li class="dropdown-divider"></li>
                                <li>
                                    <a class="dropdown-item" href="crafted-profile.html">My Profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="app-chat.html">Messages</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="my-task.html">My Taskboard</a>
                                </li>
                                <li class="dropdown-divider"></li>
                                <li>
                                    <a class="dropdown-item" href="my-wallet.html"><span class="align-middle">Balance:
                                            <b>$1399.33</b></span></a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="account.html">Settings</a>
                                </li>
                            </ul>
                        </li>
                        <!--[ Start:: setting toggle ]-->
                        <li class="dropdown">
                            <a class="dropdown-toggle text-white" href="#settings" data-bs-toggle="offcanvas"
                                role="button">
                                <svg width="20" viewbox="0 0 18 18" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.3" cx="11" cy="11" r="4"></circle>
                                    <path
                                        d="M8.9999 5.34825C8.52034 5.34825 8.04548 5.44271 7.60243 5.62622C7.15938 5.80974 6.75681 6.07873 6.41772 6.41782C6.07862 6.75692 5.80964 7.15949 5.62612 7.60254C5.4426 8.04559 5.34814 8.52045 5.34814 9C5.34814 9.47956 5.4426 9.95441 5.62612 10.3975C5.80964 10.8405 6.07862 11.2431 6.41772 11.5822C6.75681 11.9213 7.15938 12.1903 7.60243 12.3738C8.04548 12.5573 8.52034 12.6518 8.9999 12.6518C9.9684 12.6518 10.8972 12.267 11.5821 11.5822C12.2669 10.8973 12.6516 9.96851 12.6516 9C12.6516 8.0315 12.2669 7.10266 11.5821 6.41782C10.8972 5.73299 9.9684 5.34825 8.9999 5.34825ZM6.47315 9C6.47315 8.32987 6.73936 7.68718 7.21321 7.21332C7.68707 6.73946 8.32976 6.47325 8.9999 6.47325C9.67003 6.47325 10.3127 6.73946 10.7866 7.21332C11.2604 7.68718 11.5266 8.32987 11.5266 9C11.5266 9.67014 11.2604 10.3128 10.7866 10.7867C10.3127 11.2605 9.67003 11.5268 8.9999 11.5268C8.32976 11.5268 7.68707 11.2605 7.21321 10.7867C6.73936 10.3128 6.47315 9.67014 6.47315 9Z">
                                    </path>
                                    <path
                                        d="M11.0204 1.51082C10.4276 -0.502934 7.5723 -0.502934 6.97943 1.51082L6.87368 1.86969C6.83227 2.01026 6.75994 2.13979 6.66197 2.24877C6.564 2.35775 6.44289 2.44343 6.30751 2.49952C6.17213 2.55562 6.02591 2.58071 5.87957 2.57295C5.73324 2.56519 5.59049 2.52478 5.4618 2.45469L5.1333 2.27469C3.2883 1.27119 1.27118 3.28944 2.2758 5.13332L2.45468 5.46182C2.52477 5.59051 2.56518 5.73325 2.57293 5.87959C2.58069 6.02593 2.5556 6.17214 2.49951 6.30752C2.44342 6.44291 2.35774 6.56402 2.24875 6.66198C2.13977 6.75995 2.01025 6.83229 1.86968 6.87369L1.5108 6.97944C-0.502949 7.57232 -0.502949 10.4276 1.5108 11.0204L1.86968 11.1262C2.01025 11.1676 2.13977 11.2399 2.24875 11.3379C2.35774 11.4359 2.44342 11.557 2.49951 11.6924C2.5556 11.8277 2.58069 11.974 2.57293 12.1203C2.56518 12.2666 2.52477 12.4094 2.45468 12.5381L2.27468 12.8666C1.27118 14.7116 3.2883 16.7298 5.1333 15.7241L5.4618 15.5452C5.59049 15.4751 5.73324 15.4347 5.87957 15.4269C6.02591 15.4192 6.17213 15.4443 6.30751 15.5004C6.44289 15.5565 6.564 15.6421 6.66197 15.7511C6.75994 15.8601 6.83227 15.9896 6.87368 16.1302L6.97943 16.4891C7.5723 18.5028 10.4276 18.5028 11.0204 16.4891L11.1262 16.1302C11.1676 15.9896 11.2399 15.8601 11.3379 15.7511C11.4358 15.6421 11.557 15.5565 11.6923 15.5004C11.8277 15.4443 11.9739 15.4192 12.1203 15.4269C12.2666 15.4347 12.4094 15.4751 12.5381 15.5452L12.8666 15.7252C14.7116 16.7298 16.7298 14.7104 15.7241 12.8666L15.5452 12.5381C15.4751 12.4094 15.4347 12.2666 15.4269 12.1203C15.4192 11.974 15.4442 11.8277 15.5003 11.6924C15.5564 11.557 15.6421 11.4359 15.7511 11.3379C15.8601 11.2399 15.9896 11.1676 16.1302 11.1262L16.489 11.0204C18.5028 10.4276 18.5028 7.57232 16.489 6.97944L16.1302 6.87369C15.9896 6.83229 15.8601 6.75995 15.7511 6.66198C15.6421 6.56402 15.5564 6.44291 15.5003 6.30752C15.4442 6.17214 15.4192 6.02593 15.4269 5.87959C15.4347 5.73325 15.4751 5.59051 15.5452 5.46182L15.7252 5.13332C16.7298 3.28832 14.7104 1.27119 12.8666 2.27582L12.5381 2.45469C12.4094 2.52478 12.2666 2.56519 12.1203 2.57295C11.9739 2.58071 11.8277 2.55562 11.6923 2.49952C11.557 2.44343 11.4358 2.35775 11.3379 2.24877C11.2399 2.13979 11.1676 2.01026 11.1262 1.86969L11.0204 1.51082ZM8.0583 1.82919C8.33505 0.889816 9.6648 0.889816 9.94155 1.82919L10.0473 2.18807C10.1362 2.48966 10.2915 2.76754 10.5017 3.00133C10.712 3.23512 10.9719 3.41889 11.2624 3.53917C11.5529 3.65945 11.8666 3.71319 12.1806 3.69645C12.4946 3.67972 12.8009 3.59292 13.0769 3.44244L13.4043 3.26244C14.2638 2.79557 15.2043 3.73494 14.7363 4.59557L14.5574 4.92407C14.4072 5.20017 14.3206 5.5064 14.304 5.8203C14.2875 6.13421 14.3414 6.44784 14.4617 6.73822C14.5821 7.0286 14.7659 7.28837 14.9997 7.49849C15.2335 7.70861 15.5114 7.86376 15.8129 7.95257L16.1707 8.05832C17.1101 8.33507 17.1101 9.66482 16.1707 9.94157L15.8118 10.0473C15.5102 10.1362 15.2323 10.2915 14.9985 10.5017C14.7648 10.712 14.581 10.9719 14.4607 11.2624C14.3404 11.5529 14.2867 11.8667 14.3034 12.1806C14.3202 12.4946 14.4069 12.8009 14.5574 13.0769L14.7374 13.4043C15.2043 14.2638 14.2649 15.2043 13.4043 14.7363L13.0769 14.5574C12.8008 14.407 12.4944 14.3202 12.1804 14.3036C11.8664 14.2869 11.5526 14.3407 11.2621 14.4611C10.9715 14.5815 10.7116 14.7654 10.5014 14.9993C10.2912 15.2332 10.1361 15.5112 10.0473 15.8129L9.94155 16.1707C9.6648 17.1101 8.33505 17.1101 8.0583 16.1707L7.95255 15.8118C7.86361 15.5104 7.70837 15.2327 7.4982 14.999C7.28802 14.7653 7.02824 14.5816 6.73788 14.4613C6.44751 14.3411 6.13392 14.2873 5.82008 14.3039C5.50623 14.3205 5.20008 14.4072 4.92405 14.5574L4.59555 14.7374C3.73605 15.2043 2.79555 14.2649 3.26355 13.4043L3.44243 13.0769C3.59312 12.8008 3.68008 12.4945 3.69693 12.1804C3.71378 11.8662 3.66008 11.5523 3.53979 11.2617C3.41949 10.971 3.23564 10.711 3.00174 10.5007C2.76783 10.2903 2.4898 10.135 2.18805 10.0462L1.82918 9.94044C0.889801 9.66369 0.889801 8.33394 1.82918 8.05719L2.18805 7.95144C2.48933 7.86246 2.76691 7.70725 3.00046 7.49715C3.23401 7.28706 3.41764 7.0274 3.53789 6.73718C3.65814 6.44696 3.71197 6.13352 3.69546 5.81981C3.67894 5.5061 3.59249 5.20005 3.44243 4.92407L3.26243 4.59557C2.79555 3.73607 3.73493 2.79557 4.59555 3.26357L4.92405 3.44244C5.20008 3.59271 5.50623 3.67934 5.82008 3.69596C6.13392 3.71259 6.44751 3.6588 6.73788 3.53853C7.02824 3.41827 7.28802 3.23457 7.4982 3.0009C7.70837 2.76723 7.86361 2.4895 7.95255 2.18807L8.0583 1.82919Z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li class="dropdown d-block d-lg-none">
                            <button class="btn btn-sm btn-white sidebar-toggle ms-3" type="button">
                                <i class="fa fa-bars"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="NotificationsDiv">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title">Notifications</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body notification custom_scroll">
                <ul class="nav nav-tabs tab-card" role="tablist">
                    <li class="nav-item flex-fill text-center">
                        <a class="nav-link active" data-bs-toggle="tab" href="#noti_tab_all" role="tab">All</a>
                    </li>
                    <li class="nav-item flex-fill text-center">
                        <a class="nav-link" data-bs-toggle="tab" href="#noti_tab_msg" role="tab">Message</a>
                    </li>
                    <li class="nav-item flex-fill text-center">
                        <a class="nav-link" data-bs-toggle="tab" href="#noti_tab_archive" role="tab">Archive</a>
                    </li>
                </ul>
                <div class="tab-content mt-4">
                    <div class="tab-pane fade show active" id="noti_tab_all" role="tabpanel">
                        <ul class="list-group list-group-flush list-group-custom mb-0">
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <div class="avatar sm rounded no-thumbnail">
                                        <i class="fa fa-thumbs-up fa-lg"></i>
                                    </div>
                                    <div class="flex-fill ms-3">
                                        <p class="mb-0">
                                            Your New Campaign
                                            <strong class="text-primary">Holiday Sale</strong> is
                                            approved.
                                        </p>
                                        <small>11:30 AM Today</small>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <div class="d-flex">
                                    <img class="avatar sm rounded" src="{{ asset('admin-assets/img/xs/avatar1.jpg') }}"
                                        alt="" />
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Tina Harris</span> <small>2MIN</small>
                                        </p>
                                        <span>is requesting to upgrade Plan</span>
                                        <div class="mt-2">
                                            <a href="#" class="btn btn-sm bg-dark text-muted">Accept</a>
                                            <a href="#" class="btn btn-sm btn-outline-primary">Decline</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <div class="avatar sm rounded no-thumbnail">
                                        <i class="fa fa-pie-chart fa-lg"></i>
                                    </div>
                                    <div class="flex-fill ms-3">
                                        <p class="mb-0">
                                            Website visits from Twitter is
                                            <strong class="text-danger">27% higher</strong> than
                                            last week.
                                        </p>
                                        <small>04:00 PM Today</small>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <img class="avatar sm rounded" src="{{ asset('admin-assets/img/xs/avatar3.jpg') }}"
                                        alt="" />
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Elsie Melendez</span> <small>1HR</small>
                                        </p>
                                        <span>There are many variations of passages</span>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <img class="avatar sm rounded" src="{{ asset('admin-assets/img/xs/avatar4.jpg') }}"
                                        alt="" />
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Silva Foster</span> <small>1DAY</small>
                                        </p>
                                        <span>Contrary to popular belief
                                            <span class="badge bg-danger">Code</span></span>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <div class="avatar sm rounded no-thumbnail">
                                        <i class="fa fa-info-circle fa-lg"></i>
                                    </div>
                                    <div class="flex-fill ms-3">
                                        <p class="mb-0">
                                            Campaign
                                            <strong class="text-primary">Holiday Sale</strong> is
                                            nearly reach budget limit.
                                        </p>
                                        <small>10:00 AM Today</small>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <div class="avatar sm rounded no-thumbnail">
                                        <i class="fa fa-warning fa-lg"></i>
                                    </div>
                                    <div class="flex-fill ms-3">
                                        <p class="mb-0">
                                            <strong class="text-warning">Error</strong> on website
                                            analytics configurations
                                        </p>
                                        <small>Yesterday</small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="noti_tab_msg" role="tabpanel">
                        <ul class="list-group list-group-flush list-group-custom mb-0">
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <img class="avatar sm rounded" src="{{ asset('admin-assets/img/xs/avatar5.jpg') }}"
                                        alt="" />
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Joseph Strickland</span> <small>13MIN</small>
                                        </p>
                                        <span>making it over 2000 years old</span>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <img class="avatar sm rounded" src="{{ asset('admin-assets/img/xs/avatar6.jpg') }}"
                                        alt="" />
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Elsie Melendez</span> <small>1HR</small>
                                        </p>
                                        <span>There are many variations of passages</span>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <div class="d-flex">
                                    <img class="avatar sm rounded" src="{{ asset('admin-assets/img/xs/avatar1.jpg') }}"
                                        alt="" />
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Tina Harris</span> <small>2MIN</small>
                                        </p>
                                        <span>is requesting to upgrade Plan</span>
                                        <div class="mt-2">
                                            <a href="#" class="btn btn-sm bg-dark text-muted">Accept</a>
                                            <a href="#" class="btn btn-sm btn-outline-primary">Decline</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <div class="avatar sm rounded no-thumbnail">PT</div>
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Margo Witt</span> <small>13MIN</small>
                                        </p>
                                        <span>It is a long established fact that a reader will be
                                            distracted</span>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <img class="avatar sm rounded" src="{{ asset('admin-assets/img/xs/avatar3.jpg') }}"
                                        alt="" />
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Elsie Melendez</span> <small>1HR</small>
                                        </p>
                                        <span>There are many variations of passages</span>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <img class="avatar sm rounded" src="{{ asset('admin-assets/img/xs/avatar4.jpg') }}"
                                        alt="" />
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Carmen Goh</span> <small>1DAY</small>
                                        </p>
                                        <span>Update code in GitHub</span>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="d-flex">
                                    <img class="avatar sm rounded" src="{{ asset('admin-assets/img/xs/avatar7.jpg') }}"
                                        alt="" />
                                    <div class="flex-fill ms-3">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span>Barber Johnson</span> <small>1DAY</small>
                                        </p>
                                        <span>The generated Lorem Ipsum</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="noti_tab_archive" role="tabpanel">
                        <ul class="list-group list-group-flush list-group-custom mb-0">
                            <li class="list-group-item">
                                <h4 class="color-400">No Archive!</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--[ Start:: page filter ]-->
        <div class="page-filter">
            <div class="collapse" id="collapseFilter">
                <div class="filter-div">
                    <a class="px-3 py-2 m-1 d-inline-flex rounded text-decoration-none border dashed"
                        href="my-wallet.html">My Wallet</a>
                    <a class="px-3 py-2 m-1 d-inline-flex rounded text-decoration-none border dashed"
                        href="my-iot.html">Smart Home</a>
                    <a class="px-3 py-2 m-1 d-inline-flex rounded text-decoration-none border dashed"
                        href="my-task.html">My Task</a>
                    <a class="px-3 py-2 m-1 d-inline-flex rounded text-decoration-none border dashed"
                        href="my-campaigns.html">Campaigns</a>
                    <a class="px-3 py-2 m-1 d-inline-flex rounded text-decoration-none border dashed"
                        href="app-inbox.html">Inbox</a>
                </div>
            </div>
            <a class="btn btn-sm collapsed py-0" data-bs-toggle="collapse" href="#collapseFilter" role="button"
                aria-expanded="false">
                <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none">
                    <style>
                        @keyframes slide-right {
                            0% {
                                transform: translateY(0);
                            }

                            to {
                                transform: translateY(1px);
                            }
                        }
                    </style>
                    <path fill="var(--primary-color)"
                        d="M12.75 6.432a.75.75 0 00-1.5 0h1.5zm-1.5 6a.75.75 0 001.5 0h-1.5zm-1.22-2.53a.75.75 0 10-1.06 1.06l1.06-1.06zm1.97 3.03l-.53.53a.75.75 0 001.06 0l-.53-.53zm3.03-1.97a.75.75 0 00-1.06-1.06l1.06 1.06zm-3.78-4.53v6h1.5v-6h-1.5zm-2.28 4.53l2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06zm3.56 2.5l2.5-2.5-1.06-1.06-2.5 2.5 1.06 1.06z"
                        style="
            animation: slide-right 0.5s cubic-bezier(1, -0.43, 0.68, 0.57)
              infinite alternate both;
          ">
                    </path>
                    <path fill="var(--gray-5)"
                        d="M8.398 15.37a.75.75 0 10-.796 1.27l.796-1.27zm-.319.685l.398-.636-.398.636zm8.327.58a.75.75 0 00-.812-1.26l.812 1.26zm-8.804.006l.08.05.795-1.272-.079-.05-.796 1.272zm.08.05a8.14 8.14 0 008.724-.055l-.812-1.262a6.64 6.64 0 01-7.117.045l-.796 1.271z">
                    </path>
                </svg>
            </a>
        </div>
        <!--[ Start:: page title and breadcrumb ]-->
        <div class="page-title mb-lg-4">
            <div class="container-fluid">
                <ol class="breadcrumb bg-transparent w-100 li_animate mb-3 mb-md-1">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                        My Dashboard
                    </li>
                </ol>
                <h1 class="mb-0 text-gradient font-heading">Hello, Brian!</h1>
                <div class="ms-sm-auto mt-2 mt-sm-0">
                    <div class="avatar-list avatar-list-stacked px-3 d-inline-flex">
                        <span class="pe-4">New User</span>
                        <img class="avatar sm rounded-circle" src="{{ asset('admin-assets/img/xs/avatar5.jpg') }}"
                            data-toggle="tooltip" title="Avatar" />
                        <img class="avatar sm rounded-circle" src="{{ asset('admin-assets/img/xs/avatar6.jpg') }}"
                            data-toggle="tooltip" title="Avatar" />
                        <img class="avatar sm rounded-circle" src="{{ asset('admin-assets/img/xs/avatar1.jpg') }}"
                            data-toggle="tooltip" title="Avatar" />
                        <img class="avatar sm rounded-circle" src="{{ asset('admin-assets/img/xs/avatar4.jpg') }}"
                            data-toggle="tooltip" title="Avatar" />
                        <img class="avatar sm rounded-circle" src="{{ asset('admin-assets/img/xs/avatar2.jpg') }}"
                            data-toggle="tooltip" title="Avatar" />
                    </div>
                    <a href="docs/widget.html" title="Widget" class="btn btn-primary">Add Widget's</a>
                </div>
            </div>
        </div>
        <!--[ Start:: page body area ]-->
        <main class="page-body">
            <div class="container-fluid">
                <!--[ Start:: My Dashboard ]-->
                <div class="row g-3 row-deck">
                    <div class="col-xxl-3 col-xl-6 col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                          <div class="card-body">
                            <h3>$15K</h3>
                            <p class="text-muted">
                              67% <i class="fa fa-level-up text-success"></i> Total income
                            </p>
                            <div id="apexspark_bar_1" style="min-height: 40px;"><div id="apexcharts3tgx34l8" class="apexcharts-canvas apexcharts3tgx34l8 apexcharts-theme-light" style="width: 100px; height: 40px;"><svg id="SvgjsSvg2025" width="100" height="40" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2027" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2026"><linearGradient id="SvgjsLinearGradient2031" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop2032" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop><stop id="SvgjsStop2033" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop><stop id="SvgjsStop2034" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop></linearGradient><clipPath id="gridRectMask3tgx34l8"><rect id="SvgjsRect2037" width="106" height="42" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask3tgx34l8"></clipPath><clipPath id="nonForecastMask3tgx34l8"></clipPath><clipPath id="gridRectMarkerMask3tgx34l8"><rect id="SvgjsRect2038" width="104" height="44" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine2036" x1="0" y1="0" x2="0" y2="40" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="40" fill="url(#SvgjsLinearGradient2031)" filter="none" fill-opacity="0.9" stroke-width="0"></line><g id="SvgjsG2065" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2066" class="apexcharts-xaxis-texts-g" transform="translate(0, 4)"></g></g><g id="SvgjsG2079" class="apexcharts-grid"><g id="SvgjsG2080" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2082" x1="0" y1="0" x2="100" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine2083" x1="0" y1="8" x2="100" y2="8" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine2084" x1="0" y1="16" x2="100" y2="16" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine2085" x1="0" y1="24" x2="100" y2="24" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine2086" x1="0" y1="32" x2="100" y2="32" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine2087" x1="0" y1="40" x2="100" y2="40" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG2081" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2089" x1="0" y1="40" x2="100" y2="40" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine2088" x1="0" y1="1" x2="0" y2="40" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG2039" class="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG2040" class="apexcharts-series" rel="1" seriesName="seriesx1" data:realIndex="0"><path id="SvgjsPath2044" d="M 0.9090909090909092 40L 0.9090909090909092 21.2Q 0.9090909090909092 21.2 0.9090909090909092 21.2L 6.181818181818183 21.2Q 6.181818181818183 21.2 6.181818181818183 21.2L 6.181818181818183 21.2L 6.181818181818183 40L 6.181818181818183 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 0.9090909090909092 40L 0.9090909090909092 21.2Q 0.9090909090909092 21.2 0.9090909090909092 21.2L 6.181818181818183 21.2Q 6.181818181818183 21.2 6.181818181818183 21.2L 6.181818181818183 21.2L 6.181818181818183 40L 6.181818181818183 40z" pathFrom="M 0.9090909090909092 40L 0.9090909090909092 40L 6.181818181818183 40L 6.181818181818183 40L 6.181818181818183 40L 6.181818181818183 40L 6.181818181818183 40L 0.9090909090909092 40" cy="21.2" cx="9" j="0" val="47" barHeight="18.8" barWidth="7.272727272727273"></path><path id="SvgjsPath2046" d="M 10 40L 10 22Q 10 22 10 22L 15.272727272727273 22Q 15.272727272727273 22 15.272727272727273 22L 15.272727272727273 22L 15.272727272727273 40L 15.272727272727273 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 10 40L 10 22Q 10 22 10 22L 15.272727272727273 22Q 15.272727272727273 22 15.272727272727273 22L 15.272727272727273 22L 15.272727272727273 40L 15.272727272727273 40z" pathFrom="M 10 40L 10 40L 15.272727272727273 40L 15.272727272727273 40L 15.272727272727273 40L 15.272727272727273 40L 15.272727272727273 40L 10 40" cy="22" cx="18.090909090909093" j="1" val="45" barHeight="18" barWidth="7.272727272727273"></path><path id="SvgjsPath2048" d="M 19.090909090909093 40L 19.090909090909093 10.399999999999999Q 19.090909090909093 10.399999999999999 19.090909090909093 10.399999999999999L 24.363636363636367 10.399999999999999Q 24.363636363636367 10.399999999999999 24.363636363636367 10.399999999999999L 24.363636363636367 10.399999999999999L 24.363636363636367 40L 24.363636363636367 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 19.090909090909093 40L 19.090909090909093 10.399999999999999Q 19.090909090909093 10.399999999999999 19.090909090909093 10.399999999999999L 24.363636363636367 10.399999999999999Q 24.363636363636367 10.399999999999999 24.363636363636367 10.399999999999999L 24.363636363636367 10.399999999999999L 24.363636363636367 40L 24.363636363636367 40z" pathFrom="M 19.090909090909093 40L 19.090909090909093 40L 24.363636363636367 40L 24.363636363636367 40L 24.363636363636367 40L 24.363636363636367 40L 24.363636363636367 40L 19.090909090909093 40" cy="10.399999999999999" cx="27.181818181818187" j="2" val="74" barHeight="29.6" barWidth="7.272727272727273"></path><path id="SvgjsPath2050" d="M 28.181818181818187 40L 28.181818181818187 34.4Q 28.181818181818187 34.4 28.181818181818187 34.4L 33.45454545454546 34.4Q 33.45454545454546 34.4 33.45454545454546 34.4L 33.45454545454546 34.4L 33.45454545454546 40L 33.45454545454546 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 28.181818181818187 40L 28.181818181818187 34.4Q 28.181818181818187 34.4 28.181818181818187 34.4L 33.45454545454546 34.4Q 33.45454545454546 34.4 33.45454545454546 34.4L 33.45454545454546 34.4L 33.45454545454546 40L 33.45454545454546 40z" pathFrom="M 28.181818181818187 40L 28.181818181818187 40L 33.45454545454546 40L 33.45454545454546 40L 33.45454545454546 40L 33.45454545454546 40L 33.45454545454546 40L 28.181818181818187 40" cy="34.4" cx="36.27272727272728" j="3" val="14" barHeight="5.6" barWidth="7.272727272727273"></path><path id="SvgjsPath2052" d="M 37.27272727272728 40L 37.27272727272728 17.6Q 37.27272727272728 17.6 37.27272727272728 17.6L 42.545454545454554 17.6Q 42.545454545454554 17.6 42.545454545454554 17.6L 42.545454545454554 17.6L 42.545454545454554 40L 42.545454545454554 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 37.27272727272728 40L 37.27272727272728 17.6Q 37.27272727272728 17.6 37.27272727272728 17.6L 42.545454545454554 17.6Q 42.545454545454554 17.6 42.545454545454554 17.6L 42.545454545454554 17.6L 42.545454545454554 40L 42.545454545454554 40z" pathFrom="M 37.27272727272728 40L 37.27272727272728 40L 42.545454545454554 40L 42.545454545454554 40L 42.545454545454554 40L 42.545454545454554 40L 42.545454545454554 40L 37.27272727272728 40" cy="17.6" cx="45.363636363636374" j="4" val="56" barHeight="22.4" barWidth="7.272727272727273"></path><path id="SvgjsPath2054" d="M 46.363636363636374 40L 46.363636363636374 10.399999999999999Q 46.363636363636374 10.399999999999999 46.363636363636374 10.399999999999999L 51.63636363636365 10.399999999999999Q 51.63636363636365 10.399999999999999 51.63636363636365 10.399999999999999L 51.63636363636365 10.399999999999999L 51.63636363636365 40L 51.63636363636365 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 46.363636363636374 40L 46.363636363636374 10.399999999999999Q 46.363636363636374 10.399999999999999 46.363636363636374 10.399999999999999L 51.63636363636365 10.399999999999999Q 51.63636363636365 10.399999999999999 51.63636363636365 10.399999999999999L 51.63636363636365 10.399999999999999L 51.63636363636365 40L 51.63636363636365 40z" pathFrom="M 46.363636363636374 40L 46.363636363636374 40L 51.63636363636365 40L 51.63636363636365 40L 51.63636363636365 40L 51.63636363636365 40L 51.63636363636365 40L 46.363636363636374 40" cy="10.399999999999999" cx="54.45454545454547" j="5" val="74" barHeight="29.6" barWidth="7.272727272727273"></path><path id="SvgjsPath2056" d="M 55.45454545454547 40L 55.45454545454547 34.4Q 55.45454545454547 34.4 55.45454545454547 34.4L 60.72727272727274 34.4Q 60.72727272727274 34.4 60.72727272727274 34.4L 60.72727272727274 34.4L 60.72727272727274 40L 60.72727272727274 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 55.45454545454547 40L 55.45454545454547 34.4Q 55.45454545454547 34.4 55.45454545454547 34.4L 60.72727272727274 34.4Q 60.72727272727274 34.4 60.72727272727274 34.4L 60.72727272727274 34.4L 60.72727272727274 40L 60.72727272727274 40z" pathFrom="M 55.45454545454547 40L 55.45454545454547 40L 60.72727272727274 40L 60.72727272727274 40L 60.72727272727274 40L 60.72727272727274 40L 60.72727272727274 40L 55.45454545454547 40" cy="34.4" cx="63.54545454545456" j="6" val="14" barHeight="5.6" barWidth="7.272727272727273"></path><path id="SvgjsPath2058" d="M 64.54545454545456 40L 64.54545454545456 35.6Q 64.54545454545456 35.6 64.54545454545456 35.6L 69.81818181818184 35.6Q 69.81818181818184 35.6 69.81818181818184 35.6L 69.81818181818184 35.6L 69.81818181818184 40L 69.81818181818184 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 64.54545454545456 40L 64.54545454545456 35.6Q 64.54545454545456 35.6 64.54545454545456 35.6L 69.81818181818184 35.6Q 69.81818181818184 35.6 69.81818181818184 35.6L 69.81818181818184 35.6L 69.81818181818184 40L 69.81818181818184 40z" pathFrom="M 64.54545454545456 40L 64.54545454545456 40L 69.81818181818184 40L 69.81818181818184 40L 69.81818181818184 40L 69.81818181818184 40L 69.81818181818184 40L 64.54545454545456 40" cy="35.6" cx="72.63636363636365" j="7" val="11" barHeight="4.4" barWidth="7.272727272727273"></path><path id="SvgjsPath2060" d="M 73.63636363636365 40L 73.63636363636365 37.2Q 73.63636363636365 37.2 73.63636363636365 37.2L 78.90909090909093 37.2Q 78.90909090909093 37.2 78.90909090909093 37.2L 78.90909090909093 37.2L 78.90909090909093 40L 78.90909090909093 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 73.63636363636365 40L 73.63636363636365 37.2Q 73.63636363636365 37.2 73.63636363636365 37.2L 78.90909090909093 37.2Q 78.90909090909093 37.2 78.90909090909093 37.2L 78.90909090909093 37.2L 78.90909090909093 40L 78.90909090909093 40z" pathFrom="M 73.63636363636365 40L 73.63636363636365 40L 78.90909090909093 40L 78.90909090909093 40L 78.90909090909093 40L 78.90909090909093 40L 78.90909090909093 40L 73.63636363636365 40" cy="37.2" cx="81.72727272727275" j="8" val="7" barHeight="2.8" barWidth="7.272727272727273"></path><path id="SvgjsPath2062" d="M 82.72727272727275 40L 82.72727272727275 24.4Q 82.72727272727275 24.4 82.72727272727275 24.4L 88.00000000000003 24.4Q 88.00000000000003 24.4 88.00000000000003 24.4L 88.00000000000003 24.4L 88.00000000000003 40L 88.00000000000003 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 82.72727272727275 40L 82.72727272727275 24.4Q 82.72727272727275 24.4 82.72727272727275 24.4L 88.00000000000003 24.4Q 88.00000000000003 24.4 88.00000000000003 24.4L 88.00000000000003 24.4L 88.00000000000003 40L 88.00000000000003 40z" pathFrom="M 82.72727272727275 40L 82.72727272727275 40L 88.00000000000003 40L 88.00000000000003 40L 88.00000000000003 40L 88.00000000000003 40L 88.00000000000003 40L 82.72727272727275 40" cy="24.4" cx="90.81818181818184" j="9" val="39" barHeight="15.6" barWidth="7.272727272727273"></path><path id="SvgjsPath2064" d="M 91.81818181818184 40L 91.81818181818184 7.200000000000003Q 91.81818181818184 7.200000000000003 91.81818181818184 7.200000000000003L 97.09090909090912 7.200000000000003Q 97.09090909090912 7.200000000000003 97.09090909090912 7.200000000000003L 97.09090909090912 7.200000000000003L 97.09090909090912 40L 97.09090909090912 40z" fill="var(--theme-color2)" fill-opacity="1" stroke="var(--theme-color2)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tgx34l8)" pathTo="M 91.81818181818184 40L 91.81818181818184 7.200000000000003Q 91.81818181818184 7.200000000000003 91.81818181818184 7.200000000000003L 97.09090909090912 7.200000000000003Q 97.09090909090912 7.200000000000003 97.09090909090912 7.200000000000003L 97.09090909090912 7.200000000000003L 97.09090909090912 40L 97.09090909090912 40z" pathFrom="M 91.81818181818184 40L 91.81818181818184 40L 97.09090909090912 40L 97.09090909090912 40L 97.09090909090912 40L 97.09090909090912 40L 97.09090909090912 40L 91.81818181818184 40" cy="7.200000000000003" cx="99.90909090909093" j="10" val="82" barHeight="32.8" barWidth="7.272727272727273"></path><g id="SvgjsG2042" class="apexcharts-bar-goals-markers" style="pointer-events: none"><g id="SvgjsG2043" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2045" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2047" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2049" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2051" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2053" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2055" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2057" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2059" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2061" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2063" className="apexcharts-bar-goals-groups"></g></g></g><g id="SvgjsG2041" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2090" x1="0" y1="0" x2="100" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2091" x1="0" y1="0" x2="100" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2092" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG2093" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG2094" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect2035" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2078" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2028" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 20px;"></div><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: var(--theme-color2);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                          <div class="card-body">
                            <h3>$1258</h3>
                            <p class="text-muted">
                              15% <i class="fa fa-level-up text-success"></i> Total
                              Expense
                            </p>
                            <div id="apexspark_bar_2" style="min-height: 40px;"><div id="apexcharts7c8kfuo1" class="apexcharts-canvas apexcharts7c8kfuo1 apexcharts-theme-light" style="width: 100px; height: 40px;"><svg id="SvgjsSvg3582" width="100" height="40" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG3584" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs3583"><linearGradient id="SvgjsLinearGradient3588" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop3589" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop><stop id="SvgjsStop3590" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop><stop id="SvgjsStop3591" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop></linearGradient><clipPath id="gridRectMask7c8kfuo1"><rect id="SvgjsRect3594" width="106" height="42" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask7c8kfuo1"></clipPath><clipPath id="nonForecastMask7c8kfuo1"></clipPath><clipPath id="gridRectMarkerMask7c8kfuo1"><rect id="SvgjsRect3595" width="104" height="44" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine3593" x1="0" y1="0" x2="0" y2="40" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="40" fill="url(#SvgjsLinearGradient3588)" filter="none" fill-opacity="0.9" stroke-width="0"></line><g id="SvgjsG3622" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG3623" class="apexcharts-xaxis-texts-g" transform="translate(0, 4)"></g></g><g id="SvgjsG3636" class="apexcharts-grid"><g id="SvgjsG3637" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine3639" x1="0" y1="0" x2="100" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine3640" x1="0" y1="8" x2="100" y2="8" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine3641" x1="0" y1="16" x2="100" y2="16" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine3642" x1="0" y1="24" x2="100" y2="24" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine3643" x1="0" y1="32" x2="100" y2="32" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine3644" x1="0" y1="40" x2="100" y2="40" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG3638" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine3646" x1="0" y1="40" x2="100" y2="40" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine3645" x1="0" y1="1" x2="0" y2="40" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG3596" class="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG3597" class="apexcharts-series" rel="1" seriesName="seriesx1" data:realIndex="0"><path id="SvgjsPath3601" d="M 0.9090909090909092 40L 0.9090909090909092 21.2Q 0.9090909090909092 21.2 0.9090909090909092 21.2L 6.181818181818183 21.2Q 6.181818181818183 21.2 6.181818181818183 21.2L 6.181818181818183 21.2L 6.181818181818183 40L 6.181818181818183 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 0.9090909090909092 40L 0.9090909090909092 21.2Q 0.9090909090909092 21.2 0.9090909090909092 21.2L 6.181818181818183 21.2Q 6.181818181818183 21.2 6.181818181818183 21.2L 6.181818181818183 21.2L 6.181818181818183 40L 6.181818181818183 40z" pathFrom="M 0.9090909090909092 40L 0.9090909090909092 40L 6.181818181818183 40L 6.181818181818183 40L 6.181818181818183 40L 6.181818181818183 40L 6.181818181818183 40L 0.9090909090909092 40" cy="21.2" cx="9" j="0" val="47" barHeight="18.8" barWidth="7.272727272727273"></path><path id="SvgjsPath3603" d="M 10 40L 10 22Q 10 22 10 22L 15.272727272727273 22Q 15.272727272727273 22 15.272727272727273 22L 15.272727272727273 22L 15.272727272727273 40L 15.272727272727273 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 10 40L 10 22Q 10 22 10 22L 15.272727272727273 22Q 15.272727272727273 22 15.272727272727273 22L 15.272727272727273 22L 15.272727272727273 40L 15.272727272727273 40z" pathFrom="M 10 40L 10 40L 15.272727272727273 40L 15.272727272727273 40L 15.272727272727273 40L 15.272727272727273 40L 15.272727272727273 40L 10 40" cy="22" cx="18.090909090909093" j="1" val="45" barHeight="18" barWidth="7.272727272727273"></path><path id="SvgjsPath3605" d="M 19.090909090909093 40L 19.090909090909093 10.399999999999999Q 19.090909090909093 10.399999999999999 19.090909090909093 10.399999999999999L 24.363636363636367 10.399999999999999Q 24.363636363636367 10.399999999999999 24.363636363636367 10.399999999999999L 24.363636363636367 10.399999999999999L 24.363636363636367 40L 24.363636363636367 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 19.090909090909093 40L 19.090909090909093 10.399999999999999Q 19.090909090909093 10.399999999999999 19.090909090909093 10.399999999999999L 24.363636363636367 10.399999999999999Q 24.363636363636367 10.399999999999999 24.363636363636367 10.399999999999999L 24.363636363636367 10.399999999999999L 24.363636363636367 40L 24.363636363636367 40z" pathFrom="M 19.090909090909093 40L 19.090909090909093 40L 24.363636363636367 40L 24.363636363636367 40L 24.363636363636367 40L 24.363636363636367 40L 24.363636363636367 40L 19.090909090909093 40" cy="10.399999999999999" cx="27.181818181818187" j="2" val="74" barHeight="29.6" barWidth="7.272727272727273"></path><path id="SvgjsPath3607" d="M 28.181818181818187 40L 28.181818181818187 34.4Q 28.181818181818187 34.4 28.181818181818187 34.4L 33.45454545454546 34.4Q 33.45454545454546 34.4 33.45454545454546 34.4L 33.45454545454546 34.4L 33.45454545454546 40L 33.45454545454546 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 28.181818181818187 40L 28.181818181818187 34.4Q 28.181818181818187 34.4 28.181818181818187 34.4L 33.45454545454546 34.4Q 33.45454545454546 34.4 33.45454545454546 34.4L 33.45454545454546 34.4L 33.45454545454546 40L 33.45454545454546 40z" pathFrom="M 28.181818181818187 40L 28.181818181818187 40L 33.45454545454546 40L 33.45454545454546 40L 33.45454545454546 40L 33.45454545454546 40L 33.45454545454546 40L 28.181818181818187 40" cy="34.4" cx="36.27272727272728" j="3" val="14" barHeight="5.6" barWidth="7.272727272727273"></path><path id="SvgjsPath3609" d="M 37.27272727272728 40L 37.27272727272728 17.6Q 37.27272727272728 17.6 37.27272727272728 17.6L 42.545454545454554 17.6Q 42.545454545454554 17.6 42.545454545454554 17.6L 42.545454545454554 17.6L 42.545454545454554 40L 42.545454545454554 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 37.27272727272728 40L 37.27272727272728 17.6Q 37.27272727272728 17.6 37.27272727272728 17.6L 42.545454545454554 17.6Q 42.545454545454554 17.6 42.545454545454554 17.6L 42.545454545454554 17.6L 42.545454545454554 40L 42.545454545454554 40z" pathFrom="M 37.27272727272728 40L 37.27272727272728 40L 42.545454545454554 40L 42.545454545454554 40L 42.545454545454554 40L 42.545454545454554 40L 42.545454545454554 40L 37.27272727272728 40" cy="17.6" cx="45.363636363636374" j="4" val="56" barHeight="22.4" barWidth="7.272727272727273"></path><path id="SvgjsPath3611" d="M 46.363636363636374 40L 46.363636363636374 10.399999999999999Q 46.363636363636374 10.399999999999999 46.363636363636374 10.399999999999999L 51.63636363636365 10.399999999999999Q 51.63636363636365 10.399999999999999 51.63636363636365 10.399999999999999L 51.63636363636365 10.399999999999999L 51.63636363636365 40L 51.63636363636365 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 46.363636363636374 40L 46.363636363636374 10.399999999999999Q 46.363636363636374 10.399999999999999 46.363636363636374 10.399999999999999L 51.63636363636365 10.399999999999999Q 51.63636363636365 10.399999999999999 51.63636363636365 10.399999999999999L 51.63636363636365 10.399999999999999L 51.63636363636365 40L 51.63636363636365 40z" pathFrom="M 46.363636363636374 40L 46.363636363636374 40L 51.63636363636365 40L 51.63636363636365 40L 51.63636363636365 40L 51.63636363636365 40L 51.63636363636365 40L 46.363636363636374 40" cy="10.399999999999999" cx="54.45454545454547" j="5" val="74" barHeight="29.6" barWidth="7.272727272727273"></path><path id="SvgjsPath3613" d="M 55.45454545454547 40L 55.45454545454547 34.4Q 55.45454545454547 34.4 55.45454545454547 34.4L 60.72727272727274 34.4Q 60.72727272727274 34.4 60.72727272727274 34.4L 60.72727272727274 34.4L 60.72727272727274 40L 60.72727272727274 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 55.45454545454547 40L 55.45454545454547 34.4Q 55.45454545454547 34.4 55.45454545454547 34.4L 60.72727272727274 34.4Q 60.72727272727274 34.4 60.72727272727274 34.4L 60.72727272727274 34.4L 60.72727272727274 40L 60.72727272727274 40z" pathFrom="M 55.45454545454547 40L 55.45454545454547 40L 60.72727272727274 40L 60.72727272727274 40L 60.72727272727274 40L 60.72727272727274 40L 60.72727272727274 40L 55.45454545454547 40" cy="34.4" cx="63.54545454545456" j="6" val="14" barHeight="5.6" barWidth="7.272727272727273"></path><path id="SvgjsPath3615" d="M 64.54545454545456 40L 64.54545454545456 35.6Q 64.54545454545456 35.6 64.54545454545456 35.6L 69.81818181818184 35.6Q 69.81818181818184 35.6 69.81818181818184 35.6L 69.81818181818184 35.6L 69.81818181818184 40L 69.81818181818184 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 64.54545454545456 40L 64.54545454545456 35.6Q 64.54545454545456 35.6 64.54545454545456 35.6L 69.81818181818184 35.6Q 69.81818181818184 35.6 69.81818181818184 35.6L 69.81818181818184 35.6L 69.81818181818184 40L 69.81818181818184 40z" pathFrom="M 64.54545454545456 40L 64.54545454545456 40L 69.81818181818184 40L 69.81818181818184 40L 69.81818181818184 40L 69.81818181818184 40L 69.81818181818184 40L 64.54545454545456 40" cy="35.6" cx="72.63636363636365" j="7" val="11" barHeight="4.4" barWidth="7.272727272727273"></path><path id="SvgjsPath3617" d="M 73.63636363636365 40L 73.63636363636365 37.2Q 73.63636363636365 37.2 73.63636363636365 37.2L 78.90909090909093 37.2Q 78.90909090909093 37.2 78.90909090909093 37.2L 78.90909090909093 37.2L 78.90909090909093 40L 78.90909090909093 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 73.63636363636365 40L 73.63636363636365 37.2Q 73.63636363636365 37.2 73.63636363636365 37.2L 78.90909090909093 37.2Q 78.90909090909093 37.2 78.90909090909093 37.2L 78.90909090909093 37.2L 78.90909090909093 40L 78.90909090909093 40z" pathFrom="M 73.63636363636365 40L 73.63636363636365 40L 78.90909090909093 40L 78.90909090909093 40L 78.90909090909093 40L 78.90909090909093 40L 78.90909090909093 40L 73.63636363636365 40" cy="37.2" cx="81.72727272727275" j="8" val="7" barHeight="2.8" barWidth="7.272727272727273"></path><path id="SvgjsPath3619" d="M 82.72727272727275 40L 82.72727272727275 24.4Q 82.72727272727275 24.4 82.72727272727275 24.4L 88.00000000000003 24.4Q 88.00000000000003 24.4 88.00000000000003 24.4L 88.00000000000003 24.4L 88.00000000000003 40L 88.00000000000003 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 82.72727272727275 40L 82.72727272727275 24.4Q 82.72727272727275 24.4 82.72727272727275 24.4L 88.00000000000003 24.4Q 88.00000000000003 24.4 88.00000000000003 24.4L 88.00000000000003 24.4L 88.00000000000003 40L 88.00000000000003 40z" pathFrom="M 82.72727272727275 40L 82.72727272727275 40L 88.00000000000003 40L 88.00000000000003 40L 88.00000000000003 40L 88.00000000000003 40L 88.00000000000003 40L 82.72727272727275 40" cy="24.4" cx="90.81818181818184" j="9" val="39" barHeight="15.6" barWidth="7.272727272727273"></path><path id="SvgjsPath3621" d="M 91.81818181818184 40L 91.81818181818184 7.200000000000003Q 91.81818181818184 7.200000000000003 91.81818181818184 7.200000000000003L 97.09090909090912 7.200000000000003Q 97.09090909090912 7.200000000000003 97.09090909090912 7.200000000000003L 97.09090909090912 7.200000000000003L 97.09090909090912 40L 97.09090909090912 40z" fill="var(--theme-color1)" fill-opacity="1" stroke="var(--theme-color1)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask7c8kfuo1)" pathTo="M 91.81818181818184 40L 91.81818181818184 7.200000000000003Q 91.81818181818184 7.200000000000003 91.81818181818184 7.200000000000003L 97.09090909090912 7.200000000000003Q 97.09090909090912 7.200000000000003 97.09090909090912 7.200000000000003L 97.09090909090912 7.200000000000003L 97.09090909090912 40L 97.09090909090912 40z" pathFrom="M 91.81818181818184 40L 91.81818181818184 40L 97.09090909090912 40L 97.09090909090912 40L 97.09090909090912 40L 97.09090909090912 40L 97.09090909090912 40L 91.81818181818184 40" cy="7.200000000000003" cx="99.90909090909093" j="10" val="82" barHeight="32.8" barWidth="7.272727272727273"></path><g id="SvgjsG3599" class="apexcharts-bar-goals-markers" style="pointer-events: none"><g id="SvgjsG3600" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3602" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3604" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3606" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3608" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3610" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3612" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3614" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3616" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3618" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG3620" className="apexcharts-bar-goals-groups"></g></g></g><g id="SvgjsG3598" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine3647" x1="0" y1="0" x2="100" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine3648" x1="0" y1="0" x2="100" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG3649" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG3650" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG3651" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect3592" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG3635" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG3585" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 20px;"></div><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: var(--theme-color1);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
                          </div>
                        </div>
                      </div>
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title fw-normal mb-0">Product Summary</h5>
                                <div class="card-action">
                                    <div class="dropdown">
                                        <a href="#" class="card-options-remove text-danger"
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
                                        </a>
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
                                        <a href="#" class="dropdown-toggle after-none text-primary"
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
                                        </a>
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
                                                <th>Title</th>
                                                <th>Services</th>
                                                <th>Post Type </th>
                                                <th>Category </th>
                                                <th>Date</th>
                                                <th>Location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#01</td>
                                                <td>Sean Black</td>
                                                <td>PRO12345</td>
                                                <td>Mi LED Smart TV 4A 80</td>
                                                <td>$14,500</td>
                                                <td>Online Payment</td>
                                                <td>
                                                    <span class="badge bg-success">Delivered</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#02</td>
                                                <td>Evan Rees</td>
                                                <td>PRO8765</td>
                                                <td>Thomson R9 122cm (48 inch) Full HD LED TV</td>
                                                <td>$30,000</td>
                                                <td>Cash on delivered</td>
                                                <td>
                                                    <span class="badge bg-primary">Add Cart</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#03</td>
                                                <td>David Wallace</td>
                                                <td>PRO54321</td>
                                                <td>Vu 80cm (32 inch) HD Ready LED TV</td>
                                                <td>$13,200</td>
                                                <td>Online Payment</td>
                                                <td><span class="badge bg-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td>#04</td>
                                                <td>Julia Bower</td>
                                                <td>PRO97654</td>
                                                <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
                                                <td>$15,100</td>
                                                <td>Cash on delivered</td>
                                                <td>
                                                    <span class="badge bg-secondary">Delivering</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#05</td>
                                                <td>Kevin James</td>
                                                <td>PRO4532</td>
                                                <td>HP 200 Mouse &amp; Wireless Laptop Keyboard</td>
                                                <td>$5,987</td>
                                                <td>Online Payment</td>
                                                <td><span class="badge bg-danger">Shipped</span></td>
                                            </tr>
                                            <tr>
                                                <td>#06</td>
                                                <td>Theresa Wright</td>
                                                <td>PRO6789</td>
                                                <td>Digisol DG-HR3400 Router</td>
                                                <td>$11,987</td>
                                                <td>Cash on delivered</td>
                                                <td>
                                                    <span class="badge bg-success">Delivering</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#07</td>
                                                <td>Sebastian Black</td>
                                                <td>PRO4567</td>
                                                <td>Dell WM118 Wireless Optical Mouse</td>
                                                <td>$4,700</td>
                                                <td>Online Payment</td>
                                                <td>
                                                    <span class="badge bg-secondary">Add to Cart</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#08</td>
                                                <td>Kevin Glover</td>
                                                <td>PRO32156</td>
                                                <td>Dell 16 inch Laptop Backpack</td>
                                                <td>$678</td>
                                                <td>Cash On delivered</td>
                                                <td><span class="badge bg-info">Delivered</span></td>
                                            </tr>
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
        <footer class="page-footer py-4 mt-4">
            <div class="container-fluid">
                <p class="col-md-4 mb-0 text-muted">
                    © 2022
                    <a href="https://pixelwibes.com/" target="_blank" title="Pixelwibes">Pixelwibes</a>, All
                    Rights Reserved.
                </p>
            </div>
        </footer>
    </div>
@endsection

@section('customJs')
@endsection
