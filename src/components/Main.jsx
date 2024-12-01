import { useWeb3 } from "../Web3Provider"

export default function Main(){
    const { account } = useWeb3();
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-2xl text-white">Yippie! Connected to {account}</h1>
            <h2 className="text-xl text-white">Now adjust the Web3Provider.jsx as needed!</h2>
        </div>
    )
}