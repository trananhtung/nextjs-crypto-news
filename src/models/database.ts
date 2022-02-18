import { randomUUID } from 'crypto';
import fs from 'fs';
type User = {
  uuid: string;
  username: string;
  password: string;
  watchList: string[];
};

export default class Database {
  filePath: string;
  users: User[];
  constructor(filePath: string) {
    this.filePath = filePath;
    this.users = this.readDatabase(filePath);
  }

  /**
   * Read database from file
   */
  private readDatabase(filePath: string) {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const data: User[] = JSON.parse(fileData);
    return data;
  }

  /**
   * Write database to file
   */
  private writeDatabase(filePath: string, users: User[]) {
    let isSuccess = false;
    try {
      const data = JSON.stringify(users);
      fs.writeFileSync(filePath, data, 'utf-8');
      isSuccess = true;
    } catch (error) {
      console.log(error);
    }
    return isSuccess;
  }

  /**
   * Find user by username
   */
  findOne(query: { username: string | undefined }) {
    return this.users.find((user) => user.username === query.username);
  }

  /**
   * Find user by uuid
   */
  findOneByUuid(query: { uuid: string }) {
    return this.users.find((user) => user.uuid === query.uuid);
  }

  /**
   * Toggle coin in watch list
   */
  toggleOne(username: string, coinUuid: string) {
    const user = this.users.find((user) => user.username === username);
    if (!user) {
      return false;
    }
    const index = user.watchList.indexOf(coinUuid);
    if (index === -1) {
      user.watchList.push(coinUuid);
      this.writeDatabase(this.filePath, this.users);
      return 'active';
    } else {
      user.watchList.splice(index, 1);
      this.writeDatabase(this.filePath, this.users);
      return 'unActive';
    }
  }

  /**
   * Add user to database
   */
  insertOne(username: string, password: string) {
    this.users.push({
      uuid: randomUUID(),
      username,
      password,
      watchList: [],
    });
    return this.writeDatabase(this.filePath, this.users);
  }

  /**
   * Check if coin is exist in watch list
   */
  isAvailableInWatchList(username: string, coinUuid: string) {
    const user = this.users.find((user) => user.username === username);
    if (!user) {
      return false;
    }
    const index = user.watchList.indexOf(coinUuid);
    if (index === -1) {
      return 'unActive';
    }
    return 'active';
  }

  /**
   * Get user's watch list
   */
  getWatchList(username: string) {
    const user = this.users.find((user) => user.username === username);
    if (!user) {
      return [];
    }
    return user.watchList;
  }

  /**
   * Remove user from database
   */
  removeOne(userUuid: string, coinUuid: string) {
    const user = this.users.find((user) => user.uuid === userUuid);
    if (!user) {
      return false;
    }
    const index = user.watchList.indexOf(coinUuid);
    if (index === -1) {
      return false;
    }

    user.watchList.splice(index, 1);
    this.writeDatabase(this.filePath, this.users);
    return true;
  }
}
