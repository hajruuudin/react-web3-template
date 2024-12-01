import { useContext, createContext, useEffect, useState } from "react";
import Web3 from "web3";

const Web3Context = createContext();

const contractABI = [];
const contractAddress = "";

export const Web3Provider = ({children}) => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const initialiseWeb3 = async () => {
            if(window.ethereum){
                try{
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);

                    await window.ethereum.request({method: "eth_requestAccounts"})
                    const accounts = await web3Instance.eth.getAccounts();
                    setAccount(accounts[0]); 

                    const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
                    setContract(contractInstance);
                } catch (error){
                    console.error('Error while connecting to MetaMask!', error)
                }
            } else {
                console.error("MetaMask is not installed! Please install it!")
            }
        }

        initialiseWeb3()
    }, [])

    return (
        <Web3Context.Provider value={{ web3, account, contract }}>
            {children}
        </Web3Context.Provider>
    );
}

export const useWeb3 = () => {
    return useContext(Web3Context);
};