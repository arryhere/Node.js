
function average(...arr){
    let sum = 0;
    arr.forEach((e,i,arr)=>{
        sum += e;
    })
    return sum/arr.length;
}

module.exports = {
    average: average,
    name: 'Arijit',
    repo: 'github/arryhere'

}