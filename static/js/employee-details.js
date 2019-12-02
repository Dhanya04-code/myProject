(function (window) {
  EMP = {}
  EMP.id = ko.observable('');
  EMP.firstname = ko.observable('');
  EMP.lastname = ko.observable('');
  EMP.emp_id = ko.observable('');
    
  EMP.getEmployeeDetails = function(){
    $.ajax({
      method: 'GET',
      url: '/employee/api/details/'+EMP.id(),
    })
    .done( function (d, textStatus, jqXHR) {
      EMP.firstname(d.firstname);
      EMP.lastname(d.lastname);
      EMP.emp_id(d.emp_id);
    })
    .fail( function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText);
    })
  }

  EMP.updateEmployee = function(){
    var formdata = new FormData();
    formdata.append('firstname', EMP.firstname());
    formdata.append('lastname', EMP.lastname());
    $.ajax({
      method: 'POST',
      url: '/employee/api/edit/'+EMP.id(),
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

  EMP.deleteEmployee = function(data, e){
    $.ajax({
      method: 'POST',
      url: '/employee/api/delete/'+EMP.id(),
    })
    .done( function (d, textStatus, jqXHR) {
      window.location = '/employee'
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
      EMP.getEmployeeDetails();
      ko.applyBindings(EMP);
    }
  }

document.onreadystatechange = init;