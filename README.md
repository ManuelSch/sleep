# @manuelsch/sleep 😴

A simple, Promise-based sleep function for TypeScript applications.
* Works with `async/await`
* Usable in the browser and with node.js


## Installation ⬇

```sh
npm install @manuelsch/sleep --save
```
```sh
yarn add @manuelsch/sleep
```

## Usage:

```ts
import sleep from '@manuelsch/sleep';

async someFunction() {
    console.log('Print this immediately');
    
    await sleep(1000);
    
    console.log('Print this 1 second later');
}
```

## This is the whole source code:
```ts
const sleep = async (duration: number) => new Promise<void>(resolve => setTimeout(() => resolve(), duration));
export default sleep;
```
