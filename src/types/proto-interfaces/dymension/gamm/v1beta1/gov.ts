import { BalancerToConcentratedPoolLink, BalancerToConcentratedPoolLinkAmino, BalancerToConcentratedPoolLinkSDKType } from "../../../osmosis/gamm/v1beta1/shared";
import { Long } from "../../../helpers";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposal {
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLink[];
}
export interface ReplaceMigrationRecordsProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal";
  value: Uint8Array;
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalAmino {
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLinkAmino[];
}
export interface ReplaceMigrationRecordsProposalAminoMsg {
  type: "osmosis/ReplaceMigrationRecordsProposal";
  value: ReplaceMigrationRecordsProposalAmino;
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalSDKType {
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLinkSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposal {
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLink[];
}
export interface UpdateMigrationRecordsProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal";
  value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposalAmino {
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLinkAmino[];
}
export interface UpdateMigrationRecordsProposalAminoMsg {
  type: "osmosis/UpdateMigrationRecordsProposal";
  value: UpdateMigrationRecordsProposalAmino;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposalSDKType {
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLinkSDKType[];
}
export interface PoolRecordWithCFMMLink {
  denom0: string;
  denom1: string;
  tickSpacing: Long;
  exponentAtPriceOne: string;
  spreadFactor: string;
  balancerPoolId: Long;
}
export interface PoolRecordWithCFMMLinkProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.PoolRecordWithCFMMLink";
  value: Uint8Array;
}
export interface PoolRecordWithCFMMLinkAmino {
  denom0: string;
  denom1: string;
  tick_spacing: string;
  exponent_at_price_one: string;
  spread_factor: string;
  balancer_pool_id: string;
}
export interface PoolRecordWithCFMMLinkAminoMsg {
  type: "osmosis/gamm/pool-record-with-cfmm-link";
  value: PoolRecordWithCFMMLinkAmino;
}
export interface PoolRecordWithCFMMLinkSDKType {
  denom0: string;
  denom1: string;
  tick_spacing: Long;
  exponent_at_price_one: string;
  spread_factor: string;
  balancer_pool_id: Long;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
  title: string;
  description: string;
  poolRecordsWithCfmmLink: PoolRecordWithCFMMLink[];
}
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
  value: Uint8Array;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino {
  title: string;
  description: string;
  pool_records_with_cfmm_link: PoolRecordWithCFMMLinkAmino[];
}
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg {
  type: "osmosis/CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
  value: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalSDKType {
  title: string;
  description: string;
  pool_records_with_cfmm_link: PoolRecordWithCFMMLinkSDKType[];
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposal {
  title: string;
  description: string;
  poolId: Long;
  controllerAddress: string;
}
export interface SetScalingFactorControllerProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal";
  value: Uint8Array;
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposalAmino {
  title: string;
  description: string;
  pool_id: string;
  controller_address: string;
}
export interface SetScalingFactorControllerProposalAminoMsg {
  type: "osmosis/SetScalingFactorControllerProposal";
  value: SetScalingFactorControllerProposalAmino;
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposalSDKType {
  title: string;
  description: string;
  pool_id: Long;
  controller_address: string;
}