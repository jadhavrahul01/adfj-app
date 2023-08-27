if ("undefined" == typeof jQuery)
    throw new Error("jQuery plugins need to be before this file");
$(function () {
    "use strict";
    document.documentElement;
    $(".choose-skin li").on("click", function () {
        var e = $("body"),
            t = $(this);
        $(".choose-skin li.active").data("theme");
        $(".choose-skin li").removeClass("active"),
            t.addClass("active"),
            e.attr("data-qboat", "theme-" + t.data("theme"));
    }),
        $(".password-meter .form-control").on("input", function () {
            var e = 0,
                t = $(this).val(),
                n = new RegExp("[A-Z]"),
                c = new RegExp("[a-z]"),
                o = new RegExp("[0-9]"),
                l = new RegExp("^(?=.*?[#?!@$%^&*-]).{1,}$");
            7 < t.length && e++,
                0 < t.length && t.match(n) && e++,
                0 < t.length && t.match(c) && e++,
                0 < t.length && t.match(o) && e++,
                0 < t.length && t.match(l) && e++,
                ($(".password-meter .progress-bar")[0].style.width =
                    20 * e + "%");
        }),
        $(".image-input .form-control").on("change", function () {
            var e = URL.createObjectURL(this.files[0]);
            $(this)
                .parent()
                .parent()
                .children(".avatar-wrapper")[0].style.background =
                "url(" + e + ") no-repeat";
        }),
        $(".select-all.form-check-input").on("change", function () {
            var t = $(this).is(":checked"),
                e = $(this)
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .find(".row-selectable");
            0 < e.length &&
                e.each(function (e) {
                    $(this).find(".form-check-input")[0].checked = t;
                });
        });
    const t = "div.card";
    $(".card-fullscreen").on("click", function (e) {
        return (
            $(this).closest(t).toggleClass("fullscreen"), e.preventDefault(), !1
        );
    }),
        $('[data-toggle="card-remove"]').on("click", function (e) {
            return $(this).closest(t).remove(), e.preventDefault(), !1;
        }),
        $('[data-toggle="card-collapse"]').on("click", function (e) {
            return (
                $(this).closest(t).toggleClass("card-collapsed"),
                e.preventDefault(),
                !1
            );
        }),
        $(".sidebar-toggle").on("click", function () {
            $(".sidebar").toggleClass("open");
        }),
        $(".menu-toggle").on("click", function () {
            $("body").toggleClass("sidebar-mini");
        }),
        $(".mini-sidebar input:checkbox").on("click", function () {
            $(this).is(":checked")
                ? $("body").addClass("sidebar-mini")
                : $("body").removeClass("sidebar-mini");
        }),
        $(".sidebar-dark input:checkbox").on("click", function () {
            $(this).is(":checked")
                ? $(".sidebar").addClass("dark")
                : $(".sidebar").removeClass("dark");
        }),
        $(".monochrome-toggle input:checkbox").on("click", function () {
            $(this).is(":checked")
                ? $("body").addClass("monochrome")
                : $("body").removeClass("monochrome");
        }),
        $(".sidebar-v2 input:checkbox").on("click", function () {
            $(this).is(":checked")
                ? $("body").addClass("sidebar-v2")
                : $("body").removeClass("sidebar-v2");
        }),
        $(".gradient-active input:checkbox").on("click", function () {
            $(this).is(":checked")
                ? $("body").addClass("gradient")
                : $("body").removeClass("gradient");
        }),
        $(".radius-toggle input:checkbox").on("click", function () {
            $(this).is(":checked")
                ? $("body").addClass("radius-0")
                : $("body").removeClass("radius-0");
        });
    [].slice
        .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map(function (e) {
            return new bootstrap.Tooltip(e);
        });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
});
var toggleSwitch = document.querySelector(
        '.light-dark-toggle input[type="checkbox"]'
    ),
    currentTheme = localStorage.getItem("theme");
function switchTheme(e) {
    e.target.checked
        ? (document.documentElement.setAttribute("data-theme", "dark"),
          localStorage.setItem("theme", "dark"))
        : (document.documentElement.setAttribute("data-theme", "light"),
          localStorage.setItem("theme", "light"));
}
function toggleFullScreen() {
    (document.fullScreenElement && null !== document.fullScreenElement) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
        ? document.documentElement.requestFullScreen
            ? document.documentElement.requestFullScreen()
            : document.documentElement.mozRequestFullScreen
            ? document.documentElement.mozRequestFullScreen()
            : document.documentElement.webkitRequestFullScreen &&
              document.documentElement.webkitRequestFullScreen(
                  Element.ALLOW_KEYBOARD_INPUT
              )
        : document.cancelFullScreen
        ? document.cancelFullScreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitCancelFullScreen && document.webkitCancelFullScreen();
}
currentTheme &&
    (document.documentElement.setAttribute("data-theme", currentTheme),
    "dark" === currentTheme) &&
    (toggleSwitch.checked = !0),
    toggleSwitch.addEventListener("change", switchTheme, !1),
    document.getElementById("NotificationsDiv") &&
        document
            .getElementById("NotificationsDiv")
            .addEventListener("click", function (e) {
                e.stopPropagation();
            });
var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
!(function () {
    var e = document.createElement("script"),
        t = document.getElementsByTagName("script")[0];
    (e.async = !0),
        (e.src = "https://embed.tawk.to/6051a040f7ce18270930e55a/1f55i240o"),
        (e.charset = "UTF-8"),
        e.setAttribute("crossorigin", "*"),
        t.parentNode.insertBefore(e, t);
})();
