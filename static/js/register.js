(function (window) {
  EMP = {}
  EMP.username = ko.observable('');
  EMP.email = ko.observable('');
  EMP.password = ko.observable('');
  EMP.password2 = ko.observable('');
  
  EMP.registerUser = function(){
    var formdata = new FormData();
    formdata.append('username', EMP.username());
    formdata.append('email', EMP.email());
    formdata.append('password', EMP.password());
    formdata.append('password2', EMP.password2());
    $.ajax({
      method: 'POST',
      url: '/user/api/register',
      data: formdata,
      contentType: false,
      processData: false,
    })
    .done( function (d, textStatus, jqXHR) {
      window.location='/user/login';
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