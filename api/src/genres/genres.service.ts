import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(private prisma: PrismaService) {}

  create(createGenreDto: CreateGenreDto) {
    const slug = createGenreDto.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    return this.prisma.genre.create({
      data: {
        ...createGenreDto,
        slug,
      },
    });
  }

  findAll() {
    return this.prisma.genre.findMany({ include: { books: true } });
  }

  findOne(id: number) {
    return this.prisma.genre.findUnique({ where: { id }, include: { books: true } });
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    const data: any = { ...updateGenreDto };
    if (updateGenreDto.name) {
      data.slug = updateGenreDto.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    }
    return this.prisma.genre.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.genre.delete({ where: { id } });
  }
}