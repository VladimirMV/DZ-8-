const filterBox = document.querySelectorAll('.work__item');
console.log(filterBox);

document.querySelector('.filter').addEventListener('click', event => {
   if (event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['f'];
    console.log(filterClass);

    filterBox.forEach ( elem => {
        
        elem.classList.remove('visually-hidden')  
      if (!elem.classList.contains(filterClass) && filterClass !== 'all'){
        console.log(elem.classList);
        elem.classList.add('visually-hidden');
          }
       
    });
    
});

