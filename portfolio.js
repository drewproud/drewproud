Meteor.startup(function () {
    Portfolio = new Meteor.Collection('portfolio');
    var portfolio = [
      {
        name: 'Thabang Tlaka', url: 'thabangtlaka.co.za', tools: ['html5 theme']
      },
      {
        name: 'Corporate Youth', url: 'corporateyouth.co.za', tools: ['html5 theme']
      }, 
      {
        name: 'Letladi', url: 'letladi.com', tools: ['css3', 'html5', 'MeteorJS']
      }, 
      {
        name: 'Revolver Music', url: 'revolvermusic.co.za', tools: ['css3', 'html5', 'MeteorJS']
      },
      {
        name: 'Banele Khoza', url: 'banelekhoza.co.za', tools: ['css3', 'html5', 'MeteorJS']
      }
    ];
  
  if (Portfolio.find({}).length === 0) {
    portfolio.forEach(function(project) {
      Portfolio.insert(project);
    });
  }
});