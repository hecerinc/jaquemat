Template.Schools.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('schools'); // Subscribe to forums
    });
});

Template.Schools.events({
	'click .btn-add': function(event, template) {
		Session.set('newSchool', 1); // Open form to add forums
	}
});