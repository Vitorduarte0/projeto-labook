import { followingUserDTO } from "../types/DTO";
import { Post } from "./Post";
import { User } from "./User";

export interface IUserData {
  findUserByEmail(email: string): Promise<User>;
  insertUser(user: User): void;
  insertNewFriend(follow: followingUserDTO): void;
  findFollowId(friend_id: string): Promise<boolean>;
  removeFollow(friend_id: string): Promise<void>;

  // returnPosts(friend_id: string): Promise<Post[]>;
  // returnPostsByType(user_id: string): Promise<Post[]>;
}
