import hre from "hardhat";

async function main() {
  const contract = await hre.ethers.getContractAt("MyNFT", "0xd00682aA8C1702720eF0596Bc644b3142c3fFB1C");
  await contract.mint();
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});