(function (window) {
  EMP = {}
  EMP.employees_list = ko.observableArray([]);
    
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
    })
    .fail( function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText);
    })
  }

  EMP.createEmployee = function(){
    window.open('/employee/create');
  }

  EMP.getDetails = function(data, e){
    window.open('/employee/details/'+data.id);
  }
            
})(this);

  function init() {
    if (document.readyState == "interactive") {
      EMP.getEmployeesList();
      ko.applyBindings(EMP);
    }
  }

document.onreadystatechange = init;