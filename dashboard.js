// Dashboard functionality
document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in
  if (!localStorage.getItem("userLoggedIn")) {
    window.location.href = "student-auth.html"
    return
  }

  // Load user data
  const userData = JSON.parse(localStorage.getItem("userData") || "{}")
  if (userData.fullName) {
    const welcomeElement = document.querySelector(".card h2")
    if (welcomeElement) {
      welcomeElement.textContent = `Welcome back, ${userData.fullName}!`
    }
  }

  // Add click handlers for dashboard cards
  const cards = document.querySelectorAll(".card[onclick]")
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const href = this.getAttribute("onclick").match(/'([^']+)'/)[1]
      window.location.href = href
    })
  })
})

// Logout functionality
function logout() {
  localStorage.removeItem("userLoggedIn")
  localStorage.removeItem("userData")
  window.location.href = "index.html"
}
