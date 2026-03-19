---
title: Tahlillar
description: ABC tahlil, Food Cost, Avtomatik xarid va boshqa tahlil vositalari
---

# **Tahlillar**

Biznex POS tizimida biznesingizni chuqurroq tahlil qilish uchun bir nechta professional tahlil vositalari mavjud.

---

## **ABC tahlil (Pareto)**

ABC tahlili **Pareto qoidasi** asosida masalliqlaringizni muhimlik darajasiga qarab 3 kategoriyaga ajratadi.

### Kategoriyalar

| Kategoriya | Ulushi | Ma'nosi | Tavsiya |
|------------|--------|---------|---------|
| **A** | ~20% masalliq = 80% xarajat | Eng muhim, eng ko'p sarflanadigan | Eng diqqatli nazorat, doimiy zaxira |
| **B** | ~30% masalliq = 15% xarajat | O'rtacha muhim | Muntazam nazorat |
| **C** | ~50% masalliq = 5% xarajat | Kam sarflanadigan | Oddiy nazorat yetarli |

### Qanday ishlaydi?

1. Tizim tanlangan davrdagi barcha omborxona tranzaksiyalarini tahlil qiladi
2. Har bir masalliqning umumiy sarflanish qiymatini hisoblaydi
3. Masalliqlarni qiymat bo'yicha kamayish tartibida saralaydi
4. Jamlangan foiz asosida A, B, C kategoriyalarni belgilaydi

### Foydalanish

**Hisobotlar > ABC tahlil** sahifasiga o'ting, sana oralig'ini tanlang.

**Natijada:**
- A kategoriya masalliqlariga — eng ko'p e'tibor bering, ularni kam qoldirmang
- B kategoriya — muntazam kuzating
- C kategoriya — ortiqcha sotib olmang, kam sarflanadi

---

## **Food Cost (Taom tannarxi)**

Food cost — har bir taomning **masalliq xarajati va foydaliligi**ni aniq ko'rsatadi.

### Formula

```
Food Cost % = (Masalliq xarajati / Sotish narxi) × 100
```

### Hisobot ko'rsatkichlari

| Ko'rsatkich | Tavsifi |
|-------------|---------|
| **Masalliq xarajati** | Retseptdagi barcha masalliqlar narxi |
| **Sof xarajat** | Masalliq xarajati - chiqindi qaytarish qiymati |
| **Food Cost %** | Xarajatning sotish narxiga nisbati |
| **Foyda** | Sotish narxi - sof xarajat |
| **Foyda marjasi** | Foyda foizi |

### Misol

| Taom | Masalliq xarajati | Sotish narxi | Food Cost % | Foyda |
|------|-------------------|--------------|-------------|-------|
| Osh | 18,000 UZS | 45,000 UZS | 40% | 27,000 UZS |
| Lag'mon | 12,000 UZS | 35,000 UZS | 34% | 23,000 UZS |
| Somsa | 5,000 UZS | 15,000 UZS | 33% | 10,000 UZS |

:::note
Food Cost 30-35% oralig'ida bo'lishi maqbul. 40% dan yuqori bo'lsa — retseptni yoki narxni qayta ko'rib chiqing.
:::

### Foydalanish

**Hisobotlar > Food Cost** sahifasiga o'ting. Barcha retseptli mahsulotlar tahlil qilinadi.

---

## **Avtomatik xarid ro'yxati**

Tizim minimal zaxira chegarasini kuzatadi va **avtomatik xarid ro'yxati** taklif qiladi.

### Qanday ishlaydi?

1. Har bir masalliq uchun **minimal zaxira** chegarasi belgilanadi
2. Tizim joriy zaxirani minimal chegaraga taqqoslaydi
3. Kam qolgan masalliqlar uchun xarid taklifi shakllanadi

### Zaxira holatlari

| Holat | Belgi | Tavsifi |
|-------|-------|---------|
| **Kritik** | Qizil | Zaxira 0 yoki undan kam |
| **Kam** | Sariq | Zaxira minimal chegaradan past |
| **Yetarli** | Yashil | Zaxira yetarli |

### Xarid ro'yxati

Avtomatik generatsiya qilingan ro'yxatda:
- Masalliq nomi
- Joriy zaxira miqdori
- Minimal zarur miqdor
- **Xarid miqdori** (minimal - joriy = kerakli)
- Taxminiy narx (oxirgi xarid narxi asosida)

**Hisobotlar > Avtomatik xarid** sahifasiga o'ting.

---

## **Boshqa hisobotlar**

### Iste'mol hisoboti
Tanlangan davrdagi masalliq sarfini ko'rsatadi — qaysi masalliq qancha sarflangan.

### Narx tarixi
Har bir masalliqning vaqt davomidagi narx o'zgarishini kuzatadi. Yetkazuvchilar narxini taqqoslash uchun foydali.

### Zaxira hisoboti
Ombordagi barcha masalliqlarning joriy holati: miqdor, qiymat, holat (yetarli/kam/kritik).

### Isrof hisoboti
Yo'qotilgan, muddati o'tgan yoki isrof bo'lgan masalliqlar hisoboti.

---

## **Maslahatlar**

- **ABC tahlilni** oyiga kamida 1 marta tekshiring — A kategoriya masalliqlariga alohida e'tibor bering
- **Food Cost** 40% dan oshsa — retseptni optimallashtiring yoki sotish narxini ko'taring
- **Avtomatik xarid** funksiyasidan foydalaning — masalliq tugab qolishni oldini oladi
- Narx tarixini kuzating — yetkazuvchilar narxini solishtirish uchun
