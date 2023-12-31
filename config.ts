import { config } from "@imtbl/sdk";

export const RPC = "https://rpc.testnet.immutable.com";

export const environment = config.Environment.SANDBOX;

export const collectionAddress:string = '123';

export const gasOverrides = {
  maxPriorityFeePerGas: 100e9, // 100 Gwei
  maxFeePerGas: 150e9,
  gasLimit: 200000, // Set an appropriate gas limit for your transaction
};