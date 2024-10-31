const { defaultAbiCoder, BigNumebr } = require('ethers/lib/utils')
const { constants: { HashZero } } = require('ethers')
const { getSynapseBridgeData } = require('../web3Helper/getSynapseBridgeData.js')
const logger = require('../utils/logger.js')

const encodeExtraData = async (extraDataString, routeName, fullData) => {
  const extraData = extraDataString ? JSON.parse(extraDataString) : null
  // if (extraData) {
  //   if (!extraData.path) extraData.path = []
  //   else {
  //     extraData.path = extraData.path.split(',')
  //     console.log(`Path -> ${extraData.path}`)
  //   }
  // }

  if (extraData && !extraData.path) { extraData.path = '0x' }

  switch (routeName) {
    case 'UNISWAP_V3': {
      return extraData
        ? defaultAbiCoder.encode(['uint256', 'uint24', 'uint160', 'bytes'], [extraData.deadline, extraData.fee, extraData.sqrtPriceLimitX96, extraData.path])
        : defaultAbiCoder.encode(['bytes'], [0])
    }
    case 'PANCAKE_V2': {
      return extraData
        ? defaultAbiCoder.encode(['uint256', 'uint24', 'uint160', 'address[]'], [extraData.deadline, extraData.fee, extraData.sqrtPriceLimitX96, JSON.parse(extraData.path)])
        : defaultAbiCoder.encode(['bytes'], [0])
    }
    case 'TRADERJOE_V1': {
      return extraData
        ? defaultAbiCoder.encode(['uint256', 'uint24', 'uint160', 'address[]'], [extraData.deadline, extraData.fee, extraData.sqrtPriceLimitX96, JSON.parse(extraData.path)])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'TRADERJOE_V2': {
      // const correctPath = [
      //   '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      //   '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      //   '0xbBAAA0420D474B34Be197f95A323C2fF3829E811'
      // ]
      // const binStepas = ['20', '25']
      // const versions = ['2', '2']
      // extraData.path = [binStepas, versions, correctPath]
      // console.log(extraData.path)

      const encodedData = defaultAbiCoder.encode(
        ['uint256', 'uint24', 'uint160', 'tuple(uint256[] pairBinSteps, uint8[] versions, address[] tokenPath)'],
        [extraData.deadline, extraData.fee, extraData.sqrtPriceLimitX96, JSON.parse(extraData.path)]
      )
      console.log(encodedData)
      return extraData
        ? encodedData
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'DFKDEX_V2': {
      return extraData
        ? defaultAbiCoder.encode(['uint256', 'uint24', 'uint160', 'address[]'], [extraData.deadline, extraData.fee, extraData.sqrtPriceLimitX96, JSON.parse(extraData.path)])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'TEALSWAP_V1': {
      return extraData
        ? defaultAbiCoder.encode(['uint256', 'uint24', 'uint160', 'address[]'], [extraData.deadline, extraData.fee, extraData.sqrtPriceLimitX96, JSON.parse(extraData.path)])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'TAFFY_DEX': {
      return extraData
        ? defaultAbiCoder.encode(['uint256', 'uint24', 'uint160', 'address[]'], [extraData.deadline, extraData.fee, extraData.sqrtPriceLimitX96, JSON.parse(extraData.path)])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'CANTODEX_V1': {
      return extraData
        ? defaultAbiCoder.encode(['uint256', 'tuple(address, address, bool)[]'], [extraData.deadline, JSON.parse(extraData.path)])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'GOERLI_OPTIMISM_STANDARD_L1_BRIDGE': {
      return extraData
        ? defaultAbiCoder.encode(['uint32', 'address', 'bytes'], [extraData.l2Gas, extraData.l2TokenAddress, '0x'])
        : defaultAbiCoder.encode(['bytes'], [0])
    }
    case 'OPTIMISM_GOERLI_STANDARD_L2_BRIDGE': {
      return extraData
        ? defaultAbiCoder.encode(['uint32', 'bytes'], [extraData.l1Gas, '0x'])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'GOERLI_CALDERA_STANDARD_L1_BRIDGE': {
      return extraData
        ? defaultAbiCoder.encode(['uint32', 'address', 'bytes'], [extraData.l2Gas, extraData.l2TokenAddress, '0x'])
        : defaultAbiCoder.encode(['bytes'], [0])
    }
    case 'CALDERA_GOERLI_STANDARD_L2_BRIDGE': {
      return extraData
        ? defaultAbiCoder.encode(['uint32', 'bytes'], [extraData.l1Gas, '0x'])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'GOERLI_CONDUIT_STANDARD_L1_BRIDGE': {
      return extraData
        ? defaultAbiCoder.encode(['uint32', 'address', 'bytes'], [extraData.l2Gas, extraData.l2TokenAddress, '0x'])
        : defaultAbiCoder.encode(['bytes'], [0])
    }
    case 'CONDUIT_GOERLI_STANDARD_L2_BRIDGE': {
      return extraData
        ? defaultAbiCoder.encode(['uint32', 'bytes'], [extraData.l1Gas, '0x'])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'OASYSTESTNET_VERSE_STANDARD_L1_BRIDGE': {
      return extraData
        ? defaultAbiCoder.encode(['uint32', 'address', 'bytes'], [extraData.l2Gas, extraData.l2TokenAddress, '0x'])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'OASYS_VERSE_STANDARD_L1_BRIDGE': {
      return extraData
        ? defaultAbiCoder.encode(['uint32', 'address', 'bytes'], [extraData.l2Gas, extraData.l2TokenAddress, '0x'])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'OASYS_VERSE_STANDARD_L2_BRIDGE': {
      return extraData
        ? defaultAbiCoder.encode(['uint32', 'bytes'], [extraData.l1Gas, '0x'])
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    case 'SYNAPSE_BRIDGE_V1': {
      const { originQuery, destQuery } = await getSynapseBridgeData(extraData.originChainDetailsId,
        extraData.destChainDetailsId, extraData.fromTokenAddress, extraData.toTokenAddress,
        extraData.amount, extraData.deadlineOrigin, extraData.deadlineDest, extraData.slippage)
      console.log(originQuery)
      console.log(destQuery)

      const encodedQueries = defaultAbiCoder.encode(
        ['tuple(address, address, uint256, uint256, bytes)', 'tuple(address, address, uint256, uint256, bytes)'],
        [originQuery, destQuery]
      )

      console.log(encodedQueries)
      return encodedQueries
    }
    /*
*const seaportData =  {
        "offerer": "string",
        "offer": [
          {
            "itemType": 2,
            "token": "string",
            "identifierOrCriteria": 42,
            "startAmount": 42,
            "endAmount": 42
          }
        ],
        "consideration": [
          {
            "itemType": 0,
            "token": "string",
            "identifierOrCriteria": 42,
            "startAmount": 42,
            "endAmount": 42,
            "recipient": "string"
          }
        ],
        "startTime": 42,
        "endTime": 42,
        "orderType": 0,
        "zone": "0x0000000000000000000000000000000000000000",
        "zoneHash": "string",
        "salt": "string",
        "conduitKey": "string",
        "totalOriginalConsiderationItems": 42,
        "counter": "1",
        "signature": "0x1234",
}

*/
    case 'ALTURA_SEAPORT' : {
      console.log(extraData)
      const seaportOrderData = JSON.parse(JSON.parse(extraData.seaportData).seaportOrderData)
      const nftPurchaseAmount = extraData.nftPurchaseAmount

      const { offer, orderType } = seaportOrderData

      if (orderType !== 1) {
        throw new Error('Only PARTIAL_OPEN ORDERS are supported')
      }

      let encodedOrderData
      if (parseInt(nftPurchaseAmount) < parseInt(offer[0].startAmount)) {
        console.log('Preparing Advance Method Data')
        const encodedOrderDataTemp = await encodeAdvancedOrderData(seaportOrderData, nftPurchaseAmount)
        encodedOrderData = defaultAbiCoder.encode(['uint8', 'bytes'], [2, encodedOrderDataTemp])
      } else if (parseInt(nftPurchaseAmount) === parseInt(offer[0].startAmount)) {
        console.log('Preparing Basic Method Data')
        const encodedOrderDataTemp = await encodeBasicOrderData(seaportOrderData, parseInt(nftPurchaseAmount))
        encodedOrderData = defaultAbiCoder.encode(['uint8', 'bytes'], [0, encodedOrderDataTemp])
      } else {
        throw new Error('Seaport Order Type not supported')
      }

      return encodedOrderData
    }

    case 'PARAVOX_PRIMARY_MARKETPLACE' : {
      console.log(extraData)
      const parsedMarketplaceData = JSON.parse(extraData.marketplaceData)
      const paravoxSignature = JSON.parse(parsedMarketplaceData).paravoxSignature
      const deadline = JSON.parse(parsedMarketplaceData).deadline

      const encodedOrderData = defaultAbiCoder.encode(['uint256', 'bytes'], [deadline, paravoxSignature])

      return encodedOrderData
    }

    case 'UBISOFT_MARKETPLACE' : {
      console.log(extraData)
      const parsedMarketplaceData = JSON.parse(extraData.marketplaceData)
      const requestId = JSON.parse(parsedMarketplaceData).requestId
      const additionalFees = JSON.parse(parsedMarketplaceData).additionalFees
      const additionalFeeRecipients = JSON.parse(parsedMarketplaceData).additionalFeeRecipients

      const encodedOrderData = defaultAbiCoder.encode(['uint256', 'uint256[]', 'uint256[]'], [requestId, additionalFees, additionalFeeRecipients])

      return encodedOrderData
    }

    case 'UBISOFT_CRAFT_MARKETPLACE' : {
      console.log(extraData)
      const parsedMarketplaceData = JSON.parse(extraData.marketplaceData)
      const relayData = JSON.parse(parsedMarketplaceData).craftRelayData
      const signature = JSON.parse(parsedMarketplaceData).craftSignature

      const encodedOrderData = defaultAbiCoder.encode(
        ['tuple(bytes32 nonce,address to,uint256 validityStart,uint256 validityEnd,uint256 chainId,bytes callData)', 'bytes'],
        [[relayData.nonce, relayData.to, relayData.validityStart, relayData.validityEnd, relayData.chainId, relayData.callData], signature]
      )

      return encodedOrderData
    }

    case 'SIMPLE_V1_DEX': {
      let wrap = false
      if (fullData.fromTokenAddress === '0x0000000000000000000000000000000000001010') {
        wrap = true
      }
      return defaultAbiCoder.encode(['bool', 'bytes'], [wrap, 0])
    }

    case 'DEFI_VERSE_DEX' : {
      const balancerData = JSON.parse(extraData.path)
      const swapPathLength = balancerData.swapPath.length
      const swapAssetsLength = balancerData.swapAssets.length

      balancerData.swapLimits = Array(swapAssetsLength).fill(0)

      if (fullData.swapType === 'EXACT_IN') {
        balancerData.swapPath[0].amount = fullData.inAmount

        balancerData.swapLimits[0] = fullData.inAmount
        balancerData.swapLimits[swapAssetsLength - 1] = (-fullData.outAmount).toString()

        if (fullData.fromTokenAddress === '0x0000000000000000000000000000000000001010') {
          balancerData.swapAssets[0] = '0x0000000000000000000000000000000000000000'
        } else if (fullData.toTokenAddress === '0x0000000000000000000000000000000000001010') {
          balancerData.swapAssets[swapAssetsLength - 1] = '0x0000000000000000000000000000000000000000'
        }
      } else {
        balancerData.swapPath[0].amount = (fullData.outAmount).toString()

        balancerData.swapLimits[0] = (-fullData.outAmount).toString()
        balancerData.swapLimits[swapAssetsLength - 1] = fullData.inAmount

        if (fullData.fromTokenAddress === '0x0000000000000000000000000000000000001010') {
          balancerData.swapAssets[swapAssetsLength - 1] = '0x0000000000000000000000000000000000000000'
        } else if (fullData.toTokenAddress === '0x0000000000000000000000000000000000001010') {
          balancerData.swapAssets[0] = '0x0000000000000000000000000000000000000000'
        }
      }

      logger.info('Balancer Final Created Data', { info: balancerData })

      console.log(balancerData)

      const encodedData = defaultAbiCoder.encode(
        ['uint256', 'tuple(bytes32 poolId,uint256 assetInIndex,uint256 assetOutIndex,uint256 amount,bytes userData)[]', 'address[]', 'int256[]'],
        [extraData.deadline, balancerData.swapPath, balancerData.swapAssets, balancerData.swapLimits]
      )
      console.log(encodedData)
      return extraData
        ? encodedData
        : defaultAbiCoder.encode(['bytes'], [0])
    }

    default : {
      return defaultAbiCoder.encode(['bytes'], [0])
    }
  }
}

// encodeExtraData(JSON.stringify({ originChainDetailsId: '1a01d245-cde4-49bc-b0c2-ccafde1d5da8', destChainDetailsId: '589ffc60-90e1-4a82-9b05-92ac31eab54e', fromTokenAddress: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', toTokenAddress: '0x77f2656d04E158f915bC22f07B779D94c1DC47Ff', amount: '1000000', deadlineOrigin: '1700000', deadlineDest: '8900000', slippage: '3000' }), 'AVALANCHE_SYNAPSE_BRIDGE')

const encodeAdvancedOrderData = async (seaportOrderData, nftPurchaseAmount) => {
  const {
    offerer,
    zone,
    zoneHash,
    startTime,
    endTime,
    orderType,
    offer,
    consideration,
    salt,
    conduitKey,
    totalOriginalConsiderationItems,
    counter,
    signature
  } = seaportOrderData

  const encodedAdvancedOrderData = defaultAbiCoder.encode(
    [
      'tuple(tuple(address,address,tuple(uint8,address,uint256,uint256,uint256)[],tuple(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)'
    ],
    [
      [
        [
          offerer,
          zone,
          offer.map(({ itemType, token, identifierOrCriteria, startAmount, endAmount }) => [itemType, token, identifierOrCriteria, startAmount, endAmount]),
          consideration.map(({ itemType, token, identifierOrCriteria, startAmount, endAmount, recipient }) => [itemType, token, identifierOrCriteria, startAmount, endAmount, recipient]),
          orderType,
          startTime,
          endTime,
          zoneHash,
          salt,
          conduitKey,
          totalOriginalConsiderationItems
        ],
        nftPurchaseAmount,
        offer[0].startAmount,
        signature,
        HashZero
      ]
    ]
  )

  return encodedAdvancedOrderData
}

const encodeBasicOrderData = async (seaportOrderData, nftPurchaseAmount) => {
  const {
    offerer,
    zone,
    zoneHash,
    startTime,
    endTime,
    orderType,
    offer,
    consideration,
    salt,
    conduitKey,
    totalOriginalConsiderationItems,
    counter,
    signature
  } = seaportOrderData

  const additionalRecipients = [
    // { amount: '40000000000000000', recipient: '0xf2f9ed9f20696d900d324514552238023f649b51' }
    // Add more recipients as needed
  ]

  if (!offerer || !startTime || !endTime || !consideration || !salt || !signature) {
    throw new Error('Incomplete order data: All fields must be present.')
  }

  const priceAfterCuts = consideration[0].startAmount

  for (let i = 1; i < consideration.length; i++) {
    additionalRecipients.push({ amount: consideration[i].startAmount, recipient: consideration[i].recipient })
  }

  const encodedBasicOrderData = defaultAbiCoder.encode(
    ['address', 'uint256', 'uint256', 'uint256', 'tuple(uint256, address payable)[]', 'uint256', 'address', 'bytes32', 'bytes32', 'bytes'],
    [offerer, startTime, endTime, salt, additionalRecipients.map(({ amount, recipient }) => [amount, recipient]),
      priceAfterCuts, zone, zoneHash, conduitKey, signature])

  return encodedBasicOrderData
}
module.exports = {
  encodeExtraData
}
