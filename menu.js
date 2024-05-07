// let sections = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('header ul li a')

// window.onscroll=()=>{
//     sections.forEach(sec => {
//         let top =window.scrollY
//         let offset=sec.offsetTop-150
//         let height =sec.offsetHeight
//         let id  = sec.getAttribute('id')
        
//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links=>{
//                 links.classList.remove('active')
//                 document.querySelector('header ul li a [href*='+ id + ']').classList.add('active')
//             })
//         }
//     })
// }



// document.addEventListener('DOMContentLoaded', () => {
//     const menuItems = document.querySelectorAll('#menu a');
  
//     menuItems.forEach(item => {
//       item.addEventListener('click', () => {
//         menuItems.forEach(item => {
//           item.classList.remove('active');
//         });
//         item.classList.add('active');
//       });
//     });
//   });
  


  document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('#menu a');
    const sections = document.querySelectorAll('section');
  
    window.addEventListener('scroll', () => {
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });
  
      menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
          item.classList.add('active');
        }
      });
    });
  });
  