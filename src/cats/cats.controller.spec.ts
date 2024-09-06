import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';




export const getRandomArbitrary= (min:number, max:number) => Math.floor(Math.random() * (max - min) + min);

export const generate_Numbered_Post_ID= (length:number) => {

  let _result = '';
  let iterator = 0;
  const _allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0127456789';
  // const _allowedChars = '0127456789';



  while (iterator < Math.round(length)) {
    //Get random int
    const randomInt = getRandomArbitrary(0, _allowedChars.length);


    _result += _allowedChars[randomInt];

    iterator +=1;
  }

  return _result;
};

describe('Cats Controller', () => {
  let controller: CatsController;
  let service: CatsService;
  const createCatDto: CreateCatDto = {
    name: 'Cat #1',
    breed: 'Breed #1',
    age: 4,
  };

  const mockCat = {
    name: 'Cat #1',
    breed: 'Breed #1',
    age: 4,
    _id: 'a id',
    tags: [generate_Numbered_Post_ID(5)],
    // owner
  };




  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        {
          provide: CatsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                name: 'Cat #1',
                breed: 'Bread #1',
                age: 4,
              },
              {
                name: 'Cat #2',
                breed: 'Breed #2',
                age: 3,
              },
              {
                name: 'Cat #3',
                breed: 'Breed #3',
                age: 2,
              },
            ]),
            create: jest.fn().mockResolvedValue(createCatDto),
          },
        },
      ],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  describe('create()', () => {
    it('should create a new cat', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockCat);

      await controller.create(createCatDto);
      expect(createSpy).toHaveBeenCalledWith(createCatDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of cats', async () => {
      expect(controller.findAll()).resolves.toEqual([
        {
          name: 'Cat #1',
          breed: 'Bread #1',
          age: 4,
        },
        {
          name: 'Cat #2',
          breed: 'Breed #2',
          age: 3,
        },
        {
          name: 'Cat #3',
          breed: 'Breed #3',
          age: 2,
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
