import post from './post';

const module = [
    post,
];

let apis = {};
for (let index = 0; index < module.length; index++) {
    apis = module[index] ? {...apis, ...module[index]} : {};
}

export default apis;
