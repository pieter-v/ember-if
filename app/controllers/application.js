import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  existingAction() {
    console.log('existingAction');
  }
}
