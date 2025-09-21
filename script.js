// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceId: 'service_h1tfd4k', // Replace with your EmailJS service ID
    templateId: 'template_agrayww', // Replace with your EmailJS template ID
    publicKey: 'Z3j0vW_EY_ijvf0j_' // Replace with your EmailJS public key
};

// Sample Data
// const skillsData = [
//     {
//         category: 'frontend',
//         icon: 'fas fa-desktop',
//         skills: [
            
//             { name: 'JavaScript', level: 80 },
//             { name: 'HTML/CSS', level: 95 }
//         ]
//     },
//     {
//         category: 'backend',
//         icon: 'fas fa-server',
//         skills: [
           
//             { name: 'Python', level: 75 },
//             { name: 'PHP', level: 85 }
//         ]
//     },
//     {
//         category: 'database',
//         icon: 'fas fa-database',
//         skills: [
//             { name: 'PostgreSQL', level: 95 },
//             { name: 'MongoDB', level: 75 }
//         ]
//     },
   
//     {
//         category: 'tools',
//         icon: 'fas fa-tools',
//         skills: [
//             { name: 'Github', level: 80 },
//             { name: 'VS Code', level: 95 },
          
//         ]
//     }
// ];
const skillsData = [
    { name: 'JavaScript', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'PHP', level: 85 },
    { name: 'PostgreSQL', level: 95 },
    { name: 'GitHub', level: 80 },
    { name: 'VS Code', level: 95 }
];

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = ""; // clear old skills before rendering
    
    skillsData.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';

        skillElement.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%;"></div>
            </div>
        `;

        container.appendChild(skillElement);
    });
}

renderSkills();
const projectsData = [
    {
        id: 1,
        title: "ParkEase - A Smart Parking Automation System",
        description: "A real-time smart parking platform to allocate, release, and track slots with centralized monitoring. Improves parking efficiency through automation and live tracking.",
        category: "web",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "PostgreSQL"],
        image: "images/6.jpg",
       liveUrl: "https://Shwetagaikwad14.github.io/ParkEase-A-Smart-Parking-Automation-System/",
        githubUrl: "https://github.com/Shwetagaikwad14/ParkEase-A-Smart-Parking-Automation-System",
        featured: true
    },



    
];

const certificationsData = [
    {
       
    id:1 ,
    title: "Master C++ Competive Coding",
    issuer: "#",
    date: "JulY 2025",
    level: "Completion",
    icon: "fab fa-microsoft",
    iconColor: "#0078D4",
    url: ""

}
,
     {
    id: 2,
    title: "The Complete Python Pro Bootcamp",
    issuer: "",
    date: "April 2025",
    level: "Completion",
    icon: "fab fa-python",
    iconColor: "#3776AB", 
    url: ""
}

    
];

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    if (theme === 'light') {
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Dark Mode';
    } else {
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light Mode';
    }
}

// Navigation Management
function showSection(sectionId, linkElement) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    if (linkElement) {
        linkElement.classList.add('active');
    }
    
    // Close mobile sidebar
    closeSidebar();
    
    // Update URL hash
    window.history.replaceState(null, null, `#${sectionId}`);
    
    // Animate skill bars if skills section
    if (sectionId === 'skills') {
        setTimeout(animateSkillBars, 300);
    }
}

// Sidebar Management
function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('mobile-overlay').classList.add('show');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('mobile-overlay').classList.remove('show');
}

// Skills Section
// function renderSkills() {
//     const container = document.getElementById('skills-container');
    
//     skillsData.forEach(category => {
//         const categoryElement = document.createElement('div');
//         categoryElement.className = 'skill-category';
        
//         categoryElement.innerHTML = `
//             <div class="category-header">
//                 <i class="${category.icon} category-icon"></i>
//                 <h3 class="category-title">${category.category}</h3>
//             </div>
//             <div class="skills-list">
//                 ${category.skills.map(skill => `
//                     <div class="skill-item">
//                         <div class="skill-info">
//                             <span class="skill-name">${skill.name}</span>
//                             <span class="skill-level">${skill.level}%</span>
//                         </div>
//                         <div class="skill-bar">
//                             <div class="skill-progress" data-level="${skill.level}"></div>
//                         </div>
//                     </div>
//                 `).join('')}
//             </div>
//         `;
        
//         container.appendChild(categoryElement);
//     });
// }

function animateSkillBars() {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const level = bar.getAttribute('data-level');
        setTimeout(() => {
            bar.style.width = level + '%';
        }, 100);
    });
}

// Projects Section
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.setAttribute('data-category', project.category);
        
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    ` : ''}
                    ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fab fa-github"></i>
                            Code
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        container.appendChild(projectElement);
    });
}

function filterProjects(category, buttonElement) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    buttonElement.classList.add('active');
    
    // Filter projects
    document.querySelectorAll('.project-card').forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Certifications Section
function renderCertifications() {
    const container = document.getElementById('certifications-container');
    
    certificationsData.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'certification-card';
        
        certElement.innerHTML = `
            <div class="certification-header">
                <div class="certification-icon">
                    <i class="${cert.icon}" style="color: ${cert.iconColor}"></i>
                </div>
                <div class="certification-info">
                    <h3>${cert.title}</h3>
                    <p class="certification-issuer">${cert.issuer}</p>
                </div>
            </div>
            <p class="certification-date">Issued: ${cert.date}</p>
            <div class="certification-footer">
                <span class="certification-level">${cert.level}</span>
                ${cert.url ? `
                    <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="certification-link">
                        <i class="fas fa-external-link-alt"></i>
                        View Certificate
                    </a>
                ` : ''}
            </div>
        `;
        
        container.appendChild(certElement);
    });
}

// Contact Form and EmailJS
function initializeEmailJS() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
}

function handleContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearFormErrors();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Validate form
        if (!validateForm(data)) {
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <i class="fas fa-spinner"></i>
            <span>Sending...</span>
        `;
        
        try {
            // Send email via EmailJS
            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message,
                    to_email: 'shwetagaikwad092@gmail.com'
                }
            );
            
            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            
        } catch (error) {
            console.error('Failed to send email:', error);
            showNotification('Failed to send message. Please try again or contact me directly.', 'error');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <i class="fas fa-paper-plane"></i>
                <span>Send Message</span>
            `;
        }
    });
}

function validateForm(data) {
    let isValid = true;
    
    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        showFieldError('name', 'Please enter your full name');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    
    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        showFieldError('message', 'Please enter a message (at least 10 characters)');
        isValid = false;
    }
    
    return isValid;
}

function showFieldError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    const inputElement = document.getElementById(fieldName);
    
    errorElement.textContent = message;
    errorElement.classList.add('show');
    inputElement.style.borderColor = '#ef4444';
}

function clearFormErrors() {
    document.querySelectorAll('.error-message').forEach(error => {
        error.classList.remove('show');
    });
    
    document.querySelectorAll('input, textarea').forEach(input => {
        input.style.borderColor = '';
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        max-width: 300px;
        font-size: 0.875rem;
        line-height: 1.4;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Resume Download
   
   function downloadResume() {
    showNotification('Resume downloaded Successfully!', 'success'); 

    const link = document.createElement('a');
    link.href = 'assests/resume.pdf';  
    link.download = 'Shweta_Gaikwad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}





// URL Hash Navigation
function handleHashNavigation() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const link = document.querySelector(`a[href="#${hash}"]`);
        if (link) {
            showSection(hash, link);
        }
    }
}



// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initializeTheme();
    
    // Render dynamic content
    renderSkills();
    renderProjects();
    renderCertifications();
    
    // Initialize EmailJS
    initializeEmailJS();
    
    // Setup contact form
    handleContactForm();
    
    // Handle URL hash navigation
    handleHashNavigation();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize animations
    initializeAnimations();
    
    // Handle browser back/forward
    window.addEventListener('popstate', handleHashNavigation);
    
    // Handle resize events
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeSidebar();
        }
    });
});

// Global functions for HTML onclick handlers
window.toggleTheme = toggleTheme;
window.showSection = showSection;
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;
window.filterProjects = filterProjects;
window.downloadResume = downloadResume;