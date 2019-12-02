(function (window) {
  EMP = {}
  EMP.id = ko.observable('');
  EMP.employees_list = ko.observableArray([]);
  EMP.taskname = ko.observable('');
  EMP.assignee = ko.observable('');
  EMP.status = ko.observable('');
  EMP.start_date = ko.observable('');
  EMP.end_date = ko.observable('');

  EMP.getEmployeesList = function(){
    $.ajax({
      method: 'GET',
      url: '/employee/api/list',
    })
    .done( function (d, textStatus, jqXHR) {
      EMP.employees_list([]);
      for(var i=0; i<d.length; i++){
        EMP.employees_list.push(d[i]);
      }
      EMP.getTaskDetails();
    })
    .fail( function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText);
    })
  }
    
  EMP.getTaskDetails = function(){
    $.ajax({
      method: 'GET',
      url: '/employee/api/task/details/'+EMP.id(),
    })
    .done( function (d, textStatus, jqXHR) {
      EMP.taskname(d.taskname);
      EMP.assignee(d.assignee);
      $('#assignee').val(EMP.assignee()).trigger('change');
      EMP.status(d.status);
      EMP.start_date(d.start_date);
      EMP.end_date(d.end_date);
    })
    .fail( function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText);
    })
  }

  EMP.updateTask = function(){
    EMP.start_date($('#sd').val())
    EMP.end_date($('#ed').val())
    
    var formdata = new FormData();
    formdata.append('taskname', EMP.taskname());
    formdata.append('assignee', EMP.assignee());
    formdata.append('status', EMP.status());
    formdata.append('start_date', EMP.start_date());
    formdata.append('end_date', EMP.end_date());
    $.ajax({
      method: 'POST',
      url: '/employee/api/task/edit/'+EMP.id(),
      data: formdata,
      contentType: false,
      processData: false,
    })
    .done( function (d, textStatus, jqXHR) {
      location.reload()
    })
    .fail( function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText);
    })
  }

  EMP.deleteTask = function(data, e){
    $.ajax({
      method: 'POST',
      url: '/employee/api/task/delete/'+EMP.id(),
    })
    .done( function (d, textStatus, jqXHR) {
      window.location = '/employee/tasks'
    })
    .fail( function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText);
    })
  }
            
})(this);

  function init() {
    if (document.readyState == "interactive") {
      var docUrlArr = document.URL.split('/');
      var id = docUrlArr[docUrlArr.length - 1];
      EMP.id(id);
      EMP.getEmployeesList();
      ko.applyBindings(EMP);
    }
  }

document.onreadystatechange = init;