---
title: QPOS terminali
description: QPOS fiskal qurilmasi nima, nima uchun kerak va Biznex bilan qanday ishlaydi
---

# **QPOS terminali 🖨️💳**

QPOS — bu O'zbekiston Soliq qo'mitasi bilan bog'langan **fiskal qurilma** bo'lib, u har bir savdo chekini rasmiylashtiradi va soliq serveriga (OFD) yuboradi. Biznex POS tizimi QPOS orqali **avtomatik** ishlaydi — kassir qo'shimcha hech narsa qilmaydi.

---

## **Nima uchun QPOS kerak? ⚖️**

O'zbekiston qonunchiligiga ko'ra:

- Barcha savdo nuqtalarida **fiskal qurilma bo'lishi shart**
- Har bir savdoda mijozga **fiskal chek berilishi shart**
- Fiskal cheksiz savdo qilish — **jarima**ga olib keladi
- Barcha ma'lumotlar avtomatik ravishda **OFD serverga** yuboriladi

> 💡 QPOS — bu sizning biznesingiz qonuniy ishlayotganining kafolati.

---

## **QPOS qanday ishlaydi? ⚙️**

Kassir odatdagidek savdo qiladi — qolgan hammasi avtomatik:

```
Kassir savdo qiladi → Biznex chekni shakllantiradi → QPOS fiskallashtiradi → OFD serverga ketadi → Chek chop etiladi
```

1. Kassir buyurtmani yakunlaydi va to'lov qabul qiladi
2. Biznex avtomatik ravishda chek ma'lumotlarini QPOS ga yuboradi
3. QPOS chekni **raqamli imzo** bilan tasdiqlaydi
4. Ma'lumotlar **OFD (soliq serveri)** ga yuboriladi
5. **Fiskal chek** QR kod bilan chop etiladi

> Kassir uchun jarayon oddiy savdodan farq qilmaydi — hamma narsa orqa fonda avtomatik ishlaydi.

---

## **QPOS qurilmasi nima ko'rinishda? 📟**

QPOS — bu kompyuterga **USB orqali** ulanadigan kichik qurilma (USB-kalit yoki smart-karta ko'rinishida). U:

- 💾 Fiskal xotiraga ega — cheklar va smena ma'lumotlarini saqlaydi
- 🔐 Raqamli imzo (ECP) beradi — har bir chekni tasdiqlaydi
- 📡 OFD server bilan aloqa qiladi — internet orqali ma'lumot yuboradi
- 🔢 Har bir chekka unikal **fiskal belgi** va **QR kod** beradi

---

## **O'rnatish va ulash 🔌**

### Kerakli narsalar

- ✅ QPOS qurilma (Soliq inspeksiyasidan olingan, ro'yxatdan o'tgan)
- ✅ STIR (Soliq to'lovchi identifikatsiya raqami)
- ✅ Biznex POS o'rnatilgan kompyuter
- ✅ Barqaror internet ulanishi

### O'rnatish bosqichlari

1. **QPOS qurilmani** kompyuterning USB portiga ulang.
2. Drayver avtomatik o'rnatiladi (Windows).
3. **FiscalDriveService** dasturi o'rnatiladi — bu QPOS bilan Biznex o'rtasidagi ko'prik.
   - O'rnatish faylini **Administrator** sifatida ishga tushiring.
   - O'rnatish ko'rsatmalariga amal qiling.
   - Dastur Windows xizmati sifatida avtomatik ishga tushadi.
4. Biznex POS da **Sozlamalar** → **Fiskal modul** bo'limiga kiring.
5. STIR va korxona ma'lumotlarini kiriting.
6. **Test chek** chop etib tekshiring ✅

> ⚠️ O'rnatishni **Biznex texnik xizmati** yoki **tarmoq administrator** bajaradi. Kassir o'zi o'rnatishi shart emas.

---

## **Smena (ZReport) boshqaruvi 📊**

Fiskal tizimda **smena** tushunchasi juda muhim:

### Smena ochish
- Ish kunini boshlashda Biznex avtomatik smenani ochadi
- Shu paytdan boshlab barcha cheklar shu smenaga yoziladi

### Smena davomida
- Har bir savdo va qaytarish cheki smenaga qo'shiladi
- Naqd va naqdsiz savdolar alohida hisoblanadi
- QQS (NDS) summasi alohida saqlanadi

### Smena yopish
- Ish kuni oxirida smena yopiladi
- **Z-hisobot** shakllanadi — kunlik yakuniy hisobot
- Ma'lumotlar OFD serverga yuboriladi

> ⚠️ **Har kuni smenani yopish shart!** Yopilmagan smena — soliq hisobotlarida muammoga olib keladi.

### Z-hisobot tarkibi

| Ko'rsatkich | Tavsif |
|-------------|--------|
| Savdo cheklari soni | Bugun nechta savdo bo'lgan |
| Qaytarish soni | Nechta mahsulot qaytarilgan |
| Naqd savdolar | Jami naqd pul tushumi |
| Naqdsiz savdolar | Karta va online to'lovlar |
| QQS summasi | Qo'shilgan qiymat solig'i |
| Smena ochilgan/yopilgan vaqt | Ish kuni boshi va oxiri |

---

## **Internet va OFD ulanishi 📡**

QPOS **doimiy internet talab qiladi** — cheklar OFD serverga yuborilishi kerak.

### Muhim qoida

> ⚠️ Agar cheklar **2 kun** ichida OFD ga yuborilmasa — **QPOS bloklanadi** va yangi chek chiqarish imkoni yo'qoladi!

### Internet uzilsa nima bo'ladi?

1. Cheklar QPOS xotirasida **vaqtincha saqlanadi**
2. Internet tiklanganida avtomatik yuboriladi
3. Lekin 2 kundan oshmasligi kerak!

### Nima qilish kerak?

- Internet barqarorligini ta'minlang (Wi-Fi yoki kabel)
- Zaxira internet manbai tayyorlab qo'ying (mobil hotspot)
- Har kuni OFD ga yuborish holatini tekshiring

---

## **Muammolar va yechimlari 🔧**

| Muammo | Sabab | Nima qilish kerak |
|--------|-------|--------------------|
| Chek fiskallashmayapti | QPOS ulanmagan | USB ni tekshiring, qurilmani qayta ulang |
| "ZReport allaqachon ochiq" xatosi | Smena yopilmagan | Avval smenani yoping, keyin yangisini oching |
| QPOS bloklandi | 2+ kun chek yuborilmagan | Internetni tiklang, texnik xizmatga murojaat qiling |
| Fiskal belgi chiqmayapti | FiscalDriveService ishlamayapti | Windows xizmatlaridan qayta ishga tushiring |
| QR kod ishlamayapti | Internet yo'q | Internet ulanishini tekshiring |

---

## **Kompyuter soati haqida ⏰**

QPOS kompyuter soatiga bog'langan. Agar soat **noto'g'ri** bo'lsa:

- Cheklar noto'g'ri vaqt bilan chiqadi
- Soat 2 kundan ortiq ilgarilab ketsa — **QPOS ishlamay qoladi**

> 💡 Windows da vaqtni internet bilan avtomatik sinxronlash yoqilgan bo'lishi kerak.

---

## **Maslahatlar 💡**

- **USB ni tortmang:** QPOS doimo ulangan bo'lishi kerak — ish vaqtida ajratmang.
- **Har kuni smena yoping:** Ish kuni oxirida Z-hisobotni yakunlang.
- **Internet kuzating:** Barqaror internet — QPOS ning muammosiz ishlash kaliti.
- **UPS o'rnating:** Elektr uzilishida ma'lumot yo'qolishining oldini oladi.
- **Texnik xizmatga murojaat:** QPOS bilan bog'liq murakkab muammolarda Biznex texnik xizmatiga yoki soliq inspeksiyasiga murojaat qiling.

---

🎉 QPOS orqali barcha savdolaringiz qonuniy va rasmiy amalga oshiriladi!
