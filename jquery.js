$(document).ready(function() {
  var currentImageIndex = 0;
  var images = [
	  "assets/autumnLeaves.jpg",
	  "assets/creek.jpg",
	  "assets/desertLandscape.jpg",
	  "assets/dock.jpg",
	  "assets/forest.jpg",
	  "assets/forestFlowers.jpg",
	  "assets/frangipaniFlowers.jpg",
	  "assets/garden.jpg",
	  "assets/greenSeaTurtle.jpg",
	  "assets/humpbackWhale.jpg",
	  "assets/oryxAntelope.jpg",
	  "assets/tocoToucan.jpg",
	  "assets/tree.jpg",
	  "assets/waterfall.jpg",
	  "assets/winterLeaves.jpg"
  ];
  
  $("#thumbnail-container a").click(function(e) {
    e.preventDefault();
    var fullSizeImage = $(this).attr("href");
	currentImageIndex = images.indexOf(fullSizeImage);
    $("#lightbox img").attr("src", fullSizeImage);
    $("#lightbox").addClass("active");
	document.getElementById("lightbox-prev").src = images[currentImageIndex - 1 < 0 ? images.length - 1 : currentImageIndex - 1];
	document.getElementById("lightbox-next").src = images[(currentImageIndex + 1) % images.length];
  });

  $("#lightbox").click(function(e) {
    // Check if the target of the click event is the close button
	if (e.target === $("#close-button")[0]) {
		// Remove the active class from the lightbox
		$(this).removeClass("active");
	}
  });

  $("#close-button").click(function() {
    $("#lightbox").removeClass("active");
  });

  $("#next-arrow").click(function() {
	currentImageIndex = (currentImageIndex + 1) % images.length;
	document.getElementById("lightbox-image").src = images[currentImageIndex]; 
	document.getElementById("lightbox-prev").src = images[currentImageIndex - 1 < 0 ? images.length - 1 : currentImageIndex - 1];
	document.getElementById("lightbox-next").src = images[(currentImageIndex + 1) % images.length];
  });


  $("#prev-arrow").click(function() {
	currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	document.getElementById("lightbox-image").src = images[currentImageIndex];
	document.getElementById("lightbox-prev").src = images[currentImageIndex - 1 < 0 ? images.length - 1 : currentImageIndex - 1];
	document.getElementById("lightbox-next").src = images[(currentImageIndex + 1) % images.length];
  });
});