var portfolio = [
  {
    name: 'Thabang Tlaka', url: 'thabangtlaka.co.za', tools: ['html5 theme']
  },
  {
    name: 'Corporate Youth', url: 'corporateyouth.co.za', tools: ['html5 theme']
  }, 
  {
    name: 'GreyingSky', url: 'greyingsky.co.za', tools: ['html5 theme']
  },
  {
    name: 'Letladi', url: 'kolonyane.meteor.com', tools: ['css3', 'html5', 'MeteorJS']
  }, 
  {
    name: 'Revolver Music', url: 'revolver.meteor.com', tools: ['css3', 'html5', 'MeteorJS']
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
  }
});
Template.project.helpers({
  'tools': function() {
    return this.tools.join(' / ');
  }
})

 