GOLDEN GRAPE TRAVEL — SİTE KULLANIM NOTLARI
==========================================

DOSYA YAPISI
------------
index.html              -> Sayfanın tamamı
assets/css/tailwind.css -> Yerel olarak derlenmiş Tailwind CSS (CDN kullanılmıyor)
assets/css/style.css    -> Özel stiller (renkler, kartlar, slider, açık/koyu tema)
assets/js/main.js       -> Menü, tema değiştirme, SSS akordeonu, hero slider, galeri slider, WhatsApp linkleri
assets/img/             -> Görseller (Pexels'ten telifsiz/ticari kullanıma uygun fotoğraflar, kaynaklar aşağıda)
tailwind.config.js      -> Tailwind renk/yazı tipi ayarları (yalnızca CSS'i yeniden derlerken gerekli)

DEĞİŞTİRMENİZ GEREKENLER
-------------------------
1) WhatsApp numarası — AYARLANDI (+90 506 953 40 98)
   assets/js/main.js dosyasının en üstünde:
     var WHATSAPP_NUMBER = "905069534098";
   Numara değişirse burayı güncelleyin (başında ülke kodu "90", boşluk ve tire olmadan).
   Tüm WhatsApp butonları (üst menü, kartlar, iletişim, sağ alt köşedeki yuvarlak ikon)
   otomatik olarak bu numarayı kullanır.

2) Telefon — AYARLANDI (+90 506 953 40 98) / E-posta — yer tutucu
   index.html içinde "İletişim" bölümünde:
     tel:+905069534098
     mailto:info@goldengrapetravel.com
   E-posta hâlâ yer tutucu, gerçek adresinizi girmek isterseniz bu satırı güncelleyin.

2b) Instagram
   Sayfanın en altında (footer, telif satırının yanında) bir Instagram ikonu var,
   şu an https://www.instagram.com/goldengrapeturkey adresine gidiyor. Adres
   değişirse index.html içinde bu satırı bulup güncelleyin:
     href="https://www.instagram.com/goldengrapeturkey?igsh=Mm8zcXYxcDBkcjN6"

2c) Güzergah bilgisi (ATV turları)
   Turlarımız bölümündeki 4 ATV kartının her birinde (Gün Doğumu, Gün Batımı,
   Gün İçi x2), "Güzergah" yazan küçük bir butona tıklayınca açılan bir panel var.
   Şu an doldurulmuş durumda:
     2 saatlik turlar: Aşk Vadisi → Beyaz Vadi → Kılıçlar Vadisi → Kızıl Vadi
     1 saatlik tur: Aşk Vadisi → Kılıçlar Vadisi → Kızıl Vadi
   Güzergah değişirse index.html içinde ilgili karttaki ".route-panel" içindeki
   <p> metnini bulup güncelleyin.

3) Fotoğraflar — SİTEDE İKİ AYRI SLIDER VAR
   a) Üst "Hero" slider (header'ın hemen altında, tam genişlik, otomatik geçişli):
        hero-1.jpg -> Gün Doğumu slaydı (balonlar)
        hero-2.jpg -> ATV Turu slaydı
        hero-3.jpg -> Klasik Otomobil slaydı
        hero-4.jpg -> Gün Batımı slaydı
      (Daha fazla slayt eklemek isterseniz index.html içinde <section id="top"> bloğunda
      bir ".hero-slide" div'ini kopyalayıp data-index numarasını artırmanız yeterli;
      slider bunu otomatik algılar.)

   b) "Galeri" slider (sayfanın altında, sürüklenebilir/oklu):
        gallery-1.jpg ... gallery-8.jpg

   c) Tur kartı görselleri:
        tour-atv-sunrise.jpg, tour-atv-sunset.jpg, tour-classic-car.jpg, tour-combo.jpg

   Bu fotoğraflar şu an Pexels'ten alınmış, ticari kullanım dahil ücretsiz lisanslı
   (Pexels License) GERÇEK stok fotoğraflardır — genel Kapadokya/ATV/klasik otomobil
   temalıdır, sizin turlarınızın veya araçlarınızın gerçek fotoğrafları DEĞİLDİR.
   İşletmenize ait gerçek fotoğraflarınız olduğunda mutlaka onlarla değiştirin;
   en güçlü etki gerçek misafirlerinizin, araçlarınızın ve rehberlerinizin
   fotoğraflarından gelir.

   Değiştirmek için EN KOLAY yöntem: yeni fotoğrafı aynı dosya adıyla
   (örn. "hero-1.jpg") assets/img/ klasörüne kopyalayıp üzerine yazmanız yeterli;
   index.html'de hiçbir değişiklik gerekmez. Farklı bir dosya adı kullanırsanız
   index.html içindeki ilgili <img src="assets/img/..."> satırını da güncelleyin.

   Önerilen boyutlar: hero slaytları geniş (1920×1200 civarı), tur kartları 1000×650,
   galeri görselleri 1100×850 civarı (yaklaşık 4:3 / 16:10 oranlarında, mevcut
   dosyalarla aynı oranı korursanız kırpılma sorunu yaşamazsınız).

GERÇEK İŞLETME FOTOĞRAFLARI (Desktop\tur fotoğraf klasöründen, 31.07.2026'de eklendi)
------------------------------------------------------------------------------------
Aşağıdaki 7 dosya artık stok fotoğraf değil, işletmenizin kendi klasik otomobil
turlarından gerçek fotoğraflardır (Desktop'taki "tur fotoğraf" klasöründen alındı,
kart/hero çerçevesine göre kırpıldı):
hero-3.jpg, tour-classic-car.jpg, tour-balloon-classic.jpg, tour-classic-photo.jpg,
gallery-1.jpg, gallery-2.jpg, gallery-4.jpg

Aynı klasörde kullanılmayan 10 fotoğraf daha var (çoğu farklı misafirlerle benzer
kompozisyonlar) — isterseniz bunlarla galeriye/kartlara daha fazla çeşitlilik
eklenebilir.

KALAN STOK FOTOĞRAF KAYNAKLARI (Pexels License — ticari kullanım serbest, atıf zorunlu değil)
------------------------------------------------------------------------------------
hero-1.jpg             https://www.pexels.com/photo/hot-air-balloons-at-sunrise-in-cappadocia-34183941/
hero-2.jpg             https://www.pexels.com/photo/two-people-riding-atv-on-desert-2986409/
hero-4.jpg             https://www.pexels.com/photo/cappadocia-red-valley-in-turkey-18676075/
tour-atv-sunrise.jpg   https://www.pexels.com/photo/men-posing-on-quads-on-desert-20734802/
tour-atv-sunset.jpg    https://www.pexels.com/photo/person-riding-an-atv-drifting-on-sand-5976872/
tour-combo.jpg         https://www.pexels.com/photo/aerial-view-of-rock-formations-in-cappadocia-turkey-19328648/
tour-atv-viewpoint.jpg https://www.pexels.com/photo/a-couple-sitting-on-top-of-a-hill-with-hot-air-balloons-flying-around-them-in-cappadocia-turkey-15834105/
tour-atv-family.jpg    https://www.pexels.com/photo/two-people-riding-atv-on-desert-2986409/
gallery-1.jpg          https://www.pexels.com/photo/urgup-nevsehir-kizilcukur-vadisi-12809807/
gallery-2.jpg          https://www.pexels.com/photo/view-of-hot-air-balloons-flying-over-cappadocia-turkey-19228322/
gallery-3.jpg          https://www.pexels.com/photo/men-posing-on-quads-on-desert-20734802/
gallery-4.jpg          https://www.pexels.com/photo/people-in-vintage-car-on-desert-15750673/
gallery-5.jpg          https://www.pexels.com/photo/love-valley-in-cappadocia-13291644/
gallery-6.jpg          https://www.pexels.com/photo/person-riding-an-atv-drifting-on-sand-5976872/
gallery-7.jpg          https://www.pexels.com/photo/ancient-uchisar-castle-in-cappadocia-turkey-31034652/
gallery-8.jpg          https://www.pexels.com/photo/rocky-landscape-during-sunset-5320133/

CSS'İ YENİDEN DERLEME (yalnızca index.html'e YENİ bir Tailwind class'ı eklerseniz gerekir)
--------------------------------------------------------------------------------------------
1) Node.js kurulu olmalı (https://nodejs.org)
2) Bu klasörde bir terminal açıp şunu çalıştırın:
     npx tailwindcss@3 -i ./assets/css/src/input.css -o ./assets/css/tailwind.css --minify
3) assets/css/tailwind.css dosyası güncellenir, index.html'i tarayıcıda yenileyin.

Sadece metin, renk kodu (style.css içindeki :root değişkenleri) ya da görsel değiştiriyorsanız
yeniden derlemeye gerek YOK.

SİTEYİ AÇMA
-----------
index.html dosyasına çift tıklayıp herhangi bir tarayıcıda açabilirsiniz.
Bir web barındırma (hosting) hizmetine yüklerken "assets" klasörünü de
index.html ile birlikte, aynı klasör yapısını koruyarak yükleyin.
