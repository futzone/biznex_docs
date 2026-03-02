# BIZNEX Web Client - Foydalanuvchi Qo'llanmasi

> Versiya: 1.0 | Sana: 2026-03-02
>
> Ushbu qo'llanma BIZNEX veb-portalidan (app.biznex.uz) foydalanish bo'yicha to'liq ko'rsatmalarni o'z ichiga oladi.

---

## Mundarija

1. [Ro'yxatdan o'tish va kirish](#1-royxatdan-otish-va-kirish)
2. [Dashboard (Boshqaruv paneli)](#2-dashboard-boshqaruv-paneli)
3. [Buyurtmalar](#3-buyurtmalar)
4. [Mahsulotlar](#4-mahsulotlar)
5. [Xodimlar](#5-xodimlar)
6. [O'tkazmalar (Tranzaksiyalar)](#6-otkazmalar-tranzaksiyalar)
7. [Filiallar](#7-filiallar)
8. [Obuna](#8-obuna)
9. [To'lov sozlamalari](#9-tolov-sozlamalari)
10. [Profil](#10-profil)
11. [Navigatsiya va interfeys](#11-navigatsiya-va-interfeys)
12. [Ko'p so'raladigan savollar (FAQ)](#12-kop-soraladigan-savollar)

---

## 1. Ro'yxatdan o'tish va kirish

### 1.1. Yangi hisob yaratish

Ro'yxatdan o'tish 3 bosqichda amalga oshiriladi:

**1-bosqich: Telefon raqamini kiritish**
- Telefon raqamingizni `+998XXXXXXXXX` formatida kiriting
- "Davom etish" tugmasini bosing
- Raqamingizga SMS orqali 6 xonali tasdiqlash kodi yuboriladi

**2-bosqich: SMS kodni tasdiqlash**
- Telefoningizga kelgan 6 xonali kodni kiriting
- Agar kod kelmasa, "Qayta yuborish" tugmasini bosing
- Raqamni o'zgartirish uchun "Orqaga" tugmasini bosing

**3-bosqich: Ma'lumotlarni to'ldirish**
- **Ism** (majburiy)
- **Familiya** (majburiy)
- **Biznes nomi** (majburiy) - do'kon yoki restoran nomi
- **Parol** (kamida 8 belgi)
- **Parolni tasdiqlash**
- "Ro'yxatdan o'tish" tugmasini bosing

Ro'yxatdan o'tgandan so'ng siz avtomatik ravishda Dashboard sahifasiga yo'naltirilasiz.

### 1.2. Tizimga kirish

- Telefon raqamingizni kiriting
- Parolingizni kiriting (ko'z belgisi orqali parolni ko'rish mumkin)
- "Kirish" tugmasini bosing

### 1.3. Parolni o'zgartirish

Agar administrator parolingizni qayta o'rnatgan bo'lsa, tizimga kirganingizda parolni o'zgartirish sahifasi ochiladi:

- Joriy parolni kiriting
- Yangi parolni kiriting (kamida 8 belgi)
- Yangi parolni tasdiqlang
- "Saqlash" tugmasini bosing

---

## 2. Dashboard (Boshqaruv paneli)

Dashboard - biznesingiz haqidagi asosiy ko'rsatkichlarni ko'rish uchun bosh sahifa.

### 2.1. Asosiy ko'rsatkichlar

Sahifaning yuqori qismida quyidagi ma'lumotlar ko'rsatiladi:

| Ko'rsatkich | Tavsif |
|-------------|--------|
| **Umumiy daromad** | Tanlangan davrda jami tushum |
| **Foyda** | Mahsulot foydasi, joy/stol ustamasi, jami foyda |
| **Buyurtmalar soni** | Tanlangan davrdagi jami buyurtmalar |

Har bir ko'rsatkich yonida oldingi davr bilan solishtirma foiz ko'rsatiladi.

### 2.2. Sana tanlash

Sahifaning yuqori o'ng burchagida sana tanlash oynasi mavjud:
- Boshlanish va tugash sanalarini tanlang
- Standart: oxirgi 7 kun
- "Yangilash" tugmasi orqali ma'lumotlarni qayta yuklang

### 2.3. Bo'limlar

Dashboard 3 ta bo'limdan iborat (tablar orqali almashish mumkin):

**Buyurtmalar bo'limi:**
- Oxirgi buyurtmalar ro'yxati
- Soatlik buyurtmalar grafigi
- Eng ko'p sotilgan mahsulotlar

**Xodimlar bo'limi:**
- Har bir xodimning buyurtmalar soni
- Har bir xodimning daromadi
- O'rtacha buyurtma qiymati

**Mahsulotlar bo'limi:**
- Eng ko'p sotilgan mahsulotlar grafigi
- Kategoriya bo'yicha taqsimot
- Har bir mahsulotdan tushgan daromad

---

## 3. Buyurtmalar

### 3.1. Buyurtmalar ro'yxati

Chap menyudan "Buyurtmalar" bo'limiga o'ting.

Har bir buyurtma kartochkasida ko'rsatiladi:
- **Buyurtma raqami** (#001, #002, ...)
- **Sana va vaqt** - buyurtma yaratilgan vaqt
- **Joy/Stol** - qaysi stolda yoki joyda (agar mavjud)
- **Xodim** - buyurtmani qabul qilgan xodim ismi
- **Jami summa** - buyurtma umumiy qiymati
- **Holat** - buyurtma holati (rangli belgi)

**Buyurtma holatlari:**

| Holat | Rang | Tavsif |
|-------|------|--------|
| Ochiq | Sariq | Buyurtma yaratilgan, hali tugallanmagan |
| Tasdiqlangan | Ko'k | Oshxona tomonidan tasdiqlangan |
| Yakunlangan | Kulrang | Buyurtma tugallangan |
| Bekor qilingan | Qizil | Buyurtma bekor qilingan |

### 3.2. Buyurtma tafsilotlari

Istalgan buyurtmani bosish orqali tafsilotlarni ko'rish mumkin:

- Buyurtma raqami va umumiy summasi
- Yaratilgan va yopilgan sanalar
- Joy/stol va xodim ma'lumotlari
- Izoh (agar mavjud)
- **Mahsulotlar jadvali** - har bir mahsulot nomi, miqdori, narxi va jami summasi

---

## 4. Mahsulotlar

Chap menyudan "Mahsulotlar" bo'limiga o'ting.

### 4.1. Mahsulotlar ro'yxati

Mahsulotlar katakchali (grid) ko'rinishda ko'rsatiladi. Har bir kartochkada:

- **Mahsulot nomi**
- **Narxi** (UZS)
- **Holat** - "Nofaol" belgisi agar mahsulot o'chirilgan bo'lsa
- **Zaxira** - ombordagi miqdor (cheksiz bo'lsa "∞" belgisi)
- **Sotilgan** - jami sotilgan miqdor
- **Daromad** - ushbu mahsulotdan tushgan jami tushum

### 4.2. Qidiruv

Sahifaning yuqori qismidagi qidiruv maydoniga mahsulot nomini yozish orqali tezkor qidiruv amalga oshiriladi. Natijalar real vaqtda filtrlashadi.

---

## 5. Xodimlar

### 5.1. Xodimlar ro'yxati

Chap menyudan "Xodimlar" bo'limiga o'ting.

Har bir xodim kartochkasida ko'rsatiladi:
- **Ism va familiya**
- **Lavozimi** - Kassir, Ofitsiant, Oshpaz, Menejer yoki Administrator
- **Holat** - Faol yoki Nofaol
- **Buyurtmalar soni**
- **Daromad** - xodim orqali tushgan jami tushum

### 5.2. Xodim tafsilotlari

Xodim kartochkasini bosish orqali batafsil ma'lumotlarni ko'rish mumkin:

**Statistika:**
- **Buyurtmalar soni** - jami qabul qilingan buyurtmalar
- **Jami daromad** - xodim orqali tushgan tushum
- **O'rtacha buyurtma** - bitta buyurtmaning o'rtacha qiymati

**Shaxsiy ma'lumotlar:**
- To'liq ismi
- Lavozimi
- Telefon raqami (agar kiritilgan bo'lsa)

---

## 6. O'tkazmalar (Tranzaksiyalar)

Chap menyudan "O'tkazmalar" bo'limiga o'ting.

### 6.1. O'tkazmalar ro'yxati

Sahifaning yuqori qismida umumiy statistika:
- Jami o'tkazmalar soni
- Jami summa

Har bir o'tkazma qatorida ko'rsatiladi:

| Ma'lumot | Tavsif |
|----------|--------|
| **To'lov turi** | Naqd, Karta yoki Mobil (belgi bilan) |
| **Sana** | O'tkazma sanasi va vaqti |
| **Summa** | To'lov miqdori (UZS) |
| **Holat** | Quyidagi jadvalga qarang |

**O'tkazma holatlari:**

| Holat | Rang | Tavsif |
|-------|------|--------|
| Kutilmoqda | Sariq | To'lov jarayonda |
| Tasdiqlangan | Yashil | To'lov muvaffaqiyatli |
| Muvaffaqiyatsiz | Qizil | To'lov amalga oshmadi |
| Qaytarilgan | Ko'k | To'lov qaytarilgan |

### 6.2. O'tkazma tafsilotlari

O'tkazma qatorini bosish orqali batafsil ma'lumotlarni ko'rish mumkin:
- To'lov summasi va holati
- To'lov turi (Naqd pul, Plastik karta, Mobil to'lov)
- Yaratilgan sana
- Tayinlangan xodim (ismi va lavozimi)
- Filial nomi
- Bog'langan buyurtma (raqami va summasi)

---

## 7. Filiallar

Chap menyudan "Filiallar" bo'limiga o'ting.

### 7.1. Filiallar ro'yxati

Sahifada barcha filiallaringiz katakchali ko'rinishda ko'rsatiladi.

Har bir filial kartochkasida:
- Filial nomi
- Faol/Nofaol holat
- Manzil, telefon, ish vaqti (agar kiritilgan bo'lsa)
- Foydalanish ko'rsatkichi (masalan, "2/5 filial")

**Mavjud amallar:**
- **Tahrirlash** - filial ma'lumotlarini o'zgartirish
- **O'chirish** - filialni o'chirish
- **POS ulash** - POS qurilmasini ulash

### 7.2. Yangi filial qo'shish

"Yangi filial" tugmasini bosing (faqat limit to'lmagan bo'lsa ko'rinadi).

**To'ldirish kerak bo'lgan maydonlar:**
- **Filial nomi** (majburiy, kamida 2 belgi) - masalan: "Markaziy filial"
- **Manzil** (ixtiyoriy) - masalan: "Toshkent sh., Chilonzor t."
- **Telefon** (ixtiyoriy) - +998XXXXXXXXX formatida

### 7.3. Filial tafsilotlari

Filial kartochkasini bosish orqali batafsil sahifaga o'ting.

**Filial ma'lumotlari:**
- Manzil, telefon, ish vaqti
- Yaratilgan sana

**POS ulanish holati:**

| Holat | Tavsif |
|-------|--------|
| **Faol** (yashil) | POS qurilma muvaffaqiyatli ulangan |
| **Ulanmagan** (kulrang) | POS hali ulanmagan |

### 7.4. POS qurilmani ulash

POS qurilmani filialga ulashning 2 usuli mavjud:

**1-usul: QR kod orqali (tavsiya etiladi)**
1. "QR kod bilan ulash" tugmasini bosing
2. POS qurilmadagi QR kodni kamera orqali skanerlang
3. Muvaffaqiyatli ulanish haqida xabar ko'rsatiladi

**2-usul: Login orqali**
1. "POS login" tugmasini bosing
2. POS qurilma uchun berilgan login va parolni kiriting
3. Ulanishni tasdiqlang

### 7.5. POS ulanishni o'chirish

Filial tafsilotlari sahifasida POS ulanish kartochkasidagi "Ulanishni o'chirish" (qizil) tugmasini bosing.

---

## 8. Obuna

Chap menyudan "Obuna" bo'limiga o'ting.

### 8.1. Joriy obuna holati

Sahifada joriy obuna haqida ma'lumot ko'rsatiladi:

| Ma'lumot | Tavsif |
|----------|--------|
| **Tarif nomi** | Masalan: "Professional" |
| **Tugash sanasi** | Obuna muddati tugaydigan sana |
| **Qolgan kunlar** | Obuna tugashiga qancha kun qolgan |
| **Avtomatik yangilash** | Yoqilgan yoki o'chirilgan |

**Obuna holatlari:**
- **Faol** - obuna ishlamoqda
- **Muddati o'tgan** - obuna tugagan, yangilash kerak
- **To'xtatilgan** - administrator tomonidan to'xtatilgan

### 8.2. Avtomatik yangilash

Agar obuna faol bo'lsa, avtomatik yangilashni yoqish/o'chirish mumkin:
- Yoqish uchun saqlangan karta bo'lishi kerak
- O'zgarishni "Saqlash" tugmasi bilan tasdiqlang

### 8.3. Saqlangan karta

Agar to'lov kartasi saqlangan bo'lsa, quyidagi ma'lumotlar ko'rsatiladi:
- Karta turi (Visa, Mastercard)
- Oxirgi 4 ta raqam
- Amal qilish muddati

### 8.4. Tarif tanlash

Sahifaning pastki qismida mavjud tariflar ro'yxati ko'rsatiladi.

Har bir tarif kartochkasida:
- Tarif nomi
- Oylik/yillik narx (UZS)
- Maksimal terminallar soni
- Maksimal filiallar soni
- Xususiyatlar ro'yxati (cloud sinxronizatsiya, hisobotlar, va boshqalar)

**Tarif tanlash jarayoni:**
1. Kerakli tarif kartochkasidagi "Tanlash" tugmasini bosing
2. To'lov tizimiga (Payme/Click) yo'naltirilasiz
3. To'lovni amalga oshiring
4. Sahifaga qaytganingizda "To'lov tekshirilmoqda..." xabari ko'rinadi
5. To'lov tasdiqlangandan so'ng obuna avtomatik faollashadi

---

## 9. To'lov sozlamalari

Chap menyudan "To'lov sozlamalari" bo'limiga o'ting.

### 9.1. To'lov provayderlari

Sahifada quyidagi to'lov provayderlari ko'rsatiladi:

| Provayder | Holat |
|-----------|-------|
| **Multicard** | Faol - sozlash mumkin |
| **ATMOS** | Tez kunda... |
| **Click** | Tez kunda... |
| **Payme** | Tez kunda... |

### 9.2. Multicard sozlash

Agar bir nechta filial bo'lsa, avval kerakli filialni tanlang.

1. Multicard kartochkasidagi "Sozlash" tugmasini bosing
2. Quyidagi maydonlarni to'ldiring:

| Maydon | Tavsif |
|--------|--------|
| **Store ID** (majburiy) | Multicard tomonidan berilgan do'kon identifikatori |
| **Application ID** (majburiy) | Ilova identifikatori |
| **Secret** (majburiy) | Maxfiy kalit (ko'z belgisi bilan ko'rish mumkin) |
| **Faollashtirish** | Integratsiyani yoqish/o'chirish |

3. "Saqlash" tugmasini bosing
4. Muvaffaqiyatli saqlangandan so'ng token holati ko'rsatiladi:
   - **Aktiv** (yashil) - token ishlamoqda
   - **Nofaol** - token muddati o'tgan, ma'lumotlarni tekshiring

---

## 10. Profil

Chap menyudan "Profil" bo'limiga o'ting.

### 10.1. Shaxsiy ma'lumotlar

Sahifada quyidagi ma'lumotlar ko'rsatiladi:
- **Ism va familiya**
- **Telefon raqami**
- **Biznes nomi**
- **Ro'yxatdan o'tgan sana**

### 10.2. Tezkor ma'lumotlar

Ikkita kartochkada qisqacha ma'lumot:
- **Obuna** - joriy tarif nomi (bosish orqali Obuna sahifasiga o'tish mumkin)
- **Filiallar** - foydalanilayotgan/maksimal filiallar soni (bosish orqali Filiallar sahifasiga o'tish mumkin)

### 10.3. Tizimdan chiqish

Sahifaning pastki qismidagi qizil "Chiqish" tugmasini bosing. Barcha tokenlar o'chiriladi va kirish sahifasiga yo'naltirilasiz.

---

## 11. Navigatsiya va interfeys

### 11.1. Chap menyu (Kompyuterda)

Ekranning chap tomonida doimiy menyu joylashgan:

| Menyu | Belgi | Sahifa |
|-------|-------|--------|
| Dashboard | Panelcha | Boshqaruv paneli |
| Buyurtmalar | Savat | Buyurtmalar ro'yxati |
| Mahsulotlar | Quti | Mahsulotlar ro'yxati |
| Xodimlar | Odamlar | Xodimlar ro'yxati |
| O'tkazmalar | Karta | Tranzaksiyalar |
| Filiallar | Bino | Filiallar boshqaruvi |
| Obuna | Hamyon | Obuna boshqaruvi |
| To'lov sozlamalari | Bank | To'lov integratsiyalari |
| Profil | Odam | Hisob sozlamalari |

Menyuning pastki qismida "Chiqish" tugmasi mavjud.

### 11.2. Mobil navigatsiya

Mobil qurilmalarda:
- Yuqori qismdagi menyu tugmasini (3 chiziq) bosing
- Chap tomondan menyu ochiladi
- Menyudan tashqarini bosish orqali yopiladi

### 11.3. Filial tanlash

Sahifaning yuqori o'ng burchagida filial tanlash ochiladigan menyusi mavjud:
- Barcha filiallaringiz ko'rsatiladi
- Filial tanlash barcha sahifalardagi ma'lumotlarni filtrlaydi
- Buyurtmalar, xodimlar, mahsulotlar va o'tkazmalar tanlangan filialga tegishli bo'ladi

---

## 12. Ko'p so'raladigan savollar

### Umumiy savollar

**S: Qanday qilib yangi filial qo'shaman?**
J: Chap menyudan "Filiallar" sahifasiga o'ting va "Yangi filial" tugmasini bosing. Filial nomi majburiy, manzil va telefon ixtiyoriy.

**S: POS qurilmani qanday ulash mumkin?**
J: "Filiallar" sahifasida kerakli filialni toping, kartochkadagi POS ulash tugmasini bosing. QR kod skanerlash yoki login/parol kiritish orqali ulashingiz mumkin.

**S: Nima uchun ba'zi sahifalarda ma'lumot ko'rinmayapti?**
J: Yuqoridagi filial tanlash menyusida to'g'ri filial tanlanganligini tekshiring. Barcha ma'lumotlar tanlangan filialga bog'liq.

**S: Obuna muddatim tugadi, nima qilishim kerak?**
J: "Obuna" sahifasiga o'ting, mavjud tariflardan birini tanlang va to'lovni amalga oshiring. To'lov tasdiqlangandan so'ng obuna avtomatik faollashadi.

**S: To'lov sozlamalarida Multicard token nofaol ko'rsatilmoqda?**
J: Store ID, Application ID va Secret to'g'ri kiritilganligini tekshiring. Agar muammo davom etsa, Multicard bilan bog'laning va yangi kalitlarni so'rang.

### Xavfsizlik

**S: Parolimni unutdim, nima qilishim kerak?**
J: BIZNEX administrator bilan bog'laning. Administrator parolingizni qayta o'rnatadi va sizga vaqtinchalik parol beriladi. Tizimga kirganingizda yangi parol o'rnatish talab qilinadi.

**S: Boshqa qurilmadan kirish mumkinmi?**
J: Ha, istalgan brauzerdan app.biznex.uz manzili orqali kirishingiz mumkin. Bir vaqtning o'zida bir nechta qurilmada ishlash mumkin.

### To'lov

**S: Qaysi to'lov tizimlari qo'llab-quvvatlanadi?**
J: Hozirda Multicard to'lov tizimi ishlamoqda. ATMOS, Click va Payme tizimlari tez orada qo'shiladi.

**S: POS orqali to'lov qanday ishlaydi?**
J: POS qurilmada buyurtma yaratilganda, xaridor naqd, karta yoki mobil to'lov orqali to'laydi. Barcha tranzaksiyalar "O'tkazmalar" sahifasida ko'rinadi.

---

> Qo'shimcha yordam uchun BIZNEX qo'llab-quvvatlash xizmatiga murojaat qiling.
