(function (window) {
  EMP = {}
  EMP.tasks_list = ko.observableArray([]);
    
  EMP.getTasksList = function(){
    $.ajax({
      method: 'GET',
      url: '/employee/api/tasks/list',
    })
    .done( function (d, textStatus, jqXHR) {
      EMP.tasks_list([]);
      for(var i=0; i<d.length; i++){
        EMP.tasks_list.push(d[i]);
      }
    })
    .fail( function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText);
    })
  }

  EMP.createTask = function(){
    window.open('/employee/task/create');
  }

  EMP.getDetails = function(data, e){
    window.open('/employee/task/details/'+data.id);
  }
            
})(this);

  function init() {
    if (document.readyState == "interactive") {
      EMP.getTasksList();
      ko.applyBindings(EMP);
    }
  }

document.onreadystatechange = init;