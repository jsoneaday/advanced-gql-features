import { IResolvers } from "apollo-server-express";
import { getAllUsers, Result } from "../dataService";
import { GqlContext } from "./GqlContext";

const resolvers: IResolvers = {
  Result: {
    __resolveType(obj: any, ctx: GqlContext, info: any) {
      if (obj.categories) {
        return "Moderator";
      } else if (obj.stars) {
        return "StandardUser";
      }

      return "Administrator";
    },
  },
  User: {
    __resolveType(obj: any, ctx: GqlContext, info: any) {
      if (obj.categories) {
        return "Moderator";
      } else if (obj.stars) {
        return "StandardUser";
      }

      return "Administrator";
    },
  },
  Query: {
    getAllUsers: async (
      parent,
      args: null,
      ctx: GqlContext,
      info: any
    ): Promise<Array<Result>> => {
      return getAllUsers();
    },
  },
};

export default resolvers;
