cards = new Meteor.Collection("Cards");

if (Meteor.isClient) {

	Template.cards.cards = function() {
		return cards.find({}, {sort: {Name: 1}});
	};	
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
