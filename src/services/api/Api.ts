import ChannelApi from "./apis/ChannelApi";
import CommentApi from "./apis/CommentApi";
import PostApi from "./apis/PostApi";

export class Api {}

export interface Api extends ChannelApi, PostApi, CommentApi {}

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

applyMixins(Api, [ChannelApi, PostApi, CommentApi]);
