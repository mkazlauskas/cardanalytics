import { loader } from 'graphql.macro';
import { Asset_Aggregate_Fields, Block, Transaction_Aggregate_Fields } from '@cardano-graphql/client-ts';
import { from } from 'rxjs';
import { CardanoStats } from '../../types';

// TODO: would be great to generate this type from schema.graphql+query.graphql
interface QueryResponse {
  transactions_aggregate: {
    aggregate: Pick<Transaction_Aggregate_Fields, 'count'>
  };
  cardano: {tip: Required<Pick<Block, 'epochNo'|'number'|'slotNo'>>};
  assets_aggregate: {
    aggregate: Pick<Asset_Aggregate_Fields, 'count'>;
  }
}

// Use mock client for tests
const loadClientLib = process.env.TEST_BUILD
  ?	import('./graphql-request.mock')
  : import('graphql-request');
const loadClient = loadClientLib.then(({ GraphQLClient }) => new GraphQLClient(process.env.GRAPHQL_URL));

export default {
  // Query cardano data via GraphQL and remap the response to CardanoStats
  load() {
    return loadClient.then(client => client.request(loader('./query.graphql')).then(
      ({ assets_aggregate, cardano: { tip }, transactions_aggregate }: QueryResponse) => ({
        assets: parseInt(assets_aggregate.aggregate.count),
        blocks: tip.number || 0,
        epoch: tip.epochNo || 0,
        slot: tip.slotNo || 0,
        transactions: parseInt(transactions_aggregate.aggregate.count),
      } as CardanoStats)
    ));
  },
  // Same as load(), but returns an Observable
  load$() {
    return from(this.load());
  }
};