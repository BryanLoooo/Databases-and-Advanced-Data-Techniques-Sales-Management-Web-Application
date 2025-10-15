document.addEventListener("DOMContentLoaded", async () => {
    try {
      const stats = await fetchData("/api/dashboard");
      document.getElementById("totalSales").textContent = stats.totalSales.toFixed(2);
      document.getElementById("avgDiscount").textContent = stats.avgDiscount.toFixed(2) + "%";
      document.getElementById("totalProfit").textContent = stats.totalProfit.toFixed(2);
    } catch (error) {
      console.error("Error loading dashboard stats:", error);
    }
  });
  