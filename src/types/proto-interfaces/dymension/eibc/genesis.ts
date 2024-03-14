import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DemandOrder, DemandOrderAmino, DemandOrderSDKType } from "./demand_order";
/** GenesisState defines the eibc module's genesis state. */
export interface GenesisState {
  params: Params;
  demandOrders: DemandOrder[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.eibc.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the eibc module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  demand_orders: DemandOrderAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/dymensionxyz.dymension.eibc.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the eibc module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  demand_orders: DemandOrderSDKType[];
}