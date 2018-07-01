/**
 * Created by kawnayeen on 1/18/17.
 */
(function () {
    "use strict";
    let presentation = [
        [
            'Virtual Server at AWS',
            'http://www.slideshare.net/kawnayeen/virtual-server-on-aws'
        ],
        [
            'Lamp Stack on Ubuntu Instance at AWS',
            'http://www.slideshare.net/kawnayeen/installing-lamp-stack-on-ubuntu-instance'
        ],
        [
            'Installing Tomcat on Ubuntu Instance at AWS',
            'http://www.slideshare.net/kawnayeen/installing-tomcat-on-ubuntu-instance'
        ],
        [
            'Deploying Play Framework at AWS',
            'http://www.slideshare.net/kawnayeen/play-framework-on-ec2'
        ],
        [
            'Associating Domain with AWS instance',
            'http://www.slideshare.net/kawnayeen/associating-domain-name-with-aws-instance'
        ],
        [
            'Up & Running with Javascript Unit Testing',
            'http://www.slideshare.net/kawnayeen/up-running-with-jasmine'
        ]
    ];

    let openSourceRepositories = [
        [
            'Android Util',
            'https://github.com/kawnayeen/AndroidUtil'
        ],
        [
            'Android Basics',
            'https://github.com/kawnayeen/AndroidBasics'
        ],
        [
            'Spring Boot Seed Project',
            'https://github.com/kawnayeen/spring-boot-seed'
        ],
        [
            'Muhhsinin',
            'https://github.com/muhhsinin/muhhsinin.github.io'
        ],
        [
            'Introduction to Java 8',
            'https://github.com/kawnayeen/introduction-to-java-8'
        ]
    ];

    let screenCastRepositories = [
        [
            'Connect AWS account with Boxfuse',
            'https://www.youtube.com/watch?v=F1nYZLMnTmQ'
        ],
        [
            'Installing Boxfuse Client',
            'https://www.youtube.com/watch?v=xt-teXoWTz4'
        ],
        [
            'Create App at Boxfuse',
            'https://www.youtube.com/watch?v=u_qeSi-Jxjk'
        ],
        [
            'Deploy App at AWS using Boxfuse',
            'https://www.youtube.com/watch?v=_Rn6q5zGuEU'
        ]
    ];

    function generateUnorderedList(contentArray) {
        let unorderedList = '<ul>';
        contentArray.forEach(function (element) {
            let listItem = '<li>';
            listItem += '<a href="' + element[1] + '" target="_blank">';
            listItem += element[0];
            listItem += '</a></li>';
            unorderedList += listItem;
        });
        unorderedList += '</ul>';
        return unorderedList;
    }


    document.addEventListener('DOMContentLoaded', function () {
        let presentationContent = document.getElementById('presentation-body-content');
        let openSourceContent = document.getElementById('opensource-body-content');
        let screenCastContent = document.getElementById('screencast-body-content');
        presentationContent.innerHTML = generateUnorderedList(presentation);
        openSourceContent.innerHTML = generateUnorderedList(openSourceRepositories);
        screenCastContent.innerHTML = generateUnorderedList(screenCastRepositories);
    });
}());