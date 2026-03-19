---
title: Chek va hisobot
description: Z-hisobot, kassa cheki, QR-kod va MXIK kodlari haqida qonunchilik talablari
---

# **Chek va hisobot**

Kassa cheki, Z-hisobot, QR-kod va MXIK kodlari bo'yicha qonunchilik talablari.

---

## **6. Z-hisobot**

Fiskal modulning operativ xotirasidagi cheklarning asosiy fiskal ma'lumotlarini bo'shatib, ularni **o'chmas xotiraga** joylashtirgan holda shakllanadigan hisobot shakli.

**Xususiyatlari:**
- Z-hisobotda uning **ochilish va yopilish vaqtlari** qayd etiladi
- Hisobotlar fiskal modul xotirasida shakllantiriladi va saqlanadi

:::note
Biznex POS tizimida Z-hisobot har kuni ish yakunida avtomatik shakllantiriladi.
:::

---

## **7. Kassa cheki**

Sotuvchi va xaridor o'rtasidagi hisob-kitobni tasdiqlovchi **birlamchi hisob hujjati**. Chek qog'ozda chop etilishi yoki elektron shaklda yuborilishi mumkin.

### Qog'oz chek uchun talablar

| Talab | Qiymat |
|-------|--------|
| Qog'oz rangi | Oq |
| Yozuv rangi | Qora |
| Qog'oz kengligi | Kamida **55 mm** |
| Harflar balandligi | Kamida **2 mm** |

### Chekdagi majburiy rekvizitlar

Har bir kassa chekida quyidagilar bo'lishi **shart**:

1. Sotuvchining **nomi**
2. **STIR** (soliq to'lovchi identifikatsiya raqami)
3. **MXIK kodi** (mahsulot identifikatsiya kodi)
4. Tovar **nomi**
5. **Miqdori**
6. **Narxi**
7. **QQS summasi**
8. **To'lov shakli** (naqd, karta, aralash)
9. **Sana va vaqt**
10. **Fiskal belgi**
11. **QR-kod**

:::caution
Bo'nak (avans), bo'lib to'lash va kredit cheklarida QR-kod va fiskal belgi aks ettirilmaydi.
:::

---

## **8. QR-kod**

Berilgan kassa chekining **haqiqiyligini tekshirish** uchun xizmat qiladigan matritsali shtrixli kod.

**Talablar:**
- O'lchami kamida **30x30 millimetr**
- Xaridorlar soliq organlarining maxsus mobil ilovasi orqali kodni skanerlab, chekni ro'yxatdan o'tkazishlari yoki uning haqiqiyligini tekshirishlari mumkin

---

## **9. MXIK (Mahsulotlar va xizmatlarning identifikatsiya kodi)**

Mahsulotlar va xizmatlarning yagona elektron milliy katalogi asosida ma'lum bir turdagi tovar yoki xizmatga berilgan **takrorlanmas raqamlar to'plami**.

**Talablar:**
- Onlayn-NKM va virtual kassalar MXIK kodlarni **real vaqt rejimida** o'z xotirasiga yuklab olish imkoniyatiga ega bo'lishi kerak
- Kassa chekida har bir mahsulotning **MXIK kodi** va unga mos **o'lchov birligi** ko'rsatilishi majburiy

:::tip
Biznex POS tizimida MXIK kodlarni sozlash haqida: [MXIK kodlar](/tax-modul/mxik)
:::
