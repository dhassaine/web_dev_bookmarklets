javascript:(
  function(){
    XMLHttpRequest.prototype._old_open = XMLHttpRequest.prototype._old_open || XMLHttpRequest.prototype.open; 
    XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {   
      return XMLHttpRequest.prototype._old_open.call( this, method, 'TEST-'+url, async, user, pass); 
    };
  })()
