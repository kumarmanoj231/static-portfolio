// function for smooth visual transition

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
});


let elements = document.querySelectorAll(".hidden");

elements.forEach((el)=> observer.observe(el));



// for iniial typing effect

let content_bottom = document.querySelector(".content-bottom");
let cursor = document.querySelector(".content-text");
let leftInfo = document.querySelector(".left-info");

let education = document.querySelector('#education');
let skills = document.querySelector('#skills-section');
let projectsHeader = document.querySelector('#project-header');
let projects = document.querySelector('#projects-section');
let feedback = document.querySelector('#feedback-section');

let showContent = ()=>{
    cursor.setAttribute("style","border-right:none;");
    cursor.setAttribute("style","visibility: hidden;");
    setTimeout(showContentWithDelay,900); 
}

let showContentWithDelay =()=>{
    content_bottom.classList.remove("content-bottom-hide");
    education.classList.remove("hide-me");
    skills.classList.remove("hide-me");
    projectsHeader.classList.remove("hide-me");
    projects.classList.remove("hide-me");
    feedback.classList.remove("hide-me");
    
    
}

