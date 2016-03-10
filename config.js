module.exports.Config  = {
  listen_port : 3000,
  geth_addr: "localhost",
  geth_port: 8545,
  enforce : true,
  authorized_calls: [
     'eth_getBalance',
     'eth_getBlockByNumber',
     'eth_getBlockTransactionCountByNumber',
     'eth_getTransactionByHash',
     'eth_getTransactionByBlockNumberAndIndex',
     'eth_getTransactionCount',
      'eth_sendRawTransaction',
      'eth_getTransactionReceipt',
      'eth_call',
      'eth_getCode',
      'eth_getStorageAt']

}
