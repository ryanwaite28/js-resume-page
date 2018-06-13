(function(){

  // Data

  let bio = {
    name: 'Ryan M. Waite',
    role: 'Web/Mobile Developer',
    icon: 'img/me_dev.jpg',
    contact: {
      phone: '111-111-1111',
      email: 'example@test.com'
    },
    social: {
      gitub: 'https://github.com/ryanwaite28',
      linkedin: 'https://www.linkedin.com/in/ryanwaite28'
    },
    skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'Python', 'SQL']
  };

  let education = [
    {
      name: 'Montgomery College',
      type: 'Community College',
      major: 'Computer Science',
      location: 'Rockville, MD',
      dates: 'Jan 2017 - Present',
      icon: 'img/mc-1.jpg',
    },
    {
      name: 'Udacity',
      type: 'Online School/Training',
      major: 'Computer Science',
      location: 'N/A',
      dates: 'May 2015 - Oct 2017',
      icon: 'img/udacity-2.png',
    },
    {
      name: 'Year Up NCR / Northern Virginia Community College (NOVA)',
      type: 'Technical Training',
      major: 'Computer Science',
      location: 'Arlington, VA',
      dates: 'Mar 2015 - Jan 2016',
      icon: 'img/yupro-1.jpg',
    },
    {
      name: 'John F. Kennedy',
      type: 'High School',
      major: 'Information Technology',
      location: 'Silver Spring, MD',
      dates: 'Aug 2010 - Jun 2014',
      icon: 'img/kennedy-1.jpg',
    }
  ];

  let jobs = [
    {
      name: 'Department of Labor - Occupational Safety & Health Administration (OSHA)',
      title: 'Sr. Web Content Developer',
      dates: 'Feb 2016 - Present',
      location: 'Washington D.C',
      icon: 'img/dol-1.png',
      tasks: [
        'Working under 22nd Century Technologies (TSCTI) as a Web Content Developer for U.S Department of Labor, Occupational Safety and Health Administration (OSHA)',
        'Part of a team of developers that manages government webpages to provide 508 compliant and user friendly experiences. Using HTML, CSS, JavaScript, BootStrap, jQuery',
        'Use JIRA ticketing system to monitor changes of public website and work requests',
        'Update public websites based on work requests to reflect the latest information',
        'Create, Edit, and/or Delete HTML and other files then publish changes to public website(s)',
        'Developed scripts to automate operations and optimize web performance (jQuery)',
      ]
    },
    {
      name: 'National Aeronautics & Space Administration (NASA) - Headquarters',
      title: 'Data Analyst & Network Operations',
      dates: 'Aug 2015 - Jan 2016',
      location: 'Washington D.C',
      icon: 'img/nasa-2.jpg',
      tasks: [
        'Working with IT Operations branch to maintain and improve network infrastructure through the use of MS Visio and working with network devices to maintain accuracy of information',
        'Update over 100 assets on a scheduled basis to update inventory in asset management system to reduce amount of incorrect information',
        'Diagram network infrastructure to manage and present hundreds of servers weekly to maintain accurate data center information',
        'Consolidate and maintain accurate information of assets from multiple sources into a central location to create ease of access',
        'Analyze information from many asset management systems, identifying discrepancies and developing reports to maintain correct information',
        'Update information on assets through the use of asset management system to reflect the current status of equipment',
      ]
    },
  ];

  let portfolio = [
    {
      title: 'React JS Apps',
      image: 'img/reactjs_icon.png',
      description: `Apps I created with React JS (Udacity Nanodegree)`,
      linkName: 'React JS Apps',
      linkHref: 'https://github.com/ryanwaite28/reactjs-developer',
    },
    {
      title: 'Android Apps',
      image: 'img/android_icon.jpg',
      description: `Android Apps I created (Udacity Nanodegree)`,
      linkName: 'Android Apps',
      linkHref: 'https://github.com/ryanwaite28/android_basics-developer',
    },
    {
      title: 'iOS Apps',
      image: 'img/apple_icon.jpg',
      description: `iOS Apps I created (Udacity Nanodegree)`,
      linkName: 'iOS Apps',
      linkHref: 'https://github.com/ryanwaite28/ios-developer',
    },
    {
      title: 'Front End',
      image: 'img/javascript-logo.png',
      description: `Front End Web Apps I created (Udacity Nanodegree)`,
      linkName: 'Front End Apps',
      linkHref: 'https://github.com/ryanwaite28/udacity-webdeveloper/tree/master/Udacity-FEND',
    },
    {
      title: 'Back End',
      image: 'img/python_icon.png',
      description: `Back End Web Apps I created (Udacity Nanodegree)`,
      linkName: 'Back End Apps',
      linkHref: 'https://github.com/ryanwaite28/udacity-webdeveloper/tree/master/Udacity-FSND',
    }
  ];

  let credentials = [
    {
      name: 'Udacity - Mobile Web Specialist NanoDegree',
      icon: 'img/nd-grad-cert-mws.png',
      earned: 'Apr 2018',
      expires: 'Never',
    },
    {
      name: 'Udacity - React Developer NanoDegree',
      icon: 'img/nd-grad-cert-react.png',
      earned: 'Oct 2017',
      expires: 'Never',
    },
    {
      name: 'Udacity - iOS Developer NanoDegree',
      icon: 'img/nd-grad-cert-ios.png',
      earned: 'Sep 2017',
      expires: 'Never',
    },
    {
      name: 'Udacity - Android Basics by Google NanoDegree',
      icon: 'img/nd-grad-cert-ab.png',
      earned: 'Jul 2017',
      expires: 'Never',
    },
    {
      name: 'Udacity - Full Stack NanoDegree',
      icon: 'img/nd-grad-cert-fs.png',
      earned: 'Dec 2015',
      expires: 'Never',
    },
    {
      name: 'Udacity - Front End NanoDegree',
      icon: 'img/nd-grad-cert-fe.png',
      earned: 'Sep 2016',
      expires: 'Never',
    },
    {
      name: 'Department of Labor - Public Trust Clearance',
      icon: 'img/dol-2.jpg',
      earned: 'Nov 2016',
      expires: 'Oct 2021',
    }
  ];

  let references = [
    {
      name: 'Larry Rubin',
      icon: 'img/laurence_rubin.png',
      linkedin: 'https://www.linkedin.com/in/larry-rubin-cpa-82b20a6',
      email: 'lrubin@aronsonllc.com'
    },
    {
      name: 'Aaron Brachman',
      icon: 'img/aaron_brachman.jpg',
      linkedin: 'https://www.linkedin.com/in/aaron-brachman-cfp%C2%AE-aams-a82b3a3/',
      email: 'aaron.brachman@stewardpartners.com'
    },
    {
      name: 'Kristi Dearing',
      icon: 'img/kristi_dearing.jpg',
      linkedin: 'https://www.linkedin.com/in/kristi-dearing-46a62727',
      email: 'ksddearing@gmail.com'
    },
    {
      name: 'Jason Gromley',
      icon: 'img/jason_gromley.jpg',
      linkedin: 'https://www.linkedin.com/in/jason-gromley-a3358031',
      email: 'jason.gromley@shcare.net'
    }
  ];



  let ryan = {
    bio: bio,
    education: education,
    jobs: jobs,
    portfolio: portfolio,
    credentials: credentials,
    references: references,
    greet: function() {
      console.log('Hi, i am ' + this.bio.name + '!');
    }
  };

  // Functions

  function randomValue() {
    return Math.random().toString(36).substr(2, 34);
  }

  function uniqueValue() {
    return String(Date.now()) +
	    Math.random().toString(36).substr(2, 34) +
	    Math.random().toString(36).substr(2, 34) +
	    Math.random().toString(36).substr(2, 34)
  }

  function build_bootstrap_container(id) {
    let container = document.createElement('div');
    container.classList.add('container-fluid', 'section-container');
    if(id && id.constructor === String) {
      container.setAttribute('id', id);
    }
    return container;
  }

  function build_DOM_section(id) {
    let section = document.createElement('section');
    section.classList.add('content-box');
    if(id && id.constructor === String) {
      section.setAttribute('id', id);
    }
    let heading = document.createElement('h3');
    heading.classList.add('section-heading');
    section.appendChild(heading);
    return section;
  }

  function build_bootstrap_column(colNum) {
    let colDiv = document.createElement('div');
    colDiv.classList.add('column');
    colDiv.classList.add('col-md-' + colNum);
    return colDiv;
  }

  function build_bootstrap_row(columns) {
    let row = document.createElement('div');
    row.classList.add('row');
    return row;
  }

  function build_bootstrap_row_with_columns(columns) {
    let row = document.createElement('div');
    row.classList.add('row');
    columns.forEach(function(colNum){
      let colDiv = document.createElement('div');
      colDiv.classList.add('column');
      colDiv.classList.add('col-md-' + colNum);
      row.appendChild(colDiv);
    });
    return row;
  }





  function build_bio_section() {
    let sectionDOM = build_DOM_section('bio_section');
    sectionDOM.querySelector('.section-heading').innerText = 'Bio';
    let container = build_bootstrap_container('bio-container');
    let row = build_bootstrap_row_with_columns([4, 8, 12]);
    let columns = row.querySelectorAll('div.column');
    let image_div = columns[0];
    let image = document.createElement('img');
    image.setAttribute('id', 'bio-icon');
    image.classList.add('polaroid', 'transition', 'middlr');
    image.src = ryan.bio.icon;
    image_div.appendChild(image);
    let name_role_text = document.createElement('h4');
    name_role_text.classList.add('text-center');
    name_role_text.innerHTML = '<strong>' + ryan.bio.name + '</strong><br/>' + ryan.bio.role;
    image_div.appendChild(name_role_text);
    let info_div = columns[1];
    let skills_text = document.createElement('p');
    skills_text.innerHTML = '<strong>Skills</strong>';
    info_div.appendChild(skills_text);
    let skills_list = document.createElement('ul');
    for(let skill of ryan.bio.skills) {
      let li = document.createElement('li');
      li.innerText = skill;
      skills_list.appendChild(li);
    }
    info_div.appendChild(skills_list);
    let contact_text = document.createElement('p');
    contact_text.innerHTML = '<strong>Contact</strong>';
    info_div.appendChild(contact_text);
    let contact_list = document.createElement('ul');
    for(let key of Object.keys(ryan.bio.contact)) {
      let li = document.createElement('li');
      li.innerHTML = '<strong>' + key + '</strong>: ' + ryan.bio.contact[key];
      contact_list.appendChild(li);
    }
    info_div.appendChild(contact_list);
    let social_text = document.createElement('p');
    social_text.innerHTML = '<strong>Social</strong>';
    info_div.appendChild(social_text);
    let social_list = document.createElement('ul');
    for(let key of Object.keys(ryan.bio.social)) {
      let li = document.createElement('li');
      li.innerHTML = '<strong>' + key + '</strong>: <a title="' + key + '" href="' + ryan.bio.social[key] + '">' + ryan.bio.social[key] + '</a>';
      social_list.appendChild(li);
    }
    info_div.appendChild(social_list);

    let message_div = columns[2];
    let msg_text = document.createElement('h4');
    msg_text.innerHTML = '<em>"Made completely with JavaScript, and not a lick of HTML!"</em>';
    msg_text.classList.add('text-center');
    message_div.appendChild(document.createElement('br'));
    message_div.appendChild(msg_text);

    container.appendChild(row);
    sectionDOM.appendChild(container);
    document.getElementById('main-container').appendChild(sectionDOM);
  }

  function build_education_section() {
    let sectionDOM = build_DOM_section('education_section');
    sectionDOM.querySelector('.section-heading').innerText = 'Education';
    let container = build_bootstrap_container('bio-container');
    for(let school of ryan.education) {
      let row = build_bootstrap_row_with_columns([12]);
      let columns = row.querySelectorAll('div.column');
      let info_div = columns[0];
      let schoolNameHeading = document.createElement('h3');
      schoolNameHeading.innerText = school.name;
      let schoolTypeText = document.createElement('p');
      schoolTypeText.innerText = school.type;
      let schoolMajorText = document.createElement('p');
      schoolMajorText.innerText = school.major;
      let schoolLocationText = document.createElement('p');
      schoolLocationText.innerText = school.location;
      let schoolDatesText = document.createElement('p');
      schoolDatesText.innerText = school.dates;
      info_div.appendChild(schoolNameHeading);
      info_div.appendChild(schoolTypeText);
      info_div.appendChild(schoolMajorText);
      info_div.appendChild(schoolLocationText);
      info_div.appendChild(schoolDatesText);
      container.appendChild(row);
    }
    sectionDOM.appendChild(container);
    document.getElementById('main-container').appendChild(sectionDOM);
  }

  function build_jobs_section() {
    let sectionDOM = build_DOM_section('jobs_section');
    sectionDOM.querySelector('.section-heading').innerText = 'Jobs';
    let container = build_bootstrap_container('bio-container');
    for(let position of ryan.jobs) {
      let row = build_bootstrap_row_with_columns([12]);
      let columns = row.querySelectorAll('div.column');
      let info_div = columns[0];
      let positionTitleHeading = document.createElement('h3');
      positionTitleHeading.innerText = position.title;
      let positionNameText = document.createElement('p');
      positionNameText.innerText = position.name;
      let positionDatesText = document.createElement('p');
      positionDatesText.innerText = position.dates;
      let positionLocationText = document.createElement('p');
      positionLocationText.innerText = position.location;
      let positionTasksList = document.createElement('ul');
      for(let task of position.tasks) {
        let li = document.createElement('li');
        li.innerText = task;
        positionTasksList.appendChild(li);
      }
      info_div.appendChild(positionTitleHeading);
      info_div.appendChild(positionNameText);
      info_div.appendChild(positionDatesText);
      info_div.appendChild(positionLocationText);
      info_div.appendChild(positionTasksList);
      container.appendChild(row);
    }
    sectionDOM.appendChild(container);
    document.getElementById('main-container').appendChild(sectionDOM);
  }

  function build_portfolio_section() {
    let sectionDOM = build_DOM_section('portfolio_section');
    sectionDOM.querySelector('.section-heading').innerText = 'Portfolio';
    let container = build_bootstrap_container('bio-container');
    for(let project of ryan.portfolio) {
      let row = build_bootstrap_row_with_columns([12]);
      let columns = row.querySelectorAll('div.column');
      let info_div = columns[0];
      let projectTitleHeading = document.createElement('h3');
      projectTitleHeading.innerText = project.title;
      let projectDescText = document.createElement('p');
      projectDescText.innerText = project.description;
      let projectLinktag = document.createElement('a');
      projectLinktag.innerText = project.linkName;
      projectLinktag.setAttribute('title', project.linkName);
      projectLinktag.setAttribute('href', project.linkHref);
      info_div.appendChild(projectTitleHeading);
      info_div.appendChild(projectDescText);
      info_div.appendChild(projectLinktag);
      container.appendChild(row);
    }
    sectionDOM.appendChild(container);
    document.getElementById('main-container').appendChild(sectionDOM);
  }

  function build_credentials_section() {
    let sectionDOM = build_DOM_section('credentials_section');
    sectionDOM.querySelector('.section-heading').innerText = 'Credentials';
    let container = build_bootstrap_container('bio-container');
    for(let credential of ryan.credentials) {
      let row = build_bootstrap_row_with_columns([12]);
      let columns = row.querySelectorAll('div.column');
      let info_div = columns[0];

      let credentialNameHeading = document.createElement('h3');
      credentialNameHeading.innerText = credential.name;
      let credentialEarnedText = document.createElement('p');
      credentialEarnedText.innerText = credential.earned + ' - ' + credential.expires;

      info_div.appendChild(credentialNameHeading);
      info_div.appendChild(credentialEarnedText);
      container.appendChild(row);
    }
    sectionDOM.appendChild(container);
    document.getElementById('main-container').appendChild(sectionDOM);
  }

  function build_references_section() {
    let sectionDOM = build_DOM_section('references_section');
    sectionDOM.querySelector('.section-heading').innerText = 'References';
    let container = build_bootstrap_container('bio-container');
    for(let person of ryan.references) {
      let row = build_bootstrap_row_with_columns([12]);
      let columns = row.querySelectorAll('div.column');
      let info_div = columns[0];
      let personNameHeading = document.createElement('h3');
      personNameHeading.innerText = person.name;
      let personLinkedinText = document.createElement('a');
      personLinkedinText.innerText = person.linkedin;
      personLinkedinText.setAttribute('title', person.name + "\'s LinkedIn Page");
      personLinkedinText.setAttribute('href', person.linkedin);
      let personEmailText = document.createElement('p');
      personEmailText.innerText = 'Email: ' + person.email;
      info_div.appendChild(personNameHeading);
      info_div.appendChild(personLinkedinText);
      info_div.appendChild(personEmailText);
      container.appendChild(row);
    }
    sectionDOM.appendChild(container);
    document.getElementById('main-container').appendChild(sectionDOM);
  }

  // finishing touches

  window.logData = function() {
    console.log(ryan);
  }

  window.getData = function() {
    return ryan;
  }

  function init() {
    document.body.appendChild(build_bootstrap_container('main-container'));
    build_bio_section();
    build_education_section();
    build_jobs_section();
    build_portfolio_section();
    build_credentials_section();
    build_references_section();
  }

  // DOM Listener

  document.addEventListener('DOMContentLoaded', function(){
    init();
  });

})()
