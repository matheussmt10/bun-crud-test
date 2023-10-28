import { UserRepository } from "../repository";
import { UserRequestDto, UserResponseDto } from "../shared/interface";

export class UserLogic {
  constructor(private repository: UserRepository) {}

  public async findUsers(): Promise<Array<UserResponseDto>> {
    return this.repository.findAll();
  }
  public async createUser(user: UserRequestDto): Promise<void> {
    return this.repository.create(user);
  }
  public async findUserById(id: string): Promise<UserResponseDto | null> {
    return this.repository.findById(id);
  }
}
