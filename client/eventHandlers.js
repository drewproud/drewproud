Template.layout.events({
  'click .front p span': function(ev) {
    var sectionDiv = getSectionDiv(ev.target);
    var sectionDivClass = getSectionDivClass(sectionDiv);
    turnDisplay(sectionDivClass);
  },
  'click .back p > span': function(ev) {
    var sectionDiv = getSectionDiv(ev.target);
    var sectionDivClass = getSectionDivClass(sectionDiv);
    turnDisplay(sectionDivClass);
  }
});

function turnDisplay(sectionDivClass) {
  $('.' + sectionDivClass + ' .front').toggleClass('hide-front');
  $('.' + sectionDivClass + ' .back').toggleClass('show-back');
}

function getSectionDivClass(sectionDiv) {
  return $(sectionDiv).attr('class');
}

function getSectionDiv(currentElement) {
  return $(currentElement).parents()[2];
}