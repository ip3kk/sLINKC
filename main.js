// Modal & subscribe logic for STARLINK COIN Landing Page
const modalMask = document.getElementById('modal-mask');
const modalStep1 = document.getElementById('modal-step1');
const modalStep2 = document.getElementById('modal-step2');
const codeInput = document.getElementById('codeInput');
const codeError = document.getElementById('codeError');
const codeNextBtn = document.getElementById('codeNextBtn');
const amountInput = document.getElementById('amountInput');
const contactInput = document.getElementById('contactInput');
const amountError = document.getElementById('amountError');
const amountSubmitBtn = document.getElementById('amountSubmitBtn');

// Open modal triggers
function openStep1() {
  modalMask.style.display = 'block';
  modalStep1.style.display = 'block';
  codeInput.value = '';
  codeError.textContent = '';
  codeInput.focus();
}
function closeStep1() {
  modalStep1.style.display = 'none';
  modalMask.style.display = 'none';
}
function openStep2() {
  modalStep1.style.display = 'none';
  modalStep2.style.display = 'block';
  amountInput.value = '';
  contactInput.value = '';
  amountError.textContent = '';
  amountInput.focus();
}
function closeStep2() {
  modalStep2.style.display = 'none';
  modalMask.style.display = 'none';
}
// Mask click closes modal
modalMask.onclick = function() {
  closeStep1();
  closeStep2();
};
document.getElementById('closeStep1').onclick = closeStep1;
document.getElementById('closeStep2').onclick = closeStep2;
// Open modal from all triggers
['subscribe-btn','heroSubscribeBtn','mobileSubscribeBtn'].forEach(id => {
  const btn = document.getElementById(id);
  if(btn) btn.onclick = openStep1;
});
// Mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const closeMobileNav = document.getElementById('closeMobileNav');
const mobileNavBg = document.getElementById('mobileNavBg');

hamburger.onclick = () => {
  mobileNav.classList.add('open');
  mobileNavBg.style.display = 'block';
};
closeMobileNav.onclick = () => {
  mobileNav.classList.remove('open');
  mobileNavBg.style.display = 'none';
};
mobileNavBg.onclick = () => {
  mobileNav.classList.remove('open');
  mobileNavBg.style.display = 'none';
};

// Step 1: Code validation
codeNextBtn.onclick = function() {
  const code = codeInput.value.trim();
  if(code === '#808669') {
    codeError.textContent = '';
    openStep2();
  } else {
    codeError.textContent = 'Invalid code. Please try again.';
    codeInput.focus();
  }
};
// Step 2: Amount validation & submit
amountSubmitBtn.onclick = function() {
  const amount = parseInt(amountInput.value, 10);
  if(isNaN(amount) || amount < 1000 || amount > 1000000) {
    amountError.textContent = 'Please enter a valid amount (1000 - 1,000,000 SLNK).';
    amountInput.focus();
    return;
  }
  // Optionally validate contact info (not required)
  // You can add more validation here if needed
  amountError.textContent = '';
  // Save to localStorage/sessionStorage if needed
  // Redirect to detailed subscription form
  window.location.href = 'subscription-form.html';
};
// ESC key closes modal
window.addEventListener('keydown', function(e) {
  if(e.key === 'Escape') {
    closeStep1();
    closeStep2();
    mobileNav.style.display = 'none';
  }
}); 