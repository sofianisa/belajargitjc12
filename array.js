// var belarr=['bob',true,20]
// var nama='bobi'
// var namaterbalik=nama.split('').reverse().join()
// console.log(belarr[1])
// console.log(nama)
// console.log(namaterbalik)

//terbalik menggunakan reverse, split memisahkan, join masuk lagi

// <buah.lenght> lebih baik dipakai dibanding <buah.push>

var buah=['apel','mangga','nanas','durian']
var harga=[20000,15000,5000,25000]
var output='list harga :\n'
for (var i=0; i<buah.length; i++) {
output +=(i+1)+'. ' +buah[i] + ' dengan harga Rp. ' +harga[i]
output +='\n'
}
console.log(output)