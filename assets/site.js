// Experience baseline approved for 2026: 18 years. Increments every January.
// This reflects industry experience; it does not assert KY IT Solutions was incorporated in 2008.
document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  const experienceYears = 18 + Math.max(0, currentYear - 2026);
  document.querySelectorAll('[data-exp-years]').forEach(el => { el.textContent = String(experienceYears); });
  document.querySelectorAll('[data-copyright-year]').forEach(el => { el.textContent = String(currentYear); });
});
document.addEventListener('DOMContentLoaded',function(){const form=document.getElementById('contact-form');if(!form)return;const status=document.getElementById('form-status');form.addEventListener('submit',async function(e){e.preventDefault();if(!form.reportValidity())return;const preview=location.protocol==='file:'||['localhost','127.0.0.1'].includes(location.hostname);if(preview){status.innerHTML='<p class="success-msg">Preview mode is active, so this test submission was not sent.</p>';return;}const button=form.querySelector('button[type=submit]');button.disabled=true;status.textContent='Sending your enquiry…';try{const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});if(response.ok){status.innerHTML='<p class="success-msg">Thank you. Your enquiry has been submitted. We will respond using the details you provided.</p>';form.reset();}else{status.innerHTML='<p class="error-msg">Your enquiry could not be submitted. Please try again or email admin@kyit.solutions.</p>';}}catch(err){status.innerHTML='<p class="error-msg">Network error. Please retry or email admin@kyit.solutions.</p>';}finally{button.disabled=false;}});});

// Preselect service / referral interest from inbound links.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  const serviceField = document.getElementById('service');
  const messageField = document.getElementById('message');
  if (service === 'referral-programme' && serviceField) {
    const referralLabel = 'Referral programme / I’d like to refer someone';
    const option = Array.from(serviceField.options).find(opt => opt.text.trim() === referralLabel);
    if (option) serviceField.value = option.value || referralLabel;
    if (messageField && !messageField.value) {
      messageField.value = 'I would like to refer someone to KY IT Solutions. Please contact me to discuss the introduction and next steps.';
    }
  }
});
