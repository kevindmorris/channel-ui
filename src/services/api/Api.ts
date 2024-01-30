import { AuthApi, ChannelApi, CommentApi, PostApi } from "./apis";

export class Api {}

export interface Api extends AuthApi, ChannelApi, PostApi, CommentApi {}

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

applyMixins(Api, [AuthApi, ChannelApi, PostApi, CommentApi]);
