import Order from "../../domain/entity/order";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";

export default class OrderRepository //implements OrderRepositoryInterface 
{
    async create(entity: Order): Promise<void> {
      await OrderModel.create({
        id: entity.id,
        customer_id: entity.customer_id,
        total: entity.Total,
        items: entity.items.map((item) =>({
            id: item.id,
            name: item.name,
            price: item.Price,
            product_id: item.product_id,
            quantity: item.Quantity,
            total: item.total
        }))
      },
      {
        include: [{model: OrderItemModel}]
      })
    }
  }