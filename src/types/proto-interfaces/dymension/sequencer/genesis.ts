import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Sequencer, SequencerAmino, SequencerSDKType } from "./sequencer";
/** GenesisState defines the sequencer module's genesis state. */
export interface GenesisState {
  params: Params;
  sequencerList: Sequencer[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the sequencer module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  sequencerList: SequencerAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the sequencer module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  sequencerList: SequencerSDKType[];
}