// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {get, post, param} from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }
}
