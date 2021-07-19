export interface CardanoStats {
  blocks: number;
  transactions: number;
  assets: number;
  epoch: number;
  slot: number;
  currentFees: {
    min: number;
    max: number;
    average: number;
  };
}