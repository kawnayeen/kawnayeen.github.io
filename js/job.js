/**
 * Created by kawnayeen on 1/18/17.
 */
(function () {
    "use strict";

    let allJobs = [];

    function JobExperience(companyName, designation, startDate, endDate) {
        this.companyName = companyName;
        this.designation = designation;
        this.startDate = startDate;
        this.endDate = endDate;
        this.workSummary = '';
        this.responsibilities = [];
    }

    JobExperience.prototype.setWorkSummary = function (workSummary) {
        this.workSummary = workSummary;
    }

    JobExperience.prototype.setResponsibilities = function (responsibilities) {
        this.responsibilities = responsibilities;
    }

    JobExperience.prototype.toHtml = function () {
        let jobEntry = '<div class="job-entry">';
        jobEntry += this.generateJobHeading();
        jobEntry += this.generateJobSummary();
        jobEntry += '</div>';
        return jobEntry;
    }

    JobExperience.prototype.generateJobHeading = function () {
        return '<p>' +
            '<strong>' + this.designation + '</strong>, '
            + this.startDate + ' to ' + this.endDate +
            ' - ' + this.companyName
            + '</p>';
    }

    JobExperience.prototype.generateJobSummary = function () {
        let temp = '<p>'+this.workSummary;
        if(this.responsibilities.length>0){
            temp += ' <strong>Responsibility Highlights:</strong></p>';
            temp += this.generateJobResponsibilities();
        }else{
            temp += '</p>';
        }
        return temp;
    }

    JobExperience.prototype.generateJobResponsibilities = function () {
        let temp = '<div><ul>';
        this.responsibilities.forEach(function (element) {
            temp += '<li>'+element+'</li>';
        });
        temp+= '</ul></div>';
        return temp;
    }

    function addCefaloSoftwareEngineer() {
        let softwareEngrCefalo = new JobExperience('Cefalo', 'Software Engineer', 'December,2016', 'Present');
        softwareEngrCefalo.setWorkSummary('Developing highly sensitive and secure android app');
        softwareEngrCefalo.setResponsibilities(
            [
                'Developing Android application with native technologies',
                'Architecting fault tolerant, high availability aws infrastructure for deploying microservices',
                'Developing micro services using spring technologies'
            ]
        );
        allJobs.push(softwareEngrCefalo);
    }

    function addQuesttagSoftwareEngineer() {
        let softwareEngrQt = new JobExperience(
            'Questtag',
            'Freelance Software Engineer',
            'January,2015',
            'November,2015'
        );
        softwareEngrQt.setWorkSummary('Developing web backend for a local delivery solution.');
        softwareEngrQt.setResponsibilities(
            [
                'Managing AWS infrastructure (i.e. setting up new instance, configuring ssl, security group)',
                'Designing & Developing RESTful services using proper http verb',
                'Securing REST endpoints with basic authentication & token authentication'
            ]
        );
        allJobs.push(softwareEngrQt);
    }

    function addPgsLeadDeveloper() {
        let leadDeveloperPgs = new JobExperience(
            'Pechas Game Studios',
            'Lead Developer',
            'October,2015',
            'December,2016'
        );
        leadDeveloperPgs.setWorkSummary('Overseer the development & deployment of multiple game product for Android & iOS platform.');
        leadDeveloperPgs.setResponsibilities(
            [
                'Designing business objects of the system and defining the interfaces of different modules',
                'Developing web backend to provide all the RESTful services required for the game',
                'Breaking down the development process in different milestones & achieve them'
            ]
        );
        allJobs.push(leadDeveloperPgs);
    }

    function addPgsGameDeveloper() {
        let gameDeveloperPgs = new JobExperience(
            'Pechas Game Studios',
            'Game Developer',
            'January,2013',
            'September,2015'
        );
        gameDeveloperPgs.setWorkSummary('Developing game in Unity3D.');
        gameDeveloperPgs.setResponsibilities(
            [
                'Developing controlling logic of different modules (i.e. simulation of specific match, commentary)',
                'Integrating different sdks (i.e. in app purchase, analytics, admob)',
                'Working with persistence & developing cross platform save & load game mechanism'
            ]
        );
        allJobs.push(gameDeveloperPgs);
    }

    function populateJobExperience() {
        addCefaloSoftwareEngineer();
        addPgsLeadDeveloper();
        addQuesttagSoftwareEngineer();
        addPgsGameDeveloper();
    }

    document.addEventListener('DOMContentLoaded', function () {
        populateJobExperience();
        let content = '';
        allJobs.forEach(function (job) {
            content += job.toHtml();
        });
        let professionContent = document.getElementById('professional-body');
        professionContent.innerHTML = content;
    });
}());