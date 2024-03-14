import { Long } from "../../../helpers";
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 */
export interface MigrationRecords {
  balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
}
export interface MigrationRecordsProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.MigrationRecords";
  value: Uint8Array;
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 */
export interface MigrationRecordsAmino {
  balancer_to_concentrated_pool_links: BalancerToConcentratedPoolLinkAmino[];
}
export interface MigrationRecordsAminoMsg {
  type: "osmosis/gamm/migration-records";
  value: MigrationRecordsAmino;
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
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
 */
export interface BalancerToConcentratedPoolLink {
  balancerPoolId: Long;
  clPoolId: Long;
}
export interface BalancerToConcentratedPoolLinkProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink";
  value: Uint8Array;
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 */
export interface BalancerToConcentratedPoolLinkAmino {
  balancer_pool_id: string;
  cl_pool_id: string;
}
export interface BalancerToConcentratedPoolLinkAminoMsg {
  type: "osmosis/gamm/balancer-to-concentrated-pool-link";
  value: BalancerToConcentratedPoolLinkAmino;
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 */
export interface BalancerToConcentratedPoolLinkSDKType {
  balancer_pool_id: Long;
  cl_pool_id: Long;
}