import Connex from "@vechain/connex";
import * as thor from '@vechain/web3-providers-connex'
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useInterval } from 'usehooks-ts'

// connect to Vechain
const connex = new Connex({
  node: "https://node-mainnet.vechain.energy",
  network: "main"
});


// inject Vechain Connex Connectivity into an ethers provider
const provider = thor.ethers.modifyProvider(
  new ethers.providers.Web3Provider(
    new thor.Provider({ connex })
  )
)

// configure the VTHO contract like any other contract
const CONTRACT_ADDRESS = '0x0000000000000000000000000000456e65726779'
const ABI = [{
  name: "totalSupply",
  inputs: [],
  outputs: [{ internalType: "uint256", name: "vtho", type: "uint256" }],
  stateMutability: "view",
  type: "function"
}]

// create a contract instance based on the provider, ABI and contract address
const VTHOContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

export default function App() {
  const [totalSupply, setTotalSupply] = useState('0')

  // call the contract like a regular function
  const updateVthoSupply = () => VTHOContract.totalSupply()
    .then(totalSupply => setTotalSupply(ethers.utils.formatEther(totalSupply)))

  useEffect(() => { updateVthoSupply() }, [])
  useInterval(() => { updateVthoSupply() }, 10 * 1000)

  return (
    <div className="columns is-multiline">
      <div className="column is-full" />
      <div className="column is-full has-text-centered title">Total Supply of VTHO</div>
      <div className="column is-full has-text-centered subtitle">{Number(totalSupply).toLocaleString()}</div>
    </div>
  );
}
