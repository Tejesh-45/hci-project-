
const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 


    confirmationMessage.style.display = 'block';

    
    form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const extraContentContainer = document.getElementById('extra-content');

    loadMoreBtn.addEventListener("click", (event) => {
        event.preventDefault(); 

        
        loadMoreContent();
    });
});

function loadMoreContent() {
  
    const newContent = document.createElement('div');
    newContent.classList.add('new-content');
    newContent.innerHTML = `
        <h3>Additional Information</h3>
        <p>Our Philosophy
We believe in the art of coffee. Our philosophy is rooted in three core principles:

Quality: We partner with small-scale farmers and cooperatives that produce coffee of the highest quality. Each bean is carefully selected, ensuring only the best make it to your cup.

Sustainability: We are committed to sustainable sourcing. By supporting fair trade practices and eco-friendly farming methods, we help ensure that our farmers are compensated fairly while preserving the environment.

Freshness: Coffee is best enjoyed fresh. That’s why we roast our beans in small batches and ship them directly to you. Every order is roasted to order, ensuring that you receive the freshest coffee possible.

Our Products
Our extensive range includes:

Single-Origin Coffees: Experience the unique flavors of different regions with our single-origin offerings. Each region has its own story, and we bring that story to your cup.

Blends: Our signature blends combine beans from various origins, crafted to achieve a harmonious flavor profile that delights the senses.

Specialty Coffees: Explore our limited-edition specialty coffees that highlight rare beans and unique processing methods.

Accessories: We also offer a selection of brewing equipment and accessories to help you make the perfect cup at home.

Our Commitment
At [Your Brand Name], we’re not just selling coffee; we’re building a community. We value the relationships we forge with our customers and our farmers. Your feedback is essential to us, and we strive to create a customer-centric experience where every coffee lover feels at home.

Join Us on Our Journey
We invite you to join us on this coffee journey. Explore our website to discover our latest offerings, learn more about our sourcing practices, and dive into the world of coffee with us. Sign up for our newsletter for exclusive updates, promotions, and brewing tips.

Thank you for choosing [Your Brand Name]. Together, let’s celebrate the rich and diverse world of coffee, one sip at a time!</p>
    `;
    document.getElementById('extra-content').appendChild(newContent);

    
    document.getElementById('load-more-btn').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const blogPost = button.closest(".blog-post");
            const previewText = blogPost.querySelector(".blog-preview");
            const fullText = blogPost.querySelector(".blog-full-text");

            if (button.textContent === "Read More") {
                previewText.style.display = "none";
                fullText.style.display = "block";
                button.textContent = "Show Less";
            } else {
                previewText.style.display = "block";
                fullText.style.display = "none";
                button.textContent = "Read More";
            }
        });
    });
});
