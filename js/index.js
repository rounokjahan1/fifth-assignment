let accountBalance = getTextFieldValueById('account-balance');
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

//From shared function get number input field value by id 
function getInputFieldValueById(id){
  return parseFloat(document.getElementById(id).value);
}

//From shared function get text input field value by id
function getTextFieldValueById(id){
  return parseFloat(document.getElementById(id).innerText);
}


// shared function for handle donation
function handleDonation(buttonId, inputId, currentAmountId, location){
  document.getElementById(buttonId).addEventListener('click', function(){
    const donateAmount = getInputFieldValueById(inputId);
    const currentDonateAmount = getTextFieldValueById(currentAmountId);
    if(isNaN(donateAmount) || donateAmount <= 0){
      alert('Invalid Donation amount.');
      document.getElementById('my_modal_1').close();
      return;
    }
    if(donateAmount > accountBalance){
      alert('Invalid Donation amount.');
      document.getElementById('my_modal_1').close();
      return;
    }

    // find account balance
    accountBalance -= donateAmount;
    document.getElementById('account-balance').innerText = accountBalance.toFixed(2);

    // find current donate amount
    const totalCurrentDonateAmount = currentDonateAmount + donateAmount;
    document.getElementById(currentAmountId).innerText = totalCurrentDonateAmount.toFixed(2);
  
    //Adding a new div to history section
    const historyItem = document.createElement('div');
  
    historyItem.className = "bg-white border border-solid border-[rgba(17, 17, 17, 0.1)] rounded-2xl mx-5 lg:mx-0 mb-6 p-5 lg:p-8";
  
    historyItem.innerHTML = `
      <h4 class="text-primary font-bold text-xl mb-4">
      ${donateAmount} Taka is Donated for ${location}
      , Bangladesh</h4>
      <p class="text-base text-secondary font-light">Date: ${new Date().toLocaleString('en-US',{
       weekday: 'short',
       month: 'short',
       day: '2-digit', 
       year: 'numeric', 
       hour: '2-digit',  
       minute: '2-digit', 
       second: '2-digit', 
       timeZoneName: 'short',
      })} (Bangladesh Standard Time)</p>
      `;
  
    const historyContainer = document.getElementById('history-list');
    historyContainer.prepend(historyItem);
  
   document.getElementById(inputId).value= '';
  })
 }


// add event listener for card-1 donate now button
 handleDonation('noakhali-donate-now-btn', 'noakhali-donation-input', 'noakhali-current-donation-amount', 'Flood Relief in noakhali');

// add event listener for card-2 donate now button
handleDonation('feni-donate-now-btn', 'feni-donation-input', 'feni-current-donation-amount', 'Flood Relief in feni');


// add event listener for card-3 donate now button
handleDonation('quota-donate-now-btn', 'quota-donation-input', 'quota-current-donation-amount', 'Injured in the Quota Movement');
 
// click history tab

historyTab.addEventListener('click', function(){
  donationTab.classList.add("bg-white","font-medium","border",
"border-borderColor");
  donationTab.classList.remove("bg-buttonColor", "font-semibold", "border-buttonColor");
  historyTab.classList.add("bg-buttonColor", "font-semibold", "border-buttonColor");  
  historyTab.classList.remove("bg-white","font-medium","border",
  "border-borderColor");  

  document.getElementById('history-section').classList.remove('hidden');
  document.getElementById('first-card').classList.add('hidden');
  document.getElementById('second-card').classList.add('hidden');
  document.getElementById('third-card').classList.add('hidden');
}) 

// click donation tab
donationTab.addEventListener('click', function(){
  historyTab.classList.add("bg-white","font-medium","border",
  "border-borderColor");
  historyTab.classList.remove("bg-buttonColor", "font-semibold", "border-buttonColor");

  donationTab.classList.add("bg-buttonColor", "font-semibold", "border-buttonColor"); 
  donationTab.classList.remove("bg-white","font-medium","border",
  "border-borderColor");

  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('first-card').classList.remove('hidden');
  document.getElementById('second-card').classList.remove('hidden');
  document.getElementById('third-card').classList.remove('hidden');    
})





