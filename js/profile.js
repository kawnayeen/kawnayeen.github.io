/**
 * Created by kawnayeen on 1/20/17.
 */
(function () {
    "use strict";
    var name = 'Md. Kamarul Kawnayeen';
    var addressLineOne = '165/1/A, East Kafrul';
    var addressLineTwo = 'Dhaka Cantonment, Dhaka - 1206';
    var email = 'kawnayeen@techhunterinc.com';
    var profileSummary = 'Object-Oriented Analysis, Design and Development / Test Driven Development';
    var responsibilityList = [
        'Innovative software engineer offering three years of experience in the full software development lifecycle – from concept through deployment of applications (aws/cloud foundry/google play/app store)',
        'Expert in advanced development methodologies and contributing to the design and rollout of cutting-edge software applications.',
        'Known for writing clean code, developing independently deploy-able module'
    ];

    function getHeading() {
        var heading = '<p>';
        heading += name+'<br/>';
        heading += addressLineOne+'<br/>';
        heading += addressLineTwo+'<br/>';
        heading += email+'<br/>';
        heading += '</p>';
        return heading;
    }
    
    function getProfile() {
        var profile = '<p>'+profileSummary+'</p>';
        profile += '<ul>';
        responsibilityList.forEach(function (element) {
            profile += '<li>'+element+'</li>';
        });
        profile += '</ul>';
        return profile;
    }

    document.addEventListener('DOMContentLoaded',function () {
        var header = document.getElementById('header');
        header.innerHTML = getHeading();
        var profileSummaryBody = document.getElementById('profile-summary-body');
        profileSummaryBody.innerHTML = getProfile();
    });

}());