import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
export interface MsgSuperfluidDelegate {
  sender: string;
  lockId: Long;
  valAddr: string;
}
export interface MsgSuperfluidDelegateProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate";
  value: Uint8Array;
}
export interface MsgSuperfluidDelegateAmino {
  sender: string;
  lock_id: string;
  val_addr: string;
}
export interface MsgSuperfluidDelegateAminoMsg {
  type: "osmosis/superfluid-delegate";
  value: MsgSuperfluidDelegateAmino;
}
export interface MsgSuperfluidDelegateSDKType {
  sender: string;
  lock_id: Long;
  val_addr: string;
}
export interface MsgSuperfluidDelegateResponse {}
export interface MsgSuperfluidDelegateResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse";
  value: Uint8Array;
}
export interface MsgSuperfluidDelegateResponseAmino {}
export interface MsgSuperfluidDelegateResponseAminoMsg {
  type: "osmosis/superfluid-delegate-response";
  value: MsgSuperfluidDelegateResponseAmino;
}
export interface MsgSuperfluidDelegateResponseSDKType {}
export interface MsgSuperfluidUndelegate {
  sender: string;
  lockId: Long;
}
export interface MsgSuperfluidUndelegateProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate";
  value: Uint8Array;
}
export interface MsgSuperfluidUndelegateAmino {
  sender: string;
  lock_id: string;
}
export interface MsgSuperfluidUndelegateAminoMsg {
  type: "osmosis/superfluid-undelegate";
  value: MsgSuperfluidUndelegateAmino;
}
export interface MsgSuperfluidUndelegateSDKType {
  sender: string;
  lock_id: Long;
}
export interface MsgSuperfluidUndelegateResponse {}
export interface MsgSuperfluidUndelegateResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse";
  value: Uint8Array;
}
export interface MsgSuperfluidUndelegateResponseAmino {}
export interface MsgSuperfluidUndelegateResponseAminoMsg {
  type: "osmosis/superfluid-undelegate-response";
  value: MsgSuperfluidUndelegateResponseAmino;
}
export interface MsgSuperfluidUndelegateResponseSDKType {}
export interface MsgSuperfluidUnbondLock {
  sender: string;
  lockId: Long;
}
export interface MsgSuperfluidUnbondLockProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock";
  value: Uint8Array;
}
export interface MsgSuperfluidUnbondLockAmino {
  sender: string;
  lock_id: string;
}
export interface MsgSuperfluidUnbondLockAminoMsg {
  type: "osmosis/superfluid-unbond-lock";
  value: MsgSuperfluidUnbondLockAmino;
}
export interface MsgSuperfluidUnbondLockSDKType {
  sender: string;
  lock_id: Long;
}
export interface MsgSuperfluidUnbondLockResponse {}
export interface MsgSuperfluidUnbondLockResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse";
  value: Uint8Array;
}
export interface MsgSuperfluidUnbondLockResponseAmino {}
export interface MsgSuperfluidUnbondLockResponseAminoMsg {
  type: "osmosis/superfluid-unbond-lock-response";
  value: MsgSuperfluidUnbondLockResponseAmino;
}
export interface MsgSuperfluidUnbondLockResponseSDKType {}
export interface MsgSuperfluidUndelegateAndUnbondLock {
  sender: string;
  lockId: Long;
  /** Amount of unlocking coin. */
  coin: Coin;
}
export interface MsgSuperfluidUndelegateAndUnbondLockProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock";
  value: Uint8Array;
}
export interface MsgSuperfluidUndelegateAndUnbondLockAmino {
  sender: string;
  lock_id: string;
  /** Amount of unlocking coin. */
  coin?: CoinAmino;
}
export interface MsgSuperfluidUndelegateAndUnbondLockAminoMsg {
  type: "osmosis/superfluid-undelegate-and-unbond-lock";
  value: MsgSuperfluidUndelegateAndUnbondLockAmino;
}
export interface MsgSuperfluidUndelegateAndUnbondLockSDKType {
  sender: string;
  lock_id: Long;
  coin: CoinSDKType;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponse {
  /**
   * lock id of the new lock created for the remaining amount.
   * returns the original lockid if the unlocked amount is equal to the
   * original lock's amount.
   */
  lockId: Long;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse";
  value: Uint8Array;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponseAmino {
  /**
   * lock id of the new lock created for the remaining amount.
   * returns the original lockid if the unlocked amount is equal to the
   * original lock's amount.
   */
  lock_id: string;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg {
  type: "osmosis/superfluid-undelegate-and-unbond-lock-response";
  value: MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponseSDKType {
  lock_id: Long;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
  sender: string;
  coins: Coin[];
  valAddr: string;
}
export interface MsgLockAndSuperfluidDelegateProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate";
  value: Uint8Array;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateAmino {
  sender: string;
  coins: CoinAmino[];
  val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateAminoMsg {
  type: "osmosis/lock-and-superfluid-delegate";
  value: MsgLockAndSuperfluidDelegateAmino;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateSDKType {
  sender: string;
  coins: CoinSDKType[];
  val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
  ID: Long;
}
export interface MsgLockAndSuperfluidDelegateResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse";
  value: Uint8Array;
}
export interface MsgLockAndSuperfluidDelegateResponseAmino {
  ID: string;
}
export interface MsgLockAndSuperfluidDelegateResponseAminoMsg {
  type: "osmosis/lock-and-superfluid-delegate-response";
  value: MsgLockAndSuperfluidDelegateResponseAmino;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
  ID: Long;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegate {
  sender: string;
  coins: Coin[];
  valAddr: string;
  poolId: Long;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate";
  value: Uint8Array;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegateAmino {
  sender: string;
  coins: CoinAmino[];
  val_addr: string;
  pool_id: string;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg {
  type: "osmosis/full-range-and-sf-delegate";
  value: MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegateSDKType {
  sender: string;
  coins: CoinSDKType[];
  val_addr: string;
  pool_id: Long;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
  lockID: Long;
  positionID: Long;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse";
  value: Uint8Array;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino {
  lockID: string;
  positionID: string;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg {
  type: "osmosis/create-full-range-position-and-superfluid-delegate-response";
  value: MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponseSDKType {
  lockID: Long;
  positionID: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
  sender: string;
  poolId: Long;
}
export interface MsgUnPoolWhitelistedPoolProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool";
  value: Uint8Array;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolAmino {
  sender: string;
  pool_id: string;
}
export interface MsgUnPoolWhitelistedPoolAminoMsg {
  type: "osmosis/unpool-whitelisted-pool";
  value: MsgUnPoolWhitelistedPoolAmino;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolSDKType {
  sender: string;
  pool_id: Long;
}
export interface MsgUnPoolWhitelistedPoolResponse {
  exitedLockIds: Long[];
}
export interface MsgUnPoolWhitelistedPoolResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse";
  value: Uint8Array;
}
export interface MsgUnPoolWhitelistedPoolResponseAmino {
  exited_lock_ids: string[];
}
export interface MsgUnPoolWhitelistedPoolResponseAminoMsg {
  type: "osmosis/un-pool-whitelisted-pool-response";
  value: MsgUnPoolWhitelistedPoolResponseAmino;
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
  exited_lock_ids: Long[];
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
  sender: string;
  lockId: Long;
  sharesToMigrate: Coin;
  /** token_out_mins indicates minimum token to exit Balancer pool with. */
  tokenOutMins: Coin[];
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition";
  value: Uint8Array;
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino {
  sender: string;
  lock_id: string;
  shares_to_migrate?: CoinAmino;
  /** token_out_mins indicates minimum token to exit Balancer pool with. */
  token_out_mins: CoinAmino[];
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg {
  type: "osmosis/unlock-and-migrate";
  value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionSDKType {
  sender: string;
  lock_id: Long;
  shares_to_migrate: CoinSDKType;
  token_out_mins: CoinSDKType[];
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
  amount0: string;
  amount1: string;
  liquidityCreated: string;
  joinTime: Date;
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse";
  value: Uint8Array;
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino {
  amount0: string;
  amount1: string;
  liquidity_created: string;
  join_time?: Date;
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg {
  type: "osmosis/unlock-and-migrate-shares-to-full-range-concentrated-position-response";
  value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseSDKType {
  amount0: string;
  amount1: string;
  liquidity_created: string;
  join_time: Date;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPosition {
  positionId: Long;
  sender: string;
  tokenDesired0: Coin;
  tokenDesired1: Coin;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition";
  value: Uint8Array;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPositionAmino {
  position_id: string;
  sender: string;
  token_desired0?: CoinAmino;
  token_desired1?: CoinAmino;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg {
  type: "osmosis/add-to-cl-superfluid-position";
  value: MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPositionSDKType {
  position_id: Long;
  sender: string;
  token_desired0: CoinSDKType;
  token_desired1: CoinSDKType;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
  positionId: Long;
  amount0: string;
  amount1: string;
  /**
   * new_liquidity is the final liquidity after the add.
   * It includes the liquidity that existed before in the position
   * and the new liquidity that was added to the position.
   */
  newLiquidity: string;
  lockId: Long;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse";
  value: Uint8Array;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino {
  position_id: string;
  amount0: string;
  amount1: string;
  /**
   * new_liquidity is the final liquidity after the add.
   * It includes the liquidity that existed before in the position
   * and the new liquidity that was added to the position.
   */
  new_liquidity: string;
  lock_id: string;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg {
  type: "osmosis/add-to-concentrated-liquidity-superfluid-position-response";
  value: MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponseSDKType {
  position_id: Long;
  amount0: string;
  amount1: string;
  new_liquidity: string;
  lock_id: Long;
}
/** ===================== MsgUnbondConvertAndStake */
export interface MsgUnbondConvertAndStake {
  /**
   * lock ID to convert and stake.
   * lock id with 0 should be provided if converting liquid gamm shares to stake
   */
  lockId: Long;
  sender: string;
  /**
   * validator address to delegate to.
   * If provided empty string, we use the validators returned from
   * valset-preference module.
   */
  valAddr: string;
  /** min_amt_to_stake indicates the minimum amount to stake after conversion */
  minAmtToStake: string;
  /**
   * shares_to_convert indicates shares wanted to stake.
   * Note that this field is only used for liquid(unlocked) gamm shares.
   * For all other cases, this field would be disregarded.
   */
  sharesToConvert: Coin;
}
export interface MsgUnbondConvertAndStakeProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStake";
  value: Uint8Array;
}
/** ===================== MsgUnbondConvertAndStake */
export interface MsgUnbondConvertAndStakeAmino {
  /**
   * lock ID to convert and stake.
   * lock id with 0 should be provided if converting liquid gamm shares to stake
   */
  lock_id: string;
  sender: string;
  /**
   * validator address to delegate to.
   * If provided empty string, we use the validators returned from
   * valset-preference module.
   */
  val_addr: string;
  /** min_amt_to_stake indicates the minimum amount to stake after conversion */
  min_amt_to_stake: string;
  /**
   * shares_to_convert indicates shares wanted to stake.
   * Note that this field is only used for liquid(unlocked) gamm shares.
   * For all other cases, this field would be disregarded.
   */
  shares_to_convert?: CoinAmino;
}
export interface MsgUnbondConvertAndStakeAminoMsg {
  type: "osmosis/unbond-convert-and-stake";
  value: MsgUnbondConvertAndStakeAmino;
}
/** ===================== MsgUnbondConvertAndStake */
export interface MsgUnbondConvertAndStakeSDKType {
  lock_id: Long;
  sender: string;
  val_addr: string;
  min_amt_to_stake: string;
  shares_to_convert: CoinSDKType;
}
export interface MsgUnbondConvertAndStakeResponse {
  totalAmtStaked: string;
}
export interface MsgUnbondConvertAndStakeResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStakeResponse";
  value: Uint8Array;
}
export interface MsgUnbondConvertAndStakeResponseAmino {
  total_amt_staked: string;
}
export interface MsgUnbondConvertAndStakeResponseAminoMsg {
  type: "osmosis/unbond-convert-and-stake-response";
  value: MsgUnbondConvertAndStakeResponseAmino;
}
export interface MsgUnbondConvertAndStakeResponseSDKType {
  total_amt_staked: string;
}