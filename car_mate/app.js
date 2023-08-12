
const regNo = document.querySelector('#reg_no');
const taxExpired = document.querySelector('#tax_date');
const nctExpired = document.querySelector('#nct_expire');
const insuranceExpired = document.querySelector('#insure_expire');
const policyNo = document.querySelector('#policy_no');

const updateButton=document.querySelector('#update');



window.onload = function(){
  
  regNo.value=localStorage.getItem("reg");
  taxExpired.value=localStorage.getItem("tax");
  nctExpired.value=localStorage.getItem("nct");
  insuranceExpired.value=localStorage.getItem("insurance");
  policyNo.value=localStorage.getItem("policy");

 console.log(localStorage.getItem("reg"));
};



function updateDetails() {
  localStorage.setItem("reg",regNo.value);
  localStorage.setItem("tax", taxExpired.value);
  localStorage.setItem("nct", nctExpired.value);
  localStorage.setItem("insurance", insuranceExpired.value);
  localStorage.setItem("policy",policyNo.value );
  
}


updateButton.addEventListener('click', () => updateDetails());

