---
title: Fiskal modul (FM)
description: Fiskal modul nima, uning vazifalari va kundalik ishlash tartibi
---

# **Fiskal modul (FM) 📟🧾**

Fiskal modul (FM) — bu savdo nuqtasiga o'rnatiladigan maxsus qurilma bo'lib, har bir chekni **rasmiy hujjatga** aylantiradi va soliq organlariga avtomatik hisobot beradi.

---

## **Oddiy tilda FM nima? 🤔**

FM — bu kompyuterga ulanadigan kichik **USB-kalit** (flesh-disk ko'rinishida). U:

- Har bir chekni **raqamli imzo** bilan tasdiqlaydi — soxta chek chiqarib bo'lmaydi
- Har bir chekka **unikal raqam (fiskal belgi)** beradi
- Chek ma'lumotlarini **soliq serveriga (OFD)** yuboradi
- **QR kod** yaratadi — mijoz chek haqiqiyligini tekshira oladi

> 💡 Qisqa qilib: FM — "soliq nazoratchi" bo'lib, har bir chekingiz rasmiy va qonuniy ekanligini kafolatlaydi.

---

## **FM va QPOS — bir xil narsa 🔄**

Ba'zan "QPOS", ba'zan "FM" deyiladi — lekin **mohiyatan bir xil qurilma** haqida gap ketyapti:

- **FM (Fiskal Modul)** — qurilmaning o'zi (USB-kalit)
- **QPOS** — FM bilan ishlovchi dasturiy ta'minot (FiscalDriveService)
- **OFD** — ma'lumotlar yuboriladigan soliq serveri

Birgalikda ular yagona fiskal tizimni tashkil qiladi.

---

## **Nima uchun FM majburiy? ⚖️**

O'zbekiston qonunchiligiga ko'ra:

1. **Barcha savdo nuqtalarida** FM bo'lishi shart
2. **Har bir savdoda** fiskal chek berilishi shart
3. Fiskal cheksiz savdo — **jarima**ga olib keladi
4. Qayta-qayta buzilsa — **faoliyat to'xtatilishi** mumkin

---

## **Kundalik ishlash tartibi 📋**

### Ish kunini boshlash (smena ochish)

1. Kompyuter va Biznex POS ni yoqing
2. FM (USB-kalit) ulangan va FiscalDriveService ishlayotganini tekshiring
3. Biznex avtomatik **smenani ochadi**
4. Savdoni boshlashingiz mumkin ✅

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

> ⚠️ **Smenani yopmasdan ketmang!** Bu soliq hisobotlari uchun juda muhim.

---

## **FM o'rnatish — kim qiladi? 🔧**

FM ni o'rnatish va sozlash **texnik mutaxassis** vazifasi:

### O'rnatish jarayoni

1. **FM qurilma** soliq inspeksiyasidan olinadi va ro'yxatdan o'tkaziladi
2. FM **USB portga** ulanadi
3. **FiscalDriveService** dasturi o'rnatiladi
4. Korxona STIR raqami va ma'lumotlari kiritiladi
5. Test chek chop etilib tekshiriladi
6. Tizim ishga tushadi ✅

> 💡 O'rnatishni **Biznex texnik xizmati** bajaradi. Kassir va menejer bu jarayonga aralashishi shart emas.

---

## **FM bilan bog'liq muhim qoidalar ⚠️**

### 1. FM doimo ulangan bo'lishi kerak
- USB-kalitni ish vaqtida **ajratmang**
- FM ajratilsa — fiskal chek chiqmaydi

### 2. Internet doimiy bo'lishi kerak
- FM chekni OFD ga internet orqali yuboradi
- Internet yo'q bo'lsa — cheklar vaqtincha xotirada saqlanadi
- **2 kundan ortiq** yuborilmasa — **FM bloklanadi!**

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

## **FM bloklansa nima qilish kerak? 🔒**

FM quyidagi hollarda **bloklanishi** mumkin:

| Sabab | Belgi | Yechim |
|-------|-------|--------|
| 2+ kun chek yuborilmagan | Yangi chek chiqmaydi | Internetni tiklang, texnik xizmatga murojaat qiling |
| OFD tomonidan bloklangan | Xato xabari chiqadi | Soliq inspeksiyasiga murojaat qiling |
| Kompyuter soati noto'g'ri | FM javob bermaydi | Soatni to'g'rilang, texnik xizmatga murojaat qiling |
| FM eskirgan/buzilgan | Umuman ishlamaydi | Soliq inspeksiyasidan yangi FM oling |

> 📞 FM bloklanganda birinchi navbatda **Biznex texnik xizmatiga** qo'ng'iroq qiling.

---

## **Tez-tez so'raladigan savollar ❓**

**FM ni boshqa kompyuterga ko'chirsam bo'ladimi?**
> Yo'q, FM bitta kompyuterga bog'langan. Ko'chirish uchun texnik mutaxassis kerak.

**FM nechta chek saqlaydi?**
> FM xotirasi cheklangan (odatda 480-800 ta chek). Shuning uchun cheklar muntazam OFD ga yuborilishi kerak.

**Internet yo'q bo'lsa savdo qila olamanmi?**
> Ha, cheklar FM xotirasida vaqtincha saqlanadi. Lekin 2 kundan oshmasligi kerak!

**FM qancha muddat ishlaydi?**
> FM ning xizmat muddati bor. Muddati tugaganda soliq inspeksiyasidan yangisini olish kerak.

---

## **Maslahatlar 💡**

- **Har kuni smena yoping** — eng muhim qoida.
- **Internet barqarorligini ta'minlang** — FM ning muammosiz ishlashi uchun.
- **USB ni ajratmang** — FM doim ulangan bo'lsin.
- **UPS (zaryadka bloki) o'rnating** — elektr uzilishida ma'lumot yo'qolmaydi.
- **Muammo bo'lsa — texnik xizmatga murojaat qiling** — o'zingiz tuzatishga urinmang.

---

🎉 FM — sizning biznesingiz qonuniy va shaffof ishlayotganining kafolati!
