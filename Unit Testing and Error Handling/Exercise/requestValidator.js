const { version } = require("chai");

function solve(obj){

    let methodOptions = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versionOptions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if(!obj.hasOwnProperty('method')){
        throw new Error('Invalid request header: Invalid Method')
    } else if(!obj.hasOwnProperty('uri')){
        throw new Error('Invalid request header: Invalid Uri')
    } else if(!obj.hasOwnProperty('version')){
        throw new Error('Invalid request header: Invalid Version')
    } else if (!obj.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message')
    }

    if(!methodOptions.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method')
        } else if(obj.uri.length < 1){ // add || and fix this

    } else if(typeof obj.version !== 'string' || !versionOptions.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version')
    } else if(obj.message !== 'string'){ //fix this

    }
 
}
solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  );