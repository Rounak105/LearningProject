// Product registration functionality
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

// Handle product form submission
document.getElementById("productForm")?.addEventListener("submit", function (e) {
  e.preventDefault()

  const productData = {
    type: document.getElementById("productType").value,
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    serialNumber: document.getElementById("serialNumber").value,
    purchaseDate: document.getElementById("purchaseDate").value,
    purchasePrice: document.getElementById("purchasePrice").value,
    warrantyExpiry: document.getElementById("warrantyExpiry").value,
    condition: document.getElementById("condition").value,
    description: document.getElementById("description").value,
    registrationDate: new Date().toISOString(),
    status: "active",
  }

  // Store product (in real app, this would be sent to backend)
  const products = JSON.parse(localStorage.getItem("products") || "[]")
  products.push(productData)
  localStorage.setItem("products", JSON.stringify(products))

  showNotification("Product registered successfully!", "success")

  // Reset form
  this.reset()

  // Switch to products tab
  setTimeout(() => {
    switchTab("my-products")
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
