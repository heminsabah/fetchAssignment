
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
    const card = document.querySelector(".cards" );
    // const list = document.querySelector(".list")
    // const list = document.querySelector("h3" );
    // const listEl = document.querySelector("li" );
    
  
    data.results.forEach((item) => {
     
  
      if (item.episode.length > 25) {
        item.caracter = "main";
      
       }
        
       else {
        item.caracter = "side";
      }
      // console.log(item);
  
      if(item.status=="Alive"){
        console.log(item);
        
        // const listelement = document.createElement("h3");
        
       
        // listelement.classList.add("item");
        const element = document.createElement("div");
        const imgElement = document.createElement("img");
        imgElement.src=item.image;
        const listElement = document.createElement("ul");
      const listItem = document.createElement("li")
      // listElement.textContent= item;
        element.classList.add("item");
        // list.classList.add("card");
        
        listElement.classList.add("element");
        listItem.classList.add("list")
        
        // ","+"id:"+ item.id+" "+" name: "+item.name+" status: "+item.status+" species:"+item.species+" type:"+item.type;
      element.innerHTML=`<h5>Caracter:  ${item.caracter} </br> id:${ item.id}</br>  name:  ${ item.name}</br>  status:  ${ item.status}</br> species:  ${ item.species} </br></h5>`
      card.appendChild(element);
      element.appendChild(imgElement);    
      
      element.appendChild(listElement);
      // listElement.appendChild(listItem);
     
  
      }
  
      
    });
    // console.log(data);
    
    
  });