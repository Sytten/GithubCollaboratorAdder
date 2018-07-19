$(document).ready(function() {
  $("#collaborator-form").submit(function(event){
    event.preventDefault();

    var formData = {
      'username': $('input[id=username]').val()
    };

    $.ajax({
      url: "/github/collaborators/add",
      method: "POST",
      data: formData
    }).done(function(data) {
      alert("Contributor added");
    }).error(function(error) {
      alert("Cannot add the contributor");
    });
  });
});