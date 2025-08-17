// Main navigation and utility functions
function navigateToPanel(panel) {
  if (panel === "student") {
    window.location.href = "student-auth.html"
  } else if (panel === "admin") {
    window.location.href = "admin-auth.html"
  }
}

// Utility function for showing notifications
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
  } else if (type === "warning") {
    notification.style.background = "#f59e0b"
  }

  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

// Add CSS animation
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`
document.head.appendChild(style)
