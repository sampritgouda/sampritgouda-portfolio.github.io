var skills=document.querySelector(".skills");
var education=document.querySelector(".education");
var s_col=document.querySelector(".skills-col");
var e_col=document.querySelector(".education-col");
let flag=0;
let flag1=0;
skills.addEventListener("click",()=>{
    
    if(flag==1){
        s_col.style.display="none";
        skills.style.backgroundColor="transparent";
        flag=0;
    
        }
    else{
    s_col.style.display="flex";
    e_col.style.display="none";
    skills.style.backgroundColor="blue";
    education.style.backgroundColor="transparent";
    flag=1;
    }
    

});
education.addEventListener("click",()=>{
    if(flag1==1){
    e_col.style.display="none";
    education.style.backgroundColor="transparent";
    flag1=0;


    }
    else{
 
    e_col.style.display="flex";
    s_col.style.display="none";
    education.style.backgroundColor="blue";
    skills.style.backgroundColor="transparent";
    flag1=1;
    }


});
function scrolltosection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

const sections=document.querySelectorAll('section');
const navbar_item=document.querySelectorAll('.nav-contents li');
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('vissible');
            navbar_item.forEach((item)=>item.classList.remove('nav-change'));
            const activeitem=document.querySelector(`#${entry.target.id}-link`)
            if(activeitem){
                activeitem.classList.add('nav-change')
            }
        }
        else{
            entry.target.classList.remove('vissible');

        }
       
    });
}, { threshold:0.5});
sections.forEach((section)=>observer.observe(section));


const insta=document.querySelector('.bxl-instagram');
insta.addEventListener('click',function()
{
    const instagramurl='https://www.instagram.com/samprit__gouda_17';
    window.location.href=instagramurl;
});
const face=document.querySelector('.bxl-facebook');
face.addEventListener('click',function()
{
    const facebookurl='https://www.facebook.com/samprit.gouda.5';
    window.location.href=facebookurl;
});
const git=document.querySelector('.bxl-github');
git.addEventListener('click',function()
{
    const githuburl='https://github.com/sampritgouda/';
    window.location.href=githuburl;
});
const linkedin=document.querySelector('.bxl-linkedin-square');
linkedin.addEventListener('click',function()
{
    const linkedinurl='https://www.linkedin.com/in/samprit-gouda17/';
    window.location.href=linkedinurl;
});



// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the default form submission

    const form = document.getElementById('myForm');

    const formData = new FormData(form);

    // Send the form data via fetch (AJAX)
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // If the response is OK, form submitted successfully
            alert('Form submitted successfully!');
            form.reset(); // Optionally reset the form after success
        } else {
            // If the response is not OK, show an error
            alert('There was an error with the submission!');
        }
    })
    .catch(error => {
        // Handle network or fetch errors
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
}