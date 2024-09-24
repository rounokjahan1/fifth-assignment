//From shared function get number input field value by id 
function getInputFieldValueById(id){
  return parseFloat(document.getElementById(id).value);
}

//From shared function get text input field value by id
function getTextFieldValueById(id){
  return parseFloat(document.getElementById(id).innerText);
}

//common function for hide and show section
function showSectionById(id){

  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('first-card').classList.add('hidden');
  document.getElementById('second-card').classList.add('hidden');
  document.getElementById('third-card').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}


