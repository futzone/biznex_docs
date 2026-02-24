---
title: Ilova sozlamalari
description: Biznex POS ilova sozlamalarini moslashtirish
---

# **Ilova sozlamalari ⚙️🔧**

Biznex POS dasturini o'z biznesingizga moslashtirishingiz mumkin. Bu bo'limda barcha sozlamalar va ularning vazifalari haqida ma'lumot berilgan.

---

## **Umumiy sozlamalar 📋**

### Do'kon ma'lumotlari 🏪
- **Do'kon nomi** — chekda va interfeysda ko'rinadigan nom
- **Manzil** — biznes manzili (chekda chop etiladi)
- **Telefon** — aloqa raqami
- **Logo** — do'kon logotipi (chekda chop etiladi)

### Til sozlamalari 🌐
Biznex POS quyidagi tillarda ishlaydi:
- 🇺🇿 O'zbek (lotin)
- 🇺🇿 O'zbek (kirill)
- 🇷🇺 Rus
- 🇬🇧 Ingliz

---

## **Printer sozlamalari 🖨️**

| Sozlama | Tavsif |
|---------|--------|
| **Printer tanlash** | Ulangan printerlar ro'yxati |
| **Chek kengligi** | 58mm yoki 80mm |
| **Shrift** | Chek shrifti |
| **Logo chop etish** | Chekda logo chiqarish yoqish/o'chirish |
| **Avtomatik chop etish** | To'lovdan keyin avtomatik chek |

---

## **Savdo sozlamalari 💰**

- **Chegirma ruxsati** — xodimlar chegirma bera oladimi
- **Nasiya ruxsati** — qarz savdo mumkinmi
- **Buyurtma bekor qilish** — kim bekor qila oladi
- **Soliq foizi** — QQS (NDS) foizi

---

## **Buyurtma sozlamalari — Xizmat haqi foizi (Fee Percent) 💸**

Bu bo'limda buyurtmalarga avtomatik qo'shiladigan **foiz ustamalar** (xizmat haqi) sozlanadi.

### Foiz ustama qo'shish

1. **Sozlamalar** → **Buyurtma sozlamalari** bo'limiga kiring.
2. **Foiz nomi** — ustama nomini yozing (masalan: "Xizmat haqi", "Servis to'lovi").
3. **Foiz qiymati** — raqamni kiriting (masalan: 10 — bu 10% degani).
4. **"Qo'shish"** tugmasini bosing.

Bir nechta foiz ustama qo'shish mumkin:

| Foiz nomi | Qiymati | Misol |
|-----------|---------|-------|
| Xizmat haqi | 10% | 100 000 so'm buyurtmaga 10 000 so'm qo'shiladi |
| Servis | 5% | 100 000 so'm buyurtmaga 5 000 so'm qo'shiladi |

### Foiz usatamani o'chirish

Har bir foiz yonidagi **o'chirish** tugmasini bosib, keraksiz ustamalarni olib tashlash mumkin.

### Qanday ishlaydi?

Foiz usatamalar faqat **foiz yoqilgan joylardagi** buyurtmalarga qo'shiladi:

```
Buyurtma jami = Taomlar narxi + (Taomlar narxi × Foiz / 100)
```

> 💡 **Misol:** Taomlar 200 000 so'm + Xizmat haqi 10% = **220 000 so'm**

> ⚠️ Agar joyda (zal/stol) "Foiz qo'shilsinmi?" **o'chirilgan** bo'lsa — bu foizlar qo'shilmaydi. Batafsil: [Joylar](/pos-modul/places/)

---

## **Fiskal modul sozlamalari 🧾**

Bu bo'lim faqat **soliq moduli yoqilgan** holda ko'rinadi.

### Xizmat haqi uchun MXIK va Paket kod

Xizmat haqi (foiz ustama) fiskal chekda alohida qator sifatida chiqadi. Shuning uchun uning ham **MXIK kodi** va **paket kodi** bo'lishi kerak:

1. **Xizmat haqi MXIK** — "MXIK tanlash" tugmasini bosing va mos kodni qidiring.
   - Odatda xizmat ko'rsatish uchun mos MXIK kod tanlanadi.
2. **Xizmat haqi Paket kodi** — MXIK tanlangandan keyin "Paket tanlash" tugmasi faollashadi.
   - Ro'yxatdan mos paket kodni tanlang.

> ⚠️ **Bu juda muhim!** Agar xizmat haqi uchun MXIK va paket kod kiritilmasa — foiz qo'shilgan buyurtmalarning fiskal cheki **xato berishi** yoki **chiqmasligi** mumkin.

### Kiritish tartibi

1. **Sozlamalar** sahifasiga kiring.
2. Pastga aylantiring — **"Fiskal modul sozlamalari"** bo'limini toping.
3. **"Xizmat haqi MXIK"** tugmasini bosing → qidiruv oynasida mos kodni tanlang.
4. **"Xizmat haqi Paket"** tugmasini bosing → ro'yxatdan paket kodni tanlang.
5. Sozlamalar avtomatik saqlanadi.

> 💡 Bu sozlamani **bir marta** to'g'ri kiritib qo'yish kifoya — keyin barcha fiskal cheklarda avtomatik ishlatiladi.

---

## **Interfeys sozlamalari 🎨**

- **Minimalist rejim** — soddalashtirilgan menyu ko'rinishi
- **Kategoriya ko'rinishi** — katta/kichik kartochkalar
- **Rang mavzusi** — tizim ranglari

---

## **Xavfsizlik 🔐**

- **PIN-kod uzunligi** — 4 yoki 6 xonali
- **Avtomatik chiqish** — faolsizlikdan keyin tizimdan chiqish vaqti
- **API manzili** — server ulanish sozlamalari

---

## **Maslahatlar 💡**

- **Logo qo'shing:** Chekdagi logo — biznesingiz brendini oshiradi.
- **Avtomatik chekni yoqing:** Har safar qo'lda chop etish zaruratini yo'qotadi.
- **Til o'zgartirish:** Xodimlaringiz uchun eng qulay tilni tanlang.

---

🎉 Sozlamalarni to'g'ri moslash — qulay ish jarayonining asosi!
