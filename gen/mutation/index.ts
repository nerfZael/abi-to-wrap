import {
  Ethereum_TxResponse,
  Ethereum_Mutation,
  Input_approve,
  Input_transferFrom,
  Input_transfer
} from "./w3";
import { BigInt } from '@web3api/wasm-as';

export function approve(input: Input_approve): Ethereum_TxResponse {
  return Ethereum_Mutation.callContractMethod({
    connection: input.connection,
    address: input.address,
    method: "function approve(address _spender, uint256 _value) public returns (bool)",
    args: [input._spender, input._value.toString()]
  });
}

export function transferFrom(input: Input_transferFrom): Ethereum_TxResponse {
  return Ethereum_Mutation.callContractMethod({
    connection: input.connection,
    address: input.address,
    method: "function transferFrom(address _from, address _to, uint256 _value) public returns (bool)",
    args: [input._from, input._to, input._value.toString()]
  });
}

export function transfer(input: Input_transfer): Ethereum_TxResponse {
  return Ethereum_Mutation.callContractMethod({
    connection: input.connection,
    address: input.address,
    method: "function transfer(address _to, uint256 _value) public returns (bool)",
    args: [input._to, input._value.toString()]
  });
}
