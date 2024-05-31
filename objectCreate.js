let ogrenci = {
    ad : 'Mehmet ',
    soyad:'Bulut',
    number:9716,
    okul:'ABC Univercity'
}

//Bir nesne olustururken JSON data ozelliginden faydalanilir.Olusturulan nesnenin icine
// {} arasinda kalmak sartiyla birden fazla ozellik eklenebilir

console.log(ogrenci.ad)
console.log(ogrenci.soyad)

ogrenci.ad= 'Ahmet'


console.log(ogrenci.ad)
console.log(ogrenci.soyad)

console.log(ogrenci["number"])
console.log(ogrenci["okul"])