const products = [
  {
    id: "1",
    title: "ONE PIECE 47",
    price: 109.95,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/public/img/Volumen_47.webp",
    stock: 5,
    category: "mangas",
  },
  
  {
    id: "2",
    title: "DEATH NOTE 05",
    price: 22.3,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "/public/img/deathnote05.jpg",
    stock: 2,
    category: "mangas",
  },
  {
    id: "3",
    title: "IRUMA-KUN EN LA ESCUELA DE DEMONIOS 5 ",
    price: 55.99,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/public/img/irumakun05.jpg",
    stock: 4,
    category: "mangas",
  },
  {
    id: "4",
    title: "Giant-Size X-Men #1",
    price: 15.99,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/public/img/X-Men_Vol_1_136.webp",
    stock: 0,
    category: "comics",
  },
  {
    id: "5",
    title: "Amazing Spiderman #1 - Steve Ditko",
    price: 695,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/public/img/comic-hombre-araña.jpg",
    stock: 1,
    category: "comics",
  },
  {
    id: "6",
    title: "JUJUTSU KAISEN SEASON 2",
    price: 22.3,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "/public/img/JUJUTSU KAISEN.webp",
    stock: 2,
    category: "animes",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => { 
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 500);
  });
};
