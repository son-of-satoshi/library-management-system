import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBookDto: CreateBookDto): import(".prisma/client").Prisma.Prisma__BookClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        availableCopies: number;
        genreId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(genreId?: string, search?: string, page?: string, limit?: string): Promise<{
        data: ({
            genre: {
                name: string;
                id: number;
                slug: string;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            author: string;
            isbn: string;
            totalCopies: number;
            availableCopies: number;
            genreId: number;
        })[];
        meta: {
            total: number;
            page: number;
            lastPage: number;
        };
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__BookClient<{
        genre: {
            name: string;
            id: number;
            slug: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        availableCopies: number;
        genreId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateBookDto: UpdateBookDto): import(".prisma/client").Prisma.Prisma__BookClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        availableCopies: number;
        genreId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BookClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        availableCopies: number;
        genreId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
