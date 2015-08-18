Template.layout.events({
  'click .front': function(ev) {
    var sectionDivClass = getSectionDivClass($(ev.target).parents());
    turnDisplay(sectionDivClass);
  },
  'click .back': function(ev) {
    // Only turns it back if we clicked on the bare background, not a child element
    if (ev.currentTarget === ev.target) {
      var sectionDivClass = getSectionDivClass($(ev.target).parents());
      turnDisplay(sectionDivClass);
    }
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
    if (currentClass === 'links' || currentClass === 'contact' || currentClass === 'about') {
      sectionClass = currentClass;
    }
  });
  return sectionClass;
}
