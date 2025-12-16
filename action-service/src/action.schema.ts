import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'actions' })
export class Action extends Document {
  @Prop({ required: true })
  nonConformityId!: string;

  @Prop({ required: true })
  title!: string;

  @Prop()
  description?: string;

  @Prop({ default: 'OPEN' })
  status?: string;

  @Prop()
  owner?: string;
}

export const ActionSchema = SchemaFactory.createForClass(Action);

