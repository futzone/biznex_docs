---
title: Oshxona ishlab chiqarish
description: Oshxona ishlab chiqarish moduli — masalliqlardan tayyor mahsulot tayyorlash va hisoblash
---

# **Oshxona ishlab chiqarish**

Oshxona ishlab chiqarish moduli masalliqlardan tayyor mahsulot tayyorlash jarayonini boshqaradi. Retseptlar asosida masalliq sarfini hisoblaydi va omborxona zaxirasini avtomatik yangilaydi.

---

## **Modul nima uchun kerak?**

1. **Aniq hisob-kitob** — qancha masalliq sarflanganini bilish
2. **Zaxirani nazorat** — masalliq yetarliligini oldindan tekshirish
3. **Isrofni kamaytirish** — ortiqcha tayyorlashni oldini olish
4. **Tarix** — qachon, nima, qancha tayyorlanganini kuzatish

---

## **Hisoblash rejimlari**

Oshxona modulida **2 ta hisoblash rejimi** mavjud:

### 1-rejim: Mahsulot → Retsept ("Qancha masalliq kerak?")

Bu rejimda tayyor mahsulot miqdori kiritiladi va tizim qancha masalliq kerakligini hisoblaydi.

**Misol:**
> 50 ta osh tayyorlash kerak. Retseptda 1 porsiya osh = 300g guruch, 200g sabzi, 150g go'sht.

| Masalliq | Kerakli miqdor | Omborda bor | Holat |
|----------|---------------|-------------|-------|
| Guruch | 15 kg | 20 kg | Yetarli |
| Sabzi | 10 kg | 8 kg | **Yetmaydi** (2 kg kam) |
| Go'sht | 7.5 kg | 10 kg | Yetarli |

Tizim avtomatik **bottleneck** (cheklovchi masalliq) ni aniqlaydi — yuqoridagi misolda sabzi cheklovchi.

### 2-rejim: Retsept → Mahsulot ("Qancha tayyorlay olamiz?")

Bu rejimda mavjud masalliqlar miqdori kiritiladi va tizim maksimal qancha tayyor mahsulot tayyorlash mumkinligini hisoblaydi.

**Misol:**
> Omborda 20 kg guruch, 8 kg sabzi, 10 kg go'sht bor. Nechta osh tayyorlash mumkin?

Javob: **40 porsiya** (sabzi cheklovchi — 8 kg / 200g = 40 ta)

---

## **Ishlash tartibi**

### 1-qadam: Retseptni tanlang
Ishlab chiqarish sahifasida retseptlar ro'yxatidan kerakli retseptni tanlang.

### 2-qadam: Miqdorni kiriting
- **1-rejim:** Tayyorlamoqchi bo'lgan mahsulot miqdorini kiriting
- **2-rejim:** Mavjud masalliqlar miqdorini kiriting yoki ombordan avtomatik oling

### 3-qadam: Natijani ko'ring
Tizim hisoblaydi va ko'rsatadi:
- Har bir masalliq uchun kerakli miqdor
- Ombordagi mavjud miqdor
- Yetarlilik holati (yetarli / yetmaydi)
- Cheklovchi masalliq (bottleneck)

### 4-qadam: Tasdiqlang
- **"Saqlash"** — hisoblashni saqlaydi (omborni o'zgartirmaydi)
- **"Ishlab chiqarish"** — ombordan masalliqlar avtomatik ayiriladi va tayyor mahsulot qo'shiladi

---

## **Ishlab chiqarish tarixi**

Barcha ishlab chiqarishlar tarixda saqlanadi:

| Ma'lumot | Tavsifi |
|----------|---------|
| Sana va vaqt | Ishlab chiqarish vaqti |
| Retsept nomi | Qaysi mahsulot tayyorlangan |
| Miqdor | Nechta tayyorlangan |
| Masalliqlar | Sarflangan masalliqlar ro'yxati |
| Xodim | Kim tomonidan bajariilgan |

---

## **Maslahatlar**

- Har safar ishlab chiqarishdan oldin **masalliq yetarliligini tekshiring** (1-rejim)
- Retseptlarni to'g'ri kiritgan bo'lsangiz, omborxona avtomatik yangilanadi
- Ishlab chiqarish tarixini muntazam tekshiring — isrofni aniqlash uchun
- **Yarim tayyor mahsulotlar** ham alohida retsept sifatida kiritilishi mumkin
