
async function fetchProducts() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  const promise = fetchProducts();
  promise.then((data) => {
    const card = document.querySelector(".card" );
    
  
    data.results.forEach((item) => {
     
  
      if (item.episode.length > 25) {
        item.caracter = "main";
      
       }
        
       else {
        item.caracter = "side";
      }
      // console.log(item);
  
      if(item.status=="Alive"){
        // console.log(item);
        const element = document.createElement("div");
        element.classList.add("item");
      
      
      element.textContent="Caracter:"+item.caracter+","+"id:"+ item.id+" "+" name: "+item.name+" status: "+item.status+" species:"+item.species+" type:"+item.type;
        card.appendChild(element);
  
      }
  
      
    });
    // console.log(data);
    
    
  });