const tableObject = {
  corn: {},
  wheat: {},
  sunflower: {},
  soybean: {},
  asparagus: {},
  potato: {},
};

const plantNames = [
  'corn',
  'wheat',
  'sunflower',
  'potato',
  'soybean',
  'asparagus',
];

export const displayTable = (objArr) => {
  const cornTotal = objArr.filter((plant) => plant.type === 'Corn');
  const wheatTotal = objArr.filter((plant) => plant.type === 'Wheat');
  const sunflowerTotal = objArr.filter((plant) => plant.type === 'Sunflower');
  const soyBeanTotal = objArr.filter((plant) => plant.type === 'Soybean');
  const asparagusTotal = objArr.filter((plant) => plant.type === 'Asparagus');
  const potatoTotal = objArr.filter((plant) => plant.type === 'Potato');

  addingProp(wheatTotal, tableObject);
  addingProp(sunflowerTotal, tableObject);
  addingProp(soyBeanTotal, tableObject);
  addingProp(potatoTotal, tableObject);
  addingProp(cornTotal, tableObject);
  addingProp(asparagusTotal, tableObject);

  let html = `
    <div class="quantity-container">
        <h2>Quantity</h2>
        <div class="card">${tableObject.corn.quantity}</div>
        <div class="card">${tableObject.wheat.quantity}</div>
        <div class="card">${tableObject.sunflower.quantity}</div> 
        <div class="card">${tableObject.asparagus.quantity}</div> 
        <div class="card">${tableObject.soybean.quantity}</div> 
        <div class="card">${tableObject.potato.quantity}</div>  
        
           
 
      `;

  console.log(tableObject);
  console.log(plantNames.filter(plant => {
      
  }));

  return html;
};

//Helper function//
const addingProp = (arr, obj) => {
  const quantity = arr.length;

  if (quantity > 0) {
    const type = arr[0].type.toLowerCase();
    obj[type].quantity = quantity;
  } else {
    obj[type] = {};
    obj[type].quantity = 0;
  }
};
