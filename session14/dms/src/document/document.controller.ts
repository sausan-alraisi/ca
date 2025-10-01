import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { DocumentService } from '../document/document.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'attachments', maxCount: 10 }], {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  create(
    @Body() body: any,
    @UploadedFiles() files: { attachments?: Express.Multer.File[] },
  ) {
    return this.documentService.create(body, files.attachments || []);
  }

  @Get()
  findAll() {
    return this.documentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.documentService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentService.remove(id);
  }
}
