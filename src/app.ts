import { argv } from 'node:process';

argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});
