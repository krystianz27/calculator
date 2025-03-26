import { items } from "./mrp-data.js";
import { calculateMRPFirst } from "./calculate-mrp-first.js";

export function calculateMRPTables() {
  items.forEach((item) => {
    if (item.level === 1) calculateMRPFirst(item);
    // if (item.level === 2) calculateMRPFirst(item);
    // if (item.level === 2) calculateMRPFirst(item);
  });
}
