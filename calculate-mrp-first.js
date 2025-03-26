import { categoriesData } from "./mrp-data.js";

export function calculateMRPFirst(item) {
  if (item.parentItem !== "0") {
    return;
  }

  let weeksNumber =
    parseInt(document.getElementById("weeksNumber").value) || 10;

  const leadTimeMPS = parseInt(document.getElementById("leadTime").value) || 0;

  const className = item.className;
  let inStock = parseInt(document.getElementById(`inStock-${className}`).value);
  let leadTime = parseInt(
    document.getElementById(`leadTime-${className}`).value
  );
  let lotSize = parseInt(document.getElementById(`lotSize-${className}`).value);
  let quantity = parseInt(
    document.getElementById(`quantity-${className}`).value
  );

  console.log(inStock, leadTime, lotSize);

  let productionMPS = Array.from(
    document.querySelectorAll(".productionMPS")
  ).map((el) => parseInt(el.value) || 0);

  let demand = new Array(weeksNumber).fill(0);
  for (let i = 0; i < weeksNumber - leadTimeMPS; i++) {
    demand[i] = productionMPS[i + leadTimeMPS] * quantity;
  }

  console.log(demand);

  demand.forEach((val, index) => {
    document.getElementById(
      `${categoriesData[0].className}-${className}-${index + 1}`
    ).value = val;
  });
}
