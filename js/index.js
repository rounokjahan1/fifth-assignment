let accountBalance = getTextFieldValueById('account-balance');
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

// add event listener for card-1 donate now button
document.getElementById('noakhali-donate-now-btn').addEventListener('click', function(){
  const donateAmount = getInputFieldValueById('noakhali-donation-input');
  const currentDonateAmount = getTextFieldValueById('noakhali-current-donation-amount');

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
  
  accountBalance -= donateAmount;
  document.getElementById('account-balance').innerText = accountBalance.toFixed(2);

  const totalCurrentDonateAmount = currentDonateAmount + donateAmount;
  document.getElementById('noakhali-current-donation-amount').innerText = totalCurrentDonateAmount.toFixed(2);


  //Adding a new div to history section
  const historyItem = document.createElement('div');

  historyItem.className = "bg-white border border-solid border-[rgba(17, 17, 17, 0.1)] rounded-2xl mx-5 lg:mx-0 mb-6 p-5 lg:p-8";

  historyItem.innerHTML = `
    <h4 class="text-primary font-bold text-xl mb-4">
    ${donateAmount} Taka is Donated for Flood Relief in noakhali, Bangladesh</h4>
    <p class="text-base text-secondary font-light">Date: ${new Date().toLocaleString('en-US',{
     weekday: 'short',
     month: 'short',
     day: '2-digit', 
     year: 'numeric', 
     hour: '2-digit',  
     minute: '2-digit', 
     second: '2-digit', 
     timeZoneName: 'short',
    })} (Bangladesh Standard Time)</p>`;

  const historyContainer = document.getElementById('history-list');
  historyContainer.prepend(historyItem);

 document.getElementById('noakhali-donation-input').value= '';
 
})


// add event listener for card-2 donate now button

document.getElementById('feni-donate-now-btn').addEventListener('click', function(){
  const donateAmount = getInputFieldValueById('feni-donation-input');
  const currentDonateAmount = getTextFieldValueById('feni-current-donation-amount');

  if(isNaN(donateAmount) || donateAmount <= 0){
   alert('Invalid Donation amount.');
   document.getElementById('my_modal_2').close();
   return;
  }

  if(donateAmount > accountBalance){
    alert('Invalid Donation amount.');
    document.getElementById('my_modal_2').close();
    return;
  }
    accountBalance -= donateAmount;
    document.getElementById('account-balance').innerText = accountBalance.toFixed(2);
  
    const totalCurrentDonateAmount = currentDonateAmount + donateAmount;
    document.getElementById('feni-current-donation-amount').innerText = totalCurrentDonateAmount.toFixed(2);

    // history
  const historyItem = document.createElement('div');

  historyItem.className = "bg-white border border-solid border-[rgba(17, 17, 17, 0.1)] rounded-2xl mx-5 lg:mx-0 mb-6 p-5 lg:p-8";

  historyItem.innerHTML = `
    <h4 class="text-primary font-bold text-xl mb-4">
    ${donateAmount} Taka is Donated for Flood Relief in feni, Bangladesh</h4>
    <p class="text-base text-secondary font-light">Date: ${new Date().toLocaleString('en-US',{
     weekday: 'short',
     month: 'short',
     day: '2-digit', 
     year: 'numeric', 
     hour: '2-digit',  
     minute: '2-digit', 
     second: '2-digit', 
     timeZoneName: 'short',
    })} (Bangladesh Standard Time)</p>`;

  const historyContainer = document.getElementById('history-list');
  historyContainer.prepend(historyItem);


 // clear donation input
 document.getElementById('feni-donation-input').value= '';  
  
})


// add event listener for card-3 donate now button

document.getElementById('quota-donate-now-btn').addEventListener('click', function(){
  const donateAmount = getInputFieldValueById('quota-donation-input');
  const currentDonateAmount = getTextFieldValueById('quota-current-donation-amount');

  if(isNaN(donateAmount) || donateAmount <= 0){
    alert('Invalid Donation amount.');
    document.getElementById('my_modal_3').close();
    return;
  }

  if(donateAmount > accountBalance){
    alert('Invalid Donation amount.');
    document.getElementById('my_modal_3').close();
    return;
  }
  
    accountBalance -= donateAmount;
    document.getElementById('account-balance').innerText =   accountBalance.toFixed(2);
  
    const totalCurrentDonateAmount = currentDonateAmount + donateAmount;
    document.getElementById('quota-current-donation-amount').innerText = totalCurrentDonateAmount.toFixed(2);

    // history
    const historyItem = document.createElement('div');

    historyItem.className = "bg-white border border-solid border-[rgba(17, 17, 17, 0.1)] rounded-2xl mx-5 lg:mx-0 mb-6 p-5 lg:p-8";

    historyItem.innerHTML = `
    <h4 class="text-primary font-bold text-xl mb-4">
    ${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
    <p class="text-base text-secondary font-light">Date: ${new Date().toLocaleString('en-US',{
     weekday: 'short',
     month: 'short',
     day: '2-digit', 
     year: 'numeric', 
     hour: '2-digit',  
     minute: '2-digit', 
     second: '2-digit', 
     timeZoneName: 'short',
    })} (Bangladesh Standard Time)</p>`;
  const historyContainer = document.getElementById('history-list');
  historyContainer.prepend(historyItem);

// clear input field
  document.getElementById('quota-donation-input').value= '';

})

 
// click history tab

historyTab.addEventListener('click', function(){
  donationTab.classList.add(
    "bg-white",
    "font-medium",
    "border",
    "border-borderColor");
    donationTab.classList.remove("bg-buttonColor", "font-semibold", "border-buttonColor");
    historyTab.classList.add("bg-buttonColor", "font-semibold", "border-buttonColor");  
    historyTab.classList.remove(
    "bg-white",
    "font-medium",
    "border",
    "border-borderColor");  

  document.getElementById('history-section').classList.remove('hidden');
  document.getElementById('first-card').classList.add('hidden');
  document.getElementById('second-card').classList.add('hidden');
  document.getElementById('third-card').classList.add('hidden');
}) 

// click donation tab
donationTab.addEventListener('click', function(){
    historyTab.classList.add(
    "bg-white",
    "font-medium",
    "border",
    "border-borderColor");
  historyTab.classList.remove("bg-buttonColor", "font-semibold", "border-buttonColor");

  donationTab.classList.add("bg-buttonColor", "font-semibold", "border-buttonColor"); 
  donationTab.classList.remove(
    "bg-white",
    "font-medium",
    "border",
    "border-borderColor");

    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('first-card').classList.remove('hidden');
    document.getElementById('second-card').classList.remove('hidden');
    document.getElementById('third-card').classList.remove('hidden');    
})





