---
title: Taomlar
description: Taomlar — menyuga qo’shiladigan mahsulotlar (dish) bo’lib, kategoriyaga biriktiriladi va buyurtmalarda ishlatiladi
---

# **Taomlar 🍽️**

Biznex POS dagi **taomlar** — bu menyuga qo’shiladigan ovqatlar va ichimliklar (masalan: Osh, Pitsa, Cola 1L). Har bir taomga nom, narx, kategoriya va **fiskal kodlar** beriladi.

---

## **Taom qo’shish ➕**

**Taomlar** bo’limiga kirib, **"+"** tugmasini bosing. Quyidagi maydonlarni to’ldiring:

### 1. Asosiy ma’lumotlar

| Maydon | Tavsif | Majburiy |
|--------|--------|----------|
| **Nomi** | Taom nomi (masalan, "Osh") | Ha |
| **Kategoriya** | Qaysi guruhga tegishli (Taomlar, Ichimliklar...) | Ha |
| **Miqdor** | Boshlang’ich qoldiq | Ha |
| **O’lchov birligi** | dona, kg, litr, portsiya | Ha |
| **Rasm** | Taom rasmi (ixtiyoriy) | Yo’q |
| **Tavsif** | Qo’shimcha izoh | Yo’q |

### 2. Narx va foiz (tan narx)

Narx bo’limida **uchta maydon** bir-biriga bog’langan:

| Maydon | Tavsif |
|--------|--------|
| **Tan narx (eski narx)** | Mahsulotning asl tannarxi — sotib olish narxi yoki tayyorlash narxi |
| **Foiz (%)** | Tan narxga nisbatan ustama foiz |
| **Sotish narxi** | Mijozga beriladigan yakuniy narx |

Bu uchta maydon **avtomatik hisoblanadi** — birini o’zgartirsangiz, qolganlari moslashadi:

- **Tan narx** + **Foiz** = Sotish narxi avtomatik hisoblanadi
- **Sotish narxi** kiritilsa = Foiz avtomatik hisoblanadi
- **Foiz** o’zgartirilsa = Sotish narxi avtomatik yangilanadi

> 💡 **Misol:** Oshning tan narxi 15 000 so’m, foiz 30%. Sotish narxi avtomatik: **19 500 so’m**. Yoki sotish narxini 20 000 qilib kiritsangiz, foiz avtomatik hisoblanadi.

> 💡 **Nima uchun kerak?** Tan narx va foizni to’g’ri kiritish orqali hisobotlarda **foyda** (margin) ni aniq ko’rishingiz mumkin. Bu hisobot va statistika uchun muhim.

---

## **MXIK kod kiritish (majburiy!) 🏷️**

Har bir taomga **MXIK kod** biriktirilishi **shart**. MXIK kodsiz taom fiskal chekda qabul qilinmaydi.

### Kiritish tartibi

1. Taom qo’shish/tahrirlash sahifasida pastda **"Fiskal ma’lumotlar"** bo’limini toping.
2. **"MXIK tanlash"** tugmasini bosing.
3. Qidiruv oynasi ochiladi — taom nomini yozing (kamida **2 ta harf**).
4. Natijalar ro’yxatidan **mos MXIK kodni** tanlang (nom va kod ko’rsatiladi).
5. Tanlagan kodingiz avtomatik saqlanadi.

> ⚠️ **MXIK kodni tanlash fiskal chek uchun majburiy!** Kod tanlanmasa, savdo vaqtida fiskal chek chiqmasligi mumkin.

### MXIK kodni qayerdan topish mumkin?

- **Biznex ichida:** Taom nomini yozganingizda tizim avtomatik mos kodlarni ko’rsatadi
- **Soliq.uz:** [soliq.uz](https://soliq.uz) saytidagi MXIK klassifikatori
- **Tasnif.soliq.uz:** Batafsil klassifikator portali

### Ko’p ishlatiladigan MXIK kodlar (ovqatlanish)

| Kategoriya | MXIK kod boshlanishi | Misollar |
|------------|---------------------|----------|
| Tayyorlangan taomlar | 56.10.xx | Osh, sho’rva, lag’mon |
| Non mahsulotlari | 10.71.xx | Non, somsa, patir |
| Ichimliklar (alkogolsiz) | 11.07.xx | Sharbat, kola, suv |
| Choy/Kofe | 10.83.xx / 56.10.xx | Choy, qahva |

> 📖 Batafsil: [MXIK kodlar](/tax-modul/mxik/) sahifasi

---

## **Paket kod kiritish (majburiy!) 📦**

MXIK kod tanlangandan keyin shu mahsulot uchun **paket kod** ham tanlanishi kerak.

### Kiritish tartibi

1. Avval **MXIK kodni tanlang** (yuqoridagi bosqich).
2. MXIK tanlangandan keyin **"Paket tanlash"** tugmasi faollashadi.
3. Tugmani bosing — shu MXIK kodga tegishli **paket kodlar ro’yxati** ochiladi.
4. Ro’yxatdan **mos paket kodni** tanlang (nomi, turi va kodi ko’rsatiladi).

> ⚠️ **Paket kodni tanlash uchun avval MXIK tanlanishi shart!** Aks holda "Avval MXIK kodni tanlang" xabarnomasi chiqadi.

### Ko’p ishlatiladigan paket kodlar

| Kod | O’lchov birligi | Qachon ishlatiladi |
|-----|-----------------|---------------------|
| **1** | Dona (sht) | Somsa, burger, shisha ichimlik |
| **2** | Kilogramm (kg) | Go’sht, sabzavot |
| **3** | Litr (l) | Sut, sharbat |
| **10** | Porsiya | Osh, sho’rva, salat |

> 📖 Batafsil: [Paket kodlar](/tax-modul/package-codes/) sahifasi

---

## **Kategoriyaga biriktirish 🗂️**

Har bir taomni tegishli **kategoriya**ga biriktirish juda muhim:

- 🍲 **Taomlar** kategoriyasi → oshxona printeriga chiqadi
- 🍹 **Ichimliklar** kategoriyasi → bar printeriga chiqadi

Bu orqali oshpaz yoki boshqa xodimlar buyurtma bo’yicha avtomatik chek oladi.

---

## **Statistika va Hisobotlar 📊**

Taomlar bo’yicha ko’rib chiqishingiz mumkin:

- 💵 Qaysi taomdan qancha sotilgan
- ⏰ Kunlik/haftalik/yillik sotuvlar
- 🍴 Qaysi taom eng ko’p buyurtma qilingan
- 📈 Tan narx va sotish narxi o’rtasidagi **foyda** (margin)

---

## **Maslahatlar 💡**

- **MXIK va paket kodni bir marta to’g’ri kiriting** — keyin barcha cheklarda avtomatik chiqadi.
- **Tan narxni kiritishni unutmang** — hisobotlarda foyda ko’rsatkichlarini ko’rish uchun muhim.
- **Yangi taom qo’shganda** fiskal kodlarni albatta belgilang — aks holda fiskal chek xato beradi.
- **Narxlarni yangilab boring** — eskirgan narxlar hisobotlarni noto’g’ri ko’rsatadi.

---

🎉 Taomlarni to’g’ri kiritish — aniq hisobot, to’g’ri chek va tartibli biznesning asosi!
