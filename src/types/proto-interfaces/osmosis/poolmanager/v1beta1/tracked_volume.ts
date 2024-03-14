import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
export interface TrackedVolume {
  amount: Coin[];
}
export interface TrackedVolumeProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TrackedVolume";
  value: Uint8Array;
}
export interface TrackedVolumeAmino {
  amount: CoinAmino[];
}
export interface TrackedVolumeAminoMsg {
  type: "osmosis/poolmanager/tracked-volume";
  value: TrackedVolumeAmino;
}
export interface TrackedVolumeSDKType {
  amount: CoinSDKType[];
}