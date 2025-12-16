import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Action } from './action.schema';

@Injectable()
export class ActionService {
  constructor(@InjectModel(Action.name) private readonly actionModel: Model<Action>) {}

  findAll() {
    return this.actionModel.find().exec();
  }

  async findOne(id: string) {
    const action = await this.actionModel.findById(id).exec();
    if (!action) {
      throw new NotFoundException('Action not found');
    }
    return action;
  }

  create(payload: Partial<Action>) {
    return this.actionModel.create(payload);
  }

  async update(id: string, payload: Partial<Action>) {
    const updated = await this.actionModel.findByIdAndUpdate(id, payload, { new: true }).exec();
    if (!updated) {
      throw new NotFoundException('Action not found');
    }
    return updated;
  }

  async remove(id: string) {
    const res = await this.actionModel.findByIdAndDelete(id).exec();
    if (!res) {
      throw new NotFoundException('Action not found');
    }
  }
}

