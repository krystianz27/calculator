import { items, productionParameters } from "./mrp-data.js";

export const generateMRPItems = () => {
  const container = document.getElementById("mrp-tables-container");
  if (container) {
    container.innerHTML = items
      .map(
        (item) => `
            <div class='bg-white p-6 rounded-lg shadow-md'>
              <h3 class='text-xl font-semibold mb-4'>MRP Record for ${item.className}</h3>
              <div class='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div>
                  <label class='block text-gray-700'>Czas realizacji:</label>
                  <input type='number' id='leadTime${item.className}' value='${item.leadTime}' class='w-full p-2 border rounded' />
                </div>
                <div>
                  <label class='block text-gray-700'>Wielkość partii:</label>
                  <input type='number' id='lotSize${item.className}' value='${item.lotSize}' class='w-full p-2 border rounded' />
                </div>
                <div>
                  <label class='block text-gray-700'>Ilość:</label>
                  <input type='number' id='quantity${item.className}' value='${item.quantity}' class='w-full p-2 border rounded' />
                </div>
                <div>
                  <label class='block text-gray-700'>Na stanie:</label>
                  <input type='number' id='inStock${item.className}' value='${item.inStock}' class='w-full p-2 border rounded' />
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class='w-full mt-4 border border-gray-300'>
                  <thead id='table-head-${item.className}' class='bg-gray-200'></thead>
                  <tbody id='table-body-${item.className}'></tbody>
                </table>
              </div>
              <button id='calculate-btn-${item.className}' class='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Oblicz</button>
            </div>
          `
      )
      .join("");
  }
};
