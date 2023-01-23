import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  smallQuantity: number;

  @Prop()
  medQuantity: number;

  @Prop()
  lrgQuantity: number;

  @Prop()
  imgUrl: string;

  @Prop()
  description: string;

  @Prop()
  type: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);