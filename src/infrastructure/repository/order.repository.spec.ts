import { Sequelize } from "sequelize-typescript";
import Address from "../../domain/entity/address";
import Customer from "../../domain/entity/customer";
import Order from "../../domain/entity/order";
import OrderItem from "../../domain/entity/order_item";
import Product from "../../domain/entity/product";
import CustomerModel from "../db/sequelize/model/customer.model";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";
import ProductModel from "../db/sequelize/model/product.model";
import CustomerRepository from "./customer.repository";
import OrderRepository from "./order.repository";
import ProductRepository from "./product.repository";

describe("Order repository test", () => {
    let sequelize: Sequelize;
  
    beforeEach(async () => {
      sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
        logging: false,
        sync: { force: true },
      });
  
      await sequelize.addModels([OrderModel, OrderItemModel, CustomerModel, ProductModel]);
      await sequelize.sync();
    });
  
    afterEach(async () => {
      await sequelize.close();
    });
    
    it("Should create a new order", async () => {
      const customerRepository = new CustomerRepository();
      const customer = new Customer("1", "Customer 1");
      const address = new Address("Rua 1", 1, "123", "City 1");
      customer.updateAddress(address);
      await customerRepository.create(customer);

      const productRepository = new ProductRepository();
      const product = new Product("1", "Product 1", 10);
      await productRepository.create(product);

      const orderItem = new OrderItem("1", product.id, product.name, product.price, 2);
      
      const order = new Order("1", customer.id, [orderItem]);

      const orderRepository = new OrderRepository();
      await orderRepository.create(order);

      const orderModel = await OrderModel.findOne({ 
        where: { id: order.id},
        include: ["items"]
      })

      expect(orderModel.toJSON()).toStrictEqual({
        id: "1",
        customer_id: "1",
        total: order.Total,
        items: [
          {
            id: orderItem.id,
            name: orderItem.name,
            price: orderItem.Price,
            quantity: orderItem.Quantity,
            order_id: order.id,
            product_id: product.id,
            total: 20
          }
        ]
      })

    })
    
  });