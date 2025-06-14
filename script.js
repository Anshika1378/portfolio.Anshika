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