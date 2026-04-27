---
title: Soliq integratsiyasi
description: Biznex POS tizimida soliq va fiskal integratsiya haqida umumiy ma'lumot
---

# **Soliq integratsiyasi**

O'zbekistonda savdo va xizmat ko'rsatish sohasida faoliyat yurituvchi barcha tadbirkorlar **soliq qonunchiligiga** rioya qilishi shart. Biznex POS tizimi soliq bilan bog'liq barcha jarayonlarni soddalashtirish va avtomatlashtirishga yordam beradi.

---

## **Nima uchun soliq integratsiyasi kerak?**

1. **Qonuniy talab:** O'zbekiston qonunchiligiga ko'ra, barcha savdo nuqtalari fiskal qurilmalardan foydalanishi shart.
2. **Jarimalardan himoya:** Fiskal chek bermaslik yoki MXIK kodlarsiz savdo qilish jarimaga olib keladi.
3. **Shaffof hisobot:** Soliq organlariga avtomatik hisobot beriladi.
4. **Mijoz ishonchi:** Rasmiy fiskal chek — mijoz huquqlarini kafolatlaydi.

---

## **Fiskal tizimlar**

Biznex POS da **uchta fiskal tizim** qo'llab-quvvatlanadi. Sozlamalarda keraklisini tanlash mumkin:

| Tizim | Tavsif | Port | Holat |
|-------|--------|------|-------|
| **QPOS** | An'anaviy fiskal tizim — dasturiy kutubxona orqali ishlaydi | — | Faol |
| **FDS** | Yangi avlod fiskal xizmat — lokal REST API orqali ishlaydi | 3449 | Faol |
| **Rahmat MK** | Multikassa fiskal qurilma — lokal REST API orqali ishlaydi | 12346 | Faol |

:::note
Yangi o'rnatishlar uchun **FDS** yoki **Rahmat MK** tavsiya etiladi. Mavjud QPOS tizimlar ham ishlashda davom etadi. Sozlamalarda **To'lov va Soliq > Fiskal sozlamalar** bo'limida tanlash mumkin.
:::

---

## **Biznex'dagi soliq komponentlari**

| Komponent | Tavsif | Holat |
|-----------|--------|-------|
| **QPOS terminal** | An'anaviy fiskal tizim | Faol |
| **FDS xizmati** | Yangi avlod fiskal REST API xizmati (port 3449) | Faol |
| **Rahmat MK (Multikassa)** | Multikassa fiskal qurilma REST API (port 12346) | Faol |
| **Fiskal modul (FM)** | Chekni fiskallashtiruvchi USB qurilma | Faol |
| **OFD sinxronizatsiya** | Fiskal ma'lumotlarni operatorga yuborish | Faol |
| **MXIK kodlar** | Mahsulotlarning milliy klassifikatori (avtomatik qidiruv) | Faol |
| **Paket kodlar** | Mahsulot qadoqlash kodlari | Faol |

---

## **Umumiy ishlash tartibi**

```
Buyurtma → To'lov → Fiskal chek → OFD ga yuborish → Mijozga chek
```

1. **Mijoz buyurtma beradi** — mahsulotlar tanlanadi
2. **To'lov qabul qilinadi** — naqd, karta yoki onlayn (Click, Payme, Uzum, va boshqalar)
3. **Fiskal chek shakllanadi** — FM orqali chek fiskallashtiriladi (QPOS yoki FDS orqali)
4. **OFD ga yuboriladi** — ma'lumotlar avtomatik operatorga ketadi
5. **Mijozga chek beriladi** — QR kodli fiskal chek chop etiladi

---

## **OFD sinxronizatsiya**

OFD (Online Fiscal Data) — fiskal ma'lumotlarni soliq operatoriga yuborish tizimi.

- Har bir fiskal chek avtomatik OFD ga yuboriladi
- Z-hisobot yopilganda kunlik ma'lumotlar sinxronizatsiya qilinadi
- **48 soat** davomida OFD ga ulanmaslik — FM bloklanishiga olib keladi
- Biznex POS da OFD sinxronizatsiya holati **Monitoring > Fiskal** sahifasida ko'rinadi

---

## **Bo'limlar**

Bu bo'limda quyidagi mavzular batafsil yoritilgan:

- [**QPOS terminali**](/tax-modul/qpos/) — QPOS qurilmasi nima, qanday ishlaydi, qanday sozlanadi
- [**Fiskal modul (FM)**](/tax-modul/fiscal-module/) — fiskal qurilma nima, turlari va o'rnatish
- [**FDS xizmati**](/tax-modul/fds/) — yangi avlod fiskal REST API xizmati
- [**MXIK kodlar**](/tax-modul/mxik/) — mahsulotlarga MXIK kod berish, qidirish va kiritish
- [**Paket kodlar**](/tax-modul/package-codes/) — qadoqlash kodlari va ularning ahamiyati
- [**Fiskal chek**](/tax-modul/fiscal-receipt/) — fiskal chek tarkibi va talablar

---

> **Muhim:** Soliq integratsiyasi O'zbekiston Respublikasi Soliq qo'mitasi talablariga muvofiq ishlaydi. Barcha ma'lumotlar OFD orqali soliq organlariga uzatiladi.
