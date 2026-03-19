---
title: FDS (Fiscal Drive Service)
description: FDS fiskal xizmati — yangi avlod fiskal integratsiya tizimi
---

# **FDS (Fiscal Drive Service)**

FDS — bu Biznex POS tizimida QPOS ga muqobil sifatida qo'llab-quvvatlanadigan **yangi avlod fiskal xizmat**. U lokal REST API orqali ishlaydi va fiskal modulni boshqaradi.

---

## **FDS nima?**

FDS — lokal kompyuterda ishlaydigan dastur bo'lib, **port 3449** da REST API server sifatida ishlaydi. U fiskal modul (FM) bilan bevosita aloqa qiladi.

**Asosiy vazifalari:**
- Fiskal modulni topish va boshqarish
- Fiskal chekni ro'yxatga olish (fiskalizatsiya)
- Z-hisobot ochish va yopish
- OFD ga ma'lumotlarni sinxronizatsiya qilish
- FM holat va xotirasini tekshirish

---

## **FDS va QPOS — farqlari**

| Xususiyat | FDS | QPOS |
|-----------|-----|------|
| Interfeys | REST API (port 3449) | Dasturiy kutubxona |
| Chek ro'yxatga olish | 2 bosqichli (xavfsizroq) | 1 bosqichli |
| OFD sinxronizatsiya | Ichki qo'llab-quvvatlash | Tashqi |
| Autentifikatsiya | SHA-256 challenge-response | Oddiy |
| FM holat tekshirish | Batafsil (xotira, cheklar soni) | Asosiy |

**Qaysi birini tanlash kerak?**
- **FDS** — yangi o'rnatishlar uchun tavsiya etiladi
- **QPOS** — eski tizimlar uchun ishlashda davom etadi

Sozlamalarda **To'lov va Soliq > Fiskal sozlamalar** bo'limida tanlash mumkin.

---

## **FDS ishlash tartibi**

### 1. Chek fiskalizatsiyasi (2 bosqich)

FDS da chek ro'yxatga olish **2 bosqichda** amalga oshiriladi — bu xavfsizlikni oshiradi:

**1-bosqich: Tranzaksiya ID olish**
- Tizim chek ma'lumotlarini (mahsulotlar, narxlar, QQS) FDS ga yuboradi
- FDS tranzaksiya ID (`txId`) qaytaradi

**2-bosqich: Chekni ro'yxatga olish**
- Olingan `txId` bilan chek yakuniy ro'yxatga olinadi
- FM fiskal belgini hosil qiladi
- Chek ma'lumotlari OFD ga yuboriladi

:::note
Agar 1-bosqichda xato bo'lsa, 2-bosqichga o'tilmaydi — bu ortiqcha chek chiqishini oldini oladi.
:::

### 2. Z-hisobot boshqaruvi

| Amal | Tavsifi |
|------|---------|
| **Smena ochish** | FDS avtomatik yangi smena ochadi |
| **Smena yopish** | Z-hisobot shakllanadi, FM xotirasi bo'shatiladi |
| **OFD sinxronizatsiya** | Z-hisobot operatorga yuboriladi |

### 3. FM holat tekshirish

FDS orqali fiskal modul haqida batafsil ma'lumot olish mumkin:
- FM seriya raqami
- Xotiradagi cheklar soni
- Oxirgi OFD sinxronizatsiya vaqti
- FM qolgan xotira hajmi

---

## **OFD sinxronizatsiya**

FDS tizimida OFD sinxronizatsiya avtomatik ishlaydi:

- Har bir chek ro'yxatga olingandan so'ng OFD ga yuboriladi
- Z-hisobot yopilganda barcha ma'lumotlar sinxronizatsiya qilinadi
- **48 soat** davomida OFD ga ulanish bo'lmasa — ogohlantirish beriladi

:::caution
48 soatdan ortiq OFD ga ulanmaslik fiskal modulning **bloklanishiga** olib keladi. Internet aloqasini doimiy ta'minlang!
:::

---

## **FDS sozlash**

FDS ni sozlash uchun **Sozlamalar > To'lov va Soliq** bo'limiga o'ting:

1. **Fiskal turi** — "FDS" ni tanlang
2. **FDS xizmati** kompyuterda o'rnatilgan va ishlayotganligini tekshiring
3. FM (USB-kalit) kompyuterga ulangan bo'lishi kerak
4. Test chek orqali ishlashni tekshiring

:::tip
FDS o'rnatish va sozlashni **Biznex texnik xizmati** bajaradi. Kassir va menejer bu jarayonga aralashishi shart emas.
:::

---

## **Xatolar va yechimlar**

| Xato | Sabab | Yechim |
|------|-------|--------|
| "FDS ulanmadi" | FDS xizmati ishlamayapti | Kompyuterni qayta yoqing, FDS xizmatini tekshiring |
| "FM topilmadi" | USB-kalit ajratilgan | FM ni USB portga ulang |
| "OFD sinxronizatsiya xatosi" | Internet yo'q | Internet aloqasini tekshiring |
| "Tranzaksiya xatosi" | FM xotirasi to'lgan | Z-hisobotni yoping, OFD sinxronizatsiya qiling |
