cards = new Meteor.Collection("Cards");

if (Meteor.isClient) {

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

	Template.cards.cards = function() {
		return cards.find({}, {sort: {Name: 1}});
	};	
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
