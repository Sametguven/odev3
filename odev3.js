let tc = document.getElementById('tc')
let ad = document.getElementById('ad')
let soyad = document.getElementById('soyad')
let ekle_butonu = document.getElementById('ekle')
let sil_butonu = document.getElementById('sil')
let güncelle_butonu = document.getElementById('güncelle')
let liste = document.getElementById('liste')


let tablo_tc = document.getElementById('tablo_tc')


ekle_butonu.addEventListener('click' , function tc_kontrolu () {

    if (tc.value.length !== 11 || tc.value.length == 0) { // 11 hane ve boş bırakmayı kontrol ettim
        alert("Kimlik numarası 11 haneli olmak zorundadır ve bu alan boş bırakılamaz")
    }
})

ekle_butonu.addEventListener('click' , function ad_kontrolu() {
    if (ad.value.length == 0) {
        alert("Ad bilgisi girilmedi")
    
    }  
})

ekle_butonu.addEventListener('click' , function soyad_kontrolu() {
    if (soyad.value.length == 0) {
        alert("Soyad bilgisi girilmedi")
    
    } 
})

ekle_butonu.addEventListener('click' , function ad_ve_soyad_kontrolu() {
    if (ad.value.length == 0 && soyad.value.length == 0) {
        alert("Ad ve Soyad bilgisi girilmedi")
    }
})

ekle_butonu.onclick = function (event) {

    event.preventDefault()

    //td yi olusturdum
    let button = document.createElement("button")
    let tabloTc = document.createElement("td")
    let tabloAd = document.createElement("td")
    let tabloSoyad = document.createElement("td")
   
    button.textContent = "Seç"
    tabloTc.textContent = tc.value
    tabloAd.textContent = ad.value
    tabloSoyad.textContent = soyad.value

    

    tc.value = ""
    ad.value = ""
    soyad.value = ""
    

    //tr yi olusturuyorum
    let tr = document.createElement("tr")

    //td leri tr icine atıyorum

    tr.appendChild(button)
    tr.appendChild(tabloTc)
    tr.appendChild(tabloAd)
    tr.appendChild(tabloSoyad)
    
    //tr yi tabloya attim
    liste.appendChild(tr)
}

button.onclick = function () {
    tc.textContent = tabloTc.value
    ad.textContent = tabloAd.value
    soyad.textContent = tabloSoyad.value

}

    

