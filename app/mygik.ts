
const variable = 'kevin';

class Greeter {
  saySomething(message: string = 'what is up') {
    return message + ' something';
  }
}

var greeter = new Greeter();
greeter.saySomething('hello ');

