/**
 * @param  {Array} array 
 * @param  {Number} n perform n left rotations on the array
 */
function leftRorartion (array, n){
    if(typeof n !== 'number') return 'n should be a integer'
    for(let i = 0; i < n; i++){
        let rotation = array.shift() 
        array.push(rotation)
    }
    return array
}

module.exports = leftRorartion

