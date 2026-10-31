
let year = document.getElementById("year");
year.textContent = new Date().getFullYear();

let announcementContainer = document.getElementById("announcementContainer");

fetch("./announcement.json")
    .then((response) => response.json())

    .then(function(data) {

        announcementContainer.innerHTML = "";

        data.announcements.forEach(function(item) {

            let card = document.createElement("div");

            card.className = "announcement-item";

            card.innerHTML = `
                <div class="announcement-card">
                    <span class="announcement-label">
                        College Updates
                    </span>

                    <h5>${item.title}</h5>

                    <p>${item.description}</p>
                </div>
            `;

            announcementContainer.appendChild(card);

        });

    })

    .catch(function(error) {

        announcementContainer.innerHTML =
            "<p class='text-center'>Unable to load announcements.</p>";

        console.log(error);

    });
//  Contact Form Validation

let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === " " || email === " " || message === " ") {
        formMessage.textContent = "Please fill all the fields.";
        formMessage.style.color = "red";
    }

    else {
        formMessage.textContent =
            "Thank you! Your message has been received.";
        formMessage.style.color = "green";
        contactForm.reset();
    }

});
