
 
  
    // Create an intersection observer instance
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // observer.unobserve(entry.target);  // Stop observing once the element is visible
        }
        else{
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is in the viewport
    });
  
    // Target elements to observe
    const elements = document.querySelectorAll('.scroll-element');
    elements.forEach(element => observer.observe(element));
  

 
 
