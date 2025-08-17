// Authentication functionality
function switchTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content")
  tabContents.forEach((content) => {
    content.classList.remove("active")
  })

  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab) => {
    tab.classList.remove("active")
  })

  // Show selected tab content
  document.getElementById(tabName).classList.add("active")

  // Add active class to clicked tab
  event.target.classList.add("active")
}

// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = document.getElementById("loginEmail").value
  const password = document.getElementById("loginPassword").value

  // Simple validation
  if (email && password) {
    // Store user session (in real app, this would be handled by backend)
    localStorage.setItem("userLoggedIn", "true")
    localStorage.setItem("userEmail", email)

    showNotification("Login successful! Redirecting...", "success")

    setTimeout(() => {
      window.location.href = "student-dashboard.html"
    }, 1500)
  } else {
    showNotification("Please fill in all fields", "error")
  }
})

// Handle registration form submission
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
  e.preventDefault()

  const password = document.getElementById("password").value
  const confirmPassword = document.getElementById("confirmPassword").value

  if (password !== confirmPassword) {
    showNotification("Passwords do not match", "error")
    return
  }

  if (password.length < 6) {
    showNotification("Password must be at least 6 characters", "error")
    return
  }

  // Store user data (in real app, this would be sent to backend)
  const userData = {
    fullName: document.getElementById("fullName").value,
    studentId: document.getElementById("studentId").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    roomNumber: document.getElementById("roomNumber").value,
  }

  localStorage.setItem("userData", JSON.stringify(userData))
  localStorage.setItem("userLoggedIn", "true")

  showNotification("Registration successful! Redirecting...", "success")

  setTimeout(() => {
    window.location.href = "student-dashboard.html"
  }, 1500)
})

// Include notification function
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `

  if (type === "success") {
    notification.style.background = "#10b981"
  } else if (type === "error") {
    notification.style.background = "#ef4444"
  }

  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}
