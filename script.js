/* Tooltip js */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        delay: { show: 500, remove:50 } 
    });
}); 
/* End of Tooltip js*/

/* Button animation */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-raised");

    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.className = "btn-ripple";
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = e.clientX - rect.left - size / 2 + "px";
        ripple.style.top = e.clientY - rect.top - size / 2 + "px";
        button.appendChild(ripple);
        ripple.addEventListener("animationend", () => {
            ripple.remove();
            });
        });
    });
});
/* End of Button animation */

/* Testimonal Cards*/

const clients = [
    {
        name: 'Jane Smith',
        position: 'CTO, Tech Innovations Ltd',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNlbyUyMHBvdHJhaXRzfGVufDB8fDB8fHww',
        text: 'Working with TechNova Solutions was a game-changer for us. Their innovative solutions and attention to detail transformed our digital landscape. From start to finish, the team displayed exceptional professionalism and expertise.'
    },

    {
        name: 'John Dener',
        position: 'Founder of Digital Dynamics Co',
        photo: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2VvJTIwcG90cmFpdHN8ZW58MHx8MHx8fDA%3D',
        text: 'Choosing TechNova Solutions for our tech solutions was one of the best decisions we made. Their expertise in cutting-edge technologies and commitment to delivering results set them apart. The team demonstrated a deep understanding of our needs, providing tailored solutions that have positively impacted our growth.'
    },

    {
        name: 'Emily White',
        position: 'CEO of E-Commerce Emporium',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNlbyUyMHBvdHJhaXRzfGVufDB8fDB8fHww',
        text: 'As the CEO of a thriving e-commerce business, I can confidently say that TechNova Solutins played a pivotal role in our success. Their e-commerce solutions were tailored to our unique needs, resulting in improved user experience and increased conversions. The expertise and professionalism of the team made the entire process smooth and rewarding.'
    },

];

// create a variable for each DOM element we want to target
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = testimonialsContainer.querySelector('.testimonial');
const logo = testimonialsContainer.querySelector('.logo');
const username = testimonialsContainer.querySelector('.username');
const role = testimonialsContainer.querySelector('.role');

// counter index
let index = 1;

function updateTestimonial() {
    let { name, position, photo, text } = clients[index];

    // Update the DOM elements
    testimonial.innerHTML = text;
    username.innerHTML = name;
    role.innerHTML = position;
    logo.src = photo;

    // Increment the counter
    index++;

    // Reset the idx when it reaches the end of the array
    if (index > clients.length - 1) {
        index = 0;
    }
}

// Call the updateTestimonial functions each 10000ms / 10s
setInterval(updateTestimonial, 10000);

/* End of Testimonal Cards*/
// navbar
window.onscroll= function(){
    scrollFunction();
}
function scrollFunction(){
    var navbar = document.querySelector('#navbar');
    var navLogo= document.querySelector('.navbar-logo')
    if (document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        navbar.classList.add('scrolled')
        navbar.style.height="10%"
        navLogo.style.color="#1c1c1c"
    }
    else{
        navbar.classList.remove('scrolled')
        navbar.style.height="auto"
        navLogo.style.color="#c6c6c6"
    }
}