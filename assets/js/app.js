const Home = {
 template: `
<article class="post featured">
  <header class="major">
    <h2>Nathan Moon</h2>
  </header>
  <p>
    I'm a software developer. I haven't spoken at conferences. I don't have a Twitter following. I don't write tons of code on the side.<br />
    What I do have is a lot of experience building startups, and good instincts on how to build things well. I always give my best to my full-time job.
  </p>
  <ul class="actions special">
    <li><router-link to="/intro" class="button large">See My Full Intro</router-link></li>
  </ul>
</article>
  `,
  data: function() {
    return {
    };
  }
}

const Intro = {
 template: `
<section class="post">
  <header class="major">
    <h1>Intro</h1>
    <p>
      My name is Nathan Moon.  I have a BS and MS in Computer Science, and I have been a software developer for 15+ years.
    </p>
  </header>
  <p>
    I have always enjoyed working for very small companies and startups.  I think it's because it's nice to feel like you are making a significant contribution.
    I got into writing software in High School when I took a computer science course taught by my math teacher, learning Pascal.  I have never looked back.
  </p>
  <hr/>
  <h2>Some of my philosophies</h2>
  <ul>
    <li>Deleting code is better than writing code.</li>
    <li>Two heads are better than one.</li>
    <li>Let the best idea win.</li>
    <li>Write tests.</li>
    <li>Commit messages are important (and underrated).</li>
    <li>Tests are worth refactoring.</li>
  </ul>
  <p>
    A large part of my philosophy on software development can be wrapped up as what I have titled "No Heroes, No Egos":
  </p>
  <hr/>
  <h2>No Heroes</h2>
  <p>
    Always strive to have no projects or sections of code that only one developer can understand or modify.  Nobody should be indispensable.
    Avoid making decisions in a vacuum; Request the input of others. Two heads are better than one.
  </p>
  <h3>When coding, consider How, What, and Why</h3>
  <h4>How</h4>
  <p>
    The <i>code itself</i> says how it is doing something.  It's better to have clear code than clever or optimized code.  Optimize only when it's absolutely required.
    Comments should be rare and reserved for non-intuitive behaviors.  Comments often lie.
  </p>
  <h4>What</h4>
  <p>
    The <i>tests</i> says what the code is doing. They document the behavior under various circumstances.  If you want to know what the code is doing, you should be able
    to find tests that explain it.  If you can't find a test to tell you how the code behaves with certain inputs, consider writing one to find out!
  </p>
  <h4>Why</h4>
  <p>
    The <i>commit messages</i> say why the code does what it does. Commit messages show context, thought process, and reasons for non-obvious behaviors.
    If you don't understand why code was written the way it was, the commit messages should have the answers.
  </p>
  <hr/>
  <h2>No Egos</h2>
  <p>
    Everyone should feel comfortable arguing for what they think is right.  The best idea should always win. Be ready to defend ideas and beliefs with reasoning or,
    even better, with data, or be ready to let them go.
  </p>
  <p>
    Treat code reviews as learning opportunities.  Concentrate on getting better, not on looking good or being right. Don't get offended by feedback. Be willing to put
    in the necessary time to give others valuable code reviews.
  </p>
  <ul class="actions special">
    <router-link tag="li" to="/resume"><a class="button large">See My Resume</a></router-link>
  </ul>
</section>
  `,
  data: function() {
    return {
    };
  }
}

const Resume = {
 template: `
<section class="post">
  <header class="major">
    <h1>Resume</h1>
    <p>{{ basics.summary }}</p>
  </header>

  <hr/>

  <header>
    <h2>Skills</h2>
  </header>
  <p>
    <div class="skills-list">
      <div v-for="skill in skills" class="skill-item">
      {{skill.name}}
      </div>
    </div>
  </p>

  <hr/>

  <header>
    <h2>Experience</h2>
  </header>
  <div v-for="experience in work">
    <header>
      <h3>{{experience.position}}</h3>
      <p>
        <a :href="experience.website"><b>{{experience.company}}</b></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <span v-if="experience.duration">({{experience.duration}})</span>
        {{experience.startDate}} - <span v-if="experience.endDate">{{experience.endDate}}</span><span v-else>Present</span>
      </p>
    </header>
    <p>{{experience.summary}}</p>
  </div>

  <hr/>

  <header>
    <h2>Education</h2>
  </header>
  <div v-for="school in education">
    <header>
      <h3>{{school.studyType}} - {{ school.area }}</h3>
      <p>{{school.institution}}. Graduated {{school.endDate}}</p>
    </header>
    <p>{{school.summary}}</p>
  </div>

  <hr/>

  <header>
    <h2>Publications</h2>
  </header>
  <div v-for="pub in publications">
    <header>
      <h3>{{pub.name}}</h3>
      <p>{{pub.releaseDate}}</p>
    </header>
    <p>{{pub.publisher}}</p>
  </div>
</section>

  `,
  data: function() {
    return {
      "basics": {
        "name": "Nathan Moon",
        "label": "Software Developer",
        "summary": `I am a Full-stack Developer, and by that I mean I can usually do whatever needs done to build quality software. I also know what to build and what not to build.
        I have a Masters in Computer Science and over 15 years industry experience in software, mainly for small companies and startups.
        I have shipped code for web frontends in multiple frameworks, backends in multiple languages, even mobile for iOS and Android.
        My strongest areas are backend and database.  I am very experienced in relational database schema design, query optimization, and performance tuning.
        I am also experienced in designing and deploying search systems.`,
        "phone": "",
        "email": "nathannospam@gmail.com",
        "website": "",
        "location": {
          "address": "",
          "postalCode": "",
          "city": "",
          "countryCode": "",
          "region": ""
        },
        "profiles": [{
            "network": "LinkedIn",
            "url": "https://www.linkedin.com/in/nathanmoon/"
        },
        {
            "network": "Github",
            "url": "https://github.com/nathanmoon"
        }]
      },
      "work": [
        {
          "company": "Yours.co",
          "position": "CTO",
          "website": "https://yours.co",
          "startDate": "July 2018",
          "summary": "Directing and leading the technology behind Yours.co.  Bringing back long-form home movies without the hassle. Pick photos and videos, and Yours.co does the rest, delivering home movies with music and transitions.",
          "highlights": []
        },
        {
          "company": "Yours.co",
          "position": "Software Developer",
          "website": "https://yours.co",
          "duration": "1 year",
          "startDate": "June 2017",
          "endDate": "July 2018",
          "summary": "Working with Node.js, Vue.js, iOS, Android, Firebase, AWS to store and transform videos and photos into home movies.",
          "highlights": []
        },
        {
          "company": "HireVue",
          "position": "Software Developer",
          "website": "https://www.hirevue.com",
          "duration": "5 years",
          "startDate": "June 2012",
          "endDate": "June 2017",
          "summary": "Designed RESTful APIs in Python on top of PostgreSQL. Worked on the React/Redux frontend. Added Elasticsearch to the stack to handle search and facets. Learned a lot about Amazon Web Services. Submitted 1 patent. Led multiple teams. Awarded \"Founders Club\" for 2013.",
          "highlights": []
        },
        {
          "company": "Fold3",
          "position": "Director of Development",
          "website": "https://www.fold3.com",
          "duration": "1 year",
          "startDate": "February 2011",
          "endDate": "June 2012",
          "summary": "Oversaw a small team while primarily spending time developing. Gained experience in Solr/Lucene and designing search systems.",
          "highlights": []
        },
        {
          "company": "Footnote.com (renamed to Fold3)",
          "position": "Software Developer",
          "website": "https://www.fold3.com",
          "duration": "5 years",
          "startDate": "September 2006",
          "endDate": "June 2011",
          "summary": "Developed web services in Java for the footnote.com website, delivering images of original historical documents in a community/web 2.0 environment using Axis, Tomcat, JPA/Hibernate, Spring Framework, MySQL (InnoDB), Memcached, JUnit.  Was heavily involved in performance tuning of MySQL/InnoDB and Hibernate. Experienced in MySQL 5.0/5.1, triggers, stored procedures, replication.  Developed front-end components in Flex/Flash/ActionScript 3.",
          "highlights": []
        },
        {
          "company": "Waterford Research Institute",
          "position": "Software Developer",
          "website": "https://www.waterford.org",
          "duration": "1.5 years",
          "startDate": "February 2005",
          "endDate": "September 2006",
          "summary": "Designed, developed, and tested educational software for teaching basic reading and math in grades K-2. Developed server-side, back-end and framework layers using Java, Hibernate, JMS, PostgreSQL, Microsoft SQL Server.  Principal contributor in a large-scale migration from SQL Server 2000 stored procedures to database vendor agnostic data and business layers using Hibernate 3, to support PostgreSQL. Successfully directed the creation of extensive unit tests to ensure a smooth transition and timely completion of the migration. Led a major movement toward using JUnit for automated unit tests.  Architected a data collection/data warehousing system for aggregating product usage information for research and analysis.  Experienced in directing remote and local teams. Proven track-record of accurately estimating time to completion of major projects, and meeting deadlines.  Maintained and extended a large internally used web application.",
          "highlights": []
        },
        {
          "company": "Park City Group, Inc.",
          "position": "Software Developer",
          "website": "http://www.parkcitygroup.com",
          "duration": "2 years",
          "startDate": "May 2003",
          "endDate": "Feb 2005",
          "summary": "Designed, developed, and tested multi-tier Client/Server business management applications in Java/Oracle using J2SE, JDBC, JNDI, Swing. Gained experience with Agile programming, Design Patterns, SQL, JUnit, Toad.  Led an initiative to create an extensive unit test framework where tests were run on an automated schedule and failures were e-mailed to responsible developers. Successfully used automated unit and functional tests to ensure the stability of critical fixes in an environment where bug-fix turn-around for clients was often a matter of hours.  Wrote multiple Swing applications with support for i18n (internationalization).  Revised and re-wrote many of the core tools used by clients for data import and aggregation from stores to corporate offices.",
          "highlights": []
        }
      ],
      "education": [
        {
          "institution": "University of North Carolina at Chapel Hill",
          "website": "https://www.unc.edu/",
          "area": "Computer Science",
          "studyType": "MS",
          "startDate": "2000",
          "gpa": "",
          "courses": [],
          "summary": "Emphasis in medical image analysis, machine learning",
          "endDate": "2002"
        },
        {
          "institution": "Brigham Young University",
          "website": "https://www.byu.edu/",
          "area": "Computer Science",
          "studyType": "BS",
          "startDate": "1994",
          "gpa": "",
          "courses": [],
          "summary": "Graduated cum laude. Minor in Logic",
          "endDate": "2000"
        }
      ],
      "publications": [
        {
          "name": "Automatic Brain and Tumor Segmentation",
          "publisher": "Medical Image Computing and Computer-Assisted Intervention (MICCAI)",
          "releaseDate": "September 2002",
          "website": "http://midag.cs.unc.edu/pubs/papers/MICCAI02-moon.pdf"
        },
        {
          "name": "Model-Based Brain and Tumor Segmentation",
          "publisher": "International Conference on Pattern Recognition",
          "releaseDate": "August 2002",
          "website": "http://midag.cs.unc.edu/pubs/papers/ICPR02-Moon-brainseg.pdf"
        }
      ],
      "skills": [
        {
          "name": "Web Applications",
          "level": "",
          "keywords": ["Web Services", "REST"]
        },
        {
          "name": "JavaScript",
          "level": "",
          "keywords": ["Node", "React"]
        },
        {
          "name": "Python",
          "level": "",
          "keywords": ["Django", "Flask"]
        },
        {
          "name": "Java",
          "level": "",
          "keywords": []
        },
        {
          "name": "Relational Databases",
          "level": "",
          "keywords": ["SQL", "PostgreSQL", "MySQL"]
        },
        {
          "name": "ElasticSearch",
          "level": "",
          "keywords": []
        },
        {
          "name": "AWS"
        },
        {
          "name": "Firebase"
        }
      ],
      "languages": [
        {
          "language": "Spanish",
          "fluency": "Fluent but rusty"
        }
      ]
    };
  }
}

const router = new VueRouter({
 routes: [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/intro', component: Intro }
 ]
})
router.afterEach(function(to, from) {
  console.log("from: ", from);
  if (from.name !== null) {
    VueScrollTo.scrollTo("#header");
  }
})
const app = new Vue({
 el: '#app',
  router,
  mounted: function() {
    $(this.$refs.header).scrollex({
      bottom: '5vh',
      enter: function() {
        $('#navPanelToggle').removeClass('alt');
      },
      leave: function() {
        $('#navPanelToggle').addClass('alt');
      }
    });
  }
})
