import { createPlan } from './plan.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';
import { displayTable } from './catalog-table.js';
import { catalogIcons } from './catalog-icons.js';
// Yearly plan//

const yearlyPlan = createPlan();
// Planting seeds//
plantSeeds(yearlyPlan);
//Plants array
const plantsArr = usePlants();
//Harvesting plants
const harvestedPlants = harvestPlants(plantsArr);
const quantityContainer = document.querySelector('.quantity-container');
const mainElement = document.querySelector('.container');

const htmlCatalog = Catalog(harvestedPlants);
const htmlCatalogIcons = catalogIcons(harvestedPlants)
const htmlCatalogTable = displayTable(harvestedPlants);

mainElement.innerHTML = htmlCatalog;
mainElement.innerHTML = htmlCatalogIcons;
quantityContainer.innerHTML = htmlCatalogTable;


