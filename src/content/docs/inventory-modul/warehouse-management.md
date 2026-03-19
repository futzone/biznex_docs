---
title: Omborxona boshqaruvi
description: Biznex POS tizimida ombor qoldiqlari, xaridlar, yetkazuvchilar va yarim tayyor mahsulotlarni boshqarish
---

# **Omborxona boshqaruvi**

Omborxona boshqaruvi — ingredientlar va xom ashyo qoldiqlarini kuzatish, xaridlarni qayd etish, yetkazuvchilarni boshqarish va sarflanishni nazorat qilish uchun mo'ljallangan bo'lim.

---

## **Ombor tizimi qanday ishlaydi?**

```
Xarid → Omborga kirim → Savdo → Avtomatik sarflanish → Qoldiq yangilanadi
```

1. **Xarid qilinadi** — ingredientlar sotib olinadi va tizimga kiritiladi
2. **Ombor to'ladi** — xarid qilingan mahsulotlar ombor qoldig'iga qo'shiladi
3. **Savdo bo'lganda** — retseptlar asosida ingredientlar avtomatik sarflanadi
4. **Qoldiq yangilanadi** — har bir savdoda real vaqtda qoldiq kamayadi

---

## **Omborxona bo'limlari**

### Masalliqlar (Ingredientlar)
Barcha xom ashyo va masalliqlar ro'yxati:

| Ma'lumot | Tavsif |
|----------|--------|
| **Nomi** | Masalliq nomi |
| **Qoldiq** | Hozirgi ombordagi miqdor |
| **O'lchov** | kg, litr, dona |
| **Qiymati** | Ombordagi qoldiqning pul qiymati |
| **Holat** | Yetarli / Kam qoldi / Tugagan |

### Xaridlar
Barcha xarid operatsiyalari qayd etiladi:
- Sana, yetkazuvchi, mahsulotlar ro'yxati, summa
- Partiya raqami va yaroqlilik muddati
- FIFO/FEFO tizimi bo'yicha sarflanish

### Yetkazuvchilar
Yetkazuvchilar bazasini boshqarish:
- Yetkazuvchi nomi va kontakt ma'lumotlari
- Yetkazuvchi bo'yicha xarid tarixi
- Narxlar taqqoslash imkoniyati

### Retseptlar
Omborxona ichidan retseptlarni ko'rish va boshqarish:
- Har bir taom uchun kerakli masalliqlar
- Masalliq miqdorlari va o'lchovlari
- Tannarx avtomatik hisoblash

### Yarim tayyor mahsulotlar
Yarim tayyor (semi-finished) mahsulotlar boshqaruvi:
- Tayyor bo'lmagan, lekin qayta ishlangan masalliqlar
- Alohida retsept va tannarx
- Ombor zaxirasida alohida kuzatish

### Oshxona ishlab chiqarish
Masalliqlardan tayyor mahsulot tayyorlash:
- 2 ta hisoblash rejimi (batafsil: [Oshxona ishlab chiqarish](/inventory-modul/kitchen))
- Masalliq yetarliligini tekshirish
- Ombordan avtomatik masalliq ayirish

---

## **Ogohlantirish tizimi**

Tizim avtomatik ogohlantiradi:

| Holat | Belgi | Tavsifi |
|-------|-------|---------|
| **Yetarli** | Yashil | Zaxira yetarli darajada |
| **Kam qoldi** | Sariq | Masalliq minimal darajaga yetgan |
| **Tugadi** | Qizil | Masalliq butunlay tugagan |

---

## **Omborxona hisobotlari**

Omborxona bo'yicha quyidagi hisobotlar mavjud (batafsil: [Tahlillar](/inventory-modul/analytics)):

| Hisobot | Tavsifi |
|---------|---------|
| **ABC tahlil** | Masalliqlarni muhimlik bo'yicha A/B/C kategoriyalarga ajratish |
| **Food Cost** | Har bir taomning masalliq tannarxi va foydaliligi |
| **Avtomatik xarid** | Minimal zaxira asosida xarid taklifi |
| **Iste'mol hisoboti** | Masalliq sarflanish tahlili |
| **Narx tarixi** | Masalliq narxlari o'zgarishi vaqt davomida |
| **Zaxira hisoboti** | Joriy ombor holati |
| **Isrof hisoboti** | Yo'qotilgan va muddati o'tgan masalliqlar |

---

## **Maslahatlar**

- **Retseptlarni to'g'ri kiriting:** Ombor avtomatik ishlashi uchun retseptlar aniq bo'lishi kerak
- **Muntazam inventarizatsiya:** Tizim ma'lumotlarini haqiqiy qoldiqlar bilan solishtiring
- **Xaridlarni rejalashtiring:** Avtomatik xarid ro'yxatidan foydalaning
- **Yetkazuvchilarni taqqoslang:** Narx tarixi orqali eng yaxshi narxni toping
- **Yarim tayyor mahsulotlar:** Murakkab taomlar uchun alohida yarim tayyor retseptlar yarating
