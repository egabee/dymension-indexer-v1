import { Long } from "../../../helpers";
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface MigrationRecords {
  balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
}
export interface MigrationRecordsProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.MigrationRecords";
  value: Uint8Array;
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface MigrationRecordsAmino {
  balancer_to_concentrated_pool_links: BalancerToConcentratedPoolLinkAmino[];
}
export interface MigrationRecordsAminoMsg {
  type: "osmosis/poolincentives/migration-records";
  value: MigrationRecordsAmino;
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface MigrationRecordsSDKType {
  balancer_to_concentrated_pool_links: BalancerToConcentratedPoolLinkSDKType[];
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface BalancerToConcentratedPoolLink {
  balancerPoolId: Long;
  clPoolId: Long;
}
export interface BalancerToConcentratedPoolLinkProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.BalancerToConcentratedPoolLink";
  value: Uint8Array;
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface BalancerToConcentratedPoolLinkAmino {
  balancer_pool_id: string;
  cl_pool_id: string;
}
export interface BalancerToConcentratedPoolLinkAminoMsg {
  type: "osmosis/poolincentives/balancer-to-concentrated-pool-link";
  value: BalancerToConcentratedPoolLinkAmino;
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface BalancerToConcentratedPoolLinkSDKType {
  balancer_pool_id: Long;
  cl_pool_id: Long;
}