export interface Node {
  children: Child[];
}
export interface NodeProtoMsg {
  typeUrl: "/osmosis.store.v1beta1.Node";
  value: Uint8Array;
}
export interface NodeAmino {
  children: ChildAmino[];
}
export interface NodeAminoMsg {
  type: "osmosis/store/node";
  value: NodeAmino;
}
export interface NodeSDKType {
  children: ChildSDKType[];
}
export interface Child {
  index: Uint8Array;
  accumulation: string;
}
export interface ChildProtoMsg {
  typeUrl: "/osmosis.store.v1beta1.Child";
  value: Uint8Array;
}
export interface ChildAmino {
  index: Uint8Array;
  accumulation: string;
}
export interface ChildAminoMsg {
  type: "osmosis/store/child";
  value: ChildAmino;
}
export interface ChildSDKType {
  index: Uint8Array;
  accumulation: string;
}
export interface Leaf {
  leaf: Child;
}
export interface LeafProtoMsg {
  typeUrl: "/osmosis.store.v1beta1.Leaf";
  value: Uint8Array;
}
export interface LeafAmino {
  leaf?: ChildAmino;
}
export interface LeafAminoMsg {
  type: "osmosis/store/leaf";
  value: LeafAmino;
}
export interface LeafSDKType {
  leaf: ChildSDKType;
}