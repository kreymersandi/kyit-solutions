document.addEventListener('DOMContentLoaded',()=>{
  const cookie = document.getElementById('cookie');
  const accept = document.getElementById('cookie-accept');
  if(localStorage.getItem('kyit_cookie_ok')!=='1'){
    cookie.classList.add('show');
  }
  accept?.addEventListener('click',()=>{
    localStorage.setItem('kyit_cookie_ok','1');
    cookie.classList.remove('show');
  });
});