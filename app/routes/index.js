import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import search from 'yelp/gql/queries/search';

//"garaje-san-francisco"

export default Route.extend({
  apollo: queryManager(),
  queryParams: {
    term: {
      refreshModel: true
    },
    location:{
        refreshModel: true
    },
    price:{
        refreshModel: true
    }
  },
  model(params) {
    
    if (params.term) {
      const inputs = { term: params.term , location:params.location || 'new york', price:params.price};
      return this.apollo.watchQuery(
        { query: search, variables: inputs },
        'search'
      );
    }
    
  }
});
