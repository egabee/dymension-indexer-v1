import { Long } from "../../../helpers";
/** PoolType is an enumeration of all supported pool types. */
export enum PoolType {
  /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
  Balancer = 0,
  /**
   * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
   * in x/gamm.
   */
  Stableswap = 1,
  /**
   * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
   * defined in x/concentrated-liquidity.
   */
  Concentrated = 2,
  /**
   * CosmWasm - CosmWasm is the pool model specific to CosmWasm. It is defined in
   * x/cosmwasmpool.
   */
  CosmWasm = 3,
  UNRECOGNIZED = -1,
}
export const PoolTypeSDKType = PoolType;
export const PoolTypeAmino = PoolType;
export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "Balancer":
      return PoolType.Balancer;
    case 1:
    case "Stableswap":
      return PoolType.Stableswap;
    case 2:
    case "Concentrated":
      return PoolType.Concentrated;
    case 3:
    case "CosmWasm":
      return PoolType.CosmWasm;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}
export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.Balancer:
      return "Balancer";
    case PoolType.Stableswap:
      return "Stableswap";
    case PoolType.Concentrated:
      return "Concentrated";
    case PoolType.CosmWasm:
      return "CosmWasm";
    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRoute {
  /** pool_type specifies the type of the pool */
  poolType: PoolType;
  poolId?: Long;
}
export interface ModuleRouteProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.ModuleRoute";
  value: Uint8Array;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteAmino {
  /** pool_type specifies the type of the pool */
  pool_type: PoolType;
  pool_id: string;
}
export interface ModuleRouteAminoMsg {
  type: "osmosis/poolmanager/module-route";
  value: ModuleRouteAmino;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteSDKType {
  pool_type: PoolType;
  pool_id?: Long;
}