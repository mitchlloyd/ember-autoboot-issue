import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    window.testComponentViewRegistry = this._viewRegistry;
  },

  layout: hbs`<p>Can't click this</p>`,

  click() {
    alert('clicked');
  }
});
