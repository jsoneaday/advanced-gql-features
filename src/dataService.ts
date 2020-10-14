import { v4 } from "uuid";

export interface Identifiable {
  id: string;
}

export interface User extends Identifiable {
  userName: string;
}

export interface Rating {
  stars: number;
}

export class StandardUser implements User {
  constructor(
    public id: string,
    public userName: string,
    public stars: number
  ) {}
}

export class Moderator implements User {
  constructor(
    public id: string,
    public userName: string,
    public stars: number,
    public categories: [Category]
  ) {}
}

export class Administrator implements User {
  constructor(public id: string, public userName: string) {}
}

export class Category implements Identifiable {
  constructor(public id: string, public name: string) {}
}

export type Result = StandardUser | Moderator | Administrator;

export function getAllUsers() {
  const users: Array<Result> = [];
  users.push(new StandardUser(v4(), "dave", 4));
  users.push(new Moderator(v4(), "ruth", 5, [new Category(v4(), "Cooking")]));
  users.push(new StandardUser(v4(), "jane", 5));
  users.push(new StandardUser(v4(), "tom", 1));
  users.push(new Administrator(v4(), "linda"));
  users.push(
    new Moderator(v4(), "tom", 2, [new Category(v4(), "Programming")])
  );
  users.push(new Administrator(v4(), "betty"));

  return users;
}
