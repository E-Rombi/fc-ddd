import Product from "../entity/product";
import ProductService from "./product.service";

describe("Product Service unit tests", () => {

    it("Should change the prices of all products", () => {
        const product_1 = new Product("1", "Product 1", 10.0);
        const product_2 = new Product("2", "Product 2", 15.0);
        const products = [product_1, product_2];

        ProductService.increasePrice(products, 100);

        expect(product_1.price).toBe(20);
        expect(product_2.price).toBe(30);
    });
});