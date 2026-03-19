---
title: Fiskal modul (FM)
description: Fiskal modul nima, uning vazifalari va kundalik ishlash tartibi
---

# **Fiskal modul (FM)**

Fiskal modul (FM) — bu savdo nuqtasiga o'rnatiladigan maxsus qurilma bo'lib, har bir chekni **rasmiy hujjatga** aylantiradi va soliq organlariga avtomatik hisobot beradi.

---

## **Oddiy tilda FM nima?**

FM — bu kompyuterga ulanadigan kichik **USB-kalit** (flesh-disk ko'rinishida). U:

- Har bir chekni **raqamli imzo** bilan tasdiqlaydi — soxta chek chiqarib bo'lmaydi
- Har bir chekka **unikal raqam (fiskal belgi)** beradi
- Chek ma'lumotlarini **OFD ga** yuboradi
- **QR kod** yaratadi — mijoz chek haqiqiyligini tekshira oladi

---

## **FM, QPOS va FDS — nima farqi?**

| Tushuncha | Tavsifi |
|-----------|---------|
| **FM (Fiskal Modul)** | Jismoniy qurilma (USB-kalit) — chekni kriptografik imzolaydi |
| **QPOS** | FM bilan ishlovchi an'anaviy dasturiy ta'minot |
| **FDS** | FM bilan ishlovchi yangi avlod dastur (REST API, port 3449) |
| **OFD** | Ma'lumotlar yuboriladigan soliq serveri (operator) |

Biznex POS sozlamalarida **QPOS** yoki **FDS** dan birini tanlash mumkin. Ikkalasi ham FM qurilma bilan ishlaydi.

---

## **Nima uchun FM majburiy?**

O'zbekiston qonunchiligiga ko'ra:

1. **Barcha savdo nuqtalarida** FM bo'lishi shart
2. **Har bir savdoda** fiskal chek berilishi shart
3. Fiskal cheksiz savdo — **jarima**ga olib keladi
4. Qayta-qayta buzilsa — **faoliyat to'xtatilishi** mumkin

---

## **Kundalik ishlash tartibi**

### Ish kunini boshlash (smena ochish)

1. Kompyuter va Biznex POS ni yoqing
2. FM (USB-kalit) ulangan va fiskal xizmat (QPOS/FDS) ishlayotganini tekshiring
3. Biznex avtomatik **smenani ochadi**
4. Savdoni boshlashingiz mumkin

### Ish kuni davomida

- Har bir savdoda Biznex avtomatik fiskal chek chiqaradi
- Kassir qo'shimcha hech narsa qilmaydi — jarayon avtomatik
- Qaytarish bo'lganda ham fiskal qaytarish cheki chiqadi
- Barcha cheklar FM xotirasiga yoziladi va OFD ga yuboriladi

### Ish kunini yakunlash (smena yopish)

1. Biznex POS da smenani yoping
2. **Z-hisobot** avtomatik shakllanadi
3. Kunlik ma'lumotlar OFD ga yuboriladi
4. Kompyuterni o'chirishingiz mumkin

:::caution
**Smenani yopmasdan ketmang!** Bu soliq hisobotlari uchun juda muhim.
:::

---

## **OFD sinxronizatsiya**

OFD (Online Fiscal Data) — fiskal ma'lumotlarni soliq operatoriga yuborish tizimi.

### Sinxronizatsiya jarayoni

1. Har bir fiskal chek **avtomatik** OFD ga yuboriladi
2. Z-hisobot yopilganda kunlik ma'lumotlar sinxronizatsiya qilinadi
3. Biznex POS da oxirgi sinxronizatsiya vaqti ko'rsatiladi

### 48 soat qoidasi

:::caution
**48 soat** davomida OFD ga ulanmaslik FM ning **bloklanishiga** olib keladi!

- Internet aloqasini doimiy ta'minlang
- Sinxronizatsiya holatini **Monitoring > Fiskal** sahifasida tekshiring
- Agar internet uzoq vaqt yo'q bo'lsa — cheklar FM xotirasida saqlanadi va internet qaytganda avtomatik yuboriladi
:::

### FM holat tekshirish

**Monitoring > Fiskal** sahifasida quyidagi ma'lumotlarni ko'rish mumkin:
- FM seriya raqami
- Xotiradagi cheklar soni
- Oxirgi OFD sinxronizatsiya vaqti
- FM qolgan xotira hajmi

---

## **FM o'rnatish — kim qiladi?**

FM ni o'rnatish va sozlash **texnik mutaxassis** vazifasi:

1. **FM qurilma** soliq inspeksiyasidan olinadi va ro'yxatdan o'tkaziladi
2. FM **USB portga** ulanadi
3. Fiskal xizmat dasturi (QPOS yoki FDS) o'rnatiladi
4. Korxona STIR raqami va ma'lumotlari kiritiladi
5. Test chek chop etilib tekshiriladi
6. Tizim ishga tushadi

:::tip
O'rnatishni **Biznex texnik xizmati** bajaradi. Kassir va menejer bu jarayonga aralashishi shart emas.
:::

---

## **FM bilan bog'liq muhim qoidalar**

### 1. FM doimo ulangan bo'lishi kerak
- USB-kalitni ish vaqtida **ajratmang**
- FM ajratilsa — fiskal chek chiqmaydi

### 2. Internet doimiy bo'lishi kerak
- FM chekni OFD ga internet orqali yuboradi
- Internet yo'q bo'lsa — cheklar vaqtincha xotirada saqlanadi
- **48 soatdan ortiq** yuborilmasa — **FM bloklanadi!**

### 3. Kompyuter soati to'g'ri bo'lishi kerak
- FM kompyuter vaqtiga bog'langan
- Soat noto'g'ri bo'lsa — cheklar xato vaqt bilan chiqadi
- **2 kundan ortiq** farq bo'lsa — FM ishlamay qoladi

### 4. Smena har kuni yopilishi kerak
- Ish kuni oxirida albatta smenani yoping
- Yopilmagan smena — soliq muammolariga olib keladi

### 5. FM ni o'zboshimchalik bilan ochmang
- FM ichini ochish yoki ta'mirlashga urinmang
- Faqat **vakolatli xizmat markazi** ta'mirlay oladi

---

## **FM bloklansa nima qilish kerak?**

| Sabab | Belgi | Yechim |
|-------|-------|--------|
| 48+ soat chek yuborilmagan | Yangi chek chiqmaydi | Internetni tiklang, texnik xizmatga murojaat qiling |
| OFD tomonidan bloklangan | Xato xabari chiqadi | Soliq inspeksiyasiga murojaat qiling |
| Kompyuter soati noto'g'ri | FM javob bermaydi | Soatni to'g'rilang, texnik xizmatga murojaat qiling |
| FM eskirgan/buzilgan | Umuman ishlamaydi | Soliq inspeksiyasidan yangi FM oling |

---

## **Tez-tez so'raladigan savollar**

**FM ni boshqa kompyuterga ko'chirsam bo'ladimi?**
> Yo'q, FM bitta kompyuterga bog'langan. Ko'chirish uchun texnik mutaxassis kerak.

**FM nechta chek saqlaydi?**
> FM xotirasi cheklangan (odatda 480-800 ta chek). Shuning uchun cheklar muntazam OFD ga yuborilishi kerak.

**Internet yo'q bo'lsa savdo qila olamanmi?**
> Ha, cheklar FM xotirasida vaqtincha saqlanadi. Lekin 48 soatdan oshmasligi kerak!

**QPOS va FDS dan qaysi birini tanlashim kerak?**
> Yangi o'rnatishlar uchun **FDS** tavsiya etiladi. Eski tizimlarni **QPOS** da qoldirish mumkin.

---

## **Maslahatlar**

- **Har kuni smena yoping** — eng muhim qoida
- **Internet barqarorligini ta'minlang** — FM ning muammosiz ishlashi uchun
- **USB ni ajratmang** — FM doim ulangan bo'lsin
- **UPS o'rnating** — elektr uzilishida ma'lumot yo'qolmaydi
- **Monitoring > Fiskal** sahifasini muntazam tekshiring — OFD sinxronizatsiya holatini kuzating
- **Muammo bo'lsa — texnik xizmatga murojaat qiling** — o'zingiz tuzatishga urinmang
