const doctors = [
    {
        name: "Dott. Marco Rossi",
        specialty: "Medicina Generale",
        photo: "images/med/medM.png",
        phone: "041 123 4567",
        email: "rossi@miranodocs.it",
        bio: "plain text",
        hours: {
            "Lunedi": "09:00 - 13:00",
            "Martedi": "15:00 - 19:00",
            "Mercoledi": "09:00 - 13:00",
            "Giovedi": "15:00 - 19:00",
            "Venerdi": "09:00 - 13:00"
        }
    },
    {
        name: "Dott.ssa Giulia Bianchi",
        specialty: "Medicina Generale",
        photo: "images/med/medF.png",
        phone: "041 123 4568",
        email: "bianchi@miranodocs.it",
        bio: "plain text",
        hours: {
            "Lunedi": "15:00 - 19:00",
            "Martedi": "09:00 - 13:00",
            "Mercoledi": "15:00 - 19:00",
            "Giovedi": "09:00 - 13:00",
            "Venerdi": "15:00 - 19:00"
        }
    },
    {
        name: "Dott. Andrea Neri",
        specialty: "Medicina Generale",
        photo: "images/med/medM.png",
        phone: "041 123 4569",
        email: "neri@miranodocs.it",
        bio: "plain text",
        hours: {
            "Lunedi": "08:30 - 12:30",
            "Martedi": "14:30 - 18:30",
            "Mercoledi": "08:30 - 12:30",
            "Giovedi": "14:30 - 18:30",
            "Venerdi": "08:30 - 12:30"
        }
    },
    {
        name: "Dott.ssa Laura Verdi",
        specialty: "Medicina Generale",
        photo: "images/med/medF.png",
        phone: "041 123 4570",
        email: "verdi@miranodocs.it",
        bio: "plain text",
        hours: {
            "Lunedi": "14:00 - 18:00",
            "Martedi": "08:00 - 12:00",
            "Mercoledi": "14:00 - 18:00",
            "Giovedi": "08:00 - 12:00",
            "Venerdi": "14:00 - 18:00"
        }
    },
    {
        name: "Dott. Alessandro Gallo",
        specialty: "Medicina Generale",
        photo: "images/med/medM.png",
        phone: "041 123 4571",
        email: "gallo@miranodocs.it",
        bio: "plain text",
        hours: {
            "Lunedi": "10:00 - 14:00",
            "Martedi": "16:00 - 20:00",
            "Mercoledi": "10:00 - 14:00",
            "Giovedi": "16:00 - 20:00",
            "Venerdi": "10:00 - 14:00"
        }
    },
    {
        name: "Dott.ssa Elena Moretti",
        specialty: "Medicina Generale",
        photo: "images/med/medF.png",
        phone: "041 123 4572",
        email: "moretti@miranodocs.it",
        bio: "plain text",
        hours: {
            "Lunedi": "09:30 - 13:30",
            "Martedi": "15:30 - 19:30",
            "Mercoledi": "09:30 - 13:30",
            "Giovedi": "15:30 - 19:30",
            "Venerdi": "09:30 - 13:30"
        }
    },
    {
        name: "Dott. Roberto Ferrari",
        specialty: "Medicina Generale",
        photo: "images/med/medM.png",
        phone: "041 123 4573",
        email: "ferrari@miranodocs.it",
        bio: "plain text",
        hours: {
            "Lunedi": "08:00 - 12:00",
            "Martedi": "14:00 - 18:00",
            "Mercoledi": "08:00 - 12:00",
            "Giovedi": "14:00 - 18:00",
            "Venerdi": "08:00 - 12:00"
        }
    },
    {
        name: "Dott.ssa Silvia Romano",
        specialty: "Medicina Generale",
        photo: "images/med/medF.png",
        phone: "041 123 4574",
        email: "romano@miranodocs.it",
        bio: "plain text",
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

    const rows = Object.entries(doctor.hours)
        .map(([day, time]) => `<tr><td><strong>${day}</strong></td><td>${time}</td></tr>`)
        .join("");

    modalBody.innerHTML = `
        <div class="modal-header">
            <p class="doctor-specialty">${doctor.specialty}</p>
            <h2 id="modal-title">${doctor.name}</h2>
            <p class="helper-text">Orari settimanali di apertura ambulatorio</p>
        </div>
        <table class="hours-table modal-hours-table">${rows}</table>
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
