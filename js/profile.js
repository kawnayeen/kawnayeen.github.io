(function () {
    //"use strict";
    function Profile() {
        this.name = 'Kamarul Kawnayeen';
        this.title = 'Software Engineer';
        this.address = '165/1/A, East Kafrul';
        this.country = 'Dhaka, Bangladesh';
        this.email = 'kawnayeen@techhunterinc.com';
        this.phoneNumber = '+8801550002305';
        this.facebookProfile = 'https://www.facebook.com/kawnayeen';
        this.twitterProfile = 'https://twitter.com/kawnayeen08';
        this.githubProfile = 'https://github.com/kawnayeen';
        this.googlePlusProfile = 'https://plus.google.com/+kamarulkawnayeen';
    }

    Profile.prototype.getProfile = function () {
        return '<div class="title span7"> ' +
        '<img src="img/profile.jpg" title="That`s me!" alt="My Profile"/> ' +
        '<h1>'+this.name+'</h1> ' +
        '<h2>'+this.title+'</h2> ' +
        '</div> ' +
        '<div class="social offset1 span4"> ' +
        '<ul> ' +
        '<li><i class="icon-home"></i> '+this.address+'</li> ' +
        '<li>'+this.country+'</li> ' +
        '<li><i class="icon-envelope-alt"></i>'+this.email+'</li> ' +
        '<li><i class="icon-phone"></i>'+this.phoneNumber+'</li> ' +
        '<li> ' +
        '<a href="'+this.twitterProfile+'"><i class="icon-twitter"></i></a> ' +
        '<a href="'+this.facebookProfile+'"><i class="icon-facebook"></i></a> ' +
        '<a href="'+this.googlePlusProfile+'"><i class="icon-google-plus"></i></a> ' +
        '<a href="'+this.githubProfile+'"><i class="icon-github"></i></a> ' +
        '</li> ' +
        '</ul> ' +
        '</div>';
    }

    document.addEventListener("DOMContentLoaded",function () {
        var profile = new Profile();
        var header = document.getElementById("header");
        header.innerHTML = profile.getProfile();
    });

}());