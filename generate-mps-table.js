// import { categoriesMPS } from "./table-data";

export function generateMPSTable() {
  const tbody = document.getElementById("table-body");
  const thead = document.getElementById("table-head");
  const weeksInput = document.getElementById("weeksNumber");

  const categoriesMPS = {
    demandMPS: "Przewidywany Popyt",
    productionMPS: "Produkcja",
    availableMPS: "Dostępne",
  };

  let weeksNumber = parseInt(weeksInput.value) || 10;

  // Generowanie nagłówka tabeli
  thead.innerHTML = "";
  const headerRow = document.createElement("tr");
  const thLabel = document.createElement("th");
  thLabel.textContent = "Tydzień";
  thLabel.classList.add("max-w-24", "py-2", "border-b", "text-right");
  headerRow.appendChild(thLabel);

  for (let i = 1; i <= weeksNumber; i++) {
    const th = document.createElement("th");
    th.textContent = i;
    th.classList.add("max-w-14", "py-2", "border-b", "text-center");
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);

  // Generowanie wierszy tabeli
  tbody.innerHTML = "";

  Object.entries(categoriesMPS).forEach(([className, category]) => {
    const tr = document.createElement("tr");
    const tdLabel = document.createElement("td");
    tdLabel.textContent = category;
    tdLabel.classList.add("max-w-24", "py-2", "border-b", "text-left");
    tr.appendChild(tdLabel);

    for (let i = 1; i <= weeksNumber; i++) {
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "number";
      input.className = className; // Teraz używamy className, które jest camelCase
      input.id = `${className}-${i}`;
      input.classList.add("max-w-14", "py-2", "border", "rounded");

      if (className === "availableMPS") {
        // "Dostępne"
        input.readOnly = true;
        input.placeholder = "?";
      } else if (className === "demandMPS") {
        // "Przewidywany Popyt"
        input.value = i === 5 ? 20 : i === 7 ? 40 : 0; // Wartości domyślne
      } else if (className === "productionMPS") {
        // "Produkcja"
        input.value = i === 5 ? 28 : i === 7 ? 30 : 0; // Wartości domyślne
      } else {
        input.value = 0;
      }

      td.appendChild(input);
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  });
}
