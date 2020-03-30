$(document).ready(function() {
  var favFlavors = ["Moose Tracks", "Mint Chocolate Chip", "Butter Pecan", "Cherry Garcia"];

  favFlavors.forEach(function(flavor) {
    $("#icecream").append(flavor);
    $("#icecream").append("<br>");
  });

  event.preventDefault();
});