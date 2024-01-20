console.log("Message")

// Active state for navigation links
const onPage = window.location.pathname;  
const navLinks = document.querySelectorAll('a').  
forEach(link => {
  if(link.href.includes(`${onPage}`)){
    link.classList.add('active');
  }
})