Template.layout.events({
  'click .front': function(ev) {
    var sectionDivClass = getSectionDivClass($(ev.target).parents());
    turnDisplay(sectionDivClass);
  },
  'click .back-btn': function(ev) {
    var sectionDivClass = getSectionDivClass($(ev.target).parents());
    turnDisplay(sectionDivClass);
  }
});

function turnDisplay(sectionDivClass) {
  $('.' + sectionDivClass + ' .front').toggleClass('hide-front');
  $('.' + sectionDivClass + ' .back').toggleClass('show-back');
}

function getSectionDivClass(sectionParents) {
  var sectionClass, currentClass;
  $.each(sectionParents, function(idx, parent) {
    currentClass = $(parent).attr('class');
    if (currentClass === 'projects' || currentClass === 'contact') {
      sectionClass = currentClass;
    }
  });
  return sectionClass;
}
