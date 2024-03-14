import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
  basedenom: string;
  feetokens: FeeToken[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateAmino {
  basedenom: string;
  feetokens: FeeTokenAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/txfees/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateSDKType {
  basedenom: string;
  feetokens: FeeTokenSDKType[];
}