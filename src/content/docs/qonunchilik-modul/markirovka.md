---
title: Raqamli markirovka
description: Raqamli markirovka (ASL BELGISI), Data Matrix kodlari, "label" maydoni va onlayn-NKM da markirovkalangan tovarlarni sotish tartibi
---

# **Raqamli markirovka**

Raqamli markirovka — bu O'zbekiston Respublikasidagi muayyan tovar guruhlarini **noyob raqamli identifikatsiya kodi** (Data Matrix) bilan belgilash va ularning ishlab chiqarishdan iste'molchigacha bo'lgan barcha bosqichlarini **NIS "ASL BELGISI"** (Milliy markirovka monitoring tizimi) orqali kuzatib borish tizimidir.

---

## **Normativ asos**

| Hujjat | Mazmuni |
|--------|---------|
| **VM 2020-yil 31-dekabrdagi 833-sonli qarori** | Raqamli markirovkani joriy etish va "ASL BELGISI" MAT da chakana savdo monitoringini yo'lga qo'yish |
| **VM 2019-yil 8-martdagi 201-sonli qarori** | Mahsulotlarni transport qadog'ida sotish (KITU formati) |
| **VM 2019-yil 23-noyabrdagi 943-sonli qarori** | Onlayn-NKM va virtual kassa qo'llanilishi |

:::note
"ASL BELGISI" tizimi operatori — **CRPT Turon**. Markirovka monitoringi va shaxsiy kabinet `help.crpt-turon.uz` portali orqali yuritiladi.
:::

---

## **Markirovkaga tegishli tovar guruhlari**

| Guruh | Misol | KM tarkibi |
|-------|-------|-----------|
| **Alkogolli ichimliklar** | Vino, viski, konyak | GTIN + serial(7) + GS1 AI |
| **Pivo va pivo ichimliklari** | Pivo, lager | GTIN + serial(7) + GS1 AI |
| **Tamaki mahsulotlari** | Sigaret, tamaki | GTIN + serial(7) + key(8) |
| **Dorivor vositalar** | Dori, tibbiy buyumlar | GTIN + serial(13) + AI91 + AI92 |
| **Maishiy texnika** | Sovutgich, kir yuvish mashinasi | GTIN + serial(20) + AI91 + AI92 |
| **Suv va salqin ichimliklar** | Mineral suv, sok | GTIN + serial(13) + GS1 AI |

:::caution
Majburiy markirovkaga tegishli tovarlarning batafsil ro'yxati va kategoriyalari muntazam yangilanib boriladi. Qo'shimcha guruhlar (sut mahsulotlari, dorivor preparatlar va boshqalar) bosqichma-bosqich kiritilmoqda. Eng so'nggi ma'lumot uchun **tasnif.soliq.uz** va **help.crpt-turon.uz** ni tekshiring.
:::

---

## **Markirovkani sotish tartibi**

Sotuvchi onlayn-NKM bilan ishlaganda quyidagi tartibga rioya qilishi shart:

```
Tovarni skanerlash → KM tanib olinadi → Chekka label maydoni qo'shiladi
       ↓
Onlayn-NKM chekni FMO ga yuboradi (Barcode + Label)
       ↓
FMO chekni "ASL BELGISI" MAT ga uzatadi
       ↓
"ASL BELGISI" markirovka kodini muomaladan chiqaradi
```

**Asosiy talab:** "ASL BELGISI" tizimiga **faqat bo'sh bo'lmagan `label` maydoniga** ega elektron fiskal hujjatlar (cheklar) uzatiladi. Bo'sh `label` bilan markirovkalangan tovar sotilmaydi.

---

## **Chekda majburiy maydonlar**

Markirovkalangan mahsulot sotilganda fiskal chekka **ikkita** belgi kiritilishi shart:

| Maydon | Tarkibi | Manba |
|--------|---------|-------|
| **`Barcode`** | Sotilgan mahsulotning shtrix-kodi (GTIN) | Mahsulot ma'lumotlaridan |
| **`Label`** | Markirovkalash kodining kesilgan ko'rinishi (mahsulot kodi + seriya raqami) | Skanerdan |

:::note
Biznex POS da `Labels[]` (massiv) ishlatiladi — bir pozitsiyaga **300 tagacha** markirovka kodi biriktirilishi mumkin. Eski `Label` (singular) maydoni endi **deprecated** hisoblanadi.
:::

---

## **`Label` maydonining formati**

`Label` — `Barcode` (GTIN) emas, balki markirovkalash kodining **kesilgan qismi**.

### Asosiy qoidalar

1. **Uzunligi `63` belgidan oshmasligi kerak** (boshqaruvchi belgilar bo'lsa — ekranlashtiriladi).
2. KM ning **to'liq emas, faqat bir qismi** (mahsulot kodi va seriya raqami) kiritiladi.
3. Har bir mahsulot **donalab** kiritiladi (har bir KM noyob).
4. Markirovkalanmagan tovarda — `Label` **bo'sh** qoldiriladi.

### Kesish qoidalari (KM → Label)

#### 1. AI siz, 29 belgi (Tamaki Потребительская)

```
KM:    14 belgi GTIN + 7 belgi serial + 8 belgi key      (jami 29 belgi)
Label: avvalgi 21 belgi (GTIN + serial)
```

#### 2. GS1 DATAMATRIX, AI bilan (qolgan barcha guruhlar)

```
KM:    AI01 + GTIN(14) + AI21 + serial + GS + AI9x + ...
Label: AI01 + GTIN(14) + AI21 + serial    (AI9x va undan keyingi qism olib tashlanadi)
```

Serial uzunligi guruhga qarab:

| Tovar guruhi | cisType | Serial uzunligi |
|--------------|---------|-----------------|
| Alkogol, Pivo | Потребительская | 7 |
| Alkogol, Pivo | Групповая | 13 |
| Suv | Потребительская/Групповая | 13 |
| Dorivor | Потребительская | 13 |
| Maishiy texnika | Потребительская | 20 |

#### 3. Транспортная (SSCC)

`SSCC{18}` yoki `AI00 + SSCC{18}` — **kesilmaydi**, shundayligicha yuboriladi.

### Agar kesib bo'lmasa

Agar KM ni to'g'ri shakllantirib bo'lmasa, `Label` ga:
- 63 dan kam belgi bo'lsa — barchasi;
- 63+ belgi bo'lsa — birinchi 63 belgi.

:::caution
Bunday chek "ASL BELGISI" MAT ga tushadi va shaxsiy kabinetda ko'rinadi, lekin **xato bilan qayta ishlanadi** va markirovka kodi muomaladan chiqarilmaydi. Natijada — soliq tekshiruvida tafovut.
:::

---

## **Tamaki transport KITU formatlari**

KITU (kollektiv markirovka) brendiga qarab har xil ko'rinishda bo'ladi:

| Brend | KITU namuna |
|-------|------------|
| BAT | `01147810410011352173050MV051002523500` |
| PMI | `0114780014240922200011201221`**`0`**`CV29095142` |
| JTI | `01147800142404342105496895217018062`**`4`**`014704537` |
| Gulbahar | `0114640091920455132012192`**`1`**`0310031` |
| T&W | `01146100301430852`**`1`**`clErPnb80050000003750` |

> Birinchi qism `01` + GTIN(14) + `21` + serial — standart prefiks. Qolgan qism brendning ichki kodlash sxemasi.

---

## **cisType ni aniqlash**

Skanerdan kelgan KM ning prefiksi va uzunligiga qarab:

| Belgi | cisType |
|-------|---------|
| `00` bilan boshlanadi yoki uzunlik 18/20 va GTIN yo'q | **Транспортная** (SSCC) |
| `01...21...91...92...` ketma-ketlik | Dorivor / Maishiy texnika **Потребительская** |
| `01...21...93...`, serial = 7 | Alkogol / Pivo **Потребительская** |
| `01...21...93...`, serial = 13 | Alkogol / Pivo **Групповая** yoki Suv |
| AI yo'q, uzunlik 29 (14+7+8) | Tamaki **Потребительская** |

:::tip
Aniq `cisType` ni faqat KM uzunligidan emas, balki **MXIK kategoriyasi** bilan birga aniqlash to'g'ri — bir xil format turli guruhlarda turli `cisType` ga to'g'ri kelishi mumkin.
:::

---

## **Qaytarish (refund)**

Sotilgan markirovkalangan tovarni qaytarish:

1. **Faqat dastlabki sotuv qilingan NKM orqali** rasmiylashtiriladi.
2. **Qaytim chekida markirovka kodi majburiy** ko'rsatiladi.
3. Boshqa kassa orqali qaytarish — **ma'n etiladi**.

---

## **Onlayn-NKM ga texnik talablar**

Markirovka bilan ishlash uchun kassa apparati quyidagi imkoniyatlarga **majburiy** ega bo'lishi shart:

| Talab | Tavsifi |
|-------|---------|
| **2D-skaner** | Data Matrix va shtrix-kodlarni o'qish (ISO/IEC 15415) |
| **Bank kartasi to'lovlari** | POS-terminal yoki integratsiya |
| **GPS** | Joylashuv ma'lumotlarini DSQ ga yuborish |
| **MXIK qo'llab-quvvatlash** | Real vaqt rejimida MXIK kodlarni yuklash |
| **`label` maydonini to'ldirish** | Avtomatik kesish algoritmi |
| **Nusxalash nazorati** | Bir xil KM ni qayta-qayta sotish oldi olinishi |

:::caution
2022-yil 1-yanvardan ushbu talablarga javob bermaydigan kassa apparatlarining ro'yxatdan o'tkazilishi to'xtatilgan. 2023-yil 1-yanvardan eski kassalardan foydalanish ham **taqiqlangan**.
:::

---

## **Qo'shimcha funksiyalar**

### Markirovka kodini nusxalash nazorati

Har bir KM noyob bo'lgani uchun, sotuvchi vaqtni tejash maqsadida bitta koddan bir necha marta nusxalashi mumkin emas. Onlayn-NKM avtomatik **dublikat tekshiruvi** bajarib, takroran sotishni bloklaydi. Aks holda "ASL BELGISI" buni xatolik sifatida qayd etadi va davlat nazorat organlariga yuboradi.

### Transport qadog'ida chakana sotish

VM 2019-yil 8-martdagi 201-son qaroriga muvofiq, ulgurji-chakana savdo korxonalari **transport qadog'ida** ham sotishlari mumkin. Bunda KITU kodi **GS1-128** formatida bosiladi.

---

## **Biznex POS da markirovka**

Biznex POS markirovkani avtomatik qo'llab-quvvatlaydi:

- 2D-skaner orqali Data Matrix o'qiladi;
- `Label` maydoni **avtomatik kesiladi** (`OfdLabelNormalizer` tovar guruhi va MXIK ga qarab to'g'ri formatga keltiradi);
- Bir pozitsiyaga **300 tagacha** KM biriktirish mumkin (`Labels[]`);
- Dublikat KM lar avtomatik bloklanadi;
- Quyib sotish (umumiy ovqatlanish) uchun **avans cheki** rejimi mavjud.

:::tip
Biznex POS da markirovka bilan ishlash bo'yicha amaliy qo'llanma: [Markirovkalangan tovarni sotish](/tax-modul/markirovka)
:::
