---
name: brand-guidelines
description: Kapadokya ATV Tur markasının resmi renkleri, tipografisi ve görsel dilini herhangi bir çıktıya (web sayfası, broşür, PDF, sosyal medya görseli, sunum, e-posta) uygular. Marka renkleri, stil kuralları, görsel biçimlendirme veya kurumsal tasarım standartları söz konusu olduğunda kullan.
---

# Kapadokya ATV Tur — Marka Kılavuzu

## Genel Bakış

Bu skill, **Kapadokya ATV Tur** markasının görsel kimliğini herhangi bir materyale tutarlı biçimde uygular. Renkler ve tipografi doğrudan canlı sitenin (`kapadokyaatvtur.com`) tasarım tokenlarından (`tailwind.config.js` + `assets/css/style.css`) alınmıştır — yeni bir çıktı üretirken bu değerleri kaynak kabul et.

**Anahtar kelimeler**: marka, kurumsal kimlik, görsel kimlik, renk paleti, tipografi, Kapadokya ATV Tur, broşür, landing page, sosyal medya görseli, stil kuralları

**Marka özeti**
- İsim: **Kapadokya ATV Tur**
- Alan: Gün doğumu / gün batımı ATV turları, klasik otomobil ile vadi turları — Göreme, Kapadokya
- Ton: Doğal, sıcak, maceracı ama güven veren; premium ama abartısız
- Dil: Türkçe (birincil), İngilizce (ikincil)
- Logo: `assets/img/kapadokya-atv-tur-logo.jpeg`
- Rezervasyon kanalı: WhatsApp (`+90 506 953 40 98`)

## Renkler

### Ana renkler (nötr / zemin)

| Rol | Hex | Kullanım |
|-----|-----|----------|
| Ink (koyu) | `#0B2530` | Birincil metin, koyu zeminler, footer |
| Ink-2 | `#123340` | Koyu yüzey / kart |
| Ink-3 | `#1A4350` | Daha açık koyu yüzey |
| Paper (beyaz) | `#FFFFFF` | Ana açık zemin |
| Paper-2 | `#EAF4F4` | İkincil açık zemin (soft) |
| Paper-3 | `#D8ECEC` | Vurgusuz açık yüzey |
| Muted metin (açık zemin) | `#5B7373` | İkincil / açıklama metni |
| Muted metin (koyu zemin) | `#9FC2C2` | Koyu zeminde ikincil metin |

### Vurgu renkleri (marka)

| Rol | Hex | Açık ton | Koyu ton |
|-----|-----|----------|----------|
| **Turkuaz (birincil vurgu)** | `#0D9488` | `#2DD4BF` | `#0F766E` |
| **Camgöbeği (ikincil vurgu)** | `#0E7490` | `#22D3EE` | `#155E75` |
| Nane (dekoratif) | `#5EEAD4` | `#99F6E4` | `#2DD4BF` |

**Birincil vurgu `#0D9488` (turkuaz)** markanın imza rengidir: CTA butonları, linkler, seçim (`::selection`), odak halkası (`focus-visible`) ve hover durumlarında kullanılır.

### İmza gradyanı

```css
/* "Sunset" gradyan — hero, öne çıkan bölümler, CTA arkaplanı */
background: linear-gradient(120deg, #0D9488 0%, #14B8A6 50%, #0E7490 100%);

/* Yumuşak versiyon — bölüm arka planı */
background: linear-gradient(120deg, rgba(13,148,136,0.15), rgba(14,116,144,0.15));
```

### Dış kaynak renk

- WhatsApp yeşili: `#25D366` — yalnızca WhatsApp buton/ikonlarında. Marka paletinden sayılmaz, marka rengi gibi genel kullanma.

### Gölgeler

```css
--shadow-soft: 0 20px 45px -20px rgba(11,37,48,0.18);   /* kartlar */
--shadow-glow: 0 12px 30px -10px rgba(13,148,136,0.45); /* turkuaz parıltı, CTA */
```

## Tipografi

| Rol | Font yığını | Not |
|-----|-------------|-----|
| **Başlık / Display** | `Bahnschrift, "Arial Narrow", sans-serif` | Sıkışık, güçlü; H1–H3 ve büyük vurgular |
| **Gövde metni** | `ui-sans-serif, system-ui, sans-serif` | Sistem fontu — hızlı ve okunaklı |
| **Etiket / Rozet / Caption** | `Consolas, ui-monospace, monospace` | Tag-pill'ler, slayt altyazıları; **büyük harf**, `letter-spacing: 0.08em`, `font-weight: 700` |

- Başlıklar sıkı ve iddialı; gövde metni sade ve rahat okunur.
- Etiketler (tur kategorileri, rozetler) her zaman BÜYÜK HARF + monospace + harf aralıklı.

## Uygulama İlkeleri

### Renk kullanımı
- Zemin çoğunlukla `Paper (#FFFFFF)` veya `Paper-2 (#EAF4F4)`; metin `Ink (#0B2530)`.
- Vurgu için **tek baskın renk = turkuaz `#0D9488`**. Camgöbeği `#0E7490` ikincil/destekleyici; ikisini gradyanda birleştir.
- Nane `#5EEAD4` yalnızca küçük dekoratif dokunuşlar için (çok az kullan).
- Koyu mod tokenları mevcut (`data-theme="dark"`): zemin `#0B2530`, metin `#EAF4F4`. Karanlık çıktılarda bunları kullan.
- Kontrast: turkuaz zemin üzerine beyaz metin uygundur; açık turuncu/nane tonlar üzerine daima koyu (`Ink`) metin kullan.

### Görsel dil
- Yuvarlatılmış köşeler: kartlarda `2rem`'e kadar (`rounded-4xl`), butonlarda tam yuvarlak (`999px`) pill.
- Gölgeler yumuşak ve derin (`shadow-soft`), CTA'larda turkuaz `glow`.
- Fotoğraflar Kapadokya temalı gerçek tur görselleri (peri bacaları, balonlar, ATV konvoyu, klasik otomobil). Stok/soyut görsel yerine `assets/img/` içindeki gerçek fotoğrafları tercih et.
- Görsel üzerine metinde koyu gradyan overlay: `linear-gradient(0deg, rgba(11,37,48,0.85), transparent)`.

### CTA / dönüşüm
- Birincil CTA "WhatsApp'tan Rezervasyon" — WhatsApp yeşili buton (`#25D366`) veya turkuaz buton, net ve tekrar eden.
- Aksiyon dili doğrudan ve davetkâr: "Hemen Rezervasyon Yap", "WhatsApp'tan Yaz".

## Farklı çıktılara uyarlama

- **Web (HTML/Tailwind)**: Yukarıdaki hex'ler `tailwind.config.js` içinde `ink`, `paper`, `coral` (=turkuaz), `violet` (=camgöbeği), `teal` olarak zaten tanımlı; sınıf isimlerini oradan kullan. Not: tema adları tarihseldir — `coral` aslında turkuaz `#0D9488`, `violet` aslında camgöbeği `#0E7490`'dir.
- **PDF / broşür (`pdf` skill ile)**: Başlık = Bahnschrift/Arial Narrow, gövde = sistem sans; zemin beyaz, başlıklarda turkuaz gradyan şerit; alt bilgide iletişim + WhatsApp.
- **Sunum / sosyal görsel**: 120° turkuaz→camgöbeği gradyan kapak, beyaz Bahnschrift başlık, altta logo.
- Marka rengi olmayan renkleri (Anthropic turuncusu, rastgele mavi vb.) **kullanma** — palet yukarıdakiyle sınırlı.
