import {eventEmitter} from './event';

eventEmitter.on('Mr.a',(data1 , data2) => {
    console.log('Mr.a data => ', data1);
    console.log('More data => ', data2);

    eventEmitter.emit('Mr.b','Send to Mr.b' + data2);
});

eventEmitter.on('Mr.b',(data) => {
  console.log('Mr.b data => ',data);
});

async function main(){

    // setTimeout(() => {
    //   eventEmitter.emit('Mr.a','send to Mr.a','send more data');
    // },1000);

    setInterval(() => {
      eventEmitter.emit('Mr.a', 'Send to Mr.a',Math.random());
    },1000);
}

main();
