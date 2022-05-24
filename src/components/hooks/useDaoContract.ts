import Web3 from 'web3';
import donationABI from '../../config/abis';
import { donationContractAddress } from './../../config/contracts/index';

export default function useDaoContract() {
  const web3 = new Web3('https://alfajores-forno.celo-testnet.org');
  const daoContract = new web3.eth.Contract(donationABI, donationContractAddress);
  return { daoContract, web3 };
}