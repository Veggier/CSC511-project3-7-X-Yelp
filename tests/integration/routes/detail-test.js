// import { module, test } from 'qunit';
// import hbs from 'htmlbars-inline-precompile';
// import { click, render } from '@ember/test-helpers';
// import EmberObject from '@ember/object';
// import { setupRenderingTest } from 'ember-qunit';
// // DETAILS.HBS
// /* <header class="details__header">
//     <h2 class='businessName'>{{ model.business.name }}</h2>
//     {{#if model.favorite}}
//       <button class="unsave" {{action "unsave"}}>Unsave</button>
//     {{ else}}
//       <button class="save" {{action "save"}}>Save</button>
//     {{/if}}
//   </header>
//   <ul>
//     <li class='url'>URL: {{ model.business.url }}</li>
//   </ul>
// */
// /*<div class="col-md-12 bg-light">
//       <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
//         <div class="col p-4 d-flex flex-column position-static">
//           <strong class="d-inline-block mb-2 text-primary url"><a href={{model.business.url}}>Yelp Link</a> 
          
//           </strong>
//           <div>
//           <h3 class="mb-0 businessName">{{model.business.name}}               {{#if model.favorite}}
//             <button class="btn btn-outline-primary unsave" {{action 'unsave'}}>Unsave</button>
//           {{else}}
//             <button  class="btn btn-outline-primary save" {{action 'save'}}>Save</button>
//           {{/if}}</h3>
//           </div>
//           <div class="mb-1 text-muted price"><b>Price:</b>{{model.business.price}}</div>
//           <div class="card-text mb-auto rating"><b>Rating:</b>{{model.business.rating}}</div>
//           <p class="card-text mb-auto phone"><b>Phone:</b>{{model.business.display_phone}}</p>
//           <p class="card-text mb-auto address"><b>Address:</b>{{model.business.location.formatted_address}}</p>
//         </div>
//         <div class="col-auto d-none d-lg-block">
//           <img src="{{model.business.photos}}" alt="photo" width="250" height="250">
//         </div>
//       </div>
//          {{#g-map lat=model.business.coordinates.latitude lng=model.business.coordinates.longitude zoom=12 as |g|}}
//       {{g.marker lat=model.business.coordinates.latitude lng=model.business.coordinates.longitude}}
//     {{/g-map}}
//   </div>
//    */
// module('Integration | yelp search detail', function(hooks) {
//   setupRenderingTest(hooks);
//   test('details loaded correctly if its unfavorited', async function(assert) {
//     assert.expect(9);
//     const name = 'LINKEDIN';
//     const url = 'FAKEURL.com';
//     const price = '$';
//     const rating ='1';
//     const display_phone='1234567890';
//     const formatted_address="Csi";
//     const latitude="40";
//     const longitude="70";
//     const modelMOCK = {
//       business: {name, url,price,rating,display_phone,
//         location:{formatted_address},
//         coordinates:{latitude,longitude}
//     },
//       favorite: false,
//     };
  
//     this.set('model', modelMOCK);
//     await render(hbs`{{details model=model }}`); // await in acceptance test
    
//     assert.dom('.businessName').exists({ count: 1 }, 'business name exists');
//     assert.dom('.businessName').hasText(name, 'business name is the correct name');

//     assert.dom('.price').exists({ count: 1 }, 'price exists');
//     assert.dom('.price').hasText(price, 'price is the correct price');

//     assert.dom('.rating').exists({ count: 1 }, 'rating exists');
//     assert.dom('.rating').hasText(rating, 'rating is the correct rating');

//     assert.dom('.phone').exists({ count: 1 }, 'display_phone exists');
//     assert.dom('.phone').hasText(display_phone, 'display_phone is the correct display_phone');

//     assert.dom('.address').exists({ count: 1 }, 'formatted_address exists');
//     assert.dom('.address').hasText(formatted_address, 'formatted_address is the correct formatted_address');
    
//     assert.dom('.save').exists({ count: 1 }, 'save button exists because its not favorited yet');
//     // 
//     assert.dom('.url').exists({ count: 1 }, 'url name exists');
//     assert.dom('.url').hasText(url, 'url  is the correct url');
//     await click('.save');
//     assert.dom('.save').doesNotExist({ count: 1 }, 'save button doesnt exist anymore cause we already saved it');
//     assert.dom('.unsave').exists({ count: 1 }, 'unsave button exists because its favorited');
//   });
// });