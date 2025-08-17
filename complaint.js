// Complaints functionality
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

// Handle complaint form submission
document.getElementById("complaintForm")?.addEventListener("submit", function (e) {
  e.preventDefault()

  const complaintData = {
    category: document.getElementById("category").value,
    priority: document.getElementById("priority").value,
    subject: document.getElementById("subject").value,
    description: document.getElementById("description").value,
    location: document.getElementById("location").value,
    timestamp: new Date().toISOString(),
  }

  // Store complaint (in real app, this would be sent to backend)
  const complaints = JSON.parse(localStorage.getItem("complaints") || "[]")
  complaints.push(complaintData)
  localStorage.setItem("complaints", JSON.stringify(complaints))

  showNotification("Complaint submitted successfully!", "success")

  // Reset form
  this.reset()

  // Switch to complaints tab to show the new complaint
  setTimeout(() => {
    switchTab("my-complaints")
  }, 1000)
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
