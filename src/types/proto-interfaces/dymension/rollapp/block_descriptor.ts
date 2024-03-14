import { Long } from "../../helpers";
/** BlockDescriptor defines a single rollapp chain block description. */
export interface BlockDescriptor {
  /** height is the height of the block */
  height: Long;
  /** stateRoot is a 32 byte array of the hash of the block (state root of the block) */
  stateRoot: Uint8Array;
  /**
   * intermediateStatesRoot is a 32 byte array representing
   * the root of a Merkle tree built from the ISRs of the block (Intermediate State Roots)
   */
  intermediateStatesRoot: Uint8Array;
}
export interface BlockDescriptorProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptor";
  value: Uint8Array;
}
/** BlockDescriptor defines a single rollapp chain block description. */
export interface BlockDescriptorAmino {
  /** height is the height of the block */
  height: string;
  /** stateRoot is a 32 byte array of the hash of the block (state root of the block) */
  stateRoot: Uint8Array;
  /**
   * intermediateStatesRoot is a 32 byte array representing
   * the root of a Merkle tree built from the ISRs of the block (Intermediate State Roots)
   */
  intermediateStatesRoot: Uint8Array;
}
export interface BlockDescriptorAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.BlockDescriptor";
  value: BlockDescriptorAmino;
}
/** BlockDescriptor defines a single rollapp chain block description. */
export interface BlockDescriptorSDKType {
  height: Long;
  stateRoot: Uint8Array;
  intermediateStatesRoot: Uint8Array;
}
/** BlockDescriptors defines list of BlockDescriptor. */
export interface BlockDescriptors {
  BD: BlockDescriptor[];
}
export interface BlockDescriptorsProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptors";
  value: Uint8Array;
}
/** BlockDescriptors defines list of BlockDescriptor. */
export interface BlockDescriptorsAmino {
  BD: BlockDescriptorAmino[];
}
export interface BlockDescriptorsAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.BlockDescriptors";
  value: BlockDescriptorsAmino;
}
/** BlockDescriptors defines list of BlockDescriptor. */
export interface BlockDescriptorsSDKType {
  BD: BlockDescriptorSDKType[];
}