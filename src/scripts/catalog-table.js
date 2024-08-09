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

  const cornObject = {
    name: "Corn",
    quantity: cornTotal.length
  }
  const wheatObject = {
    name: "Wheat",
    quantity: wheatTotal.length
  }
  const sunflowerObject = {
    name: "Sunflower",
    quantity: sunflowerTotal.length
  }
  const soyBeanObject = {
    name: "Soybean",
    quantity: soyBeanTotal.length
  }
  const asparagusObject = {
    name: "Aparagus",
    quantity: asparagusTotal.length
  }
  const potatoObject = {
    name: "Potato",
    quantity: potatoTotal.length
  }


  // addingProp(wheatTotal, tableObject);
  // addingProp(sunflowerTotal, tableObject);
  // addingProp(soyBeanTotal, tableObject);
  // addingProp(potatoTotal, tableObject);
  // addingProp(cornTotal, tableObject);
  // addingProp(asparagusTotal, tableObject);

  let html = `
        <h2>Quantity</h2>
        <div class="card">${cornObject.quantity}</div>
        <div class="card">${wheatObject.quantity}</div>
        <div class="card">${sunflowerObject.quantity}</div> 
        <div class="card">${asparagusObject.quantity}</div> 
        <div class="card">${soyBeanObject.quantity}</div> 
        <div class="card">${potatoObject.quantity}</div>  
      `;
  return html;
};

//Helper function//
const addingProp = (obj) => {

  if (quantity > 0) {
    const type = arr[0].type.toLowerCase();
    obj[type].quantity = quantity;
  } else {
    obj[type] = {};
    obj[type].quantity = 0;
  }
};
