"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const genres_controller_1 = require("./genres.controller");
const genres_service_1 = require("./genres.service");
describe('GenresController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [genres_controller_1.GenresController],
            providers: [genres_service_1.GenresService],
        }).compile();
        controller = module.get(genres_controller_1.GenresController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=genres.controller.spec.js.map