<aside class="sidebar">
    <div class="container-fluid">

        <!--[ sidebar:: menu list ]-->
        <ul class="menu-list mt-3 rounded-4" id="menu-list">
            <!--[ Start:: brand logo and name ]-->
            <li class="brand-icon mb-3 py-1">
                <a href="{{ route('admin.dashboard') }}">
                    <img class="light" src="{{ asset('user-assets/img/logo/adfjlight.svg') }}" alt="">
                    <img class="dark" src="{{ asset('user-assets/img/logo/adfj.svg') }}" alt="">
                    <span class="fs-5 ms-2 text-white" style="visibility: hidden;">Adfj Studios</span>
                </a>
            </li>
        </ul>
        <div class="flex-grow-1">
            <ul class="menu-list mt-3 rounded-4">
                <!--[ Start:: brand logo and name ]-->

                <!--[ Start:: dashboard ]-->
                <li class="pt-10">
                    <a class="active hyper" href="{{ route('admin.dashboard') }}">
                        <svg width="20" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path opacity="0.2"
                                d="M8.186 1.11303C8.06662 1.06519 7.93338 1.06519 7.814 1.11303L1.846 3.50003L8 5.96103L14.154 3.50003L8.186 1.11303ZM15 4.23903L8.5 6.83903V14.761L15 12.161V4.24003V4.23903ZM7.5 14.762V6.83803L1 4.23903V12.162L7.5 14.762V14.762ZM7.443 0.184033C7.80057 0.041032 8.19943 0.041032 8.557 0.184033L15.686 3.03603C15.7787 3.07318 15.8581 3.13723 15.9141 3.21992C15.9701 3.30262 16 3.40018 16 3.50003V12.162C15.9999 12.3619 15.9399 12.5571 15.8278 12.7225C15.7157 12.8879 15.5566 13.0159 15.371 13.09L8.186 15.964C8.06662 16.0119 7.93338 16.0119 7.814 15.964L0.63 13.09C0.444251 13.0161 0.284942 12.8881 0.172642 12.7227C0.0603417 12.5573 0.000206329 12.362 0 12.162L0 3.50003C2.32399e-05 3.40018 0.0299437 3.30262 0.085907 3.21992C0.14187 3.13723 0.221313 3.07318 0.314 3.03603L7.443 0.184033Z">
                            </path>
                            <path opacity="0.8" d="M8 7L1 4V12.5L8 15V7Z"></path>
                        </svg>

                        <span class="mx-3">Dashboard</span>
                    </a>
                    <!-- Menu: Sub menu ul -->

                </li>

                <li class="collapsed pt-2">
                    <a class="hyper" href="{{ route('admin.allposts') }}">
                        <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" width="20" height="20" viewBox="0 0 122.879 96.568"
                            enable-background="new 0 0 122.879 96.568" xml:space="preserve" fill="currentColor">

                            <g>
                                <path opacity="0.5"
                                    d="M5.535,15.447h98.221c1.527,0,2.891,0.62,3.883,1.611c0.99,0.991,1.611,2.396,1.611,3.882v70.134 c0,1.528-0.621,2.891-1.611,3.883c-0.082,0.082-0.166,0.165-0.289,0.247c-0.951,0.868-2.23,1.363-3.635,1.363H5.494 c-1.528,0-2.892-0.619-3.883-1.61S0,92.562,0,91.075V20.941c0-1.528,0.62-2.891,1.611-3.882s2.396-1.611,3.883-1.611H5.535 L5.535,15.447z M28.218,34.489c4.354,0,7.882,3.528,7.882,7.882s-3.528,7.883-7.882,7.883c-4.354,0-7.882-3.529-7.882-7.883 C20.335,38.018,23.864,34.489,28.218,34.489L28.218,34.489z M61.389,68.316l15.766-27.258l16.748,42.363l-78.165-0.001v-5.254 l6.57-0.327l6.567-16.093l3.282,11.496h9.855l8.537-22.004L61.389,68.316L61.389,68.316z M21.891,6.525 c-1.817,0-3.263-1.486-3.263-3.263C18.628,1.445,20.115,0,21.891,0h97.726c1.816,0,3.262,1.487,3.262,3.263v68.895 c0,1.818-1.486,3.264-3.262,3.264c-1.818,0-3.264-1.487-3.264-3.264V6.567H21.891V6.525L21.891,6.525z M102.723,21.974H6.567 v68.027h96.155V21.974L102.723,21.974z" />
                            </g>
                        </svg>

                        <span class="mx-3">All Posts</span>
                    </a>

                </li>
                <li class="collapsed pt-2">
                    <a class="hyper" href="{{ route('admin.featuredposts') }}">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"
                            height="25" width="25" id="recent" fill="currentColor">
                            <circle cx="14" cy="13" r="8" opacity="0.5"></circle>
                            <path fill="#262656" opacity="0.5"
                                d="M19.4302,8.8657C19.9087,8.5898,20.0723,7.978,19.7959,7.5C18.1934,4.7241,15.2061,3,12,3
                            c-4.9624,0-9,4.0376-9,9s4.0376,9,9,9c0.5522,0,1-0.4478,1-1s-0.4478-1-1-1c-3.8599,0-7-3.1401-7-7s3.1401-7,7-7
                            c2.4937,0,4.8174,1.3413,6.0645,3.5C18.3398,8.978,18.9512,9.1421,19.4302,8.8657z">
                            </path>
                            <circle cx="20" cy="12" r="1" fill="#262656" opacity="0.5"></circle>
                            <path fill="#262656" opacity="0.5"
                                d="M18.4282 16.866c.4783.2761 1.0898.1122 1.366-.366.2761-.4783.1122-1.0899-.366-1.366-.4783-.2762-1.0899-.1123-1.366.366C17.786 15.9783 17.9499 16.5898 18.4282 16.866zM15.5 18.0621c-.4783.2762-.6422.8878-.366 1.366.2761.4783.8878.6422 1.366.366.4783-.2761.6422-.8877.366-1.366C16.5899 17.9499 15.9783 17.786 15.5 18.0621zM12 8c-.5522 0-1 .4478-1 1v3c0 .2651.1055.5195.293.707l2 2C13.4883 14.9023 13.7441 15 14 15s.5117-.0977.707-.293c.3906-.3906.3906-1.0234 0-1.4141L13 11.5859V9C13 8.4478 12.5522 8 12 8z">
                            </path>
                        </svg>

                        <span class="mx-2">Featured Posts</span>

                    </a>

                </li>
                <li class="collapsed pt-2">
                    <a class="m-link" data-bs-toggle="collapse" data-bs-target="#menu_auth" href="#">
                        <svg width="30" height="30" viewBox="-2.4 -2.4 28.80 28.80"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" fill="currentColor"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                fill="currentColor"></g>
                            <g id="SVGRepo_iconCarrier" fill="currentColor">
                                <path opacity="0.5"
                                    d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z"
                                    stroke="#000000" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                        <span class="mx-3">Portfolio</span>
                        <span class="arrow fa fa-angle-down ms-auto text-end"></span>
                    </a>
                    <!-- Menu: Sub menu ul -->
                    <ul class="sub-menu collapse" id="menu_auth">
                        <li><a class="ms-link hyper" href="{{ route('admin.music') }}">Music</a></li>
                        <li><a class="ms-link hyper" href="{{ route('admin.video') }}">Video</a></li>
                        <li id="no-border-bottom">
                            <a class="ms-link hyper" href="{{ route('admin.graphics') }}">Graphics</a>
                        </li>
                    </ul>
                </li>
                <li class="collapsed pt-2">
                    <a class="hyper" href="/admin/add-type">
                        <svg width="20" height="20" viewBox="-3.2 -3.2 38.40 38.40" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="currentColor">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Page-1" stroke-width="0.300" fill="currentColor" fill-rule="evenodd"
                                    sketch:type="MSPage">
                                    <g id="Icon-Set" sketch:type="MSLayerGroup"
                                        transform="translate(-464.000000, -1087.000000)" fill="currentColor">
                                        <path opacity="0.5"
                                            d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
                                            id="plus-circle" sketch:type="MSShapeGroup">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="mx-3">Add Service Type</span>
                    </a>

                </li>


                <li class="collapsed pt-2">
                    <a class="hyper" href="/admin/testimonial">
                        <svg width="20" height="20" viewBox="-3.2 -3.2 38.40 38.40" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="currentColor">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Page-1" stroke-width="0.300" fill="currentColor" fill-rule="evenodd"
                                    sketch:type="MSPage">
                                    <g id="Icon-Set" sketch:type="MSLayerGroup"
                                        transform="translate(-464.000000, -1087.000000)" fill="currentColor">
                                        <path opacity="0.5"
                                            d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
                                            id="plus-circle" sketch:type="MSShapeGroup">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="mx-3">Testimonial</span>
                    </a>

                </li>

                <!--[ Start:: Changelog ]-->

            </ul>
            {{-- <div class="card promo text-center">
                <div class="card-body">
                    <svg class="mx-auto mb-3" width="100" viewbox="0 0 512 317" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M-0.5 315.65C-0.5 314.941 0.0743531 314.367 0.782854 314.367H510.717C511.426 314.367 512 314.941 512 315.65C512 316.358 511.426 316.932 510.717 316.932H0.782854C0.0743531 316.932 -0.5 316.358 -0.5 315.65Z"
                            fill="#3E3D3D"></path>
                        <path d="M297.122 178.384H454.913V315.65H297.122V178.384Z" fill="#F1F1F1"></path>
                        <path
                            d="M315.082 24.442C315.082 22.3165 316.805 20.5934 318.931 20.5934H413.862C415.987 20.5934 417.71 22.3165 417.71 24.442V142.465C417.71 144.59 415.987 146.313 413.862 146.313H318.931C316.805 146.313 315.082 144.59 315.082 142.465V24.442Z"
                            fill="white"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M313.799 24.442C313.799 21.608 316.097 19.3105 318.931 19.3105H413.862C416.696 19.3105 418.993 21.608 418.993 24.442V142.464C418.993 145.299 416.696 147.596 413.862 147.596H318.931C316.097 147.596 313.799 145.298 313.799 142.464V24.442ZM318.931 21.8763C317.514 21.8763 316.365 23.025 316.365 24.442V142.464C316.365 143.881 317.514 145.03 318.931 145.03H413.862C415.279 145.03 416.428 143.881 416.428 142.464V24.442C416.428 23.025 415.279 21.8763 413.862 21.8763H318.931Z"
                            fill="#3E3D3D"></path>
                        <path d="M325.345 34.0634H362.547V80.2461H325.345V34.0634Z" fill="#F1F1F1"></path>
                        <path d="M325.345 87.9432H362.547V134.126H325.345V87.9432Z" fill="#F1F1F1"></path>
                        <path d="M370.245 34.0634H407.447V80.2461H370.245V34.0634Z" fill="#F1F1F1"></path>
                        <path d="M370.245 87.9432H407.447V134.126H370.245V87.9432Z" fill="#F1F1F1"></path>
                        <path d="M265.051 305.387H339.456V315.65H265.051V305.387Z" fill="#E5E5E5"></path>
                        <path
                            d="M259.278 100.13C260.817 114.498 272.32 118.945 277.879 119.373L333.684 134.126C334.966 134.981 339.328 135.409 346.512 130.277C353.696 125.146 352.071 116.594 350.361 112.959C352.285 111.89 356.262 108.084 356.775 101.413C357.288 94.7424 351.43 89.6537 348.436 87.9432C350.574 85.5912 353.568 78.963 348.436 71.2661C343.305 63.5693 334.753 68.0591 331.118 71.2661C330.904 67.8451 328.809 60.3616 322.138 57.7959C315.467 55.2302 306.53 58.8649 302.895 61.003C300.116 57.5821 291.606 52.1513 279.804 57.7959C268.001 63.4404 271.465 75.542 274.672 80.8872C268.899 81.3148 257.739 85.7621 259.278 100.13Z"
                            fill="#3E3D3D"></path>
                        <path
                            d="M287.608 162.99C286.681 165.043 284.517 165.556 283.551 165.556L284.71 173.894L295.143 188.006L322.963 197.627C328.759 186.509 339.539 164.016 336.293 162.99C332.236 161.707 329.918 156.576 329.918 148.879V127.712C331.773 126.172 333.396 122.366 333.975 120.656C334.439 111.419 329.918 107.4 327.6 106.545C325.281 107.827 319.485 109.623 314.849 106.545C310.212 103.466 308.667 96.7094 308.473 93.7161C306.928 96.068 302.793 100.772 298.62 100.772C294.447 100.772 291.472 96.9232 290.506 94.9989C288.652 100.13 280.46 104.834 276.596 106.545C276.596 111.676 276.944 124.889 278.335 136.692C279.726 148.494 285.097 154.865 287.608 156.576C287.995 157.859 288.536 160.938 287.608 162.99Z"
                            fill="#EFCB96"></path>
                        <path
                            d="M266.334 31.4977C266.334 38.2284 260.877 43.6848 254.147 43.6848C247.416 43.6848 241.959 38.2284 241.959 31.4977C241.959 24.7669 247.416 19.3105 254.147 19.3105C260.877 19.3105 266.334 24.7669 266.334 31.4977Z"
                            fill="#F1F1F1"></path>
                        <path
                            d="M229.131 85.3773C229.131 132.493 190.936 170.687 143.821 170.687C96.7057 170.687 58.5112 132.493 58.5112 85.3773C58.5112 38.262 96.7057 0.0675659 143.821 0.0675659C190.936 0.0675659 229.131 38.262 229.131 85.3773Z"
                            fill="var(--accent-color)"></path>
                        <path
                            d="M222.716 85.3775C222.716 128.95 187.394 164.273 143.821 164.273C100.248 164.273 64.9253 128.95 64.9253 85.3775C64.9253 41.8048 100.248 6.48206 143.821 6.48206C187.394 6.48206 222.716 41.8048 222.716 85.3775Z"
                            fill="white"></path>
                        <path d="M127.785 21.021L139.514 86.0189L148.311 84.3085L131.304 19.3105L127.785 21.021Z"
                            fill="#F1F1F1"></path>
                        <path d="M95.7139 107.244L139.419 82.1704L145.745 90.334L99.1643 114.242L95.7139 107.244Z"
                            fill="#E5E5E5"></path>
                        <path
                            d="M284.294 161.066C244.782 161.066 218.868 187.578 211.812 200.834C225.496 229.912 253.505 288.582 256.071 290.634C258.637 292.687 298.619 291.489 318.289 290.634V306.67C319.316 309.749 321.71 310.946 322.779 311.16C331.759 312.015 353.44 313.854 368.321 314.367C386.922 315.008 399.751 311.16 406.165 290.634C412.579 270.108 411.938 212.38 399.751 188.647C390.001 169.661 351.857 162.349 336.249 161.066C333.47 168.977 327.911 182.233 309.951 182.233C291.991 182.233 286.004 168.977 284.294 161.066Z"
                            fill="var(--primary-color)"></path>
                        <path
                            d="M80.3238 199.899C79.6741 197.457 81.5155 195.062 84.043 195.062H241.566C243.311 195.062 244.837 196.235 245.286 197.921L275.31 310.812C275.96 313.255 274.118 315.65 271.591 315.65H114.067C112.323 315.65 110.796 314.476 110.348 312.79L80.3238 199.899Z"
                            fill="#F1F1F1"></path>
                        <path
                            d="M304.178 280.371C310.335 281.398 320.855 279.944 325.345 279.088C327.483 281.654 331.759 287.94 331.759 292.558C331.759 297.177 330.048 302.18 329.193 304.104C325.986 303.89 317.648 303.591 309.95 304.104C302.253 304.617 291.777 308.594 287.5 310.518L273.389 313.084L264.409 311.801L261.843 307.953L255.429 306.67L249.646 302.333C248.572 301.527 248.315 300.023 249.059 298.906C249.767 297.845 251.154 297.476 252.295 298.047L255.429 299.614H263.126L273.389 297.69H261.843L250.939 295.124L248.511 292.291C247.691 291.334 247.681 289.926 248.488 288.958C249.46 287.791 251.223 287.711 252.297 288.785L252.863 289.351L263.126 290.634L273.389 289.351H267.616L254.146 286.144L251.678 282.195C251.219 281.461 251.175 280.54 251.563 279.766C252.246 278.4 253.988 277.967 255.23 278.855L257.353 280.371L267.616 282.296L277.438 280.892C278.641 280.721 278.953 279.127 277.903 278.514L273.389 275.881L265.138 275.366C263.966 275.292 263.007 274.407 262.841 273.245C262.645 271.874 263.611 270.609 264.985 270.437L272.748 269.467C276.596 270.322 284.935 272.289 287.5 273.316C290.708 274.598 296.48 279.088 304.178 280.371Z"
                            fill="#EFCB96"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M141.897 25.1352V15.462H144.463V25.1352H141.897ZM141.897 156.576V146.903H144.463V156.576H141.897Z"
                            fill="#E5E5E5"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M203.975 84.7361L213.736 84.7361L213.736 87.3018L203.975 87.3018L203.975 84.7361ZM71.3396 84.7361L81.1006 84.7361L81.1006 87.3018L71.3396 87.3018L71.3396 84.7361Z"
                            fill="#E5E5E5"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M175.207 137.878L180.2 146.232L177.998 147.549L173.004 139.194L175.207 137.878ZM107.354 24.3507L112.347 32.7055L110.145 34.0218L105.151 25.667L107.354 24.3507Z"
                            fill="#E5E5E5"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M196.637 114.984L205.11 119.774L203.848 122.008L195.375 117.217L196.637 114.984ZM81.5046 49.893L89.9776 54.6832L88.7149 56.9167L80.2419 52.1264L81.5046 49.893Z"
                            fill="#E5E5E5"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M88.7147 114.984L80.2417 119.774L81.5044 122.008L89.9774 117.217L88.7147 114.984ZM203.847 49.893L195.374 54.6832L196.637 56.9167L205.11 52.1264L203.847 49.893Z"
                            fill="#E5E5E5"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M110.145 137.878L105.151 146.232L107.354 147.549L112.347 139.194L110.145 137.878ZM177.998 24.3507L173.004 32.7055L175.207 34.0218L180.2 25.667L177.998 24.3507Z"
                            fill="#E5E5E5"></path>
                        <path
                            d="M189.362 257.28C189.362 266.136 182.183 273.316 173.327 273.316C164.47 273.316 157.291 266.136 157.291 257.28C157.291 248.424 164.47 241.244 173.327 241.244C182.183 241.244 189.362 248.424 189.362 257.28Z"
                            fill="#E5E5E5"></path>
                        <path
                            d="M104.694 247.658V259.204H113.674V244.451C114.315 244.024 116.496 242.784 120.088 241.244C124.578 239.32 123.937 237.395 125.861 233.547C127.785 229.699 125.861 227.774 120.73 229.057C115.598 230.34 114.315 235.471 113.674 234.83C113.033 234.188 113.033 234.188 113.674 231.623C114.315 229.057 113.033 227.774 115.598 226.491C118.164 225.209 129.068 225.209 132.917 223.925C136.765 222.642 136.765 217.511 135.482 214.946C134.2 212.38 127.785 216.87 120.088 220.077C113.931 222.643 112.819 221.146 113.033 220.077V212.38C113.033 211.098 115.598 211.739 120.73 208.531C125.861 205.324 125.861 205.965 129.068 202.759C132.275 199.552 127.785 198.91 125.22 196.344C122.654 193.779 118.164 201.476 116.881 204.041C115.598 206.607 113.674 207.249 113.033 205.965C112.391 204.682 114.315 204.041 113.674 201.476C113.033 198.91 111.108 199.551 109.825 200.193C108.543 200.834 104.694 205.965 103.411 205.965C102.128 205.965 100.204 200.193 97.6383 196.344C94.3578 191.424 93.1484 191.854 89.2999 190.571C85.4514 189.288 89.9412 196.985 94.4313 205.965C98.0233 213.149 103.197 214.09 105.336 213.662C105.549 216.228 105.849 221.488 105.336 222.001C104.694 222.642 102.77 220.718 100.204 218.794C97.6384 216.87 98.2798 221.36 99.5627 223.925C100.589 225.978 103.839 227.774 105.336 228.415V236.113C105.336 238.037 105.977 238.678 102.77 237.395C99.5627 236.112 96.9969 227.774 93.1484 225.85C89.2998 223.925 89.2998 229.698 89.9412 236.113C90.4544 241.244 99.9902 245.948 104.694 247.658Z"
                            fill="#FAC22F"></path>
                        <path
                            d="M79.0371 259.427C79.0371 258.596 79.7113 257.921 80.5431 257.921H135.26C136.091 257.921 136.766 258.596 136.766 259.427V286.786C136.766 302.727 123.843 315.65 107.901 315.65C91.9601 315.65 79.0371 302.727 79.0371 286.786V259.427Z"
                            fill="#E5E5E5"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M362.833 264.656C362.721 265.012 362.532 265.524 362.172 265.884C361.913 266.143 361.561 266.324 361.311 266.441C361.017 266.579 360.658 266.722 360.254 266.867C359.445 267.158 358.374 267.489 357.113 267.849C354.585 268.57 351.213 269.427 347.462 270.33C339.957 272.138 330.878 274.144 323.864 275.642C323.863 275.644 323.861 275.646 323.858 275.649C323.838 275.674 323.803 275.737 323.788 275.839C323.773 275.94 323.784 276.037 323.81 276.109C323.834 276.175 323.862 276.201 323.878 276.212C328.066 279.155 333.042 284.631 333.042 292.558C333.042 302.619 329.08 309.64 326.94 312.018L325.033 310.302C326.741 308.403 330.476 301.997 330.476 292.558C330.476 285.8 326.236 281.005 322.403 278.311C321.399 277.605 321.109 276.416 321.249 275.465C321.39 274.51 322.035 273.409 323.323 273.134C330.328 271.637 339.385 269.636 346.861 267.836C350.601 266.935 353.932 266.088 356.409 265.382C357.649 265.028 358.656 264.715 359.386 264.452C359.752 264.321 360.028 264.209 360.22 264.119C360.261 264.1 360.294 264.083 360.321 264.069C360.338 264.027 360.361 263.966 360.387 263.882C360.473 263.609 360.566 263.215 360.66 262.695C360.846 261.66 361.015 260.242 361.159 258.535C361.446 255.129 361.626 250.673 361.666 246.044C361.706 241.416 361.606 236.638 361.338 232.589C361.066 228.481 360.629 225.291 360.059 223.723L362.47 222.846C363.183 224.806 363.629 228.35 363.898 232.42C364.171 236.549 364.272 241.393 364.231 246.066C364.191 250.738 364.01 255.262 363.716 258.751C363.569 260.492 363.392 262 363.185 263.15C363.082 263.722 362.966 264.235 362.833 264.656Z"
                            fill="#46A4BC"></path>
                        <path
                            d="M150.877 85.3775C150.877 89.2742 147.718 92.4332 143.821 92.4332C139.924 92.4332 136.765 89.2742 136.765 85.3775C136.765 81.4807 139.924 78.3218 143.821 78.3218C147.718 78.3218 150.877 81.4807 150.877 85.3775Z"
                            fill="#3E3D3D"></path>
                    </svg>
                    <h5>Get Upgrade</h5>
                    <p class="lh-sm small text-muted">
                        Step to the next level with more features.
                    </p>
                    <button class="btn btn-primary" type="button">Learn more</button>
                </div>
            </div> --}}
        </div>
        <!--[ sidebar: footer link ]-->
        <ul class="menu-list nav navbar-nav bg-transparent">
            <li>
                <a class="m-link" data-bs-toggle="offcanvas" href="#need_help" role="button"
                    aria-controls="need_help" title="Need Help?">
                    <svg width="20" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <circle opacity="0.2" cx="11" cy="11" r="4"></circle>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path
                            d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z">
                        </path>
                    </svg>
                    <span class="mx-3">Need Help?</span>
                    <span class="mx-2">v2.1.0</span>
                </a>
            </li>
        </ul>
    </div>
</aside>
