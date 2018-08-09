'use strict'; 

/* eslint-env */

(() => {
  const dataObj = {
    firstName: '',
    lastName: ''
  };

  const bindingHandler = {
    set: function(dataObj, prop, value) {
      dataObj[prop] = value;
      document.getElementById(prop).innerText = value;
      return true;
    } 
  }

  const dataBinder =  new Proxy(dataObj, bindingHandler);

  function updateData() {
    dataBinder[event.target.name] = event.target.value;
  }

  document.getElementById('nameForm').addEventListener('keyup', updateData);

})();
