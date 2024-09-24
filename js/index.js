let accountBalance = getTextFieldValueById('account-balance');


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
  
  else{
  accountBalance -= donateAmount;
  document.getElementById('account-balance').innerText = accountBalance.toFixed(2);

  const totalCurrentDonateAmount = currentDonateAmount + donateAmount;
  document.getElementById('noakhali-current-donation-amount').innerText = totalCurrentDonateAmount.toFixed(2);


  // history
  const historyItem = document.createElement('div');

  historyItem.className = "bg-white border border-solid border-[rgba(17, 17, 17, 0.1)] rounded-2xl p-5 lg:p-8";

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
    })} (Bangladesh Standard Time)
    </p>
  `;

  const historyContainer = document.getElementById('history-list');
  historyContainer.prepend(historyItem);
  }

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
  else{
    accountBalance -= donateAmount;
    document.getElementById('account-balance').innerText = accountBalance.toFixed(2);
  
    const totalCurrentDonateAmount = currentDonateAmount + donateAmount;
    document.getElementById('feni-current-donation-amount').innerText = totalCurrentDonateAmount.toFixed(2);

    // history
  const historyItem = document.createElement('div');

  historyItem.className = "bg-white border border-solid border-[rgba(17, 17, 17, 0.1)] rounded-2xl p-5 lg:p-8";

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
    })} (Bangladesh Standard Time)
    </p>
  `;

  const historyContainer = document.getElementById('history-list');
  historyContainer.prepend(historyItem);
  }

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
  else{
    accountBalance -= donateAmount;
    document.getElementById('account-balance').innerText =   accountBalance.toFixed(2);
  
    const totalCurrentDonateAmount = currentDonateAmount + donateAmount;
    document.getElementById('quota-current-donation-amount').innerText = totalCurrentDonateAmount.toFixed(2);


    // history
    const historyItem = document.createElement('div');

    historyItem.className = "bg-white border border-solid border-[rgba(17, 17, 17, 0.1)] rounded-2xl p-5 lg:p-8";

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
    })} (Bangladesh Standard Time)</p>
  `;
  const historyContainer = document.getElementById('history-list');
  historyContainer.prepend(historyItem);

  }

  document.getElementById('quota-donation-input').value= '';

})

// 

document.getElementById('history-tab').addEventListener('click', function(){
  console.log('history tab');
  showSectionById('history-section');
  showSectionById('first-card');
  showSectionById('second-card');
  showSectionById('third-card');

})

document.getElementById('donation-tab').addEventListener('click', function(){
  showSectionById('history-section');
  showSectionById('first-card');
  showSectionById('second-card');
  showSectionById('third-card');

})

// // 
// const donationTab = document.getElementById('donation-tab');
// const historyTab = document.getElementById('history-tab');

// historyTab.addEventListener('click', function(){
//   donationTab.classList.add(
//     "bg-white",
//     "border",
//     "border-solid",
//     "border-[rgba(17, 17, 17, 0.3)]");
//   donationTab.classList.remove("bg-buttonColor");
//   historyTab.classList.add("bg-buttonColor");  
//   historyTab.classList.remove(
//     "bg-white",
//     "border",
//     "border-solid",
//     "border-[rgba(17, 17, 17, 0.3)]");  
//   document.getElementById('history-section').classList.remove('hidden');
//   document.getElementById('first-card').classList.add('hidden');
//   document.getElementById('second-card').classList.add('hidden');
//   document.getElementById('third-card').classList.add('hidden');
// })

// donationTab.addEventListener('click', function(){
//   historyTab.classList.add(
//     "bg-white",
//     "border",
//     "border-solid",
//     "border-[rgba(17, 17, 17, 0.3)]");
//   historyTab.classList.remove("bg-buttonColor");
//   donationTab.classList.add("bg-buttonColor"); 
//   donationTab.classList.remove(
//     "bg-white",
//     "border",
//     "border-solid",
//     "border-[rgba(17, 17, 17, 0.3)]");
//     document.getElementById('history-section').classList.add('hidden');
//     document.getElementById('first-card').classList.remove('hidden');
//     document.getElementById('second-card').classList.remove('hidden');
//     document.getElementById('third-card').classList.remove('hidden');    
// })





