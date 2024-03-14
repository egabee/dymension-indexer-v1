import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { MigrationRecords, MigrationRecordsAmino, MigrationRecordsSDKType } from "../../../osmosis/gamm/v1beta1/shared";
import { Long } from "../../../helpers";
/** Params holds parameters for the incentives module */
export interface Params {
  poolCreationFee: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
  pool_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "osmosis/gamm/params";
  value: ParamsAmino;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
  pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
  pools: Any[];
  /** will be renamed to next_pool_id in an upcoming version */
  nextPoolNumber: Long;
  params: Params;
  migrationRecords: MigrationRecords;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateAmino {
  pools: AnyAmino[];
  /** will be renamed to next_pool_id in an upcoming version */
  next_pool_number: string;
  params?: ParamsAmino;
  migration_records?: MigrationRecordsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/gamm/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateSDKType {
  pools: AnySDKType[];
  next_pool_number: Long;
  params: ParamsSDKType;
  migration_records: MigrationRecordsSDKType;
}