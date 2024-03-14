import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Long } from "../../helpers";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
  lastLockId: Long;
  locks: PeriodLock[];
  syntheticLocks: SyntheticLock[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.lockup.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateAmino {
  last_lock_id: string;
  locks: PeriodLockAmino[];
  synthetic_locks: SyntheticLockAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/lockup/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
  last_lock_id: Long;
  locks: PeriodLockSDKType[];
  synthetic_locks: SyntheticLockSDKType[];
  params: ParamsSDKType;
}