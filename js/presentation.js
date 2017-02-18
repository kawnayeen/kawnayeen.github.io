/**
 * Created by kawnayeen on 1/18/17.
 */
(function () {
   "use strict";
   var presentation = [
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

   var opensourceRepositories = [
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
   
   function generateUnorderedList(contentArray) {
       var unorderedList = '<ul>';
       contentArray.forEach(function (element) {
            var listItem = '<li>';
            listItem += '<a href="'+element[1]+'" target="_blank">';
            listItem += element[0];
            listItem += '</a></li>';
            unorderedList += listItem;
       });
       unorderedList += '</ul>';
       return unorderedList;
   }


   document.addEventListener('DOMContentLoaded',function () {
       var presentationContent = document.getElementById('presentation-body-content');
       var openSourceContent = document.getElementById('opensource-body-content');
       presentationContent.innerHTML = generateUnorderedList(presentation);
       openSourceContent.innerHTML = generateUnorderedList(opensourceRepositories);
   });
   

}());