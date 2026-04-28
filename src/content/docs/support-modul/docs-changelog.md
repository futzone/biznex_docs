---
title: Docs o'zgarishlar
description: Biznex POS qo'llanmasi (docs.biznex.uz) versiyalari va o'zgarishlar tarixi
---

# **Docs o'zgarishlar tarixi**

Bu yerda **docs.biznex.uz** qo'llanmasining versiyalari va har bir yangilanishda kiritilgan o'zgarishlar keltirilgan.

---

## **v1.4 (Joriy versiya)**

📅 **2026-yil 28-aprel**

### Yangi bo'limlar (markirovka va javobgarlik)

ASL BELGISI rasmiy hujjatlari (`meta/soliq/`) asosida 4 ta yangi sahifa qo'shildi:

- 🏷️ **Raqamli markirovka (qonunchilik)** — Data Matrix, NIS "ASL BELGISI", `Label` maydoni formati va kesish algoritmi, tovar guruhlari (alkogol, pivo, tamaki, dorivor, suv, maishiy texnika), KITU formatlari (BAT, PMI, JTI, Gulbahar, T&W), cisType aniqlash
- 🍷 **Quyib sotish** — restoran/bar/kafe uchun avans cheki mexanizmi, 8 bosqichli yo'riqnoma (my3.soliq.uz arizasi, "ASL BELGISI" ro'yxat, kassa sozlash), realistik stsenariylar (bar bokal sotuvi, restoran kokteyli, mehmonxona minibari)
- ⚖️ **Jarima va javobgarlik** — Soliq kodeksi 223-modda 5-qismi (1% jarima 2023-yil 1-martdan), markirovka qoidalarini buzganlik, eskirgan kassa (2022/2023 chegarasi), Davlat reyestriga kiritilmagan tizim, smena yopmaslik oqibatlari
- 🏷️ **Markirovka (tax-modul)** — Biznex POS da Data Matrix skanerlash, mahsulotni sozlash, `Label` avtomatik kesish (`OfdLabelNormalizer`), qaytarish, monitoring va tez-tez uchraydigan xatolar

### Yangilangan sahifalar
- 📜 **Qonunchilik asoslari** — VM 833-sonli, 201-sonli, 489-sonli, 249-sonli qarorlari va Soliq kodeksi 223-moddasi normativ jadvali qo'shildi
- ⚙️ **Texnik talablar** — `Label` maydoni formati (63 belgi limit, KM ning kesilgan qismi), GTIN/Barcode, dublikat taqiqi, donalab kiritish
- 🧾 **Soliq integratsiyasi (overview)** — Markirovka sahifasiga havola qo'shildi
- 📞 **Call Center FAQ** — markirovkasiz tovar, MXIK jarima, quyib sotish savollari kengaytirildi
- 📂 Sidebar — Qonunchilik bo'limiga 3 ta yangi sahifa, Soliq bo'limiga 1 ta yangi sahifa qo'shildi

---

## **v1.3**

📅 **2026-yil aprel (boshi)**

### Yangi bo'limlar va yangilanishlar
- 🖥 **Terminal monitoring** — 12-chi monitoring sahifasi qo'shildi (COM port to'lov terminallari holati)
- 💰 **Maosh hisoblash** — xodim monitoringiga maosh/komissiya hisoblash dialogi haqida ma'lumot
- 🔒 **Admin qulflanish vaqti** — sozlamalar sahifasida faolsizlik muddati jadvali (30 sek — 24 soat)
- 🌐 **Tarmoq QR-kodi** — sozlamalar tarmoq bo'limida QR-kod generatsiyasi tavsifi
- 🖧 **COM port terminal sozlamalari** — yangi bo'lim: terminalga serial port orqali ulanish sozlamalari
- 🖨️ **Ikki printer** — printer sozlamalarida 2 ta printer qo'llab-quvvatlanishi qayd etildi
- 🍔 **Fastfood changelog** — versiyalar sahifasiga Fastfood ilovasi tarixi qo'shildi (v2.6.57 va oldingi)

### Yangilangan sahifalar
- 📊 **Asosiy hisobotlar** — 11 → 13 monitoring sahifasi (terminal + joylar monitoringi)
- 📊 **Hisobotlar umumiy** — terminal va joylar monitoringi jadvallarga qo'shildi
- ⚙️ **Sozlamalar** — COM port, admin qulflanish, tarmoq QR, 2 printer, virtual klaviatura, Telegram bot
- 🧾 **Soliq integratsiyasi** — Rahmat MK (Multikassa) fiskal tizim qo'shildi (3 ta tizim)
- 🛠 **Versiyalar** — POS v2.8.174 barcha yangilanishlar + Fastfood bo'limi

---

## **v1.2**

📅 **2026-yil mart**

### Yangi bo'limlar
- 📜 **Qonunchilik bo'limi** — O'zbekiston qonunchiligi asoslari, atamalar, texnik va moliyaviy talablar
- 📞 **Call Center qo'llanma** — qonunchilik atamalari sodda tilda, tezkor ma'lumotlar jadvali
- 🔌 **FDS xizmati** sahifasi — yangi avlod fiskal REST API xizmati haqida batafsil
- 🏭 **Oshxona ishlab chiqarish** sahifasi — masalliqlardan tayyor mahsulot tayyorlash, 2 hisoblash rejimi
- 📈 **Tahlillar** sahifasi — ABC tahlil, Food Cost, avtomatik xarid, isrof va narx tarixi hisobotlari

### Yangilangan sahifalar
- 🛠 **Versiyalar** — v2.5.9 dan v2.8.10 gacha to'liq yangilandi
- 🧾 **Soliq integratsiyasi** — QPOS va FDS tanlash, OFD sinxronizatsiya qo'shildi
- 📟 **Fiskal modul** — OFD sinxronizatsiya, 48 soat qoidasi, FM holat tekshirish, FDS/QPOS farqi
- 📊 **Hisobotlar umumiy** — 11 monitoring sahifasi va tahlil vositalari jadvali
- 📉 **Asosiy hisobotlar** — 11 ta monitoring sahifasi batafsil tavsiflandi
- 🏢 **Omborxona** — yetkazuvchilar, yarim tayyor mahsulotlar, 7 ta yangi hisobot
- 🍛 **Taomlar** — mahsulot variantlari (rang, o'lcham, o'lchov), markirovka, presetlar
- 👩‍🍳 **Xodimlar** — PIN sozlamalar, maosh kuzatish, monitoring
- 💳 **Tranzaksiyalar** — 10+ to'lov turi, onlayn invoys QR-kod bilan
- 〽️ **Savdo qilish** — fiskal chek avtomatik, qaytarish (refund) jarayoni
- 🪑 **Joylar** — alohida printer va narx sozlamasi
- ⛓️ **Ulanish** — WebSocket real-time sinxronizatsiya, avtomatik qayta ulanish, offlayn navbat
- ⚙️ **Sozlamalar** — fiskal turi, omborxona, presetlar, kesh, tarmoq
- 📲 **Integratsiya** — FDS/OFD qo'shildi, Yandex/Wolt faol
- ☁️ **Cloud** — real-time sinxronizatsiya, migratsiya, audit logging
- 📆 **Obunalar** — soliq integratsiyasi faol, agrigatlar holati yangilandi
- 🏠 **Bosh sahifa** — Soliq integratsiyasi va Oshxona ishlab chiqarish kartochkalari

### FAQ to'liq qayta yozildi
- ❓ **Sotuv FAQ** — 7 bo'lim, ~50 savol (narx, imkoniyatlar, qurilmalar, integratsiya, hisobotlar, qo'llab-quvvatlash, solishtirish)
- 🔧 **Texnik FAQ** — 7 bo'lim, ~45 savol (kirish, printer, tarmoq, kassa, buyurtmalar, fiskal, qurilma)
- Barcha savollar collapsible formatda

---

## **v1.1**

📅 **2025-yil**

### Dastlabki docs
- 🚪 Boshlash bo'limi — kirish, o'rnatish, tezkor boshlash
- 🛍 Sotib olish — obunalar, qurilmalar, shartnoma
- 👩‍🍳 Asosiy tushunchalar — xodimlar, mahsulotlar, taomlar, retseptlar, xaridlar, tranzaksiyalar
- 🪑 POS tizimi — joylar, savdo, buyurtmalar, mijozlar
- 🌭 Fastfood tizimi — savdo, buyurtmalar, navbatlar
- 🧾 To'lov va Soliq — soliq integratsiyasi, QPOS, fiskal modul, MXIK, paket kodlar, fiskal chek
- ☁️ Biznex Cloud — cloud haqida, veb-portal
- 📊 Hisobotlar — umumiy ko'rinish, monitoring, taomlar, omborxona
- 🖥 Qurilmalar — POS qurilma, mobil ilova, ulanish
- 🔑 Sozlamalar — boshqaruv, integratsiya, ilova sozlamalari
- ❓ FAQ — sotuv va texnik savollar
- 🛠 Boshqalar — versiyalar, ijtimoiy tarmoqlar, qo'llab-quvvatlash

---

## **v1.0**

📅 **2025-yil**

- 🚀 Docs sayti ishga tushirildi — [docs.biznex.uz](https://docs.biznex.uz)
- Astro + Starlight framework
- O'zbek tilida to'liq qo'llanma
