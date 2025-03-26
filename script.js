import { generateMPSTable } from "./generate-mps-table.js";
import { generateMRPItems } from "./generate-mrp-items.js";
import { generateMRPTables } from "./generate-mrp-tables.js";
import { calculateMPSTable } from "./calculate-mps.js";
import { calculateMRPTables } from "./calculate-mrp.js";

document.addEventListener("DOMContentLoaded", () => {
  const weeksInput = document.getElementById("weeksNumber");

  generateMRPItems();

  function generateAllTables() {
    [generateMPSTable, generateMRPTables].forEach((fn) => fn());
  }

  generateAllTables();
  weeksInput.addEventListener("input", generateAllTables);

  function calculateAllTables() {
    [calculateMPSTable, calculateMRPTables].forEach((fn) => fn());
    // [calculateMPSTable].forEach((fn) => fn());
  }

  document
    .getElementById("calculate-btn")
    .addEventListener("click", calculateAllTables);
  // document
  //   .getElementById("calculate-btn-Koło")
  //   .addEventListener("click", () => alert("Calculate Item 1 is available"));
  // document
  //   .getElementById("calculate-btn-Szprycha")
  //   .addEventListener("click", () => alert("Calculate Item 2 is available"));
  // document
  //   .getElementById("calculate-btn-Opona")
  //   .addEventListener("click", () => alert("Calculate Item 3 is available"));
});
