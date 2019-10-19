'use strict';

module.exports = function(environment) {
 
  let ENV = {
    apollo: {
      apiURL:'/api'
    },
    modulePrefix: 'yelp',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase:
    {
      apiKey: "AIzaSyB7id26iNDp1Pf1_roUPTkZayY9cALWQs4",
      authDomain: "silver-fastness-239916.firebaseapp.com",
      databaseURL: "https://silver-fastness-239916.firebaseio.com",
      projectId: "silver-fastness-239916",
      storageBucket: "silver-fastness-239916.appspot.com",
      messagingSenderId: "1041548687916",
      appId: "1:1041548687916:web:81485050f5cb0eb6aaaf89",
      measurementId: "G-23YTBPLDYB"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }
  ENV['ember-google-maps'] = {
    key:"AIzaSyDHD8SSiicI5-7LwLdOHP8V4htrqjElSEc", // Using .env files in this example
    language: 'en',
    region: 'GB',
    protocol: 'https',
    version: '3.38',
    libraries: ['geometry', 'places'], // Optional libraries
    // client: undefined,
    // channel: undefined,
    // baseUrl: '//maps.googleapis.com/maps/api/js'
    }
  return ENV;
};
