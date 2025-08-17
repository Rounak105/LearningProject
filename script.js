// ===== Global State =====
let currentUser = null;
let studentData = {
    name: 'John Doe',
    studentId: 'STU001',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    room: 'A-101'
};

// ===== Navigation Helpers =====
function hideAll() {
    const pages = [
        'mainContainer',
        'studentAuth',
        'adminAuth',
        'studentDashboard',
        'complaintPage',
        'personalDetailsPage',
        'assistancePage',
        'productsPage'
    ];
    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

function showMain() {
    hideAll();
    document.getElementById('mainContainer').style.display = 'flex';
}

function showStudentAuth() {
    hideAll();
    document.getElementById('studentAuth').style.display = 'flex';
}

function showAdminAuth() {
    hideAll();
    document.getElementById('adminAuth').style.display = 'flex';
}

function showStudentDashboard() {
    hideAll();
    document.getElementById('studentDashboard').style.display = 'block';
    updatePersonalDisplayData();
}

// ===== Auth Page Toggle =====
function showStudentLogin() {
    document.getElementById('studentLoginForm').style.display = 'block';
    document.getElementById('studentRegisterForm').style.display = 'none';
    document.getElementById('studentAuthTitle').textContent = 'Student Login';
}

function showStudentRegister() {
    document.getElementById('studentLoginForm').style.display = 'none';
    document.getElementById('studentRegisterForm').style.display = 'block';
    document.getElementById('studentAuthTitle').textContent = 'Student Registration';
}

// ===== Authentication =====
function studentLogin(e) {
    e.preventDefault();
    const email = document.getElementById('studentEmail').value;
    const password = document.getElementById('studentPassword').value;

    if (email && password) {
        currentUser = { type: 'student', email };
        showStudentDashboard();
        showNotification('Login successful!', 'success');
    } else {
        showNotification('Please enter valid credentials', 'error');
    }
}

function studentRegister(e) {
    e.preventDefault();
    studentData = {
        name: document.getElementById('regStudentName').value,
        studentId: document.getElementById('regStudentId').value,
        email: document.getElementById('regStudentEmail').value,
        phone: document.getElementById('regStudentPhone').value,
        room: document.getElementById('regStudentRoom').value
    };
    currentUser = { type: 'student', email: studentData.email };
    showStudentDashboard();
    showNotification('Registration successful!', 'success');
}

function adminLogin(e) {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;

    if (email && password) {
        currentUser = { type: 'admin', email };
        showNotification('Admin login successful!', 'success');
        setTimeout(() => {
            alert('Admin dashboard not implemented yet.');
            showMain();
        }, 1500);
    } else {
        showNotification('Please enter valid admin credentials', 'error');
    }
}

function logout() {
    currentUser = null;
    showMain();
    showNotification('You have been logged out.', 'success');
}

// ===== Feature Navigation =====
function showComplaintPage() {
    hideAll();
    document.getElementById('complaintPage').style.display = 'block';
}

function showPersonalDetails() {
    hideAll();
    document.getElementById('personalDetailsPage').style.display = 'block';
    updatePersonalDisplayData();
}

function showRequestAssistance() {
    hideAll();
    document.getElementById('assistancePage').style.display = 'block';
}

function showRegisteredProducts() {
    hideAll();
    document.getElementById('productsPage').style.display = 'block';
}

// ===== Complaint Submission =====
function submitComplaint(e) {
    e.preventDefault();
    const complaintData = {
        type: document.getElementById('complaintType').value,
        title: document.getElementById('complaintTitle').value,
        description: document.getElementById('complaintDescription').value,
        priority: document.getElementById('complaintPriority').value,
        timestamp: new Date().toISOString(),
        status: 'submitted'
    };
    console.log('Complaint submitted:', complaintData);
    showNotification('Complaint submitted successfully!', 'success');
    e.target.reset();
    setTimeout(showStudentDashboard, 1500);
}

// ===== Personal Details =====
function updatePersonalDetails(e) {
    e.preventDefault();
    const newPhone = document.getElementById('updatePhone').value;
    const newEmail = document.getElementById('updateEmail').value;

    if (newPhone) studentData.phone = newPhone;
    if (newEmail) studentData.email = newEmail;

    updatePersonalDisplayData();
    showNotification('Details updated successfully!', 'success');
    e.target.reset();
}

function updatePersonalDisplayData() {
    document.getElementById('displayName').textContent = studentData.name;
    document.getElementById('displayStudentId').textContent = studentData.studentId;
    document.getElementById('displayEmail').textContent = studentData.email;
    document.getElementById('displayPhone').textContent = studentData.phone;
    document.getElementById('displayRoom').textContent = studentData.room;
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    updatePersonalDisplayData();
});
