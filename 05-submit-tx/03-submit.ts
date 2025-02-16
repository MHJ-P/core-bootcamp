// 0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14

import path from 'path'
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

import {
  Hex,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import artifacts from "./submit.artifacts.json";

// Application Binary Interface
const { abi } = artifacts;

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(`0x${privateKey}` as Hex);

(async () => {
  const client = createWalletClient({
    account,
    transport: http(process.env.API_URL),
  }).extend(publicActions);

  const contractAddress = '0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14';
  const contract = getContract({
    address: contractAddress,
    abi,
    client,
  });

  const tx = await contract.write.recordSubmission([
    'MHJ-Parena',
    'Mary Heart',
    '0xab91A35570b04b29911885a501588b84Ed170D84',
    '0xd00682aA8C1702720eF0596Bc644b3142c3fFB1C'
    ]);    
  console.log('tx', tx);
})();