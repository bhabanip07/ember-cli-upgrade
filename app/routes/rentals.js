import Route from '@ember/routing/route';
// import { getOwner } from '@ember/application';
// import BufferedProxy from 'ember-buffered-proxy/proxy';
// import RemoteCustomersValidation from 'mgr/validators/remote-customers-validation';

export default Route.extend({
  model() {
    return this.store.findAll('rental');
}
});
