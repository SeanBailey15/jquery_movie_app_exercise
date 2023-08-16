/*
capture inputs from user when the form button is clicked
append them to the dom with a button
the button should remove the item
ensure rating of movie is only between 0 and 10
ensure title entered has at least 2 characters
allow users to sort alphabetically by title a-z or z-a
allow users to sort by rating low-high or high-low
*/
const handleSubmission = $("#input-form").on("click", "#form-btn", function () {
  let userInput;
  if (
    $("#movie-title").val().length >= 2 &&
    $("#rating").val() >= 0 &&
    $("#rating").val() <= 10
  ) {
    console.log($("#movie-title").val() + " " + $("#rating").val());
    userInput = $("#movie-title").val() + " " + $("#rating").val() + "/10";
    createListElement(userInput);
  } else {
    alert(
      "Movie Title Must Be At Least Two Characters Long\nRatings Must Be From 0 - 10"
    );
  }
});

let listArray = [];
function createListElement(userInput) {
  const listItem =
    `<li class="movie-item" id="movie-item">${userInput}</li>` +
    '<button type="button" class="list-btn" id="list-btn">Remove Movie</button>';
  listArray.push(listItem);
  $("#movies-list").html("");
  $("#movies-list").append(listArray);
  $("#movie-title").val("");
  $("#rating").val("");
}

const handleRemove = $("#movies-list").on("click", "#list-btn", function () {
  const removed = `${
    $(this).prev().prop("outerHTML") + $(this).prop("outerHTML")
  }`;
  const index = listArray.indexOf(removed);
  listArray.splice(index, 1);
  $(this).prev().remove();
  $(this).remove();
});

//**************ALL COMMENTED BELOW ARE PART OF FURTHER STUDY***************/
//UNABLE TO GET SORTING LOGIC FIGURED OUT AT THIS TIME, WILL RETURN TO IT

// let sortedArray;
// const handleAlphaSort = $(".sort").on("click", "#alphabetic", function () {
//   sortedArray = listArray.sort();
//   $("#movies-list").html("");
//   $("#movies-list").append(sortedArray);
//   if (sortedArray == listArray.sort()) {
//     $("#movies-list").html("");
//     $("#movies-list").append(sortedArray.reverse());
//   } else {
//     sortedArray = listArray.sort();
//     $("#movies-list").html("");
//     $("#movies-list").append(sortedArray);
//   }
// });
