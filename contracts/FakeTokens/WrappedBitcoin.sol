
pragma solidity ^0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title WrappedBitcoin
/// @author Christopher Dixon
////////////////////////////////////////////////////////////////////////////////////////////
/**
@notice the WrappedBitcoin contract is used to simulate an ERC20 with uniswap on kovan
**/
contract WrappedBitcoin is  Ownable, ERC20 {

     constructor() public ERC20(
         "WrappedBitcoin",
         "WBTC"
       ){
         _Mint(msg.sender,10000000000000000000000000000);
     }

     function _Mint(address _to, uint _amount) public onlyOwner {
       _mint(_to, _amount);
     }

     function _Burn(address _from, uint _amount) public onlyOwner {
         _burn(_from, _amount);
     }


}
