var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 300;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 240) {

        navbar.style.backgroundColor = "white";
        document.getElementById("navbar").className = "navbar navbar-expand-md navbar-light fixed-top";
    } else if (window.pageYOffset < 230) {
        navbar.style.backgroundColor = "black";

        document.getElementById("navbar").className = "navbar navbar-expand-md navbar-dark fixed-top";
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoWidth: true,
    responsiveClass: true,
    autoplayTimeout: 2000,
    center: true,

    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        800: {
            items: 2
        },
        1000: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
})