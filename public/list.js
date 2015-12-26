$(document).ready(function() {

var itemArray = [];


function addItem(item) {
	itemArray.push(item);
	console.log(itemArray);
	$('#new-item').val('');
 	for (var i = 0; i < itemArray.length; i++) {
 		console.log("The array length is", itemArray.length);
 		$(".list-item" + (i + 1)).html('<input type="checkbox" id="checkbox">' + itemArray[i] + '<button class="delete-button" id="delete-button">&#10006</button>');
    }
}


$(".add-to-do-item-button").on("click", function(event) {
	event.preventDefault();
	var item = $("#new-item").val().trim();
	if ($("#new-item").val().trim() == "") {
		alert("Enter an Item Name");
		return;
	} else {
	//need to do an if statement so that you can't enter empty fields here.
	addItem(item);
	}
});


$( "#new-item" ).keypress(function( event ) {
  if ( event.which == 13 ) {
  	if ($("#new-item").val().trim() == "") {
  		alert("Enter an Item Name");
  		return;
  	} else {
    event.preventDefault();
	var item = $("#new-item").val().trim();
	addItem(item);
	}
  }
  $("#new-item").val() === "";
});


//This delete function does not delete from the array, only hides it from view.
$(document).on('click', '#list-item', function(event) {
	// for (i = 0; i < itemArray.length; i++) {
	// 	if (itemArray[i] == $(this[i])) {
	// 		itemArray.slice(i, 1)
	// 	} else {
	// 		console.log("bob");
	// 	}
	$(this).css("display", "none");
		// console.log(itemArray);
	// }
});




});

