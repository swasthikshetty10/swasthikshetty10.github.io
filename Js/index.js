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
// const navbarbrand = document.querySelector('.navbar-brand')
// const navlink = document.querySelector('navbar-nav text-center')
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        // navbar.style.height = "64px";
        // navbar.style.lineHeight = "64px";
        // navbarbrand.style.color = "black";
        // navlink.style.color = "black";
        // navlink.style.opacity = "0.8";
        navbar.style.backgroundColor = "white";
        document.getElementById("navbar").className = "navbar navbar-expand-md navbar-light fixed-top";
    } else if (window.pageYOffset == 0) {
        // navbar.style.height = "77px";
        // navbar.style.lineHeight = "77px";
        navbar.style.backgroundColor = "black";
        // navbarbrand.style.color = "white";
        // navlink.style.color = "white";
        // navlink.style.opacity = "0.8";
        document.getElementById("navbar").className = "navbar navbar-expand-md navbar-dark fixed-top";
    }
});