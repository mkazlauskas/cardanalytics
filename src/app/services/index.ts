import { loader } from 'graphql.macro';
import { GraphQLClient } from 'graphql-request';
import { Asset_Aggregate_Fields, Block, Transaction_Aggregate_Fields } from '@cardano-graphql/client-ts';
import { from } from 'rxjs';
import { CardanoStats } from '../types';

interface QueryResponse {
  transactions_aggregate: {
    aggregate: Pick<Transaction_Aggregate_Fields, 'count'>
  };
  cardano: {tip: Required<Pick<Block, 'epochNo'|'number'|'slotNo'>>};
  assets_aggregate: {
    aggregate: Pick<Asset_Aggregate_Fields, 'count'>;
  }
}

const client = new GraphQLClient('http://139.162.181.109:3100/graphql');

export const services = {
  load() {
    return client.request(loader('./query.graphql')).then(
      ({ assets_aggregate, cardano: { tip }, transactions_aggregate }: QueryResponse) => ({
        assets: parseInt(assets_aggregate.aggregate.count),
        blocks: tip.number || 0,
        epoch: tip.epochNo || 0,
        slot: tip.slotNo || 0,
        transactions: parseInt(transactions_aggregate.aggregate.count),
      } as CardanoStats)
    );
  },
  load$() {
    return from(this.load());
  }
};
export type Services = typeof services;