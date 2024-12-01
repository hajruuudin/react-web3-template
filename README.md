# React + Web3JS Template

This is a basic file structure and template for simple projects using Solidity and Etherum as a backend service. The structure conists of a basic system where all the connection and required variables for Web3 and React to work have already been set up. The only thing left for development is adding the contract functions. Feel free to copy and use as needed. The tempalte is based of React, Web3 and Tailwind for styling. It is compiled and created with Vite + NodeJS.

## Set Up I - Downloading the template
To make this work, copy the repository and mrun the following commands inside of the terminal at the root directory:
```
npm install // to install React, Web3 and Tailwind required libraries
npm run dev // to get the server running at port 5173
```

Afterwards, everything is explained inside of the files, but essentially, everything is focused around Web3Provider as a context to the whole react application. All variables realted to the smart contract as well as methods from the smart contract should be written inside Web3Provider.jsx:
```
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </StrictMode>,
)
```
```
/*
-- CONTEXT PROVIDING - MODIFY --
  This will return the context, along with all of the states and functions.
  In the "value" prop, provide all the functions you place, or any state you might require.
  ANY FUNCTION THAT IS NOT PROVIDED HERE BUT CALLED LATER WILL RESULT IN AN ERROR.
*/
return (
  <Web3Context.Provider value={{ web3, account, contract, helloContextProvider }}>
    {children}
  </Web3Context.Provider>
);
```
## Set Up II - Key variables
Everything is ready made except two variables: The contract ABI and the Contract address of an existing Solidiy contract. This should be placed by the user, after which all the methods from the contract should be implemented as needed. The methods are provided as functions of the context:
```
const contractABI = []; // replace this with the actual contract ABI
const contractAddress = ""; // replace this with the actual contract address
```

## References
Context and its use = https://react.dev/learn/passing-data-deeply-with-context \
Web3JS Documentation = https://web3js.readthedocs.io/en/v1.10.0/ \
Contract used in the application Demo = /TODO/ \
Solidity and its syntax = https://soliditylang.org/
