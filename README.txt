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

2) Telefon — AYARLANDI (+90 506 953 40 98) / E-posta — AYARLANDI
   index.html içinde "İletişim" bölümünde:
     tel:+905069534098
     mailto:Goldengrapeturkey@gmail.com

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
   (03.09.2026'de dosya adları SEO-dostu isimlerle değiştirildi; eski adlar parantez içinde)
   a) Üst "Hero" slider (header'ın hemen altında, tam genişlik, otomatik geçişli):
        kapadokya-balon-gun-dogumu.jpg (eski: hero-1.jpg) -> Gün Doğumu slaydı (balonlar)
        kapadokya-vadide-atv-turu.jpg (eski: hero-2.jpg) -> ATV Turu slaydı
        peribacalari-klasik-otomobil.jpg (eski: hero-3.jpg) -> Klasik Otomobil slaydı
        kizilcukur-gun-batimi.jpg (eski: hero-4.jpg) -> Gün Batımı slaydı
      (Daha fazla slayt eklemek isterseniz index.html içinde <section id="top"> bloğunda
      bir ".hero-slide" div'ini kopyalayıp data-index numarasını artırmanız yeterli;
      slider bunu otomatik algılar.)

   b) "Galeri" slider (sayfanın altında, sürüklenebilir/oklu):
        galeri-kizilcukur-gun-batimi.jpg, galeri-balon-gun-dogumu.jpg,
        galeri-ask-vadisi-atv-konvoyu.jpg, galeri-peribacalari-klasik-otomobil.jpg,
        galeri-klasik-otomobil-balon-gun-dogumu.jpg, galeri-vadide-atv-turu.jpg,
        galeri-klasik-otomobil-sicak-hava-balonu.jpg, galeri-klasik-otomobil-gun-dogumu-balonlari.jpg
        (eski adlar: gallery-1.jpg ... gallery-8.jpg, aynı sırayla)

   c) Tur kartı görselleri:
        atv-gun-dogumu-turu.jpg (eski: tour-atv-sunrise.jpg)
        atv-gun-batimi-turu.jpg (eski: tour-atv-sunset.jpg)
        atv-gun-ici-turu-manzara.jpg (eski: tour-atv-viewpoint.jpg)
        atv-gun-ici-turu.jpg (eski: tour-atv-daytime.jpg)
        klasik-otomobil-gun-dogumu-turu.jpg (eski: tour-classic-car.jpg)
        klasik-otomobil-gun-batimi-turu.jpg (eski: tour-balloon-classic.jpg)
        klasik-otomobil-gun-ici-turu.jpg (eski: tour-classic-photo.jpg)
        atv-klasik-kombine-tur.jpg (eski: tour-combo.jpg)

   Bu fotoğraflar şu an Pexels'ten alınmış, ticari kullanım dahil ücretsiz lisanslı
   (Pexels License) GERÇEK stok fotoğraflardır — genel Kapadokya/ATV/klasik otomobil
   temalıdır, sizin turlarınızın veya araçlarınızın gerçek fotoğrafları DEĞİLDİR.
   İşletmenize ait gerçek fotoğraflarınız olduğunda mutlaka onlarla değiştirin;
   en güçlü etki gerçek misafirlerinizin, araçlarınızın ve rehberlerinizin
   fotoğraflarından gelir.

   Değiştirmek için EN KOLAY yöntem: yeni fotoğrafı aynı dosya adıyla
   (örn. "kapadokya-balon-gun-dogumu.jpg") assets/img/ klasörüne kopyalayıp üzerine yazmanız yeterli;
   index.html'de hiçbir değişiklik gerekmez. Farklı bir dosya adı kullanırsanız
   index.html içindeki ilgili <img src="assets/img/..."> satırını da güncelleyin.

   Önerilen boyutlar: hero slaytları geniş (1920×1200 civarı), tur kartları 1000×650,
   galeri görselleri 1100×850 civarı (yaklaşık 4:3 / 16:10 oranlarında, mevcut
   dosyalarla aynı oranı korursanız kırpılma sorunu yaşamazsınız).

GERÇEK İŞLETME FOTOĞRAFLARI (Desktop\tur fotoğraf klasöründen, 31.07.2026'de eklendi)
------------------------------------------------------------------------------------
Aşağıdaki 7 dosya artık stok fotoğraf değil, işletmenizin kendi klasik otomobil
turlarından gerçek fotoğraflardır (Desktop'taki "tur fotoğraf" klasöründen alındı,
kart/hero çerçevesine göre kırpıldı). Güncel dosya adları (03.09.2026'de değiştirildi):
peribacalari-klasik-otomobil.jpg (eski: hero-3.jpg), klasik-otomobil-gun-dogumu-turu.jpg
(eski: tour-classic-car.jpg), klasik-otomobil-gun-batimi-turu.jpg (eski: tour-balloon-classic.jpg),
klasik-otomobil-gun-ici-turu.jpg (eski: tour-classic-photo.jpg), galeri-kizilcukur-gun-batimi.jpg
(eski: gallery-1.jpg), galeri-balon-gun-dogumu.jpg (eski: gallery-2.jpg),
galeri-peribacalari-klasik-otomobil.jpg (eski: gallery-4.jpg)

Aynı klasörde kullanılmayan 10 fotoğraf daha var (çoğu farklı misafirlerle benzer
kompozisyonlar) — isterseniz bunlarla galeriye/kartlara daha fazla çeşitlilik
eklenebilir.

GERÇEK İŞLETME FOTOĞRAFLARI — İKİNCİ PARTİ (Desktop\Yeni klasör'den, 31.07.2026'de eklendi)
------------------------------------------------------------------------------------
Bu partide ATV turlarından ve klasik otomobil + balon buluşmalarından gerçek fotoğraflar
eklendi, aşağıdaki stok/eski dosyaların yerine kondu. Güncel dosya adları (03.09.2026'de değiştirildi):
kapadokya-balon-gun-dogumu.jpg (eski: hero-1.jpg), kapadokya-vadide-atv-turu.jpg (eski: hero-2.jpg),
atv-gun-dogumu-turu.jpg (eski: tour-atv-sunrise.jpg), atv-gun-batimi-turu.jpg (eski: tour-atv-sunset.jpg),
atv-gun-ici-turu-manzara.jpg (eski: tour-atv-viewpoint.jpg), atv-gun-ici-turu.jpg (eski:
tour-atv-daytime.jpg, gallery-6.jpg'den kart çerçevesine kırpıldı), galeri-ask-vadisi-atv-konvoyu.jpg
(eski: gallery-3.jpg), galeri-klasik-otomobil-balon-gun-dogumu.jpg (eski: gallery-5.jpg),
galeri-vadide-atv-turu.jpg (eski: gallery-6.jpg), galeri-klasik-otomobil-sicak-hava-balonu.jpg
(eski: gallery-7.jpg), galeri-klasik-otomobil-gun-dogumu-balonlari.jpg (eski: gallery-8.jpg)

Kaynak fotoğraflar (orijinal, yüksek çözünürlüklü hallerini istediğinizde kullanmak için)
Desktop\Yeni klasör klasörüne geri taşındı. O klasörde ayrıca kullanılmayan birkaç fotoğraf
daha var (bir adam modelin klasik otomobille poz verdiği WhatsApp fotoğrafı gibi) —
isterseniz ileride galeriye eklenebilir. IMG_1501.HEIC dosyası şu an bu bilgisayarda
açılamadığı için hiç kullanılmadı; isterseniz iPhone/Mac üzerinden JPEG'e çevirip
gönderebilirsiniz.

KALAN STOK FOTOĞRAF KAYNAKLARI (Pexels License — ticari kullanım serbest, atıf zorunlu değil)
------------------------------------------------------------------------------------
Not: hero-1, hero-2, tour-atv-sunrise, tour-atv-sunset, tour-atv-viewpoint, tour-atv-family,
gallery-3, gallery-5, gallery-6, gallery-7 ve gallery-8 artık gerçek işletme fotoğrafı
(yukarıdaki "İKİNCİ PARTİ" notuna bakın) — bu yüzden aşağıdaki listeden çıkarıldılar.
Hâlâ stok kalan tek görsel (gallery-1, gallery-2, gallery-4 ilk partide değişmişti, bu
listeden zaten çıkarılmıştı):
atv-klasik-kombine-tur.jpg (eski: tour-combo.jpg)   https://www.pexels.com/photo/aerial-view-of-rock-formations-in-cappadocia-turkey-19328648/

NOT: hero-4.jpg (yukarıdaki Pexels "cappadocia red valley" fotoğrafı) diskte başka biri
tarafından "peribacaları4.jpg" adıyla farklı bir görselle değiştirilmiş ama index.html hâlâ
eski hero-4.jpg'yi arıyordu (kırık görsel). 03.09.2026'de bu dosya kizilcukur-gun-batimi.jpg
adıyla hero-4'ün yerine bağlandı — görselin gerçek işletme fotoğrafı mı yoksa başka bir stok
fotoğraf mı olduğu doğrulanmadı, kontrol etmek isterseniz assets/img/kizilcukur-gun-batimi.jpg
dosyasına bakın.

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
