var portfolio = [
  {
    name: 'Union Capital Boston', url: 'http://ucbapp.org', tools: ['html5', 'geolocation', 'mobile']
  },
  {
    name: 'Whip', url: 'http://whip.meteor.com', tools: ['html5','geolocation', 'mobile']
  },
  // {
  //   name: 'GreyingSky', url: 'http://greyingsky.co.za', tools: ['html5 theme']
  // },
  // {
  //   name: 'Letladi', url: 'http://letladi.com', tools: ['css3', 'html5', 'MeteorJS']
  // },
  // {
  //   name: 'Revolver Music', url: 'http://revolver.meteor.com', tools: ['css3', 'html5', 'MeteorJS']
  // }
];

Template.footer.helpers({
  'year': function() {
    return new Date().getFullYear()
  }
});

Template.layout.helpers({
  'projects': function() {
    return portfolio;
  }
});
Template.project.helpers({
  'tools': function() {
    return this.tools.join(' / ');
  }
});