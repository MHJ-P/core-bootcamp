// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage {
    uint256 tokenId;

    constructor() ERC721("Ben10", "HAPPY") {}

    function mint() external {
        _safeMint(msg.sender, tokenId);
        _setTokenURI(
            tokenId,
            "ipfs://bafkreiamydfvm7q2h7m7emxkeqhebjek3u5o52mazrgr4p6o4cpwoyddz4"
        );
        tokenId++;
    }
}
