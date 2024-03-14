import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType, BaseDenom, BaseDenomAmino, BaseDenomSDKType, InfoByPoolType, InfoByPoolTypeAmino, InfoByPoolTypeSDKType, CyclicArbTracker, CyclicArbTrackerAmino, CyclicArbTrackerSDKType } from "./protorev";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisState {
  /** Parameters for the protorev module. */
  params: Params;
  /** Token pair arb routes for the protorev module (hot routes). */
  tokenPairArbRoutes: TokenPairArbRoutes[];
  /**
   * The base denominations being used to create cyclic arbitrage routes via the
   * highest liquidity method.
   */
  baseDenoms: BaseDenom[];
  /** The number of days since module genesis. */
  daysSinceModuleGenesis: Long;
  /** The fees the developer account has accumulated over time. */
  developerFees: Coin[];
  /** The latest block height that the module has processed. */
  latestBlockHeight: Long;
  /** The developer account address of the module. */
  developerAddress: string;
  /**
   * Max pool points per block i.e. the maximum compute time (in ms)
   * that protorev can use per block.
   */
  maxPoolPointsPerBlock: Long;
  /**
   * Max pool points per tx i.e. the maximum compute time (in ms) that
   * protorev can use per tx.
   */
  maxPoolPointsPerTx: Long;
  /** The number of pool points that have been consumed in the current block. */
  pointCountForBlock: Long;
  /** All of the profits that have been accumulated by the module. */
  profits: Coin[];
  /**
   * Information that is used to estimate execution time / gas
   * consumption of a swap on a given pool type.
   */
  infoByPoolType: InfoByPoolType;
  cyclicArbTracker: CyclicArbTracker;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateAmino {
  /** Parameters for the protorev module. */
  params?: ParamsAmino;
  /** Token pair arb routes for the protorev module (hot routes). */
  token_pair_arb_routes: TokenPairArbRoutesAmino[];
  /**
   * The base denominations being used to create cyclic arbitrage routes via the
   * highest liquidity method.
   */
  base_denoms: BaseDenomAmino[];
  /** The number of days since module genesis. */
  days_since_module_genesis: string;
  /** The fees the developer account has accumulated over time. */
  developer_fees: CoinAmino[];
  /** The latest block height that the module has processed. */
  latest_block_height: string;
  /** The developer account address of the module. */
  developer_address: string;
  /**
   * Max pool points per block i.e. the maximum compute time (in ms)
   * that protorev can use per block.
   */
  max_pool_points_per_block: string;
  /**
   * Max pool points per tx i.e. the maximum compute time (in ms) that
   * protorev can use per tx.
   */
  max_pool_points_per_tx: string;
  /** The number of pool points that have been consumed in the current block. */
  point_count_for_block: string;
  /** All of the profits that have been accumulated by the module. */
  profits: CoinAmino[];
  /**
   * Information that is used to estimate execution time / gas
   * consumption of a swap on a given pool type.
   */
  info_by_pool_type?: InfoByPoolTypeAmino;
  cyclic_arb_tracker?: CyclicArbTrackerAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/protorev/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  token_pair_arb_routes: TokenPairArbRoutesSDKType[];
  base_denoms: BaseDenomSDKType[];
  days_since_module_genesis: Long;
  developer_fees: CoinSDKType[];
  latest_block_height: Long;
  developer_address: string;
  max_pool_points_per_block: Long;
  max_pool_points_per_tx: Long;
  point_count_for_block: Long;
  profits: CoinSDKType[];
  info_by_pool_type: InfoByPoolTypeSDKType;
  cyclic_arb_tracker: CyclicArbTrackerSDKType;
}