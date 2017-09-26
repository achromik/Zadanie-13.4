var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var info = '    /node - node version\n\
    /getOSinfo - system information\n\
    /lang - OS language\n\
    /help - this info\n\
    /exit - exit program\n';

    //console.log(process.env);
    if( input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit' : 
                process.stdout.write('Quiting app!\n');
                process.exit();
                break;
            case '/lang' :
                process.stdout.write('Environment language: ' + process.env.lang + '\n');    
                break;
            case '/node' :
                process.stdout.write('Node version: ' + process.versions.node + '\n');
                break; 
            case '/help' :
                process.stdout.write('Usage: \n' + info);
                break;    
            case '/getOSinfo':
                OSinfo.print();                
                break;
            default:
                process.stderr.write('Wrong instruction!\n\n' + info);
                                      
        }

    }
});



