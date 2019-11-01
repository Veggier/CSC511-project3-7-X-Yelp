import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
//import DS from 'ember-data';
//import { A } from '@ember/array';
//import RSVP from 'rsvp';
import sinon from 'sinon';
//import EmberObject from '@ember/object';
// ember test --server
// 
module('Acceptance | main restaurant search page', function(hooks) {
  let sandbox = sinon.createSandbox();
  setupApplicationTest(hooks);
  hooks.after(function() {
    sandbox.restore();
  });
  test('Logged out page is rendered correctly', async function(assert) {
    await visit('/'); 
    assert.equal(currentURL(), '/', 'we have successfully reached the main page of our app');
    assert.dom('.sign-in').exists('the sign in button exists');
  });
  test('Loged in page is rendered correctly', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'Coolio'
    });
    await visit('/');
    assert.equal(currentURL(), '/', 'we have reached the main page');
    assert.dom('.sign-out').exists('the mandtory sign out button exists');
    assert.dom('.favorites').exists('the favorites button exists');
  });

  test('search correctly', async function(assert) {
    await visit('/detail/zcPWqsiqaPpNh8nJXR4gpw');
    assert.equal(currentURL(), '/detail/zcPWqsiqaPpNh8nJXR4gpw', 'we have reached the detail page');
     assert.dom('.address').exists('formatted_address exists');
     assert.dom('.phone').exists('display_phone exists');
     assert.dom('.rating').exists('rating exists');
     assert.dom('.price').exists('price exists');
     assert.dom('.businessName').exists('business name exists');
  });
});

// test('search correctly', async function(assert) {
//   const store = this.owner.lookup('service:store');
//   const searchResultMOCKModel = EmberObject.create({
//     business: { name: 'fake restaurant NYC' },
//     favorite: false,
//     yelpid: 'zcPWqsiqaPpNh8nJXR4gpw'
//   });
//   sinon.stub(store, 'query').callsFake(function() {
//     return DS.PromiseArray.create({
//       promise: RSVP.resolve(A([searchResultMOCKModel]))
//     });
//   });
//   await authenticateSession({
//     userId: 1,
//     displayName: 'Coolio'
//   });
//   await visit('/detail/zcPWqsiqaPpNh8nJXR4gpw');
//   assert.equal(currentURL(), '/');
//   assert.dom('.sign-out').exists();
//   assert.dom('.favorites').exists();
//   await click('.searhcButton');
//   assert.dom('h2').hasText('fake restaurant NYC');
//   assert.dom('.unsave').exists();
// });