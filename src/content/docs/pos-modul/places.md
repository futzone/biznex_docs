---
title: Joylar
description: Biznes manzilingizdagi xona, zal va o'rinlar haqida
---

## 🍽️ Biznex POS: Joylar (O'tirish Joylari/Zallar)

Biznex POS tizimidagi "Joylar" funksiyasi restoraningiz, kafeniz yoki umumiy ovqatlanish korxonangizning jismoniy tartibini raqamli boshqarishga yordam beradi. Bu funksiya orqali siz buyurtmalarni aniq joylarga bog'lashingiz, xizmat ko'rsatish samaradorligini oshirishingiz va xodimlaringizning ishini osonlashtirishingiz mumkin.

---

### 🌟 Asosiy Xususiyatlar

"Joylar" moduli quyidagi asosiy elementlarni o'z ichiga oladi:

* **Xona/Zal/Qavat:** Katta hududlarni (masalan, "Birinchi qavat", "Yozgi ayvon", "VIP zal") ajratish imkoniyati.
* **Stollar:** Har bir xona/zal ichidagi individual stollar.
* **Mijozni Qabul qilish:** Har bir stolga mijoz kelganda, aynan shu joy uchun yangi buyurtma (ochiq chek) ochiladi.
* **Dinamik Buyurtma Boshqaruvi:** Mijoz o'tirganidan to ketgunigacha barcha mahsulot/taom qo'shimchalari yoki o'zgartirishlar ochilgan buyurtma ichida saqlanadi.

---

### 🚀 Joylarni Boshqarish Bo'yicha Yo'riqnoma

Quyida Biznex POS tizimida joylarni yaratish va ulardan foydalanish bo'yicha bosqichma-bosqich ko'rsatmalar keltirilgan.

#### 1. Joy (Xona/Zal) Yaratish

1.  **⚙️ Biznex Admin:** ilovaga kiring.
2.  **📌 "Joylar" bo'limini toping:**  "Joylar" (yoki "Zallar/Qavatlar") menyusiga kiring.
3.  **➕ Yangi Joy Qo'shish:** "+" tugmasini bosing.
4.  **🏷️ Nom Bering:** Joyning nomini kiriting (Masalan: **"Qavat 1 - Asosiy Zal"**, **"Yozgi Terassa"**).
5.  **✅ Saqlash:** O'zgarishlarni saqlang.

#### 2. Stollar (O'tirish Joylari) Yaratish

1.  **🚪 Joyni Tanlang:** Yuqorida yaratilgan Joylardan (Zallardan) birini tanlang.
2.  **➕ Joy Qo'shish:** "Joy Qo'shish" tugmasini bosing.
3.  **🔢 Stol Raqamini/Nomini Kiriting:** Stolga aniq nom yoki raqam bering (Masalan: **"Stol 5"**, **"Deraza oldi"**).
4.  **🪑 O'Joylar Sonini Belgilang (Ixtiyoriy):** Stolning maksimal o'rindiq sonini belgilashingiz mumkin.
5.  **💾 Saqlash:** O'zgarishlarni saqlang.

---

### 📝 Buyurtma Jarayoni Joylar Orqali

Ofitsiant (Xodim) mijozga xizmat ko'rsatishni boshlash uchun quyidagi tartibda ishlaydi:

1.  **👀 Joyni Tanlash:** Mijoz o'tirgan **Xona/Zal/Qavat**ni tanlang (Masalan, "Qavat 1 - Asosiy Zal").
2.  **🪑 Stolni Tanlash:** Mijoz o'tirgan **Stol**ni bosing (Masalan, "Stol 5").
3.  **🆕 Yangi Buyurtma O'tkazish:** Agar stol bo'sh bo'lsa, tizim avtomatik ravishda shu stolga bog'langan yangi (bo'sh) buyurtmani ochadi.
4.  **🛒 Mahsulotlarni Qo'shish:** Mijoz buyurtmasini (taomlar, ichimliklar) buyurtma ichiga kiriting.
5.  **🔄 Buyurtmani Yangilash:** Mijoz yangi mahsulot buyurtma qilsa, yana o'sha Stolni tanlab, mavjud **Ochiq Buyurtma**ga mahsulotlarni qo'shing.

> **Muhim Eslatma:** Buyurtma mijoz stolni tark etib, to'lov amalga oshirilgunga qadar o'z stoliga bog'langan holda **Ochiq** holatda turadi.

---

### 💰 Joy Narxi va Foiz Sozlamasi

Har bir joy (zal/qavat) uchun **muhim sozlama** mavjud — buyurtmalarga **xizmat haqi foizi** qo'shilsinmi yoki yo'qmi.

#### "Foiz qo'shilsinmi?" tugmasi

Joy yaratish yoki tahrirlash oynasida **"Foiz qo'shilsinmi?"** tugmasi bor:

| Holat | Ma'nosi |
|-------|---------|
| **Yoqilgan** (standart) | Shu joydagi buyurtmalarga **xizmat haqi foizi qo'shiladi** |
| **O'chirilgan** | Shu joydagi buyurtmalarga **foiz qo'shilmaydi** — faqat taom narxi |

> 💡 **Misol:** "VIP zal" uchun xizmat haqi 10% qo'shilsin, lekin "Olib ketish" uchun foiz kerak emas — shu holatda "Olib ketish" joyida foiz tugmasini o'chiring.

#### Qanday hisoblanadi?

Agar joyda foiz **yoqilgan** bo'lsa:

```
Buyurtma jami = Taomlar narxi + Xizmat haqi foizi
```

Masalan: Taomlar 100 000 so'm, xizmat haqi 10%:
- Xizmat haqi: **10 000 so'm**
- Jami: **110 000 so'm**

Agar joyda foiz **o'chirilgan** bo'lsa:
- Faqat taomlar narxi hisoblanadi
- Jami: **100 000 so'm**

#### Qaysi joylar uchun foizni o'chirish kerak?

| Joy turi | Foiz | Sabab |
|----------|------|-------|
| VIP zal | Yoqilgan | Xizmat ko'rsatish bor |
| Oddiy zal | Yoqilgan | Ofitsiant xizmati bor |
| Olib ketish (Takeaway) | O'chirilgan | Xizmat ko'rsatish yo'q |
| Yetkazib berish (Delivery) | Qaroringizga bog'liq | Kuryer xizmati uchun alohida narx bo'lishi mumkin |

> ⚠️ **Xizmat haqi foizi**ning o'zi (masalan, 10%) **Sozlamalar** → **Buyurtma sozlamalari** bo'limida belgilanadi. Joyda faqat shu foiz **qo'shilsinmi yoki yo'qmi** boshqariladi. Batafsil: [Ilova sozlamalari](/config-modul/settings/)

---

### 💡 Maslahatlar va Foydali Ma'lumotlar

* **Rangli Indikatorlar:** POS interfeysida stollar turli ranglarda ko'rsatilishi mumkin:
    * **Yashil:** Bo'sh stol, yangi buyurtma olishga tayyor.
    * **Kulrang:** Band stol, hozirda mijoz mavjud va buyurtma ochiq.
* **Xodim Biriktirish:** Har bir stolga (ochiq buyurtmaga) xizmat ko'rsatayotgan xodim (ofitsiant) ma'lumotlari avtomatik biriktiriladi.
* **Foiz sozlamasini to'g'ri qo'ying:** Olib ketish va yetkazib berish joylari uchun foizni o'chirish muhim — mijozga ortiqcha narx yozilmaydi.

---

### 🖨️ Joy uchun alohida printer sozlamasi

Har bir joy uchun **alohida printer** belgilash mumkin:
- Masalan, "VIP zal" uchun alohida printer, "Oddiy zal" uchun boshqa printer
- Joy yaratish/tahrirlash oynasida **"Printer"** bo'limidan tanlang
- **"Yopish printeri"** — ish kuni yakunida chop etiladigan printer ham alohida belgilanishi mumkin

### 💰 Joy uchun alohida narxlash

Joylarga alohida narx sozlamasi qilish mumkin:
- Joy yaratish oynasida **narx parametrlari**ni belgilang
- Turli joylar uchun turli xizmat foizlari

