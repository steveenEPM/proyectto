export const AWS = "https://api.mercadolibre.com/sites/MEC"


let config = {
    method: 'GET', // Método de la petición
    headers: {
        'Content-Type': 'application/json',
    }
}

export const httpFetch = async (enpoint: string) => {

    const url = AWS.concat(enpoint)

    try {
        const respons = await fetch(url, config)

        if (!respons.ok)
            throw "Status code 404"

        const { results } = await respons.json()

        return results

    } catch (error) {
        throw "Status code 404"
    }

}


export const fetchItemData = async (itemId: string): Promise<any> => {
    const url = `https://api.mercadolibre.com/items/${itemId}`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw "There was a problem with the fetch operation:";
    }
  }
  
  // Llamada a la función con el ID del ítem
  export const fetchWikipedia = async (searchTerm: string): Promise<string> => {
    const url = `https://es.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${searchTerm}&exintro&explaintext&origin=*`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        const extract = pages[pageId].extract;

        return extract || 'No summary available'; // Retorna el resumen, o un mensaje si no hay resumen
    } catch (error) {
        console.error('Error:', error);
        return 'Error fetching summary'; // Retorna un mensaje de error en caso de fallo
    }
};

