(function (window) {
  EMP = {}
  EMP.username = ko.observable('');
  EMP.password = ko.observable('');
  
  EMP.userLogin = function(){
    var formdata = new FormData();
    formdata.append('username', EMP.username());
    formdata.append('password', EMP.password());
    $.ajax({
      method: 'POST',
      url: '/user/api/login',
      data: formdata,
      contentType: false,
      processData: false,
    })
    .done( function (d, textStatus, jqXHR) {
      window.location = '/employee';
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