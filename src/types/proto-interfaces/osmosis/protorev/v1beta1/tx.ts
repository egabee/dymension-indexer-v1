import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType, InfoByPoolType, InfoByPoolTypeAmino, InfoByPoolTypeSDKType, BaseDenom, BaseDenomAmino, BaseDenomSDKType } from "./protorev";
import { Long } from "../../../helpers";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */
  hotRoutes: TokenPairArbRoutes[];
}
export interface MsgSetHotRoutesProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes";
  value: Uint8Array;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesAmino {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */
  hot_routes: TokenPairArbRoutesAmino[];
}
export interface MsgSetHotRoutesAminoMsg {
  type: "osmosis/MsgSetHotRoutes";
  value: MsgSetHotRoutesAmino;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
  admin: string;
  hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {}
export interface MsgSetHotRoutesResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse";
  value: Uint8Array;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseAmino {}
export interface MsgSetHotRoutesResponseAminoMsg {
  type: "osmosis/protorev/set-hot-routes-response";
  value: MsgSetHotRoutesResponseAmino;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseSDKType {}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccount {
  /** admin is the account that is authorized to set the developer account. */
  admin: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */
  developerAccount: string;
}
export interface MsgSetDeveloperAccountProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount";
  value: Uint8Array;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountAmino {
  /** admin is the account that is authorized to set the developer account. */
  admin: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */
  developer_account: string;
}
export interface MsgSetDeveloperAccountAminoMsg {
  type: "osmosis/MsgSetDeveloperAccount";
  value: MsgSetDeveloperAccountAmino;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
  admin: string;
  developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {}
export interface MsgSetDeveloperAccountResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse";
  value: Uint8Array;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseAmino {}
export interface MsgSetDeveloperAccountResponseAminoMsg {
  type: "osmosis/protorev/set-developer-account-response";
  value: MsgSetDeveloperAccountResponseAmino;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolType {
  /** admin is the account that is authorized to set the pool weights. */
  admin: string;
  /** info_by_pool_type contains information about the pool types. */
  infoByPoolType: InfoByPoolType;
}
export interface MsgSetInfoByPoolTypeProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType";
  value: Uint8Array;
}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolTypeAmino {
  /** admin is the account that is authorized to set the pool weights. */
  admin: string;
  /** info_by_pool_type contains information about the pool types. */
  info_by_pool_type?: InfoByPoolTypeAmino;
}
export interface MsgSetInfoByPoolTypeAminoMsg {
  type: "osmosis/MsgSetInfoByPoolType";
  value: MsgSetInfoByPoolTypeAmino;
}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolTypeSDKType {
  admin: string;
  info_by_pool_type: InfoByPoolTypeSDKType;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponse {}
export interface MsgSetInfoByPoolTypeResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse";
  value: Uint8Array;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponseAmino {}
export interface MsgSetInfoByPoolTypeResponseAminoMsg {
  type: "osmosis/protorev/set-info-by-pool-type-response";
  value: MsgSetInfoByPoolTypeResponseAmino;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponseSDKType {}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTx {
  /** admin is the account that is authorized to set the max pool points per tx. */
  admin: string;
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction.
   */
  maxPoolPointsPerTx: Long;
}
export interface MsgSetMaxPoolPointsPerTxProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx";
  value: Uint8Array;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxAmino {
  /** admin is the account that is authorized to set the max pool points per tx. */
  admin: string;
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction.
   */
  max_pool_points_per_tx: string;
}
export interface MsgSetMaxPoolPointsPerTxAminoMsg {
  type: "osmosis/MsgSetMaxPoolPointsPerTx";
  value: MsgSetMaxPoolPointsPerTxAmino;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxSDKType {
  admin: string;
  max_pool_points_per_tx: Long;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponse {}
export interface MsgSetMaxPoolPointsPerTxResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse";
  value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponseAmino {}
export interface MsgSetMaxPoolPointsPerTxResponseAminoMsg {
  type: "osmosis/protorev/set-max-pool-points-per-tx-response";
  value: MsgSetMaxPoolPointsPerTxResponseAmino;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponseSDKType {}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlock {
  /**
   * admin is the account that is authorized to set the max pool points per
   * block.
   */
  admin: string;
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block.
   */
  maxPoolPointsPerBlock: Long;
}
export interface MsgSetMaxPoolPointsPerBlockProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock";
  value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockAmino {
  /**
   * admin is the account that is authorized to set the max pool points per
   * block.
   */
  admin: string;
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block.
   */
  max_pool_points_per_block: string;
}
export interface MsgSetMaxPoolPointsPerBlockAminoMsg {
  type: "osmosis/MsgSetPoolWeights";
  value: MsgSetMaxPoolPointsPerBlockAmino;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockSDKType {
  admin: string;
  max_pool_points_per_block: Long;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponse {}
export interface MsgSetMaxPoolPointsPerBlockResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse";
  value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponseAmino {}
export interface MsgSetMaxPoolPointsPerBlockResponseAminoMsg {
  type: "osmosis/protorev/set-max-pool-points-per-block-response";
  value: MsgSetMaxPoolPointsPerBlockResponseAmino;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponseSDKType {}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenoms {
  /** admin is the account that is authorized to set the base denoms. */
  admin: string;
  /** base_denoms is the list of base denoms to set. */
  baseDenoms: BaseDenom[];
}
export interface MsgSetBaseDenomsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms";
  value: Uint8Array;
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsAmino {
  /** admin is the account that is authorized to set the base denoms. */
  admin: string;
  /** base_denoms is the list of base denoms to set. */
  base_denoms: BaseDenomAmino[];
}
export interface MsgSetBaseDenomsAminoMsg {
  type: "osmosis/MsgSetBaseDenoms";
  value: MsgSetBaseDenomsAmino;
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsSDKType {
  admin: string;
  base_denoms: BaseDenomSDKType[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {}
export interface MsgSetBaseDenomsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse";
  value: Uint8Array;
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseAmino {}
export interface MsgSetBaseDenomsResponseAminoMsg {
  type: "osmosis/protorev/set-base-denoms-response";
  value: MsgSetBaseDenomsResponseAmino;
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseSDKType {}