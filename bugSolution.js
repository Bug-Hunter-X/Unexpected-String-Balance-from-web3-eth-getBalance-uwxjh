function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return parseInt(balance);
}

// ... later in the code ...

const balance = await getBalance(account);
console.log(balance); // This will now consistently return a number