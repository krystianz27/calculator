import { items, categoriesData } from "./mrp-data.js";

export function generateMRPTables() {
  items.forEach((item) => {
    generateTableForItem(item);
  });
}

function generateTableForItem(item) {
  const tbody = document.getElementById(`table-body-${item.className}`);
  const thead = document.getElementById(`table-head-${item.className}`);
  const weeksInput = document.getElementById("weeksNumber");

  let weeksNumber = parseInt(weeksInput.value) || 10;

  // Generowanie nagłówka tabeli
  thead.innerHTML = "";
  const headerRow = document.createElement("tr");
  const thLabel = document.createElement("th");

  // Tworzenie wewnętrznych divów dla dwóch wierszy
  const upperDiv = document.createElement("div");
  upperDiv.textContent = "Okres";
  upperDiv.classList.add("text-right", "block");

  const lowerDiv = document.createElement("div");
  lowerDiv.textContent = "Dane produkcyjne";
  lowerDiv.classList.add("text-left", "block");

  // Dodanie divów do komórki nagłówka
  thLabel.appendChild(upperDiv);
  thLabel.appendChild(lowerDiv);

  // Stylizacja i dodanie do tabeli
  thLabel.classList.add(
    "max-w-24",
    "py-2",
    "border-b",
    "text-left",
    "align-bottom"
  );
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

  categoriesData.forEach(({ name, className }, categoryIndex) => {
    const tr = document.createElement("tr");
    const tdLabel = document.createElement("td");
    tdLabel.textContent = name;
    tdLabel.classList.add("max-w-24", "py-2", "border-b", "text-left");
    tr.appendChild(tdLabel);

    for (let i = 1; i <= weeksNumber; i++) {
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "number";
      const clsName = `${className}-${item.className}`;
      input.className = clsName;
      // input.id = `${className}-${item}-${i}`;
      input.id = `${clsName}-${i}`;
      input.classList.add("max-w-14", "py-2", "border", "rounded");

      if (item.level === 1) {
        if (categoryIndex === 0) {
          tdLabel.classList.add("bg-yellow-300");
          td.classList.add("bg-yellow-300");
          input.classList.add("bg-yellow-300");
          input.value = 0;
          input.readOnly = true;
        } else if (categoryIndex === 2) {
          input.readOnly = true;
          input.value = 0;
        } else if (categoryIndex === 3) {
          input.readOnly = true;
          input.value = 0;
        } else if (categoryIndex === 4) {
          tdLabel.classList.add("bg-green-300");
          td.classList.add("bg-green-300");
          input.classList.add("bg-green-300");
          input.value = 0;
          input.readOnly = true;
        } else if (categoryIndex === 5) {
          tdLabel.classList.add("bg-cyan-300");
          td.classList.add("bg-cyan-300");
          input.classList.add("bg-cyan-300");
          input.value = 0;
          input.readOnly = true;
        } else {
          input.value = 0;
        }

        td.appendChild(input);
        tr.appendChild(td);
      } else if (item.level === 2) {
        if (categoryIndex === 0) {
          tdLabel.classList.add("bg-green-300");
          td.classList.add("bg-green-300");
          input.classList.add("bg-green-300");
          input.value = 0;
          input.readOnly = true;
        } else if (categoryIndex === 2) {
          input.readOnly = true;
          input.value = 0;
        } else if (categoryIndex === 3) {
          input.readOnly = true;
          input.value = 0;
        } else if (categoryIndex === 4) {
          input.readOnly = true;
          input.value = 0;
        } else if (categoryIndex === 5) {
          input.readOnly = true;
          input.value = 0;
        } else {
          input.value = 0;
        }

        td.appendChild(input);
        tr.appendChild(td);
      }
    }
    tbody.appendChild(tr);
  });
}
