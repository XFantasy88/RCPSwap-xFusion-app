import { Web3Provider } from '@ethersproject/providers'
import { Blockchain } from '@rcpswap/sdk'
import { BLOCKCHAIN } from '../connectors'

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider, 'any')
  switch (BLOCKCHAIN) {
    case Blockchain.BINANCE_SMART_CHAIN:
      library.pollingInterval = 1500
      break
    case Blockchain.NOVA:
      library.pollingInterval = 500
      break
    case Blockchain.POLYGON:
      library.pollingInterval = 1500
      break
    default:
      library.pollingInterval = 15000
      break
  }
  return library
}
