"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BooksService = class BooksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createBookDto) {
        return this.prisma.book.create({
            data: createBookDto,
        });
    }
    async findAll(genreId, search, page, limit) {
        const pageNum = page ? parseInt(page, 10) : 1;
        const limitNum = limit ? parseInt(limit, 10) : 10;
        const skip = (pageNum - 1) * limitNum;
        const where = {};
        if (genreId) {
            where.genreId = Number(genreId);
        }
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { author: { contains: search, mode: 'insensitive' } },
            ];
        }
        const [books, total] = await Promise.all([
            this.prisma.book.findMany({
                where,
                skip,
                take: limitNum,
                include: { genre: true },
            }),
            this.prisma.book.count({ where }),
        ]);
        return {
            data: books,
            meta: {
                total,
                page: pageNum,
                lastPage: Math.ceil(total / limitNum),
            },
        };
    }
    findOne(id) {
        return this.prisma.book.findUnique({ where: { id }, include: { genre: true } });
    }
    update(id, updateBookDto) {
        return this.prisma.book.update({
            where: { id },
            data: updateBookDto,
        });
    }
    remove(id) {
        return this.prisma.book.delete({ where: { id } });
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BooksService);
//# sourceMappingURL=books.service.js.map