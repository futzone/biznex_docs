---
title: MXIK kodlar
description: Mahsulotlar uchun MXIK klassifikatsiya kodlarini kiritish va boshqarish
---

# **MXIK kodlar 🏷️📊**

MXIK (Mahsulot va Xizmatlarning Identifikatsiya Kodi), rasmiy hujjatlarda **SPIC** yoki **IKPU** (Identifikatsionnyy Kod Produktsii i Uslug) deb ham ataladi — O'zbekiston Respublikasida barcha tovar va xizmatlar uchun belgilangan **milliy klassifikatsiya tizimi**. Har bir mahsulot o'ziga xos MXIK kodga ega bo'lishi shart.

> 💡 **SPIC = IKPU = MXIK** — barchasi bir xil narsa. Fiskal API da `SPIC` deb yuboriladi, ammo aslida MXIK kodning o'zi.

---

## **MXIK nima? 🤔**

MXIK — bu mahsulot yoki xizmatning **raqamli identifikatori**. U:

- 🔢 **Raqamlar ketma-ketligi** — har bir tovar uchun unikal kod
- 📊 **Klassifikatsiya** — mahsulot qaysi toifaga tegishli ekanini aniqlaydi
- 🧾 **Soliq hisobi** — to'g'ri soliq stavkasini belgilash uchun
- 📋 **Statistik hisobot** — davlat statistikasi uchun ma'lumot yig'ish

---

## **MXIK kod tuzilishi 🔢**

MXIK kod odatda **17 xonali raqam** dan iborat:

```
XX.XX.XX.XXX.XXX.XX.XXX
│  │  │  │   │   │  │
│  │  │  │   │   │  └── Mahsulot turi (batafsil)
│  │  │  │   │   └───── Pastki guruh
│  │  │  │   └───────── Guruh
│  │  │  └────────────── Sinf
│  │  └───────────────── Kichik bo'lim
│  └──────────────────── Bo'lim
└─────────────────────── Asosiy bo'lim
```

### Misol:

| Mahsulot | MXIK kodi |
|----------|-----------|
| Non (oq) | 10.71.11.100.000.00.000 |
| Osh (palov) | 56.10.11.110.000.00.000 |
| Coca-Cola | 11.07.19.900.001.00.000 |
| Choy | 10.83.13.000.000.00.000 |

---

## **Biznex POS da MXIK kod kiritish 📝**

### Mahsulotga MXIK kod berish

1. **Taomlar** bo'limiga kiring.
2. Mahsulotni tanlang yoki yangi qo'shing.
3. **"MXIK kod"** maydonini toping.
4. MXIK kodni quyidagi usullardan biri bilan kiriting:
   - 🔍 **Qidirish:** Mahsulot nomini yozib, ro'yxatdan tanlash
   - ⌨️ **Qo'lda kiritish:** MXIK kodni to'g'ridan-to'g'ri yozish
   - 📋 **Katalogdan tanlash:** Kategoriya bo'yicha ko'rib chiqish
5. **Saqlang** ✅

---

## **MXIK kodni qanday topish mumkin? 🔍**

### 1. Biznex ichida qidirish

Biznex POS da mahsulot qo'shish vaqtida MXIK maydonida mahsulot nomini yozing — tizim avtomatik mos keluvchi kodlarni ko'rsatadi.

### 2. Soliq.uz rasmiy sayti

1. **[soliq.uz](https://soliq.uz)** saytiga kiring.
2. **MXIK klassifikatori** bo'limini toping.
3. Mahsulot nomini kiriting va qidiring.
4. Kodni nusxalab, Biznex POS ga kiriting.

### 3. Tasnif.soliq.uz portali

1. **tasnif.soliq.uz** portaliga kiring.
2. To'liq klassifikator bo'yicha qidiring.
3. Mahsulotingizga mos MXIK kodni toping.

---

## **MXIK kod majburiymi? ⚠️**

**Ha!** O'zbekiston qonunchiligiga ko'ra:

- Barcha fiskal cheklarda MXIK kod **ko'rsatilishi shart**.
- MXIK kodsiz mahsulot sotish **jarima**ga olib keladi.
- 2022-yildan boshlab MXIK kod talab **kuchaytirilgan**.

---

## **Ko'p uchraydigan xatolar va yechimlar ❌**

| Xato | Sabab | Yechim |
|------|-------|--------|
| MXIK kod topilmadi | Noto'g'ri qidiruv | Mahsulot nomini boshqacha yozing |
| Kod yaroqsiz | Eskirgan kod | Yangilangan MXIK bazadan qayta qidiring |
| Fiskal chekda MXIK yo'q | Mahsulotga kod biriktirilmagan | Mahsulot sozlamalariga kirib MXIK kodni kiriting |
| Noto'g'ri MXIK kod | Boshqa mahsulot kodi tanlangan | Kodning to'g'riligini soliq.uz dan tekshiring |

---

## **Ommabop ovqatlanish mahsulotlari MXIK kodlari 📖**

Restoran va kafe egalari uchun eng ko'p ishlatiladigan MXIK kodlar:

| Kategoriya | MXIK kod boshlanishi | Misollar |
|------------|---------------------|----------|
| **Tayyorlangan taomlar** | 56.10.xx | Osh, sho'rva, lag'mon |
| **Non mahsulotlari** | 10.71.xx | Non, somsa, patir |
| **Ichimliklar (alkogolsiz)** | 11.07.xx | Sharbat, kola, suv |
| **Choy/Kofe** | 10.83.xx / 56.10.xx | Choy, qahva |
| **Sut mahsulotlari** | 10.51.xx | Sut, qatiq, smetana |
| **Go'sht mahsulotlari** | 10.11.xx | Mol go'shti, tovuq |
| **Sabzavotlar** | 01.13.xx | Sabzavot, mevalar |

---

## **Maslahatlar 💡**

- **Bir marta to'g'ri kiritib qo'ying:** MXIK kodni har bir mahsulotga faqat bir marta kiritasiz — keyin barcha cheklarda avtomatik chiqadi.
- **Yangi mahsulot qo'shganda:** Albatta MXIK kodni biriktirishni unutmang.
- **Tekshirish:** Vaqti-vaqti bilan MXIK kodlarni yangilangan baza bilan solishtiring.
- **Ommabop kodlarni saqlang:** Eng ko'p ishlatiladigan MXIK kodlarni alohida yozib qo'ying.

---

🎉 MXIK kodlarni to'g'ri kiritish orqali barcha savdolaringiz qonuniy va tartibli bo'ladi!
