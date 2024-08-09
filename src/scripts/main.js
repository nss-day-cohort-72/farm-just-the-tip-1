import { createPlan } from './plan.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';
import { displayTable } from './catalog-table.js';
// Yearly plan//

const yearlyPlan = createPlan();
// Planting seeds//
plantSeeds(yearlyPlan);
//Plants array
const plantsArr = usePlants();

//Harvesting plants
export const harvestedPlants = harvestPlants(plantsArr);

const htmlCatalog = Catalog(harvestedPlants);

const mainElement = document.querySelector('.container');
// mainElement.innerHTML = htmlCatalog;

const tableHtml = displayTable(harvestedPlants);

const quantityContainer = document.querySelector('.quantity-container');


quantityContainer.innerHTML = tableHtml;
