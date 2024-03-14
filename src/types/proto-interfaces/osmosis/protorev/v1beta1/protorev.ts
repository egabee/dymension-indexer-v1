import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { TakerFeesTracker, TakerFeesTrackerAmino, TakerFeesTrackerSDKType } from "../../poolmanager/v1beta1/genesis";
import { Long } from "../../../helpers";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
  /** Stores all of the possible hot paths for a given pair of tokens */
  arbRoutes: Route[];
  /** Token denomination of the first asset */
  tokenIn: string;
  /** Token denomination of the second asset */
  tokenOut: string;
}
export interface TokenPairArbRoutesProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes";
  value: Uint8Array;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesAmino {
  /** Stores all of the possible hot paths for a given pair of tokens */
  arb_routes: RouteAmino[];
  /** Token denomination of the first asset */
  token_in: string;
  /** Token denomination of the second asset */
  token_out: string;
}
export interface TokenPairArbRoutesAminoMsg {
  type: "osmosis/protorev/token-pair-arb-routes";
  value: TokenPairArbRoutesAmino;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesSDKType {
  arb_routes: RouteSDKType[];
  token_in: string;
  token_out: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
  /**
   * The pool IDs that are traversed in the directed cyclic graph (traversed
   * left
   * -> right)
   */
  trades: Trade[];
  /**
   * The step size that will be used to find the optimal swap amount in the
   * binary search
   */
  stepSize: string;
}
export interface RouteProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.Route";
  value: Uint8Array;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteAmino {
  /**
   * The pool IDs that are traversed in the directed cyclic graph (traversed
   * left
   * -> right)
   */
  trades: TradeAmino[];
  /**
   * The step size that will be used to find the optimal swap amount in the
   * binary search
   */
  step_size: string;
}
export interface RouteAminoMsg {
  type: "osmosis/protorev/route";
  value: RouteAmino;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteSDKType {
  trades: TradeSDKType[];
  step_size: string;
}
/** Trade is a single trade in a route */
export interface Trade {
  /** The pool id of the pool that is traded on */
  pool: Long;
  /** The denom of the token that is traded */
  tokenIn: string;
  /** The denom of the token that is received */
  tokenOut: string;
}
export interface TradeProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.Trade";
  value: Uint8Array;
}
/** Trade is a single trade in a route */
export interface TradeAmino {
  /** The pool id of the pool that is traded on */
  pool: string;
  /** The denom of the token that is traded */
  token_in: string;
  /** The denom of the token that is received */
  token_out: string;
}
export interface TradeAminoMsg {
  type: "osmosis/protorev/trade";
  value: TradeAmino;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
  pool: Long;
  token_in: string;
  token_out: string;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatistics {
  /** profits is the total profit from all trades on this route */
  profits: Coin[];
  /**
   * number_of_trades is the number of trades the module has executed using this
   * route
   */
  numberOfTrades: string;
  /** route is the route that was used (pool ids along the arbitrage route) */
  route: Long[];
}
export interface RouteStatisticsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics";
  value: Uint8Array;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatisticsAmino {
  /** profits is the total profit from all trades on this route */
  profits: CoinAmino[];
  /**
   * number_of_trades is the number of trades the module has executed using this
   * route
   */
  number_of_trades: string;
  /** route is the route that was used (pool ids along the arbitrage route) */
  route: string[];
}
export interface RouteStatisticsAminoMsg {
  type: "osmosis/protorev/route-statistics";
  value: RouteStatisticsAmino;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatisticsSDKType {
  profits: CoinSDKType[];
  number_of_trades: string;
  route: Long[];
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 * 
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeights {
  /** The weight of a stableswap pool */
  stableWeight: Long;
  /** The weight of a balancer pool */
  balancerWeight: Long;
  /** The weight of a concentrated pool */
  concentratedWeight: Long;
  /** The weight of a cosmwasm pool */
  cosmwasmWeight: Long;
}
export interface PoolWeightsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.PoolWeights";
  value: Uint8Array;
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 * 
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeightsAmino {
  /** The weight of a stableswap pool */
  stable_weight: string;
  /** The weight of a balancer pool */
  balancer_weight: string;
  /** The weight of a concentrated pool */
  concentrated_weight: string;
  /** The weight of a cosmwasm pool */
  cosmwasm_weight: string;
}
export interface PoolWeightsAminoMsg {
  type: "osmosis/protorev/pool-weights";
  value: PoolWeightsAmino;
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 * 
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeightsSDKType {
  stable_weight: Long;
  balancer_weight: Long;
  concentrated_weight: Long;
  cosmwasm_weight: Long;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolType {
  /** The stable pool info */
  stable: StablePoolInfo;
  /** The balancer pool info */
  balancer: BalancerPoolInfo;
  /** The concentrated pool info */
  concentrated: ConcentratedPoolInfo;
  /** The cosmwasm pool info */
  cosmwasm: CosmwasmPoolInfo;
}
export interface InfoByPoolTypeProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.InfoByPoolType";
  value: Uint8Array;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolTypeAmino {
  /** The stable pool info */
  stable?: StablePoolInfoAmino;
  /** The balancer pool info */
  balancer?: BalancerPoolInfoAmino;
  /** The concentrated pool info */
  concentrated?: ConcentratedPoolInfoAmino;
  /** The cosmwasm pool info */
  cosmwasm?: CosmwasmPoolInfoAmino;
}
export interface InfoByPoolTypeAminoMsg {
  type: "osmosis/protorev/info-by-pool-type";
  value: InfoByPoolTypeAmino;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolTypeSDKType {
  stable: StablePoolInfoSDKType;
  balancer: BalancerPoolInfoSDKType;
  concentrated: ConcentratedPoolInfoSDKType;
  cosmwasm: CosmwasmPoolInfoSDKType;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfo {
  /** The weight of a stableswap pool */
  weight: Long;
}
export interface StablePoolInfoProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.StablePoolInfo";
  value: Uint8Array;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfoAmino {
  /** The weight of a stableswap pool */
  weight: string;
}
export interface StablePoolInfoAminoMsg {
  type: "osmosis/protorev/stable-pool-info";
  value: StablePoolInfoAmino;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfoSDKType {
  weight: Long;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfo {
  /** The weight of a balancer pool */
  weight: Long;
}
export interface BalancerPoolInfoProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.BalancerPoolInfo";
  value: Uint8Array;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfoAmino {
  /** The weight of a balancer pool */
  weight: string;
}
export interface BalancerPoolInfoAminoMsg {
  type: "osmosis/protorev/balancer-pool-info";
  value: BalancerPoolInfoAmino;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfoSDKType {
  weight: Long;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfo {
  /** The weight of a concentrated pool */
  weight: Long;
  /** The maximum number of ticks we can move when rebalancing */
  maxTicksCrossed: Long;
}
export interface ConcentratedPoolInfoProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.ConcentratedPoolInfo";
  value: Uint8Array;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfoAmino {
  /** The weight of a concentrated pool */
  weight: string;
  /** The maximum number of ticks we can move when rebalancing */
  max_ticks_crossed: string;
}
export interface ConcentratedPoolInfoAminoMsg {
  type: "osmosis/protorev/concentrated-pool-info";
  value: ConcentratedPoolInfoAmino;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfoSDKType {
  weight: Long;
  max_ticks_crossed: Long;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfo {
  /** The weight of a cosmwasm pool (by contract address) */
  weightMaps: WeightMap[];
}
export interface CosmwasmPoolInfoProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.CosmwasmPoolInfo";
  value: Uint8Array;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfoAmino {
  /** The weight of a cosmwasm pool (by contract address) */
  weight_maps: WeightMapAmino[];
}
export interface CosmwasmPoolInfoAminoMsg {
  type: "osmosis/protorev/cosmwasm-pool-info";
  value: CosmwasmPoolInfoAmino;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfoSDKType {
  weight_maps: WeightMapSDKType[];
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMap {
  /** The weight of a cosmwasm pool (by contract address) */
  weight: Long;
  /** The contract address */
  contractAddress: string;
}
export interface WeightMapProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.WeightMap";
  value: Uint8Array;
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMapAmino {
  /** The weight of a cosmwasm pool (by contract address) */
  weight: string;
  /** The contract address */
  contract_address: string;
}
export interface WeightMapAminoMsg {
  type: "osmosis/protorev/weight-map";
  value: WeightMapAmino;
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMapSDKType {
  weight: Long;
  contract_address: string;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenom {
  /** The denom i.e. name of the base denom (ex. uosmo) */
  denom: string;
  /**
   * The step size of the binary search that is used to find the optimal swap
   * amount
   */
  stepSize: string;
}
export interface BaseDenomProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.BaseDenom";
  value: Uint8Array;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenomAmino {
  /** The denom i.e. name of the base denom (ex. uosmo) */
  denom: string;
  /**
   * The step size of the binary search that is used to find the optimal swap
   * amount
   */
  step_size: string;
}
export interface BaseDenomAminoMsg {
  type: "osmosis/protorev/base-denom";
  value: BaseDenomAmino;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenomSDKType {
  denom: string;
  step_size: string;
}
/**
 * BaseDenoms represents all of the base denoms that the module uses for its
 * arbitrage trades.
 */
export interface BaseDenoms {
  baseDenoms: BaseDenom[];
}
export interface BaseDenomsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.BaseDenoms";
  value: Uint8Array;
}
/**
 * BaseDenoms represents all of the base denoms that the module uses for its
 * arbitrage trades.
 */
export interface BaseDenomsAmino {
  base_denoms: BaseDenomAmino[];
}
export interface BaseDenomsAminoMsg {
  type: "osmosis/protorev/base-denoms";
  value: BaseDenomsAmino;
}
/**
 * BaseDenoms represents all of the base denoms that the module uses for its
 * arbitrage trades.
 */
export interface BaseDenomsSDKType {
  base_denoms: BaseDenomSDKType[];
}
export interface AllProtocolRevenue {
  takerFeesTracker: TakerFeesTracker;
  cyclicArbTracker: CyclicArbTracker;
}
export interface AllProtocolRevenueProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.AllProtocolRevenue";
  value: Uint8Array;
}
export interface AllProtocolRevenueAmino {
  taker_fees_tracker?: TakerFeesTrackerAmino;
  cyclic_arb_tracker?: CyclicArbTrackerAmino;
}
export interface AllProtocolRevenueAminoMsg {
  type: "osmosis/protorev/all-protocol-revenue";
  value: AllProtocolRevenueAmino;
}
export interface AllProtocolRevenueSDKType {
  taker_fees_tracker: TakerFeesTrackerSDKType;
  cyclic_arb_tracker: CyclicArbTrackerSDKType;
}
export interface CyclicArbTracker {
  cyclicArb: Coin[];
  heightAccountingStartsFrom: Long;
}
export interface CyclicArbTrackerProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.CyclicArbTracker";
  value: Uint8Array;
}
export interface CyclicArbTrackerAmino {
  cyclic_arb: CoinAmino[];
  height_accounting_starts_from: string;
}
export interface CyclicArbTrackerAminoMsg {
  type: "osmosis/protorev/cyclic-arb-tracker";
  value: CyclicArbTrackerAmino;
}
export interface CyclicArbTrackerSDKType {
  cyclic_arb: CoinSDKType[];
  height_accounting_starts_from: Long;
}