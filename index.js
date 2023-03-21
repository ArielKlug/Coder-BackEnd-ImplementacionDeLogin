class ProductManager {
  #margenGanancia = 0.3;
  constructor() {
    this.products = [];
  }

  getProducts = () => {
    return this.products;
  };
  addProduct = (title, description, price, thumbnail, code, stock) => {

    
    const product = {
      title,
      description,
      price: price + price * this.#margenGanancia,
      thumbnail,
      code,
      stock,
    };
    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }
    const codeCheck = this.products.find(item => item.code === code);
    if(!codeCheck){
      this.products.push(product);
    }else{console.log(`ERROR: Ya existe un producto con ese código. Código: ${code}`)}
    
  };

  getProductById = (idProduct) => {
    const findProduct = this.products.find((e) => e.id === idProduct);
    if (!findProduct) {
      console.error("El producto que buscas, lamentablemente no existe");
      return;
    } else {
      console.log(
        `El producto que buscas es: ${findProduct.title}, cuyo valor es de: $${findProduct.price}`, findProduct
      );
    }
  };
}

const manageProducts = new ProductManager();
manageProducts.addProduct(
  "Camisa blanca",
  "Camisa blanca liviana para este calor insoportable",
  50,
  "https://w7.pngwing.com/pngs/196/897/png-transparent-two-white-t-shirts-clothes-clothing-t-shirt-thumbnail.png",
  "osiadfher129348",
  34
);
manageProducts.addProduct(
  "Camisa Negra",
  "Camisa negra y gruesa para el frío que se viene por fin",
  60,
  "https://w7.pngwing.com/pngs/448/441/png-transparent-black-t-shirt-t-shirt-black-male-thumbnail.png",
  "sdpgoj152",
  45
);
manageProducts.addProduct(
  "Campera de invierno",
  "Campera muy cálida y cómoda ideal para el invierno",
  80,
  "https://e7.pngegg.com/pngimages/669/222/png-clipart-jacket-coat-parka-winter-clothing-jacket-winter-fashion-thumbnail.png",
  "ewltgaknm1234",
  29
);
manageProducts.addProduct(
  "Campera de invierno",
  "Campera muy cálida y cómoda ideal para el invierno",
  80,
  "https://e7.pngegg.com/pngimages/669/222/png-clipart-jacket-coat-parka-winter-clothing-jacket-winter-fashion-thumbnail.png",
  "ewltgaknm1234",
  29
);
manageProducts.addProduct(
  "Pantalon de Jean",
  "Pantalon de Jean fachero facherito",
  70,
  "https://w7.pngwing.com/pngs/717/825/png-transparent-jeans-denim-blue-slim-fit-pants-diesel-men-jeans-blue-color-black-thumbnail.png",
  "asdj12490812094sad",
  54
);
manageProducts.addProduct(
  "Pantalon de Jean",
  "Pantalon de Jean fachero facherito",
  70,
  "https://w7.pngwing.com/pngs/717/825/png-transparent-jeans-denim-blue-slim-fit-pants-diesel-men-jeans-blue-color-black-thumbnail.png",
  "asdj12490812094sad",
  54
);

console.log(manageProducts.getProducts());
console.log(manageProducts.getProductById(3));
