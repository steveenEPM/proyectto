export type Type_LibrosDest = {
    title: string,
    content: string,
    index?: number
}

//Libros destaccados
export const librosDest: Type_LibrosDest[] = [
    { title: "Novelas", content: "Desde romances apasionantes hasta thrillers llenos de suspenso, encuentra tu próxima historia que te atrape." },
    { title: "No Ficción", content: "Amplía tus conocimientos con libros que te inspiran, te educan y te ayudan a crecer." },
    { title: "Libros para Niños", content: "Despierta la imaginación de los más pequeños con cuentos y aventuras mágicas." },
    { title: "Clásicos", content: "Revive la magia de la literatura atemporal con obras que han marcado la historia." }
];


//Selección de Libros
export const bookCategories: string[] = [
    "Novela histórica",
    "Fantasía épica",
    "Biografías inspiradoras"
];

export const bookGenres: string[] = [
    "Ciencia Ficción",
    "Romance",
    "Misterio",
    "Terror",
    "Literatura",
    "Autoayuda"
];

export const bookAuthors: string[] = [
    "Stephen King",
    "J.K. Rowling",
    "Gabriel García Márquez",
    "Haruki Murakami",
    "Isabel Allende"
];

/**Como comprar */
export const buyBooks:Type_LibrosDest[] = [
    {
      title: "Elige tu Libro",
      content: "Navega por nuestra selección y encuentra tu próximo libro favorito."
    },
    {
      title: "Agrega al Carrito",
      content: "Selecciona el libro y añádelo a tu carrito de compras."
    },
    {
      title: "Finaliza la Compra",
      content: "Ingresa tus datos de envío y elige tu método de pago."
    },
    {
      title: "Confirmación",
      content: "Recibirás un correo electrónico con la confirmación de tu compra."
    }
  ];
  
