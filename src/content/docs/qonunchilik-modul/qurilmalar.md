---
title: Qurilmalar va tizimlar
description: Onlayn-NKM, virtual kassa, fiskal modul, fiskal belgi va fiskal ma'lumotlar operatori haqida batafsil ma'lumot
---

# **Qurilmalar va tizimlar**

Qonunchilikda belgilangan asosiy qurilmalar va tizimlar haqida batafsil ma'lumot.

---

## **1. Onlayn nazorat-kassa mashinalari (Onlayn-NKM)**

Fiskal modulga ulanish imkoniyatiga ega bo'lgan, fiskal hujjatlarni (cheklarni) shakllantiradigan va ularni **real vaqt rejimida** fiskal ma'lumotlar operatoriga yuborishni ta'minlaydigan qurilmalardir.

**Asosiy xususiyatlari:**
- Cheklarni qog'ozga chop etish yoki elektron shaklda yuborish funksiyasiga ega
- Zavod raqamiga va ushbu raqam ko'rsatilgan korpusga ega bo'lishi shart
- Fiskal modulsiz ishlash imkoniyati cheklangan
- Real vaqt rejimida **GPS (geolokatsiya)** ma'lumotlarini operatorga yuboradi
- **48 soat** offlayn rejimda ishlagandan so'ng avtomatik bloklanadi

:::note
Biznex POS tizimi onlayn-NKM sifatida soliq organlari bilan to'liq integratsiya qilingan.
:::

---

## **2. Virtual kassa**

Fiskal hujjatlarni shakllantiruvchi va operatorga real vaqt rejimida yuboruvchi **dasturiy mahsulot** va ularning kompleksidir.

**Onlayn-NKM dan farqi:**
- Jismoniy qurilma emas, balki **dasturiy ta'minot**
- Fiskal modulsiz ishlamaydi
- Ma'lumotlar bazasiga tashqaridan aralashilganda bloklanish tizimiga ega
- Elektron tijorat platformalari (Marketpleyslar) uchun Soliq qo'mitasi tomonidan ishlab chiqilgan virtual kassa dasturlaridan foydalanish mumkin

---

## **3. Fiskal modul**

Operator tomonidan ishlab chiqilgan, maxsus himoyalangan dasturiy ta'minotga ega bo'lgan, fiskal ma'lumotlarning **kriptografik himoyasini** ta'minlaydigan ixtisoslashgan jismoniy qurilma. **Smart-karta** yoki **USB-kalit** ko'rinishida bo'ladi.

**Fiskal modul vazifalari:**

| Vazifa | Tavsifi |
|--------|---------|
| Cheklarni ro'yxatga olish | O'z xotirasida barcha cheklarni saqlaydi |
| Fiskal belgini hosil qilish | Har bir chek uchun kriptografik belgi yaratadi |
| Z-hisobotlar | Z-hisobotlarni shakllantiradi va saqlaydi |

:::tip
Fiskal modul Biznex POS qurilmasiga USB orqali ulanadi. Ulanish haqida batafsil: [Qurilmalar > Ulanish](/devices-modul/connection)
:::

---

## **4. Fiskal belgi**

Fiskal ma'lumotlarni milliy standartlar asosida kriptografik o'zgartirish natijasida fiskal modul yoki elektron raqamli imzo orqali hosil bo'ladigan **takrorlanmas belgilar to'plami**.

**Muhim jihatlar:**
- Chekning **haqiqiyligini tasdiqlaydi**
- Bo'nak (avans), bo'lib to'lash yoki kredit turlaridagi cheklarda fiskal belgi **aks ettirilmaydi**

---

## **5. Fiskal ma'lumotlar operatori**

Onlayn rejimda fiskal ma'lumotlarni mustaqil va doimiy ravishda qabul qilish, qayta ishlash va saqlash ishlarini bajaruvchi tashkilot.

**O'zbekistonda:** Soliq qo'mitasi huzuridagi **"Yangi texnologiyalar" ilmiy-axborot markazi** DUK

**Operator majburiyatlari:**
- Ma'lumotlarni **5 yil** davomida saqlash
- Ma'lumotlar xavfsizligini ta'minlash
- QR-kod orqali cheklarning haqiqiyligini tekshirish imkonini beruvchi tizimlarni ishlab chiqish
