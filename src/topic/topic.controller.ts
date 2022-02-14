import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { TopicDto } from './dto/topic.dto';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {

    constructor(private readonly topicService: TopicService) {}

    @Post()
    async create(@Body() createTopicDto: TopicDto) {
        const result = await this.topicService.createTopic(createTopicDto);
        if (!result)
        throw new HttpException('Error adding new topic', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get()
    async get() {
        const result = await this.topicService.getTopic();
        if (!result)
        throw new HttpException('Error finding topics', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const result = await this.topicService.findTopicById(id);
        if (!result)
        throw new HttpException('Error finding topic by its id', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTopicDto: TopicDto) {
        const result = await this.topicService.updateTopic(id, updateTopicDto);
        if (!result)
        throw new HttpException('Error updating topic', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.topicService.deleteTopic(id);
        if (!result)
        throw new HttpException('Error deleting topic', HttpStatus.BAD_REQUEST);
      return result;
    }
}
