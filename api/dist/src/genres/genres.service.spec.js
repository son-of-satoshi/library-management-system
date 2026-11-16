"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const genres_service_1 = require("./genres.service");
describe('GenresService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [genres_service_1.GenresService],
        }).compile();
        service = module.get(genres_service_1.GenresService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=genres.service.spec.js.map