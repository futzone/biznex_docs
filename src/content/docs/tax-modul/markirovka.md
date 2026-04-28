---
title: Markirovkalangan tovarni sotish
description: Biznex POS da raqamli markirovkalangan mahsulotlarni sotish, Data Matrix skanerlash va "Label" maydonini to'g'ri shakllantirish
---

# **Markirovkalangan tovarni sotish**

Biznex POS NIS "ASL BELGISI" tizimi bilan to'liq integratsiya qilingan: Data Matrix kodi avtomatik o'qiladi, `Label` maydoni tovar guruhiga ko'ra **avtomatik kesiladi** va fiskal chek bilan birga FMO ga yuboriladi.

:::tip
Qonunchilik talablari va to'liq KM formati: [Raqamli markirovka](/qonunchilik-modul/markirovka). Bar/restoran/kafe uchun quyib sotish: [Quyib sotish](/qonunchilik-modul/quyib-sotish).
:::

---

## **Qaysi tovarlar markirovkalanadi?**

Biznex POS da markirovkani qo'llab-quvvatlashi kerak bo'lgan tovar guruhlari:

| Guruh | Misol | Skanerlash |
|-------|-------|-----------|
| 🍷 Alkogol | Vino, viski, konyak | Data Matrix |
| 🍺 Pivo | Pivo, lager | Data Matrix |
| 🚬 Tamaki | Sigaret | Data Matrix |
| 💊 Dorivor vositalar | Dori, tibbiy buyumlar | Data Matrix |
| 🧊 Maishiy texnika | Sovutgich, kir mashinasi | Data Matrix |
| 💧 Suv va salqin ichimliklar | Mineral suv, sok | Data Matrix |

:::caution
Eng so'nggi ro'yxatni [tasnif.soliq.uz](https://tasnif.soliq.uz) yoki [help.crpt-turon.uz](https://help.crpt-turon.uz) saytidan tekshiring — guruhlar bosqichma-bosqich qo'shiladi.
:::

---

## **Sotish jarayoni**

```
1. Mahsulotni mahsulot ro'yxatidan tanlash
2. 2D-skaner orqali Data Matrix ni skanerlash
3. Biznex avtomatik:
   ├─ KM ni tanib oladi (cisType, GTIN, serial)
   ├─ Label ni kesadi (qo'lda kesish kerak emas)
   ├─ Dublikat tekshiruvi
   └─ Pozitsiyaning Labels[] massiviga qo'shadi
4. To'lov qabul qilinadi
5. Fiskal chek shakllanadi va FMO ga yuboriladi
6. "ASL BELGISI" markirovka kodini muomaladan chiqaradi
```

---

## **Mahsulotni sozlash**

### Markirovka qo'llab-quvvatlashini yoqish

1. **Taomlar / Mahsulotlar** bo'limiga kiring.
2. Mahsulotni tanlang yoki yangi qo'shing.
3. Quyidagi maydonlarni to'ldiring:

| Maydon | Tavsifi | Misol |
|--------|---------|-------|
| **Nomi** | Mahsulot nomi | Coca-Cola 0.5L |
| **MXIK (SPIC)** | Mahsulot identifikatsiya kodi | 11.07.19.900.001.00.000 |
| **Barcode (GTIN)** | Shtrix-kod | 5449000000996 |
| **Paket kod** | O'lchov birligi | Dona (1) |
| **Markirovka** | "Markirovkalangan" katagi yoqilgan | ✅ |

4. **Saqlang** ✅

### Tovar guruhini aniqlash

Biznex avtomatik aniqlay olmagan hollarda **tovar guruhini qo'lda** belgilashingiz mumkin:

- Alkogol / Pivo
- Tamaki
- Dorivor
- Maishiy texnika
- Suv va salqin ichimliklar

Tovar guruhi `Label` ni to'g'ri kesish uchun zarur.

---

## **Skanerlash bosqichi**

### Asosiy stsenariy

1. Buyurtmaga mahsulot qo'shing.
2. **2D-skaner** ni Data Matrix kodga yo'naltiring.
3. Biznex avtomatik:
   - KM ni tanib oladi;
   - Pozitsiyaga `Labels[]` ga qo'shadi;
   - Dublikat bo'lsa — ogohlantirish chiqaradi.

### Bir nechta dona

Bir mahsulotning bir nechta donasini sotsangiz — har birining KM sini **alohida** skanerlash kerak (chunki har bir KM noyob).

```
Coca-Cola 0.5L × 3 ta:
├─ KM 1 → Labels[0]
├─ KM 2 → Labels[1]
└─ KM 3 → Labels[2]
```

:::caution
**Bitta KM ni 3 marta nusxalash — taqiqlangan!** "ASL BELGISI" buni xato sifatida qayd etadi va davlat nazorat organlariga avtomatik xabar yuboradi.
:::

### Transport qadog'i (KITU)

Ulgurji savdoda yoki transport qadog'ida sotsangiz — qadoqning **GS1-128** kodini skanerlang. KITU prefiksi (`01` + GTIN(14) + `21`) Biznex tomonidan avtomatik tanib olinadi.

---

## **`Label` maydoni — avtomatik kesish**

Biznex POS da `OfdLabelNormalizer` xizmati `Label` ni **avtomatik to'g'ri formatda** keltiradi. Sizdan qo'lda hech narsa kerak emas.

### Kesish algoritmi

| KM ko'rinishi | Biznex `Label` ga yuboradi |
|---------------|---------------------------|
| `AI01` + GTIN(14) + `AI21` + serial(7) + GS + `AI93` + key(4) | `AI01` + GTIN(14) + `AI21` + serial(7) |
| `AI01` + GTIN(14) + `AI21` + serial(13) + GS + `AI93` + key(4) | `AI01` + GTIN(14) + `AI21` + serial(13) |
| `AI01` + GTIN(14) + `AI21` + serial(13) + GS + `AI91`/`AI92` | `AI01` + GTIN(14) + `AI21` + serial(13) |
| `AI01` + GTIN(14) + `AI21` + serial(20) + GS + `AI91`/`AI92` | `AI01` + GTIN(14) + `AI21` + serial(20) |
| Tamaki (29 belgi, AI yo'q) | Birinchi 21 belgi |
| `SSCC{18}` yoki `AI00` + `SSCC{18}` (Транспортная) | Shundayligicha (kesilmaydi) |

:::note
Algoritm tafsilotlari: [Raqamli markirovka — Label formati](/qonunchilik-modul/markirovka). Texnik darajada `lib/src/core/tax/ofd_label_normalizer.dart` da amalga oshirilgan.
:::

---

## **Qaytarish (refund)**

Markirovkalangan tovarni qaytarganda:

1. **Faqat dastlabki sotuv qilingan kassa** orqali qaytarish mumkin.
2. Qaytim chekida **markirovka kodi majburiy** ko'rsatiladi.
3. Buyurtmalar tarixidan kerakli buyurtmani toping va "Qaytarish" tugmasini bosing.
4. Tizim avtomatik dastlabki KM larni qo'shadi.

:::caution
Boshqa kassa orqali markirovkalangan tovarni qaytarish — **mumkin emas**. Tizim bunday operatsiyani rad etadi.
:::

---

## **Quyib sotish (umumiy ovqatlanish)**

Bar, restoran va kafe uchun maxsus rejim — qadoq ochilganda **avans cheki** (narx 0), keyin porsiyalar oddiy fiskal chek bilan sotiladi.

```
Shisha ochildi → KM skanerlash → Avans cheki (dona, 0 so'm)
       ↓
Mehmonga porsiya → Fiskal chek (ml, real narx, KM SIZ)
```

Batafsil: [Quyib sotish](/qonunchilik-modul/quyib-sotish).

---

## **Monitoring va tekshirish**

### Biznex da

**Monitoring > Fiskal** sahifasida:
- Fiskal cheklar holati;
- OFD sinxronizatsiya holati;
- Markirovkali pozitsiyalar soni;
- Xato bilan yuborilgan cheklar.

### "ASL BELGISI" da

Markirovka kodi maqomini tekshirish:
- **Shaxsiy kabinet:** [help.crpt-turon.uz](https://help.crpt-turon.uz)
- **Mobil ilova:** "ASL BELGISI. BUSINESS"

To'g'ri rasmiylashtirilgan KM **"Muomaladan chiqarilgan"** maqomini oladi.

---

## **Tez-tez uchraydigan xatolar**

| Xato | Sabab | Yechim |
|------|-------|--------|
| `Label` bo'sh | Mahsulot markirovkalangan, lekin KM skanerlanmagan | Data Matrix ni skanerlang |
| Dublikat KM | Bitta KM 2-marta skanerlangan | Boshqa donaning KM sini skanerlang |
| `Label > 63 belgi` | Noto'g'ri kesilgan | Tovar guruhini to'g'rilang |
| MXIK noto'g'ri | Noto'g'ri tanlangan | [tasnif.soliq.uz](https://tasnif.soliq.uz) dan tekshiring |
| KM tanib bo'lmadi | Buzilgan/o'qilmagan kod | Qadoqni almashtiring yoki qo'lda kiriting |
| ESF bilan kelmagan tovar | Markirovkalangan tovar ESF orqali xarid qilinmagan | Yetkazib beruvchidan ESF talab qiling |

---

## **Talablar va majburiy hujjatlar**

Markirovkalangan tovar bilan ishlash uchun:

- ✅ **Onlayn-NKM** (eski offlayn-kassa yaramaydi);
- ✅ **2D-skaner** (ISO/IEC 15415);
- ✅ **NIS "ASL BELGISI"** da ro'yxatdan o'tish;
- ✅ **ESF (elektron schyot-faktura)** orqali xarid qilingan tovar;
- ✅ **Tegishli litsenziya/xabarnoma** (alkogol, dorivor uchun).

---

## **Maslahatlar**

- 📥 **Yangi tovar qo'shganda** — markirovka kategoriyasini darrov belgilang;
- 🔍 **Skanerni sinab ko'ring** — sotuv boshlanishidan oldin test KM ni skanerlang;
- 🌐 **Internet barqarorligini ta'minlang** — KM "ASL BELGISI" ga yuborilishi shart;
- 📊 **Monitoring sahifasini kuzating** — xato bilan yuborilgan cheklarni darhol tuzating;
- 📝 **Avans cheki = ochilgan tovar** — quyib sotishda asosiy qoida;
- ⚠️ **Dublikatdan saqlaning** — har KM faqat bir marta sotiladi.

---

## **Tegishli sahifalar**

- [Raqamli markirovka (qonunchilik)](/qonunchilik-modul/markirovka)
- [Quyib sotish (umumiy ovqatlanish)](/qonunchilik-modul/quyib-sotish)
- [Jarima va javobgarlik](/qonunchilik-modul/jarima)
- [MXIK kodlar](/tax-modul/mxik)
- [Paket kodlar](/tax-modul/package-codes)
- [Fiskal chek](/tax-modul/fiscal-receipt)
