// document.querySelector('.linkedin').forEach(linkedin => {
//     linkedin.addEventListener('mousenter',() =>{
//         linkedin.classList.add('hover');
//     });
//     linkedin.addEventListener('mouseleave', () =>{
//         linkedin.classList.remove('hover')
//     });
// });
const scrool = document.getElementById('scroll-to-top');

document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault();

    alert("Form Submitted Thank you.")
});

window.onscroll = function(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        scrool.style.display = "block";
    }else{
        scrool.style.display = "none";
    }
};
scrool.onclick = function(){
    window.scrollTo({top: 0,behavior: "smooth"});
};

// smoot anout
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

//   skills
// const skills = document.querySelectorAll(".icons");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = 1;
//         entry.target.style.transform = "translateY(0)";
//       }
//     });
//   }, {
//     threshold: 0.2
//   });

//   skills.forEach(skill => {
//     skill.style.opacity = 0;
//     skill.style.transform = "translateY(30px)";
//     observer.observe(skill);
//   });