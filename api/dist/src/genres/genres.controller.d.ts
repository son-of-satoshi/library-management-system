import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    create(createGenreDto: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<{
        name: string;
        id: number;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        books: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            author: string;
            isbn: string;
            totalCopies: number;
            availableCopies: number;
            genreId: number;
        }[];
    } & {
        name: string;
        id: number;
        slug: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GenreClient<{
        books: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            author: string;
            isbn: string;
            totalCopies: number;
            availableCopies: number;
            genreId: number;
        }[];
    } & {
        name: string;
        id: number;
        slug: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateGenreDto: UpdateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<{
        name: string;
        id: number;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GenreClient<{
        name: string;
        id: number;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
