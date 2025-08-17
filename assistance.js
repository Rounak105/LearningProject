// Assistance request functionality
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

// Handle assistance form submission
document.getElementById("assistanceForm")?.addEventListener("submit", function (e) {
  e.preventDefault()

  const assistanceData = {
    type: document.getElementById("assistanceType").value,
    urgency: document.getElementById("urgency").value,
    title: document.getElementById("title").value,
    details: document.getElementById("details").value,
    preferredTime: document.getElementById("preferredTime").value,
    contactMethod: document.getElementById("contactMethod").value,
    timestamp: new Date().toISOString(),
  }

  // Store assistance request (in real app, this would be sent to backend)
  const requests = JSON.parse(localStorage.getItem("assistanceRequests") || "[]")
  requests.push(assistanceData)
  localStorage.setItem("assistanceRequests", JSON.stringify(requests))

  showNotification("Assistance request submitted successfully!", "success")

  // Reset form
  this.reset()

  // Switch to requests tab
  setTimeout(() => {
    switchTab("my-requests")
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
