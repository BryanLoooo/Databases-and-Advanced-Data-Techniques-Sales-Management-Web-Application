document.addEventListener("DOMContentLoaded", async () => {
    try {
      const cities = await fetchData("/api/city-report");
      const tableBody = document.getElementById("cityTable").querySelector("tbody");
      cities.forEach(city => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${city.City}</td>
          <td>${city.totalSales.toFixed(2)}</td>
          <td>${city.totalProfit.toFixed(2)}</td>
          <td>${city.avgDiscount.toFixed(2)}%</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error loading city report:", error);
    }
  });
  