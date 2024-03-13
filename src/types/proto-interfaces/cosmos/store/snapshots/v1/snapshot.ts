import { Long } from "../../../../helpers";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Metadata;
}
export interface SnapshotProtoMsg {
  typeUrl: "/cosmos.store.snapshots.v1.Snapshot";
  value: Uint8Array;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotAmino {
  height: string;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata?: MetadataAmino;
}
export interface SnapshotAminoMsg {
  type: "cosmos-sdk/Snapshot";
  value: SnapshotAmino;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotSDKType {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: MetadataSDKType;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
  /** SHA-256 chunk hashes */
  chunkHashes: Uint8Array[];
}
export interface MetadataProtoMsg {
  typeUrl: "/cosmos.store.snapshots.v1.Metadata";
  value: Uint8Array;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface MetadataAmino {
  /** SHA-256 chunk hashes */
  chunk_hashes: Uint8Array[];
}
export interface MetadataAminoMsg {
  type: "cosmos-sdk/Metadata";
  value: MetadataAmino;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface MetadataSDKType {
  chunk_hashes: Uint8Array[];
}
/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotItem {
  store?: SnapshotStoreItem;
  iavl?: SnapshotIAVLItem;
  extension?: SnapshotExtensionMeta;
  extensionPayload?: SnapshotExtensionPayload;
}
export interface SnapshotItemProtoMsg {
  typeUrl: "/cosmos.store.snapshots.v1.SnapshotItem";
  value: Uint8Array;
}
/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotItemAmino {
  store?: SnapshotStoreItemAmino;
  iavl?: SnapshotIAVLItemAmino;
  extension?: SnapshotExtensionMetaAmino;
  extension_payload?: SnapshotExtensionPayloadAmino;
}
export interface SnapshotItemAminoMsg {
  type: "cosmos-sdk/SnapshotItem";
  value: SnapshotItemAmino;
}
/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotItemSDKType {
  store?: SnapshotStoreItemSDKType;
  iavl?: SnapshotIAVLItemSDKType;
  extension?: SnapshotExtensionMetaSDKType;
  extension_payload?: SnapshotExtensionPayloadSDKType;
}
/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotStoreItem {
  name: string;
}
export interface SnapshotStoreItemProtoMsg {
  typeUrl: "/cosmos.store.snapshots.v1.SnapshotStoreItem";
  value: Uint8Array;
}
/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotStoreItemAmino {
  name: string;
}
export interface SnapshotStoreItemAminoMsg {
  type: "cosmos-sdk/SnapshotStoreItem";
  value: SnapshotStoreItemAmino;
}
/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotStoreItemSDKType {
  name: string;
}
/**
 * SnapshotIAVLItem is an exported IAVL node.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotIAVLItem {
  key: Uint8Array;
  value: Uint8Array;
  /** version is block height */
  version: Long;
  /** height is depth of the tree. */
  height: number;
}
export interface SnapshotIAVLItemProtoMsg {
  typeUrl: "/cosmos.store.snapshots.v1.SnapshotIAVLItem";
  value: Uint8Array;
}
/**
 * SnapshotIAVLItem is an exported IAVL node.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotIAVLItemAmino {
  key: Uint8Array;
  value: Uint8Array;
  /** version is block height */
  version: string;
  /** height is depth of the tree. */
  height: number;
}
export interface SnapshotIAVLItemAminoMsg {
  type: "cosmos-sdk/SnapshotIAVLItem";
  value: SnapshotIAVLItemAmino;
}
/**
 * SnapshotIAVLItem is an exported IAVL node.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotIAVLItemSDKType {
  key: Uint8Array;
  value: Uint8Array;
  version: Long;
  height: number;
}
/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionMeta {
  name: string;
  format: number;
}
export interface SnapshotExtensionMetaProtoMsg {
  typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionMeta";
  value: Uint8Array;
}
/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionMetaAmino {
  name: string;
  format: number;
}
export interface SnapshotExtensionMetaAminoMsg {
  type: "cosmos-sdk/SnapshotExtensionMeta";
  value: SnapshotExtensionMetaAmino;
}
/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionMetaSDKType {
  name: string;
  format: number;
}
/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionPayload {
  payload: Uint8Array;
}
export interface SnapshotExtensionPayloadProtoMsg {
  typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionPayload";
  value: Uint8Array;
}
/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionPayloadAmino {
  payload: Uint8Array;
}
export interface SnapshotExtensionPayloadAminoMsg {
  type: "cosmos-sdk/SnapshotExtensionPayload";
  value: SnapshotExtensionPayloadAmino;
}
/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionPayloadSDKType {
  payload: Uint8Array;
}