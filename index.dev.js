require('@babel/polyfill')
require('@babel/register')

require('./ssr/boot').default().catch((err) => {
    console.log('*** BOOT: Fatal Error')
    console.log(err)
})

// Let Docker exit on Ctrl+C
process.on('SIGINT', function() {
    process.exit();
});
