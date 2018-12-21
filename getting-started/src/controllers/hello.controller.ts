// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {get, post} from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }

  @post('/hello')
  helloPost(value: string): string {
    return 'SERIO' + value;
  }
}
