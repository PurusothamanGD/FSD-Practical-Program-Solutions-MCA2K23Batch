
//Change in index.JS:


//Write your code for function data that returns
//relevant dats to all holy grail section
write  this below code in index.js:

function data(){
    return new Promise((resolve, reject) => {
        client.mget(['header', 'left', 'article', 'right', 'footer'], function(err, values) {
            if (err) {
                reject(err);
            } else {
                const result = {
                    header: values[0],
                    left: values[1],
                    article: values[2],
                    right: values[3],
                    footer: values[4]
                };
                resolve(result);
            }
        });
    });

}
