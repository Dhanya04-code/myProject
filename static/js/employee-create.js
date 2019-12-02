(function (window) {
  EMP = {}
  EMP.firstname = ko.observable('');
  EMP.lastname = ko.observable('');
  EMP.emp_id = ko.observable('');
  
  EMP.createEmployee = function(){
    var formdata = new FormData();
    formdata.append('firstname', EMP.firstname());
    formdata.append('lastname', EMP.lastname());
    formdata.append('emp_id', EMP.emp_id());
    $.ajax({
      method: 'POST',
      url: '/api/employee/create',
      data: formdata,
      contentType: false,
      processData: false,
    })
    .done( function (d, textStatus, jqXHR) {
      window.location='/employees';
    })
    .fail( function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText);
    })
  };
            
})(this);

  function init() {
    if (document.readyState == "interactive") {      
      ko.applyBindings(EMP);
    }
  }

document.onreadystatechange = init;