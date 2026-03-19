---
title: Texnik talablar
description: Shtrix-kod, markirovka, 2D-skaner, offlayn rejim va integratsiya bo'yicha texnik talablar
---

# **Texnik talablar**

Qurilmalar va tizimlar uchun qonunchilikda belgilangan texnik talablar.

---

## **10. Shtrix-kod**

- Onlayn-NKM va virtual kassalar shtrix-kod o'qish qurilmalarini **qo'llab-quvvatlashi shart**
- Sotilayotgan mahsulotlarning shtrix-kodi kassa chekida **majburiy rekvizit** sifatida aks ettiriladi
- Davlat reyestriga kiritiladigan qurilmalar shtrix-kodlarni erkin o'qish va aniqlash imkoniyatiga ega bo'lishi lozim

---

## **11. Markirovka belgisi**

Raqamli markirovka qilinadigan tovarlar sotilganda kassa chekida **markirovka belgisi (kodi)** aks ettirilishi shart.

**Qoidalar:**

| Qoida | Tavsifi |
|-------|---------|
| Majburiy ko'rsatish | Markirovka kodi ko'rsatilmasa, chek shakllantirilmaydi |
| Dublikat taqiqi | Bitta chekda ikkita bir xil markirovka kodi bo'lishi **mumkin emas** |
| Yaroqlilik nazorati | Skaner tovar yaroqlilik muddati o'tganini aniqlasa, chek chop etilishi **bloklanadi** |

---

## **12. 2D-skaner**

Markirovka kodlari va shtrix-kodlarni to'g'ri o'qish uchun onlayn-NKM va virtual kassalarda **2D-skaner qurilmasining qo'llanilishi majburiy**.

**Texnik talablar:**
- **ISO/IEC 15415** xalqaro standartiga muvofiq bo'lishi kerak
- Kodlarni aniq o'qishni ta'minlashi lozim
- Muddati o'tgan yoki ishlab chiqarilgan sanasi ko'rsatilmagan markirovkalangan tovarlar sotuvini avtomatik bloklaydi

---

## **13. Offlayn rejim**

Internet tarmog'ida vaqtincha uzilishlar bo'lgan taqdirda, xaridorlarga cheklarni **offlayn rejimda** berishga ruxsat etiladi.

**Muhim qoidalar:**

:::caution
- Qurilma **48 soat** davomida offlayn ishlasa, avtomatik **bloklanadi** (ba'zi texnik talablarda 24 soat)
- Aloqa tiklangandan so'ng, offlayn rejimda shakllantirilgan **barcha ma'lumotlar** operatorga yuborilishi shart
:::

---

## **14. Integratsiya**

Chakana savdo va umumiy ovqatlanish xizmatlarini ko'rsatuvchi subyektlarning POS tizimlari **soliq organlarining axborot tizimlari bilan majburiy integratsiya qilinishi** shart.

**Integratsiya turlari:**

| Tur | Tavsifi |
|-----|---------|
| Fiskal modul | Texnik jihatdan mos onlayn-NKM va virtual kassa bilan integratsiyalashgan holda ishlaydi |
| Marketpleyslar | Xaridorlarga elektron fiskal chek taqdim etish uchun operator tizimi bilan integratsiya qilinadi |
| API | Dasturiy tizimlarning o'zaro hamkorligi **API** interfeysi orqali amalga oshiriladi |

:::tip
Biznex POS integratsiyalari haqida: [Integratsiya](/config-modul/integrations)
:::
