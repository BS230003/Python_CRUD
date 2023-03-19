
//var async = require ("async")

var DEBUG = true;

function println (msg)
{
 if (DEBUG) {
   var jsonDate = (new Date()).toJSON();
   console.log( jsonDate + ' myParser ' +  msg);
 }
}

function testTimeout (num)
{
    return new Promise (resolve => {
        setTimeout ( () => {
            resolve ("resolved now");
        }, num);

        println (" ... done ");
    });
}

async function asyncCall ()
{
    println( "calling 1");
    const res = await testTimeout (3000);
    println ( " calling 2 " + res);

    println (" is timer over ??? ");
        
}

asyncCall ();

println ("over... and out..");