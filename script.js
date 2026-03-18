const doctors = [
    {
        name: "Dott. Giuseppe Boato",
        specialty: "Medicina Generale",
        photo: "images/med/utente.jpg",
        phone: "041436008 / 3386568500",
        email: "",
        bio: "",
        hours: {
            "Lunedi": "13:00 - 15:00",
            "Martedi": "13:00 - 15:00",
            "Mercoledi": "08:00 - 10:30",
            "Giovedi": "13:00 - 15:00",
            "Venerdi": "08:00 - 10:30"
        },
        secondaryLocation: {
            label: "Sede periferica",
            address: "Via Caltana 107, Scaltenigo",
            phone: "041436008 / 3386568500",
            email: "",
                hours: {
                "Lunedi": "09:30 - 11:30",
                "Martedi": "09:30 - 11:30",
                "Mercoledi": "16:00 - 18:00",
                "Giovedi": "09:30 - 11:30",
                "Venerdi": "16:00 - 18:00"
            }
        }

    },
    {
        name: "Dott. Valter Boato",
        specialty: "Medicina Generale",
        photo: "images/med/utente.jpg",
        phone: "0413133718 / 0415701396",
        email: "",
        bio: "",
        hours: {
            "Lunedi": "09:25 - 12:45",
            "Martedi": "09:25 - 12:45",
            "Mercoledi": "15:20 - 18:45",
            "Giovedi": "15:20 - 18:45",
            "Venerdi": "15:45 - 19:15"
        }
    },
    {
        name: "Dott.ssa Giulia Cecchet",
        specialty: "Medicina Generale",
        photo: "images/med/utente.jpg",
        phone: "3293016735",
        email: "",
        bio: "",
        hours: {
            "Lunedi": "08:00 - 11:00",
            "Martedi": "14:30 - 16:00",
            "Mercoledi": "08:00 - 11:00",
            "Giovedi": "17:00 - 18:30",
            "Venerdi": "08:00 - 10:00"
        },
        secondaryLocation: {
            label: "Sede periferica",
            address: "Via Pomai 5, Campocroce",
            phone: "3293016735",
            email: "",
                hours: {
                "Lunedi": "11:30 - 13:00",
                "Martedi": "17:00 - 18:30",
                "Mercoledi": "11:30 - 13:00",
                "Giovedi": "14:30 - 16:00",
                "Venerdi": "11:00 - 12:00"
            }
        }
    },
    {
        name: "Dott.ssa Sabrina Santoro",
        specialty: "Medicina Generale",
        photo: "images/med/utente.jpg",
        phone: "0418878127",
        email: "",
        bio: "",
        hours: {
            "Lunedi": "13:00 - 15:00",
            "Martedi": "08:30 - 12:30",
            "Mercoledi": "08:30 - 12:30",
            "Giovedi": "15:00 - 17:00",
            "Venerdi": "08:30 - 12:30"
        }
    },
    {
        name: "Dott. Carmelo Scalici",
        specialty: "Medicina Generale",
        photo: "images/med/utente.jpg",
        phone: "0415701523 / 3486045307",
        email: "",
        bio: "",
        hours: {
            "Lunedi": "16:00 - 20:00",
            "Martedi": "",
            "Mercoledi": "",
            "Giovedi": "",
            "Venerdi": "16:00 - 20:00"
        },
        secondaryLocation: {
            label: "Sede periferica",
            address: "Via Villafranca 18b, Mirano",
            phone: "0415701523 / 3486045307",
            email: "",
                hours: {
                "Lunedi": "08:00 - 10:00",
                "Martedi": "08:00 - 10:00 / 16:00 - 20:00",
                "Mercoledi": "08:00 - 10:00 / 16:00 - 20:00",
                "Giovedi": "08:00 - 10:00 / 16:00 - 20:00",
                "Venerdi": "08:00 - 10:00"
            }
        }
    },
    {
        name: "Dott. Stefano Sopracordevole",
        specialty: "Medicina Generale",
        photo: "images/med/utente.jpg",
        phone: "3922213788",
        email: "",
        bio: "",
        hours: {
            "Lunedi": "15:00 - 19:00",
            "Martedi": "15:00 - 19:00",
            "Mercoledi": "09:00 - 13:00",
            "Giovedi": "09:00 - 13:00",
            "Venerdi": "09:00 - 13:00"
        }
    },
    {
        name: "Dott. Antonio Vesco",
        specialty: "Medicina Generale",
        photo: "images/med/utente.jpg",
        phone: "041436854 / 0415700256 / 0413134591",
        email: "",
        bio: "",
        hours: {
            "Lunedi": "17:00 - 19:00",
            "Martedi": "10:30 - 13:00",
            "Mercoledi": "17:00 - 19:00",
            "Giovedi": "17:00 - 19:00",
            "Venerdi": "10:30 - 13:00"
        },
        secondaryLocation: {
            label: "Sede periferica",
            address: "Via Ballò 1/L, Scaltenigo",
            phone: "041436854 / 0415700256 / 0413134591",
            email: "",
                hours: {
                "Lunedi": "08:00 - 10:00",
                "Martedi": "17:00 - 19:00",
                "Mercoledi": "08:00 - 10:00",
                "Giovedi": "08:00 - 10:00",
                "Venerdi": "17:00 - 19:00"
            }
        }
    },
    {
        name: "Dott. Giuseppe Vicariotto",
        specialty: "Medicina Generale",
        photo: "images/med/utente.jpg",
        phone: "041432541",
        email: "",
        bio: "",
        hours: {
            "Lunedi": "15:30 - 19:30",
            "Martedi": "09:30 - 13:30",
            "Mercoledi": "15:30 - 19:30",
            "Giovedi": "09:30 - 13:30",
            "Venerdi": "15:30 - 19:30"
        }
    }
];

function renderDoctors() {
    const container = document.getElementById("doctors-container");
    if (!container) return;

    const cards = doctors
        .map((doctor, index) => `
            <article class="doctor-card">
                <img src="${doctor.photo}" alt="${doctor.name}" loading="lazy">
                <div class="doctor-info">
                    <p class="doctor-specialty">${doctor.specialty}</p>
                    <h3 class="doctor-name">${doctor.name}</h3>
                    <p class="doctor-bio">${doctor.bio}</p>
                    <p class="doctor-meta">Tel: <a href="tel:${doctor.phone.replace(/\s/g, "")}">${doctor.phone}</a></p>
                    <p class="doctor-meta">Email: <a href="mailto:${doctor.email}">${doctor.email}</a></p>
                    <button class="view-hours-btn" type="button" data-doctor-index="${index}">Orari ambulatorio</button>
                </div>
            </article>
        `)
        .join("");

    container.innerHTML = cards;
    container.querySelectorAll(".view-hours-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const index = Number(button.getAttribute("data-doctor-index"));
            openModal(index);
        });
    });
}

function closeModal() {
    const modal = document.getElementById("hours-modal");
    if (!modal) return;
    modal.style.display = "none";
}

function openModal(index) {
    const modal = document.getElementById("hours-modal");
    const modalBody = document.getElementById("modal-body");
    if (!modal || !modalBody || Number.isNaN(index)) return;

    const doctor = doctors[index];
    if (!doctor) return;

    const formatPhone = (phone) => phone.replace(/\s/g, "");

    const primaryLocation = doctor.primaryLocation || {
        label: "Sede principale",
        address: "Via Vittoria 76, Mirano",
        phone: doctor.phone,
        email: doctor.email,
        hours: doctor.hours
    };

    const renderLocation = (location) => {
        if (!location) return "";

        const rows = location.hours
            ? Object.entries(location.hours)
                  .map(([day, time]) => `<tr><td><strong>${day}</strong></td><td>${time}</td></tr>`)
                  .join("")
            : "";

        const hoursMarkup = rows
            ? `<table class="hours-table modal-hours-table">${rows}</table>`
            : `<p class="helper-text">Orari su richiesta.</p>`;

        const phoneMarkup = location.phone
            ? `<p class="doctor-meta">Tel: <a href="tel:${formatPhone(location.phone)}">${location.phone}</a></p>`
            : "";

        const emailMarkup = location.email
            ? `<p class="doctor-meta">Email: <a href="mailto:${location.email}">${location.email}</a></p>`
            : "";

        return `
            <article class="location-card">
                <h3>${location.label}</h3>
                <p class="location-address">${location.address}</p>
                ${phoneMarkup}
                ${emailMarkup}
                ${hoursMarkup}
            </article>
        `;
    };

    modalBody.innerHTML = `
        <div class="modal-header">
            <p class="doctor-specialty">${doctor.specialty}</p>
            <h2 id="modal-title">${doctor.name}</h2>
            <p class="helper-text">Sedi disponibili e orari di ricevimento.</p>
        </div>
        <div class="location-grid">
            ${renderLocation(primaryLocation)}
            ${renderLocation(doctor.secondaryLocation)}
        </div>
    `;

    modal.style.display = "flex";
}

async function includeHTML() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (headerPlaceholder) {
        const response = await fetch("header.html");
        headerPlaceholder.innerHTML = await response.text();
        initMobileMenu();
        highlightActiveLink();
    }

    if (footerPlaceholder) {
        const response = await fetch("footer.html");
        footerPlaceholder.innerHTML = await response.text();
    }
}

function initMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");

    if (!hamburger || !navLinks) return;

    const closeMenu = () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    };

    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = navLinks.classList.toggle("active");
        hamburger.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach((link) => link.classList.remove("active"));

    const pageMap = {
        "index.html": "nav-index",
        "medici.html": "nav-medici",
        "ambulatorio.html": "nav-ambulatorio",
        "contatti.html": "nav-contatti"
    };

    const activeId = pageMap[page];
    if (!activeId) return;

    const activeLink = document.getElementById(activeId);
    if (activeLink) activeLink.classList.add("active");
}

function initModalEvents() {
    const modal = document.getElementById("hours-modal");
    const closeBtn = document.querySelector(".close-modal");

    if (!modal) return;

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeModal();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    includeHTML();
    renderDoctors();
    initModalEvents();
});
