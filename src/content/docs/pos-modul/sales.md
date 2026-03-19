---
title: Savdo qilish
description: Biznex POS tizimida savdo jarayoni — buyurtma ochish, mahsulot qo'shish va to'lov qabul qilish
---

# **Savdo qilish 〽️🛒**

Savdo qilish — Biznex POS tizimining asosiy funksiyasi. Bu yerda siz mijozlarga xizmat ko'rsatish, buyurtma ochish, mahsulot tanlash va to'lovni qabul qilish jarayonlarini amalga oshirasiz.

---

## **Savdo jarayoni bosqichma-bosqich 📋**

### 1. Joyni tanlash 🪑

Savdoni boshlash uchun avval mijoz o'tirgan **joy** (stol, xona, zal) tanlanadi:

1. **POS ekranida** joylar ro'yxati ko'rinadi.
2. **Bo'sh joy** (yashil rang) ni tanlang.
3. Tizim avtomatik ravishda yangi buyurtma ochadi.

> 💡 Agar joy allaqachon band bo'lsa (kulrang), mavjud ochiq buyurtmaga o'tasiz.

---

### 2. Mahsulotlarni qo'shish 🍛

Buyurtma ochilgandan so'ng menyu ko'rinadi:

- **Kategoriya bo'yicha tanlash:** Chap paneldan kategoriyani tanlang (masalan: "Taomlar", "Ichimliklar", "Shirinliklar").
- **Qidirish:** Yuqoridagi qidiruv maydoniga mahsulot nomini yozing.
- **Tanlash:** Mahsulotni bosing — u buyurtmaga qo'shiladi.
- **Miqdorni o'zgartirish:** Buyurtma panelida **+** va **-** tugmalari orqali miqdorni sozlang.

---

### 3. Buyurtmani tahrirlash ✏️

Buyurtma ichida quyidagi amallarni bajarishingiz mumkin:

- **Mahsulot o'chirish:** Mahsulotni chapga surish yoki ❌ tugmasini bosish.
- **Miqdor o'zgartirish:** Har bir mahsulot yonidagi miqdor tugmalari.
- **Chegirma qo'shish:** Buyurtma yoki alohida mahsulotga foiz yoki summa asosida chegirma qo'yish.
- **Izoh qo'shish:** Maxsus tayyorlash talablarini yozish (masalan: "Tuzsiz", "Qo'shimcha sous").

---

### 4. To'lovni qabul qilish 💳

Buyurtma tayyor bo'lgandan so'ng to'lov jarayoni:

1. **"To'lov"** tugmasini bosing.
2. **To'lov turini tanlang:**
   - 💵 **Naqd pul** — mijoz naqd to'laydi
   - 💳 **Karta** — bank kartasi orqali
   - 📱 **Click** — Click ilovasi orqali
   - 📱 **Payme** — Payme ilovasi orqali
   - 🟣 **Uzum** — Uzum ilovasi orqali
   - 🟡 **Oson** — Oson ilovasi orqali
   - 🍔 **Wolt** — Wolt platformasi orqali
   - 🚕 **Yandex** — Yandex Eats orqali
   - 💰 **Alif** — Alif nasiya orqali
   - 🔗 **Boshqa** — boshqa to'lov usullari
3. **Summani kiriting** yoki to'liq summani tasdiqlang.
4. **Chekni chop eting** 🖨️ (ixtiyoriy).

> 💡 Bitta buyurtmada **bir nechta to'lov turi** kombinatsiya qilinishi mumkin. Masalan: 50% naqd + 50% karta.

---

## **Aralash to'lov (Split Payment) 💰**

Mijoz bir nechta usulda to'lamoqchi bo'lsa:

1. To'lov ekranida birinchi to'lov turini tanlang va **qisman summa** kiriting.
2. Ikkinchi to'lov turini tanlang va qolgan summani kiriting.
3. Tizim avtomatik ravishda jami summani hisoblaydi.

Masalan:
- Jami: **200 000 UZS**
- Naqd: **120 000 UZS**
- Karta: **80 000 UZS**

---

## **Foiz ustamalar (Xizmat haqqi) 📊**

Ba'zi joylarda xizmat haqqi yoki boshqa foiz ustamalar qo'shiladi:

- **Joyga bog'liq foiz:** Har bir joy (zal, VIP xona) uchun alohida foiz belgilanishi mumkin.
- **Umumiy foiz:** Barcha buyurtmalarga avtomatik qo'shiladigan xizmat haqqi.

Foiz sozlamalari **Sozlamalar** bo'limidan boshqariladi.

---

## **Chek chiqarish 🖨️**

Buyurtma yakunlangandan so'ng:

- **Avtomatik chop etish:** Sozlamalarda yoqilgan bo'lsa, chek avtomatik chiqadi.
- **Qo'lda chop etish:** Buyurtma tafsilotlarida "Chop etish" tugmasini bosing.

Chekda quyidagi ma'lumotlar ko'rsatiladi:
- 🏪 Do'kon nomi va manzili
- 📅 Sana va vaqt
- 🔢 Buyurtma raqami
- 📋 Mahsulotlar ro'yxati (nomi, miqdori, narxi)
- 💰 Jami summa
- 💳 To'lov turi
- 👤 Xodim ismi

---

## **Fiskal chek**

To'lov qabul qilinganda fiskal chek **avtomatik** shakllanadi (agar fiskal tizim sozlangan bo'lsa):

- FM (fiskal modul) orqali chek fiskallashtiriladi
- **QR kod** va **fiskal belgi** chekka qo'shiladi
- Chek ma'lumotlari **OFD** ga avtomatik yuboriladi
- QPOS yoki FDS tizimi orqali ishlaydi (sozlamalarda tanlanadi)

:::tip
Fiskal sozlamalar haqida batafsil: [Soliq integratsiyasi](/tax-modul/overview)
:::

---

## **Qaytarish (Refund)**

Buyurtmani qaytarish kerak bo'lganda:

1. Buyurtmalar ro'yxatidan kerakli buyurtmani toping
2. **"Qaytarish"** tugmasini bosing
3. Qaytarish sababi kiritiladi
4. Fiskal **qaytarish cheki** avtomatik shakllanadi (asl chek ma'lumotlari bilan)
5. Pul mijozga qaytariladi

---

## **Maslahatlar**

- **Tezkor savdo:** Eng ko'p sotiladigan mahsulotlarni oldingi kategoriyalarga qo'ying — tezroq topiladi
- **Numpad:** Narx yoki miqdorni tezkor kiritish uchun raqamli klaviaturadan foydalaning
- **Xodim almashtirish:** Smenada boshqa xodim ishlasa, PIN-kod orqali tizimga kiriladi
- **Onlayn to'lov:** QR-kod orqali to'lov qabul qilish uchun invoys yarating — mijoz ilovadan to'laydi
