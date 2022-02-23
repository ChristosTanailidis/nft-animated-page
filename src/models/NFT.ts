export default interface NFT {
  id: string,
  title: string,
  user: string,
  bid: number,
  bidCurrency: string,
  img: string,
  dateOfEnd: Date
}