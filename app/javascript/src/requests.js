// app/javascript/src/requests.js
import $ from "jquery";

// Fetch tasks
var indexTasks = function () {
  var request = {
    type: "GET",
    url: "api/tasks?api_key=1",
    success: function (response) {
      console.log(response);
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  };
  $.ajax(request);
};

// Run once to test
indexTasks();
