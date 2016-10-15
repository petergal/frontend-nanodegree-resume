//$("#main").append("Peter Gal");
/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var awesomeThougths;
// awesomeThougths = "I am Peter Gal and I am AWESOME!";
// console.log(awesomeThougths);
// var funThoughts = awesomeThougths.replace("AWESOME!", "FUN");
// $("#main").append(funThoughts);

var bio = {
    "name": "Peter Gal",
    "role": "Web Developer",
    "contact_info": {
        "mobile": "+41 78 671 74 47",
        "email": "petergalchmac.com",
        "location": "Winterthur"
    },
    "pic_url": "images/peter_pic.jpg",
    "skills": ["Java", "Javascript", "HTML", "CSS", "PL/SQL"],
    "welcome_message": "welcome to my javacripted page :-)",
    display : function() {
      var formattedbioPic = HTMLbioPic.replace("%data%", bio.pic_url);
      $("#header").prepend(formattedbioPic);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(formattedRole);
      var formattedName = HTMLheaderName.replace("%data%", bio.name.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      $("#header").prepend(formattedName);

      var formattedMobile = HTMLmobile.replace("%data%", bio.contact_info["mobile"]);
      $("#topContacts").append(formattedMobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contact_info["email"]);
      $("#topContacts").append(formattedEmail);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contact_info["location"]);
      $("#topContacts").append(formattedLocation);

      var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
      $("#header").append(formattedWelcomeMsg);

      if (bio.skills.length > 0) {
          $("#header").append(HTMLskillsStart);
          // var skillsText = "";
          bio.skills.forEach(function(skill) {
              $("#skills").append(HTMLskills.replace("%data%", skill));
          });
      }

    }
};

var education = {
    "schools": [{
        "name": "Handelsschule",
        "city": "Winterthur",
        "degree": "",
        "dates": "1978-1981"
    }, {
        "name": "ITR Rapperswil (HSR)",
        "city": "Rapperswil",
        "degree": "",
        "dates": "1997-1998"
    }, {
        "name": "HSZ-T Hochschule für Technik, Zürich",
        "city": "Zürich",
        "degree": "",
        "dates": "2004-2006"
    }],
    "online courses": [{
        "school": "Udacity",
        "title": "Javascript Syntax",
        "degree": "",
        "dates": "2016",
        "url": "http://www.udacity.com/course/ud804"
    }],
    display: function() {
        for (var schools_i = 0; schools_i < education.schools.length; schools_i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools_i].name);
            $(".education-entry:last").append(formattedSchoolName);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools_i].city);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools_i].degree);
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools_i].dates);
            $(".education-entry:last").append(formattedSchoolDates);
        }
        for (var online_i = 0; online_i < education["online courses"].length; online_i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[online_i].name);
            $(".education-entry:last").append(formattedSchoolName);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[online_i].city);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[online_i].degree);
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[online_i].dates);
            $(".education-entry:last").append(formattedSchoolDates);
        }
    }
}


var workExperience = {
    "jobs": [{
        "employer": "ZKB",
        "location": "Zürich",
        "title": "Senior Developer",
        "dates": "5/1/2007 - now",
        "description": "Various Java/JBoss-Applications: \
        E-Banking, Reporting Systems Engine, Bank Rating Application, Online Hyptheken Portal."
    }, {
        "employer": "Hiwi Informatik GmbH/selfemployed",
        "location": "Hinwil",
        "title": "Senior Developer, Project Manager",
        "dates": "5/1/1998 - 4/30/2007",
        "description": "PL/I Mainframe"
    }],
    display: function() {
        for (var job_i = 0; job_i < workExperience.jobs.length; job_i++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", workExperience.jobs[job_i].employer) +
                HTMLworkTitle.replace("%data%", workExperience.jobs[job_i].title);
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedWorkDates = HTMLworkDates.replace("%data%", workExperience.jobs[job_i].dates);
            $(".work-entry:last").append(formattedWorkDates);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", workExperience.jobs[job_i].description);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
}

var projects = {
    "projects": [{
        "title": "project title",
        "dates": "project datum",
        "description": "project beschreibung...",
        "images": [
            "pic1",
            "pic2"
        ]
    }, {
        "title": "project title",
        "dates": "project datum",
        "description": "project beschreibung...",
        "images": [
            "pic1",
            "pic2"
        ]
    }],
    display: function() {
        for (var proj_i = 0; proj_i < projects.projects.length; proj_i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj_i].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[proj_i].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj_i].description);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[proj_i].images.length > 0) {
                for (image in projects.projects[proj_i].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[proj_i].images[image]);
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }
        }
    }
}


bio.display();
workExperience.display();
projects.display();
education.display();

function inName() {
    var result = '';
    var internationalized = bio.name.split(" ");
    for (var i = 0; i < internationalized.length; i++) {
        if (i === internationalized.length - 1) {
            result += internationalized[i].toUpperCase();
            return result.trim();
        }
        result += internationalized[i].slice(0, 1).toUpperCase() +
            internationalized[i].slice(1).toLowerCase() + " ";
    }
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
