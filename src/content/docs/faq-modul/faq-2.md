---
title: Texnik masalalar
description: Texnik muammolar bo'yicha tez-tez so'raladigan savollar
---

# **Texnik masalalar ❓🔧**

Bu yerda Biznex POS dasturining texnik muammolari va ularning yechimlari keltirilgan.

---

## **Dastur ishga tushmayapti. Nima qilaman?**

1. Kompyuterning minimal talablarga mos kelishini tekshiring (Core i3, 4GB RAM).
2. Windows 10 yoki 11 o'rnatilganmi — tekshiring.
3. Dasturni o'chirib qayta ishga tushiring.
4. Kompyuterni qayta yoqing.
5. Dasturni o'chirib qaytadan o'rnating.

---

## **Ma'lumotlarim yo'qolib ketdimi?**

**Xotirjam bo'ling!** Biznex POS ma'lumotlarni ikki joyda saqlaydi:
- 💾 **Lokal** — qurilmaning o'zida
- ☁️ **Bulut** — serverda zaxira nusxa

Agar dasturni qaytadan o'rnatganingizda ma'lumotlarni qayta yuklashingiz mumkin.

---

## **Internet uzilganda nima bo'ladi?**

Biznex POS **offlayn rejimda** ham ishlaydi:
- ✅ Buyurtma ochish
- ✅ Mahsulot tanlash
- ✅ Naqd to'lov qabul qilish
- ⚠️ Karta to'lovi ishlamasligi mumkin (QPOS internet talab qiladi)
- ⚠️ Hisobotlar sinxronizatsiya bo'lmaydi

Internet tiklanganida barcha ma'lumotlar avtomatik sinxronizatsiya bo'ladi.

---

## **Litsenziya kalitim ishlamayapti. Nima qilaman?**

1. Kalitni to'g'ri kiritganingizni tekshiring (bo'shliqlar yo'qligini aniqlang).
2. Internet ulanishi borligini tekshiring.
3. Muammo davom etsa — qo'llab-quvvatlash xizmatiga murojaat qiling.

---

## **Mobil ilova POS ga ulanmayapti. Nega?**

> ⚠️ **Ko'p hollarda bu ilova xatosi emas — tarmoq muammosi!**

Bosqichma-bosqich tekshiring:

**1. Admin monoblok ishlayaptimi?**
- 🖥️ Monoblok yoqilganmi va Biznex dasturi ochiqmi?
- Agar dastur yopiq bo'lsa — mobil qurilma **hech qachon ulana olmaydi**.

**2. Hozirgina login qilinganmi?**
- Agar Biznex endigina ishga tushgan bo'lsa — dasturdan **chiqib, qayta kiring**. Server to'liq yuklanmagan bo'lishi mumkin.

**3. Brauzer orqali tekshiring (eng muhim qadam!):**
- Telefon brauzerida `http://[IP manzil]:8080` ni oching.
- ✅ **"Route not found"** yoki **"Biznex server ishlamoqda"** chiqsa → muammo **ilovada** → dasturchilarga murojaat qiling.
- ❌ **Sahifa ochilmasa** → muammo **tarmoqda** → quyidagilarni tekshiring:
  - 📡 Telefon va monoblok **bir xil Wi-Fi** tarmoqdami?
  - 📱 Telefonda **mobil internet** emas, **Wi-Fi** ishlatilayaptimi?
  - 🔒 Telefonda **VPN o'chirilgan**mi? (VPN lokal ulanishni bloklaydi)

> 📖 Batafsil diagnostika — [Ulanish](/devices-modul/connection/) sahifasida.

---

## **Dastur sekin ishlayapti. Qanday tezlashtiraman?**

1. **RAM** yetarliligini tekshiring (8GB tavsiya etiladi).
2. **SSD** disk ishlating (HDD sekin).
3. Keraksiz dasturlarni yoping.
4. Biznex POS ni qayta ishga tushiring.
5. Windows yangilanishlarini o'rnating.

---

## **Printer xatolarini qanday hal qilaman?**

| Xato | Yechim |
|------|--------|
| Printer topilmayapti | USB kabelni qayta ulang, printerni qayta yoqing |
| Chek bo'sh chiqyapti | Termal qog'ozning to'g'ri tomonini tekshiring |
| Qog'oz tiqilib qoldi | Printerni oching, qog'ozni ehtiyotkorlik bilan chiqaring |
| Chop etish sifati past | Printer boshini tozalang, yangi qog'oz soling |

---

## **Barkod skaner ishlamayapti?**

1. USB ulanishni tekshiring.
2. Skanerni qayta ulang.
3. Biznex POS da kursor mahsulot qidiruv maydonida turganligini tekshiring.
4. Skaner drayverini yangilang.

---

## **Dasturni qanday yangilayman?**

1. Yangi versiya mavjudligi haqida **bildirishnoma** keladi.
2. **"Yangilash"** tugmasini bosing.
3. Yangilanish avtomatik yuklanadi va o'rnatiladi.
4. Dasturni qayta ishga tushiring.

---

🎉 Muammongiz hal bo'lmadimi? Qo'llab-quvvatlash xizmatiga murojaat qiling!
