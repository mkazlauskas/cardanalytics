import { loader } from 'graphql.macro';
import { Asset_Aggregate_Fields, Block, Transaction, Transaction_Aggregate_Fields } from '@cardano-graphql/client-ts';
import { from } from 'rxjs';
import { min, max, mean } from 'lodash-es';
import { CardanoStats } from '../../types';

// TODO: would be great to generate this type from schema.graphql+query.graphql
type TransactionFees = Pick<Transaction, 'fee'>[];
type CardanoTip = {
  transactions: TransactionFees;
  previousBlock: {
    transactions: TransactionFees;
  };
} & Required<Pick<Block, 'epochNo'|'number'|'slotNo'>>;
interface QueryResponse {
  transactions_aggregate: {
    aggregate: Pick<Transaction_Aggregate_Fields, 'count'>
  };
  cardano: {
    tip: CardanoTip;
  };
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
        currentFees: cardanoTipToFeesAggregate(tip),
      } as CardanoStats)
    ));
  },
  // Same as load(), but returns an Observable
  load$() {
    return from(this.load());
  }
};

function cardanoTipToFeesAggregate({ previousBlock, transactions }: CardanoTip) {
  const allTransactions = [...previousBlock.transactions, ...transactions].map(t => parseInt(t.fee));
  // Assuming there can't be 2 consecutive blocks with no transactions
  return {
    min: min(allTransactions)!,
    max: max(allTransactions)!,
    average: mean(allTransactions),
  };
}
