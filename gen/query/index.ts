import {
  Ethereum_Query,
  Input_name,
  Input_totalSupply,
  Input_decimals,
  Input_balanceOf,
  Input_symbol,
  Input_allowance
} from "./w3";
import { BigInt } from '@web3api/wasm-as';

export function name(input: Input_name): string {
  const result = Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function name() public view returns (string)",
    args: []
  });

  return result;
}

export function totalSupply(input: Input_totalSupply): BigInt {
  const result = Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function totalSupply() public view returns (uint256)",
    args: []
  });

  return BigInt.fromString(result);
}

export function decimals(input: Input_decimals): u8 {
  const result = Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function decimals() public view returns (uint8)",
    args: []
  });

  return parseInt(result) as u8;
}

export function balanceOf(input: Input_balanceOf): BigInt {
  const result = Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function balanceOf(address _owner) public view returns (uint256)",
    args: [input._owner]
  });

  return BigInt.fromString(result);
}

export function symbol(input: Input_symbol): string {
  const result = Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function symbol() public view returns (string)",
    args: []
  });

  return result;
}

export function allowance(input: Input_allowance): BigInt {
  const result = Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function allowance(address _owner, address _spender) public view returns (uint256)",
    args: [input._owner, input._spender]
  });

  return BigInt.fromString(result);
}
