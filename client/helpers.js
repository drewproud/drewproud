var portfolio = [
  {
    name: 'Union Capital Boston', url: 'http://ucbapp.org', tools: ['html5', 'geolocation', 'mobile']
  },
  {
    name: 'Whip', url: 'http://whip.meteor.com', tools: ['html5','geolocation', 'mobile']
  }
];

var technologies = [
  'JavaScript',
  'C#',
  'Node.js',
  'VB',
  'MeteorJS',
  'AngularJS',
  'XML',
  'ASP.NET',
  'MongoDB',
  'SQL',
  'HTML5',
  'CSS3'
];

var myLinks = [
  {
    text: 'GitHub',
    icon: 'GitHub-Mark-32px.png',
    link: 'https://github.com/drewproud'
  },
  {
    text: 'LinkedIn',
    icon: 'In-2C-28px-R.png',
    link: 'https://www.linkedin.com/in/drewproud'
  },
  {
    text: 'facebook',
    icon: 'FB-f-Logo__blue_29.png',
    link: 'https://www.facebook.com/drew.proud/'
  }
];

Template.footer.helpers({
  'year': function() {
    return new Date().getFullYear()
  }
});

Template.layout.helpers({
  'projects': function() {
    return portfolio;
  },

  'technologies': function() {
    return technologies;
  },

  'myLinks': function() {
    return myLinks;
  }
});
Template.project.helpers({
  'tools': function() {
    return this.tools.join(' / ');
  }
});