import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    debugger;
    let owner = Ember.getOwner(this);
    var Component = owner._lookupFactory('component:test-component');
    Component.create().appendTo('#target');

    window.viewRegistry = owner.lookup('-view-registry:main');

    console.log('-view-registry:main is ', window.viewRegistry);
    console.log('component view registry is ', window.testComponentViewRegistry);
  }
});
