import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActionService } from './action.service';
import { Action } from './action.schema';

@Controller('actions')
export class ActionController {
  constructor(private readonly service: ActionService) {}

  @Get()
  list(): Promise<Action[]> {
    return this.service.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Action> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() payload: Partial<Action>): Promise<Action> {
    return this.service.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Partial<Action>): Promise<Action> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}

