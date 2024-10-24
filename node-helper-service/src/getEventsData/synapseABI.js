const synapseABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32'
      }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'TokenDeposit',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'tokenIndexFrom',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'tokenIndexTo',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minDy',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      }
    ],
    name: 'TokenDepositAndSwap',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'contract IERC20Mintable',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      { indexed: false, internalType: 'uint256', name: 'fee', type: 'uint256' },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'kappa',
        type: 'bytes32'
      }
    ],
    name: 'TokenMint',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'contract IERC20Mintable',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      { indexed: false, internalType: 'uint256', name: 'fee', type: 'uint256' },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'tokenIndexFrom',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'tokenIndexTo',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minDy',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'swapSuccess',
        type: 'bool'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'kappa',
        type: 'bytes32'
      }
    ],
    name: 'TokenMintAndSwap',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'TokenRedeem',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'swapTokenIndex',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'swapMinAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'swapDeadline',
        type: 'uint256'
      }
    ],
    name: 'TokenRedeemAndRemove',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'tokenIndexFrom',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'tokenIndexTo',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minDy',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      }
    ],
    name: 'TokenRedeemAndSwap',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'to', type: 'bytes32' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'TokenRedeemV2',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      { indexed: false, internalType: 'uint256', name: 'fee', type: 'uint256' },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'kappa',
        type: 'bytes32'
      }
    ],
    name: 'TokenWithdraw',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      { indexed: false, internalType: 'uint256', name: 'fee', type: 'uint256' },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'swapTokenIndex',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'swapMinAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'swapDeadline',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'swapSuccess',
        type: 'bool'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'kappa',
        type: 'bytes32'
      }
    ],
    name: 'TokenWithdrawAndRemove',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'GOVERNANCE_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'NODEGROUP_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'WETH_ADDRESS',
    outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32[]', name: 'kappas', type: 'bytes32[]' }],
    name: 'addKappas',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'bridgeVersion',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'chainGasAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      { internalType: 'contract IERC20', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      { internalType: 'contract IERC20', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint8', name: 'tokenIndexFrom', type: 'uint8' },
      { internalType: 'uint8', name: 'tokenIndexTo', type: 'uint8' },
      { internalType: 'uint256', name: 'minDy', type: 'uint256' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' }
    ],
    name: 'depositAndSwap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'tokenAddress', type: 'address' }
    ],
    name: 'getFeeBalance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'uint256', name: 'index', type: 'uint256' }
    ],
    name: 'getRoleMember',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'kappa', type: 'bytes32' }],
    name: 'kappaExists',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address payable', name: 'to', type: 'address' },
      {
        internalType: 'contract IERC20Mintable',
        name: 'token',
        type: 'address'
      },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
      { internalType: 'bytes32', name: 'kappa', type: 'bytes32' }
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address payable', name: 'to', type: 'address' },
      {
        internalType: 'contract IERC20Mintable',
        name: 'token',
        type: 'address'
      },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
      { internalType: 'contract ISwap', name: 'pool', type: 'address' },
      { internalType: 'uint8', name: 'tokenIndexFrom', type: 'uint8' },
      { internalType: 'uint8', name: 'tokenIndexTo', type: 'uint8' },
      { internalType: 'uint256', name: 'minDy', type: 'uint256' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      { internalType: 'bytes32', name: 'kappa', type: 'bytes32' }
    ],
    name: 'mintAndSwap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      {
        internalType: 'contract ERC20Burnable',
        name: 'token',
        type: 'address'
      },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      {
        internalType: 'contract ERC20Burnable',
        name: 'token',
        type: 'address'
      },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint8', name: 'swapTokenIndex', type: 'uint8' },
      { internalType: 'uint256', name: 'swapMinAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'swapDeadline', type: 'uint256' }
    ],
    name: 'redeemAndRemove',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      {
        internalType: 'contract ERC20Burnable',
        name: 'token',
        type: 'address'
      },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint8', name: 'tokenIndexFrom', type: 'uint8' },
      { internalType: 'uint8', name: 'tokenIndexTo', type: 'uint8' },
      { internalType: 'uint256', name: 'minDy', type: 'uint256' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' }
    ],
    name: 'redeemAndSwap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'to', type: 'bytes32' },
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      {
        internalType: 'contract ERC20Burnable',
        name: 'token',
        type: 'address'
      },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'redeemV2',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'setChainGasAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_wethAddress',
        type: 'address'
      }
    ],
    name: 'setWethAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'startBlockNumber',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'contract IERC20', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
      { internalType: 'bytes32', name: 'kappa', type: 'bytes32' }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'contract IERC20', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
      { internalType: 'contract ISwap', name: 'pool', type: 'address' },
      { internalType: 'uint8', name: 'swapTokenIndex', type: 'uint8' },
      { internalType: 'uint256', name: 'swapMinAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'swapDeadline', type: 'uint256' },
      { internalType: 'bytes32', name: 'kappa', type: 'bytes32' }
    ],
    name: 'withdrawAndRemove',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'contract IERC20', name: 'token', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' }
    ],
    name: 'withdrawFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  { stateMutability: 'payable', type: 'receive' }
]

module.exports = { synapseABI }
