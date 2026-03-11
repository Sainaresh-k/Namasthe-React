const p = new promise((resolve, reject) => {
    resolve('promise resolved')
})
async function handlePromise() {
    const val = await p;
    console.log(val)
}
handlePromise()

