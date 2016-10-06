import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', {path: "/about"});
  this.route('index', {path: "/"});

  this.route('note', function() {
    this.route('show', {
      path: ":note_id"
    });
  });
});

export default Router;
