function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// ... later in the code ...

const balance = await getBalance(account);
console.log(balance); // This may return a string instead of a number