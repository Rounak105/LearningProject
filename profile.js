// Profile management functionality
function switchTab(tabName) {
  const tabContents = document.querySelectorAll(".tab-content")
  tabContents.forEach((content) => {
    content.classList.remove("active")
  })

  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab) => {
    tab.classList.remove("active")
  })

  document.getElementById(tabName).classList.add("active")
  event.target.classList.add("active")
}

// Handle personal info form submission
document.getElementById("personalInfoForm")?.addEventListener("submit", (e) => {
  e.preventDefault()
  showNotification("Personal information updated successfully!", "success")
})

// Handle contact form submission
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault()
  showNotification("Contact details updated successfully!", "success")
})

// Handle security form submission
document.getElementById("securityForm")?.addEventListener("submit", function (e) {
  e.preventDefault()

  const currentPassword = document.getElementById("currentPassword").value
  const newPassword = document.getElementById("newPassword").value
  const confirmNewPassword = document.getElementById("confirmNewPassword").value

  if (!currentPassword || !newPassword || !confirmNewPassword) {
    showNotification("Please fill in all password fields", "error")
    return
  }

  if (newPassword !== confirmNewPassword) {
    showNotification("New passwords do not match", "error")
    return
  }

  if (newPassword.length < 6) {
    showNotification("Password must be at least 6 characters", "error")
    return
  }

  showNotification("Password changed successfully!", "success")
  this.reset()
})

function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        background: ${type === "success" ? "#10b981" : "#ef4444"};
    `

  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}
