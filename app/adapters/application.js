
import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
                firebase: new window.Firebase('https://radiant-inferno-2931.firebaseio.com/')
});