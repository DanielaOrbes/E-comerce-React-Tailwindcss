const productsMock = [
  {
    id: 1,
    title: "ONE PIECE 47",
    price: 109.95,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/public/img/Volumen_47.webp",
    stock: 5,
  },
  {
    id: 2,
    title: "DEATH NOTE 05",
    price: 22.3,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "/public/img/deathnote05.jpg",
    stock: 2,
  },
  {
    id: 3,
    title: "IRUMA-KUN EN LA ESCUELA DE DEMONIOS 5 ",
    price: 55.99,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/public/img/irumakun05.jpg",
    stock: 4,
  },
  {
    id: 4,
    title: "Giant-Size X-Men #1",
    price: 15.99,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/public/img/X-Men_Vol_1_136.webp",
    stock: 0,
  },
  {
    id: 5,
    title: "Amazing Spiderman #1 - Steve Ditko",
    price: 695,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/public/img/comic-hombre-araña.jpg",
    stock: 1,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsMock);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsMock.find((product) => product.id === id));
    }, 2000);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsMock.filter((product) => product.category === category));
    }, 2000);
  });
};