---
title: Soliq integratsiyasi
description: Biznex POS tizimida soliq va fiskal integratsiya haqida umumiy ma'lumot
---

# **Soliq integratsiyasi 🧾📋**

O'zbekistonda savdo va xizmat ko'rsatish sohasida faoliyat yurituvchi barcha tadbirkorlar **soliq qonunchiligiga** rioya qilishi shart. Biznex POS tizimi soliq bilan bog'liq barcha jarayonlarni soddalashtirish va avtomatlashtirishga yordam beradi.

---

## **Nima uchun soliq integratsiyasi kerak? 🎯**

1. **Qonuniy talab:** O'zbekiston qonunchiligiga ko'ra, barcha savdo nuqtalari fiskal qurilmalardan foydalanishi shart.
2. **Jarimalardan himoya:** Fiskal chek bermaslik yoki MXIK kodlarsiz savdo qilish jarimaga olib keladi.
3. **Shaffof hisobot:** Soliq organlariga avtomatik hisobot beriladi.
4. **Mijoz ishonchi:** Rasmiy fiskal chek — mijoz huquqlarini kafolatlaydi.

---

## **Biznex'dagi soliq komponentlari 🔧**

Biznex POS tizimi quyidagi soliq va fiskal komponentlarni qo'llab-quvvatlaydi:

| Komponent | Tavsif | Holat |
|-----------|--------|-------|
| 🖨️ **QPOS terminal** | Soliq idorasi bilan bog'langan to'lov terminali | Integratsiya |
| 📟 **Fiskal modul (FM)** | Chekni fiskallashtiruvchi qurilma | Integratsiya |
| 🏷️ **MXIK kodlar** | Mahsulotlarning milliy klassifikatori | Faol |
| 📦 **Paket kodlar** | Mahsulot qadoqlash kodlari | Faol |

---

## **Umumiy ishlash tartibi 📊**

```
Buyurtma → To'lov → Fiskal chek → Soliq serveriga yuborish
```

1. **Mijoz buyurtma beradi** — mahsulotlar tanlanadi
2. **To'lov qabul qilinadi** — naqd, karta yoki online
3. **Fiskal chek shakllanadi** — FM orqali chek fiskallashtiriladi
4. **Soliq serveriga yuboriladi** — ma'lumotlar avtomatik DYS (Davlat Yagona Server) ga ketadi
5. **Mijozga chek beriladi** — QR kodli fiskal chek chop etiladi

---

## **Bo'limlar 📚**

Bu bo'limda quyidagi mavzular batafsil yoritilgan:

- 🖨️ [**QPOS terminali**](/tax-modul/qpos/) — QPOS qurilmasi nima, qanday ishlaydi, qanday sozlanadi
- 📟 [**Fiskal modul (FM)**](/tax-modul/fiscal-module/) — fiskal qurilma nima, turlari va o'rnatish
- 🏷️ [**MXIK kodlar**](/tax-modul/mxik/) — mahsulotlarga MXIK kod berish, qidirish va kiritish
- 📦 [**Paket kodlar**](/tax-modul/package-codes/) — qadoqlash kodlari va ularning ahamiyati
- 🧾 [**Fiskal chek**](/tax-modul/fiscal-receipt/) — fiskal chek tarkibi va talablar

---

> 💡 **Muhim:** Soliq integratsiyasi O'zbekiston Respublikasi Soliq qo'mitasi talablariga muvofiq ishlaydi. Barcha ma'lumotlar DYS (Davlat Yagona Server) orqali soliq organlariga uzatiladi.

---

🎉 Keyingi sahifalarda har bir komponent haqida batafsil ma'lumot berilgan!
