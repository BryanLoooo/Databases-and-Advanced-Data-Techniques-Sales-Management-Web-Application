document.addEventListener("DOMContentLoaded", async () => {
    try {
      const categories = await fetchData("/api/category-report");
      const tableBody = document.getElementById("categoryTable").querySelector("tbody");
      categories.forEach(category => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${category.Category}</td>
          <td>${category.totalSales.toFixed(2)}</td>
          <td>${category.totalProfit.toFixed(2)}</td>
          <td>${category.avgDiscount.toFixed(2)}%</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error loading category report:", error);
    }
  });
  