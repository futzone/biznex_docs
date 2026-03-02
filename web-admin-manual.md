# BIZNEX Admin Panel - Foydalanuvchi Qo'llanmasi

> Versiya: 1.0 | Sana: 2026-03-02
>
> Ushbu qo'llanma BIZNEX admin panelidan (admin.biznex.uz) foydalanish bo'yicha to'liq ko'rsatmalarni o'z ichiga oladi. Admin panel BIZNEX platformasi operatorlari uchun mo'ljallangan.

---

## Mundarija

1. [Tizimga kirish](#1-tizimga-kirish)
2. [Dashboard](#2-dashboard)
3. [Mijozlar boshqaruvi](#3-mijozlar-boshqaruvi)
4. [Obunalar boshqaruvi](#4-obunalar-boshqaruvi)
5. [To'lovlar](#5-tolovlar)
6. [Soliq bo'limi](#6-soliq-bolimi)
7. [Til va mavzu sozlamalari](#7-til-va-mavzu-sozlamalari)
8. [Ko'p so'raladigan savollar (FAQ)](#8-kop-soraladigan-savollar)

---

## 1. Tizimga kirish

Admin panelga Keycloak OAuth2 orqali kirish amalga oshiriladi.

1. `admin.biznex.uz` manzilini oching
2. Keycloak kirish sahifasiga yo'naltirilasiz
3. Login va parolingizni kiriting
4. Muvaffaqiyatli kirgandan so'ng Dashboard sahifasi ochiladi

Sessiya muddati tugaganda avtomatik ravishda kirish sahifasiga qaytarilasiz.

---

## 2. Dashboard

Dashboard - platformaning umumiy holati haqida qisqacha ma'lumot beruvchi bosh sahifa.

### 2.1. Asosiy ko'rsatkichlar

Sahifaning yuqori qismida 4 ta ko'rsatkich kartochkasi:

| Ko'rsatkich | Tavsif |
|-------------|--------|
| **Clients** | Jami ro'yxatdan o'tgan mijozlar soni |
| **Subscriptions** | Faol obunalar soni |
| **Branches** | Barcha mijozlardagi jami filiallar soni |
| **MRR** | Oylik takroriy daromad (UZS) - faol obunalardan |

### 2.2. Foydalanuvchi filtri

Yuqoridagi ochiladigan menyu orqali ko'rsatkichlarni filtrlash mumkin:
- **Real Users** - haqiqiy mijozlar
- **Test Users** - test foydalanuvchilar
- **All Users** - barcha foydalanuvchilar

### 2.3. Oxirgi ro'yxatdan o'tganlar

Sahifaning pastki qismida oxirgi 5 ta yangi ro'yxatdan o'tgan mijozlar jadvali:

| Ustun | Tavsif |
|-------|--------|
| # | Tartib raqami |
| Phone | Telefon raqami |
| Full Name | To'liq ismi |
| Registered | Ro'yxatdan o'tgan vaqt (nisbiy: "2 soat oldin") |

"View All" havolasi orqali to'liq mijozlar ro'yxatiga o'tish mumkin.

### 2.4. Obuna statistikasi

Doiraviy diagramma (pie chart) ko'rinishida obunalar holati:
- **ACTIVE** (yashil) - faol obunalar
- **TRIAL** (ko'k) - sinov muddatidagi
- **EXPIRED** (kulrang) - muddati o'tgan
- **SUSPENDED** (qizil) - to'xtatilgan
- **PENDING** (to'q sariq) - kutilayotgan
- **CANCELLED** (och kulrang) - bekor qilingan

---

## 3. Mijozlar boshqaruvi

Chap menyudan "Clients" bo'limiga o'ting.

### 3.1. Mijozlar jadvali

| Ustun | Tavsif |
|-------|--------|
| **#** | Tartib raqami |
| **Phone** | Mijoz telefon raqami |
| **Full Name** | Mijozning to'liq ismi |
| **Business Name** | Biznes nomi |
| **Subscription** | Obuna holati (rangli belgi) + tarif nomi |
| **Branches** | Faol filiallar soni |
| **Created At** | Ro'yxatdan o'tgan sana |
| **Actions** | Amallar menyusi |

### 3.2. Qidiruv va filtrlash

- **Qidiruv maydoni** - telefon raqami, ism yoki biznes nomi bo'yicha qidirish
- **Foydalanuvchi filtri** - Real Users / Test Users / All Users
- **Obuna holati filtri** - All, Active, Pending, Expired, Suspended
- **Sahifalash** - har sahifada 10 ta yozuv

### 3.3. Mijoz ustida amallar

Har bir qatordagi "Actions" menyusini bosing:

| Amal | Tavsif |
|------|--------|
| **View** | Mijoz tafsilotlari sahifasiga o'tish |
| **Reset Password** | Vaqtinchalik parol yaratish |
| **Stop subscription** | Faol obunani to'xtatish (qizil) |
| **Activate subscription** | Obunani faollashtirish (yashil) |

**Parolni qayta o'rnatish:**
1. "Reset Password" ni bosing
2. Tizim vaqtinchalik parol yaratadi
3. Oynada vaqtinchalik parol ko'rsatiladi
4. "Nusxalash" tugmasi orqali parolni nusxalang
5. Parolni mijozga yuboring - kirganida yangi parol o'rnatish talab qilinadi

### 3.4. Yangi mijoz ro'yxatdan o'tkazish

Sahifaning yuqorisidagi "Add New Client" tugmasini bosing.

**To'ldirish kerak bo'lgan maydonlar:**

| Maydon | Majburiy | Tavsif |
|--------|----------|--------|
| **Phone Number** | Ha | 9 xonali raqam (+998 avtomatik qo'shiladi) |
| **Full Name** | Ha | 2-100 belgi |
| **Business Name** | Yo'q | Maksimal 200 belgi |
| **Plan** | Ha | Starter, Business yoki Enterprise (standart: Starter) |
| **Expires At** | Yo'q | Obuna tugash sanasi (standart: 30 kun) |
| **Send SMS** | - | Belgi (standart: yoqilgan) - ro'yxatdan o'tish SMS yuborish |
| **Test User** | - | Belgi (standart: o'chirilgan) - test foydalanuvchi sifatida belgilash |

**Natija:**
- Muvaffaqiyatli yaratilganda oynada ko'rsatiladi:
  - Vaqtinchalik parol (nusxalash tugmasi bilan)
  - Mijoz ma'lumotlari xulasasi
  - SMS holati

### 3.5. Mijoz tafsilotlari sahifasi

Mijozlar jadvalidagi "View" ni bosish yoki qatorni bosish orqali o'ting.

**Mijoz ma'lumotlari kartochkasi:**
- To'liq ismi
- Telefon raqami
- Ro'yxatdan o'tgan sana
- Jami filiallar soni

**Obuna kartochkasi (agar mavjud):**
- Tarif nomi
- Obuna holati
- Tugash sanasi

### 3.6. Filiallar boshqaruvi (mijoz ichida)

Mijoz tafsilotlari sahifasida filiallar bo'limi mavjud.

**Umumiy ma'lumot:**
- "X / Y aktiv" - faol filiallar / ruxsat etilgan maksimal son
- "Add Branch" tugmasi (limit to'lmagan bo'lsa)

**Har bir filial yochiladigan (collapsible) ko'rinishda:**

Filialni bosish orqali quyidagi bo'limlar ochiladi:

#### A. POS login ma'lumotlari

Jadval ko'rinishida:

| Ustun | Tavsif |
|-------|--------|
| **Username** | POS login nomi |
| **Status** | Faol/Nofaol belgi |
| **Last Login** | Oxirgi kirish vaqti |
| **Actions** | Amallar menyusi |

**Amallar:**
- **Add** - yangi POS credential yaratish (username va parol)
- **Change Password** - mavjud credential parolini o'zgartirish
- **Revoke** - credentialni o'chirish (faol bo'lsa)
- **Activate** - credentialni qayta faollashtirish (o'chirilgan bo'lsa)

#### B. POS qurilmalar

Faqat ko'rish uchun jadval:

| Ustun | Tavsif |
|-------|--------|
| **Device Name** | Qurilma nomi |
| **OS Version** | Operatsion tizim versiyasi |
| **App Version** | Ilova versiyasi |
| **Fingerprint** | Qurilma barmoq izi (qisqartirilgan) |
| **Machine ID** | Mashina identifikatori |
| **MAC Address** | MAC manzili |
| **Last Activity** | Oxirgi faollik vaqti va IP manzili |
| **Status** | Faol/Nofaol |

#### C. To'lov integratsiyalari

| Provayder | Holat | Amal |
|-----------|-------|------|
| **Multicard** | Ulangan/Ulanmagan | Sozlash mumkin |
| **ATMOS** | Tez kunda | - |
| **Click** | Tez kunda | - |
| **Payme** | Tez kunda | - |

**Multicard sozlash oynasi:**

| Maydon | Tavsif |
|--------|--------|
| **Store ID** | Multicard do'kon identifikatori |
| **Application ID** | Ilova identifikatori |
| **Secret** | Maxfiy kalit (parol maydoni) |
| **Enabled** | Yoqish/o'chirish |

Token holati ham ko'rsatiladi (Active/Inactive).

---

## 4. Obunalar boshqaruvi

Chap menyudan "Subscriptions" bo'limiga o'ting.

### 4.1. Obunalar jadvali

| Ustun | Tavsif |
|-------|--------|
| **#** | Tartib raqami |
| **Client** | Mijoz ismi + biznes nomi |
| **Phone** | Telefon raqami |
| **Plan** | Tarif nomi (Starter, Business, Enterprise) |
| **Status** | Holat belgisi |
| **Expires At** | Tugash sanasi |
| **Days Remaining** | Qolgan kunlar (rangli belgi) |

**Qolgan kunlar ranglari:**
- **Qizil** - 7 kun yoki kam qolgan / muddati o'tgan
- **Ko'k** - 8-30 kun qolgan
- **Kulrang** - 30 kundan ko'p qolgan

### 4.2. Qidiruv va filtrlash

- **Qidiruv** - telefon, mijoz ismi yoki biznes nomi bo'yicha
- **Holat filtri** - All, Active, Pending, Expired, Suspended
- **Sahifalash** - har sahifada 10 ta yozuv

### 4.3. Obuna tafsilotlari oynasi

Qatorni bosish yoki "Actions" menyusidan "View Details" ni tanlash orqali oyna ochiladi.

Oynada 3 ta tab mavjud:

#### Info tabi

| Ma'lumot | Tavsif |
|----------|--------|
| Client Name | Mijoz ismi |
| Business Name | Biznes nomi |
| Phone Number | Telefon raqami |
| Plan Name | Tarif nomi |
| Status | Holat belgisi |
| Auto-Renew | Avtomatik yangilash (Ha/Yo'q) |
| Started At | Boshlangan sana |
| Expires At | Tugash sanasi |
| Days Remaining | Qolgan kunlar (rangli) |
| Is Usable | Foydalanish mumkinmi (Ha/Yo'q) |

#### Actions tabi

**Obunani uzaytirish:**
1. Kunlar sonini kiriting (raqam maydoni)
2. "Execute" tugmasini bosing
3. Obuna ko'rsatilgan kunlar soniga uzaytiriladi

**Tarifni o'zgartirish:**
1. Ochiladigan menyudan yangi tarifni tanlang (joriy tarif ko'rsatilmaydi)
2. "Change" tugmasini bosing

**Obunani to'xtatish/qayta boshlash:**
- Agar ACTIVE: "Suspend" qizil tugmasi ko'rsatiladi
- Agar SUSPENDED: "Resume" yashil tugmasi ko'rsatiladi

#### Payments tabi

Ushbu obunaga tegishli barcha to'lovlar jadvali:

| Ustun | Tavsif |
|-------|--------|
| **Amount** | To'lov summasi (UZS) |
| **Provider** | To'lov tizimi |
| **Status** | To'lov holati (rangli belgi) |
| **Paid At** | To'lov sanasi |

---

## 5. To'lovlar

Chap menyudan "Payments" bo'limiga o'ting.

### 5.1. Asosiy ko'rsatkichlar

Sahifaning yuqorisida 4 ta ko'rsatkich:

| Ko'rsatkich | Tavsif |
|-------------|--------|
| **Total Payments** | Jami to'lovlar soni |
| **Monthly Revenue** | Muvaffaqiyatli to'lovlar summasi |
| **Failed** | Muvaffaqiyatsiz to'lovlar soni |
| **Auto-Renewals** | Karta orqali avtomatik yangilangan to'lovlar |

### 5.2. Qayta urinish siyosati (Retry Policy)

Yochiladigan "Sozlamalar" bo'limi:

| Sozlama | Diapazoni | Tavsif |
|---------|-----------|--------|
| **Retry Count** | 0-10 | Qayta urinishlar soni |
| **Retry Interval** | 1-30 kun | Urinishlar orasidagi vaqt |
| **Grace Period** | 0-30 kun | To'xtatishdan oldingi qo'shimcha muddat |
| **Expiry Action** | Tanlash | Muddati o'tganda bajariladigan amal |
| **SMS on Failure** | Belgi | Muvaffaqiyatsiz to'lovda SMS yuborish |

**Expiry Action variantlari:**
- **Suspend Sync** - faqat sinxronizatsiyani to'xtatish
- **Full Lockout** - to'liq bloklash
- **Graceful Degradation** - bosqichma-bosqich cheklash

O'zgarishlarni "Save" tugmasi bilan saqlang.

### 5.3. To'lovlar jadvali

| Ustun | Tavsif |
|-------|--------|
| **#** | Tartib raqami |
| **Client ID** | Mijoz identifikatori (qisqartirilgan) |
| **Plan** | Tarif kodi |
| **Amount** | To'lov summasi (UZS) |
| **Status** | Holat belgisi (quyidagi jadvalga qarang) |
| **Card** | Oxirgi 4 raqam (****XXXX) yoki "-" |
| **Renewal** | "Renewal" belgisi yoki "-" |
| **Date** | To'lov sanasi va vaqti |
| **Receipt** | Chek havolasi (tashqi havola belgisi) |

**To'lov holatlari:**

| Holat | Rang | Tavsif |
|-------|------|--------|
| Success | Yashil | To'lov muvaffaqiyatli |
| Draft | Kulrang | Qoralama |
| Progress | Ko'k | Jarayonda |
| Error/Failed | Qizil | Xatolik/muvaffaqiyatsiz |
| Revert | Qizil | Qaytarilgan |

**Filtrlash:**
- Client ID bo'yicha qidirish maydoni
- Sahifalash (har sahifada 10 ta yozuv)

---

## 6. Soliq bo'limi

Chap menyudan "Tax" bo'limiga o'ting.

Bu bo'lim 3 ta tabdan iborat.

### 6.1. Sertifikatlar (Certificate Management)

**Sertifikat qidirish:**
1. Branch ID raqamini kiriting
2. "View" tugmasini bosing
3. Agar sertifikat mavjud bo'lsa, quyidagi ma'lumotlar ko'rsatiladi:

| Ma'lumot | Tavsif |
|----------|--------|
| Certificate ID | Sertifikat identifikatori |
| Terminal ID | Terminal identifikatori |
| Status | Holat belgisi |
| Issued At | Berilgan sana |
| Expires At | Tugash sanasi |
| Receipt Sequence | Chek ketma-ketlik raqami |

**Sertifikat holatlari:**
- Active (faol)
- Pending Approval (tasdiqlash kutilmoqda)
- Expired (muddati o'tgan)
- Revoked (bekor qilingan)

**Yangi sertifikat ro'yxatdan o'tkazish:**

"Register Certificate" tugmasini bosing va quyidagi maydonlarni to'ldiring:

| Maydon | Majburiy | Tavsif |
|--------|----------|--------|
| **Phone** | Ha | Telefon raqami |
| **Sale Point Address** | Ha | Savdo nuqtasi manzili |
| **Activity Type Category** | Ha | Faoliyat turi kategoriyasi (raqam) |
| **Activity Type Subcategory** | Ha | Faoliyat turi kichik kategoriyasi (raqam) |
| **MP App Category ID** | Ha | MP ilova kategoriya identifikatori (raqam) |
| **Rental Number** | Yo'q | Ijara raqami |
| **Cadastre Number** | Yo'q | Kadastr raqami |
| **Cadastre/Rent File** | Ha | Fayl yuklash (PDF, JPG, PNG) |
| **Application File** | Ha | Ariza fayli (PDF, JPG, PNG) |

### 6.2. Cheklar (Receipts)

Soliq cheklari jadvali:

| Ustun | Tavsif |
|-------|--------|
| **ID** | Chek identifikatori |
| **Seq** | Ketma-ketlik raqami |
| **Type** | Chek turi - "Refund" (qizil) yoki "Sale" (ko'k) |
| **Status** | Holat belgisi |
| **Cash** | Naqd to'lov summasi |
| **Card** | Karta to'lov summasi |
| **VAT** | QQS summasi |
| **Fiscal Sign** | Fiskal imzo + QR kod havolasi (agar mavjud) |
| **Time** | Chek vaqti |

**Chek holatlari:**
- Pending (kutilmoqda)
- Signed (imzolangan)
- Sent (yuborilgan)
- Accepted (qabul qilingan)
- Failed (xatolik)

**Filtrlash:** holat bo'yicha filtr, sahifalash (10 ta yozuv).

### 6.3. Kunlik hisobotlar (Daily Reports)

| Ustun | Tavsif |
|-------|--------|
| **ID** | Hisobot identifikatori |
| **Report Date** | Hisobot sanasi |
| **Status** | Holat belgisi (Pending, Sent, Accepted, Failed) |
| **Created At** | Yaratilgan sana va vaqt |

Sahifalash: 10 ta yozuv, eng yangisi birinchi.

---

## 7. Til va mavzu sozlamalari

### 7.1. Til tanlash

Sahifaning yuqori qismidagi bayroqchali menyu orqali tilni tanlash mumkin:
- **O'zbek tili** (bayroq bilan)
- **Rus tili** (bayroq bilan)
- **Ingliz tili** (bayroq bilan)

Til o'zgarishi barcha sahifalarga darhol qo'llaniladi.

### 7.2. Mavzu (Tema)

Yuqori qismdagi kun/tun belgisi orqali mavzuni almashish:
- **Kunduzgi** (oq fon) - standart
- **Tungi** (qora fon)

### 7.3. Tizimdan chiqish

Chap menyuning pastki qismidagi qizil "Logout" tugmasini bosing.

---

## 8. Ko'p so'raladigan savollar

### Mijozlar boshqaruvi

**S: Yangi mijozni qanday ro'yxatdan o'tkazaman?**
J: "Clients" sahifasida "Add New Client" tugmasini bosing, telefon raqami va ismini kiriting, tarifni tanlang. Tizim vaqtinchalik parol yaratadi - uni mijozga yuboring.

**S: Mijozning parolini qanday o'rnataman?**
J: Mijozlar jadvalida tegishli qatordagi "Actions" menyusidan "Reset Password" ni tanlang. Ko'rsatilgan vaqtinchalik parolni nusxalab mijozga yuboring.

**S: Test foydalanuvchi nima uchun kerak?**
J: Test foydalanuvchilar statistikada hisobga olinmaydi va OTP tekshiruvi o'chirilgan bo'ladi. Demo ko'rsatmalar yoki test uchun qulay.

### Obunalar

**S: Mijoz obunasini qanday uzaytiraman?**
J: "Subscriptions" sahifasida mijozni toping, qatorni bosing, "Actions" tabiga o'ting, kunlar sonini kiriting va "Execute" ni bosing.

**S: Obunani to'xtatish nimani anglatadi?**
J: Obuna to'xtatilganda mijoz POS sinxronizatsiyadan foydalana olmaydi. Qayta boshlash uchun "Resume" tugmasini bosing.

**S: Tarifni qanday o'zgartiraman?**
J: Obuna tafsilotlari oynasida "Actions" tabiga o'ting, yangi tarifni tanlang va "Change" ni bosing.

### To'lovlar

**S: Retry Policy nima?**
J: Avtomatik to'lov muvaffaqiyatsiz bo'lganda tizim qancha marta va qanday oraliqda qayta urinishini belgilaydi. "Grace Period" - to'xtatishdan oldingi qo'shimcha muddat.

**S: Chek URL mavjud emasmi?**
J: Barcha to'lovlarda chek bo'lmaydi. Faqat to'lov tizimi orqali amalga oshirilgan to'lovlarda tashqi chek havolasi bo'lishi mumkin.

### Soliq

**S: Sertifikat ro'yxatdan o'tkazish uchun qanday hujjatlar kerak?**
J: Kadastr yoki ijara hujjati (PDF/JPG/PNG) va ariza fayli (PDF/JPG/PNG) kerak. Shuningdek, savdo nuqtasi manzili va faoliyat turi kodi talab qilinadi.

**S: Chek holati "Failed" ko'rsatilmoqda?**
J: Bu fiskal xizmatga yuborishda xatolik yuzaga kelganini bildiradi. Tizim avtomatik qayta yuborishga harakat qiladi. Agar muammo davom etsa, texnik guruhga murojaat qiling.

---

> Texnik yordam uchun BIZNEX texnik guruhiga murojaat qiling.
