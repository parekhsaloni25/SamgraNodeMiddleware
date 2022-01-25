import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { GroupDto } from './dto/group.dto';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {

    constructor(private readonly groupService: GroupService) {}

    @Get()
    getGroups() {
        return 'the groups'
    }
    
    @Post()
    @UseInterceptors(ClassSerializerInterceptor)
    create(@Body() createUserDto: GroupDto) {
        return this.groupService.createGroup(createUserDto);
    }

    // @Get()
    // findAll() {
    //     return this.groupService.findAll();
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.groupService.findOne(+id);
    // }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //     return this.groupService.update(+id, updateUserDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.groupService.remove(+id);
    // }
}
