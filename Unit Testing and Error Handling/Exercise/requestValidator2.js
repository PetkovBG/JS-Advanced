function solve(obj){

    let methodOptions = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[\w.]+$/g;
    let versionOptions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messageChars = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if(!obj.hasOwnProperty('method')){
        throw new Error('Invalid request header: Invalid Method')
    } else if(!obj.hasOwnProperty('uri')){
        throw new Error('Invalid request header: Invalid URI')
    } else if(!obj.hasOwnProperty('version')){
        throw new Error('Invalid request header: Invalid Version')
    } else if (!obj.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message')
    }



    if(!methodOptions.includes(obj.method)){
        throw new Error("Invalid request header: Invalid Method");
    } else if(!obj.hasOwnProperty('uri')){
        throw new Error("Invalid request header: Invalid Uri");
    } else if (obj.uri !== '*' && !obj.uri.match(uriPattern)){
        throw new Error("Invalid request header: Invalid URI");
    } else if(!versionOptions.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version')
    } 

    for (let ch of obj.message){
        if (messageChars.includes(ch)){
            throw new Error('Invalid request header: Invalid Message')
        }
    }

    return obj;

}
solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  );