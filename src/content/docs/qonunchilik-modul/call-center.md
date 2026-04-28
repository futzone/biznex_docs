---
title: Call Center uchun tezkor qo'llanma
description: Call Center xodimlari uchun tezkor va sodda qonunchilik ma'lumotlari
---

### Onlayn-NKM nima?
Savdo cheki chiqaradigan qurilma. Internet orqali soliq organlariga avtomatik hisobot beradi. **48 soat** internet bo'lmasa — bloklanadi.

### Virtual kassa nima?
Onlayn-NKM bilan bir xil ish qiladi, lekin bu **dastur** (programma), qurilma emas. Kompyuter yoki telefonda ishlaydi.

### Fiskal modul nima?
Soliq chekini tasdiqlash uchun kerak bo'lgan kichik qurilma (**USB-kalit** yoki **smart-karta**). POS qurilmaga ulanadi. **Busiz chek chiqmaydi.**

### Z-hisobot nima?
Kun oxirida chiqadigan **yakuniy hisobot**. Kundagi barcha savdolar haqida ma'lumot beradi.

### MXIK nima?
Har bir mahsulotning davlat tomonidan berilgan **identifikatsiya kodi**. Chekda ko'rsatilishi **shart**.

### QQS nima?
**Qo'shilgan qiymat solig'i**. Har bir mahsulot uchun alohida, chek oxirida jami ko'rsatiladi.

### STIR nima?
Korxonaning **soliq raqami**. Chekda albatta bo'lishi kerak.

---

## **Tez-tez so'raladigan savollar**

### "Chek chiqmayapti" — nima qilish kerak?

1. **Fiskal modul ulangan mi?** — USB-kalit yoki smart-karta POS qurilmaga kiritilganini tekshiring
2. **Internet bor mi?** — 48 soatdan ko'p internet bo'lmasa qurilma bloklanadi
3. **Qog'oz bor mi?** — Printer qog'ozini tekshiring
4. **Qurilma yoniq mi?** — Qayta yoqib ko'ring

### "Offlayn rejim" nima degani?

- Internet yo'qolganda qurilma **offlayn rejimda** ishlashda davom etadi
- Cheklar saqlanib turadi va internet qaytganda **avtomatik yuboriladi**
- **48 soat** (ba'zan 24 soat) offlayn bo'lsa — qurilma **bloklanadi**
- Blokdan chiqish uchun — internetni tiklash kerak

### "Markirovka xatosi" chiqyapti

- **Markirovka kodi** — maxsus belgilangan tovarlar uchun kerak (alkogol, pivo, tamaki, dorivor, suv, maishiy texnika)
- Skaner tovar **yaroqlilik muddati o'tganini** aniqlasa — sotuvni bloklaydi
- Bitta chekda yoki turli cheklarda **ikki bir xil markirovka kodi** bo'lishi mumkin emas (dublikat)
- `Label` bo'sh bo'lsa — "ASL BELGISI" tovarning sotilganini qayd etmaydi
- Yechim: tovar markirovkasini tekshiring, muddati o'tgan bo'lsa sotib bo'lmaydi

### Bar/restoranda quyib sotish — qanday ishlaydi?

- Shisha **ochilganda** — KM skanerlanadi va **avans cheki** chiqariladi (narx 0)
- Mehmonga porsiya sotilganda — **oddiy fiskal chek** (ml/litr, KM SIZ)
- Bir shishadan ko'p marta sotsangiz ham — KM faqat **bir marta** skanerlanadi
- Batafsil: [Quyib sotish](/qonunchilik-modul/quyib-sotish)

### Mijoz markirovkasiz tovar so'rasa-chi?

- Majburiy markirovkaga tegishli tovarni **markirovkasiz sotish — qonunbuzarlik**
- Faqat ESF (elektron schyot-faktura) orqali xarid qilingan tovar sotiladi
- Yetkazib beruvchidan ESF talab qiling

### "Noto'g'ri MXIK" jarimasi nima?

- 2023-yil 1-martdan boshlab — chek yoki EHF da **noto'g'ri MXIK** uchun realizatsiya qiymatining **1%** jarima (Soliq kodeksi 223-modda 5-qism)
- Yechim: [tasnif.soliq.uz](https://tasnif.soliq.uz) dan amaldagi MXIK ni tekshirish

### Mijoz "chek haqiqiymi?" deb so'rayapti

Chekdagi **QR-kodni** soliq organlarining mobil ilovasi bilan skanerlab tekshirish mumkin. QR-kod kamida **30x30 mm** bo'lishi shart.

### "Kvitansiya daftari" nima?

Qurilma **buzilganda** ishlatiladigan maxsus daftar:
- Soliq organida **muhrlangan** va raqamlangan bo'lishi kerak
- Qurilma tuzatilgandan so'ng **1 ish kuni** ichida barcha ma'lumotlar tizimga kiritiladi

### To'lov shakllari qanday bo'ladi?

Chekda 3 xil to'lov shakli ko'rsatilishi mumkin:
- **Naqd** — faqat naqd pul
- **Plastik karta** — faqat karta
- **Aralash** — naqd + karta birgalikda

---

## **Muhim raqamlar va chegaralar**

| Parametr | Qiymat |
|----------|--------|
| Offlayn rejim chegarasi | **48 soat** (keyin bloklanadi) |
| Chek qog'oz kengligi | Kamida **55 mm** |
| Harf balandligi | Kamida **2 mm** |
| QR-kod o'lchami | Kamida **30x30 mm** |
| Ma'lumot saqlash muddati | **5 yil** (operator tomonidan) |
| Virtual fiskal modul to'lovi | Yiliga **1 BHM** |

---

## **Biznex POS da qayerda sozlanadi?**

| Masala | Biznex POS bo'limi |
|--------|-------------------|
| Fiskal modul ulash | [Qurilmalar > Ulanish](/devices-modul/connection) |
| MXIK kodlarni sozlash | [MXIK kodlar](/tax-modul/mxik) |
| Fiskal chek sozlamalari | [Fiskal chek](/tax-modul/fiscal-receipt) |
| Soliq integratsiyasi | [Soliq integratsiyasi](/tax-modul/overview) |
| To'lov shakli tanlash | [Savdo qilish](/pos-modul/sales) |
