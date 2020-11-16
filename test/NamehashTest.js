var NamehashTest = artifacts.require("NamehashTest");
var namehash = require('eth-ens-namehash');

contract('NamehashTest', (accounts) => {

  it("should correctly hash 'www.example.com'", async () => {
    let instance = await NamehashTest.deployed();
    let result = await instance.namehash(web3.utils.toHex("www.example.com"));
    let expected = namehash.hash("www.example.com");

    let gas = await instance.namehash.estimateGas(web3.utils.toHex("www.example.com"));
    console.log("      gas: namehash(): " + gas)

    assert.equal(result, expected, "Incorrect hash");
  })
  it("should correctly hash 'another.example2.eth'", async () => {
    let instance = await NamehashTest.deployed();
    let result = await instance.namehash(web3.utils.toHex("another.example2.eth"));
    let expected = namehash.hash("another.example2.eth");

    let gas = await instance.namehash.estimateGas(web3.utils.toHex("another.example2.eth"));
    console.log("      gas: namehash(): " + gas)

    assert.equal(result, expected, "Different than eth-ens-namehash");
  })
  it("should correctly hash 'eth'", async () => {
    let instance = await NamehashTest.deployed();
    let result = await instance.namehash(web3.utils.toHex("eth"));
    let expected = namehash.hash("eth");

    let gas = await instance.namehash.estimateGas(web3.utils.toHex("eth"));
    console.log("      gas: namehash(): " + gas)

    assert.equal(result, expected, "Different than eth-ens-namehash");
  })
  it("should correctly hash 'yet.another.ex.xyz'", async () => {
    let instance = await NamehashTest.deployed();
    let result = await instance.namehash(web3.utils.toHex("yet.another.ex.xyz"));
    let expected = namehash.hash("yet.another.ex.xyz");

    let gas = await instance.namehash.estimateGas(web3.utils.toHex("yet.another.ex.xyz"));
    console.log("      gas: namehash(): " + gas)

    assert.equal(result, expected, "Different than eth-ens-namehash");
  })
})
