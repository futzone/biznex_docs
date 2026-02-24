---
title: Ulanish
description: Biznex POS qurilmalari o'rtasidagi ulanish va tarmoq sozlamalari
---

# **Ulanish ⛓️🌐**

Biznex POS tizimida bir nechta qurilma birgalikda ishlashi uchun ularni to'g'ri tarmoqqa ulash kerak. Bu sahifada ulanish turlari va sozlamalari haqida ma'lumot berilgan.

---

## **Tarmoq arxitekturasi 🏗️**

```
Router (Wi-Fi)
├── POS qurilma (asosiy server)
├── Mobil ilova 1 (ofitsiant)
├── Mobil ilova 2 (ofitsiant)
├── Chek printer
└── QPOS terminal
```

**POS qurilma** asosiy server vazifasini bajaradi — barcha ma'lumotlar shu yerda saqlanadi va boshqa qurilmalar unga ulanadi.

---

## **Ulanish turlari 📡**

### Wi-Fi (simsiz)
- **Qurilmalar:** Mobil ilovalar, ba'zi printerlar
- **Talab:** Barcha qurilmalar bir Wi-Fi tarmoqda
- **Masofasi:** Router qamrov doirasida

### USB (simli)
- **Qurilmalar:** Printer, QPOS terminal
- **Talab:** USB kabel
- **Ishonchliligi:** Eng yuqori

### Bluetooth
- **Qurilmalar:** Portativ printerlar
- **Talab:** Bluetooth yoqilgan
- **Masofasi:** 10 metrgacha

### Ethernet (LAN)
- **Qurilmalar:** POS qurilma, tarmoq printerlari
- **Talab:** LAN kabel va router
- **Ishonchliligi:** Yuqori va barqaror

---

## **Printer ulash 🖨️**

### USB orqali
1. Printerni POS qurilmaga USB kabel bilan ulang.
2. Biznex POS → **Sozlamalar** → **Printer** ga kiring.
3. Printer avtomatik aniqlanadi — tanlang.
4. **Test chek** chop eting ✅

### Wi-Fi orqali
1. Printerni Wi-Fi tarmoqqa ulang.
2. Printerning **IP manzilini** aniqlang.
3. Biznex POS → **Sozlamalar** → **Printer** → IP manzilni kiriting.
4. **Test chek** chop eting ✅

---

## **Mobil/Remote qurilma ulanmayapti — bosqichma-bosqich diagnostika 🔍**

> ⚠️ **Muhim:** Mobil yoki remote waiter qurilmasi IP manzilni terib kirganda ulanmay qolishi — **ko'p hollarda ilova xatosi emas, tarmoq muammosi**dir. Quyidagi bosqichlarni ketma-ket bajaring.

---

### 1-qadam: Admin monoblok ishlayotganini tekshiring 🖥️

Eng birinchi navbatda admin monoblokda (asosiy POS qurilmada) **Biznex dasturi ochiq va ishlayotganini** tekshiring.

- ✅ Monoblok yoqilganmi?
- ✅ Biznex POS dasturi ishga tushganmi?
- ✅ Dastur login ekranida yoki asosiy ekranda turganmi?

> Agar monoblok o'chirilgan yoki Biznex dasturi yopilgan bo'lsa — mobil qurilma **hech qachon ulana olmaydi**, chunki server aynan shu monoblokda ishlaydi.

---

### 2-qadam: Hozirgina login qilingan bo'lsa — qayta kirish 🔄

Agar admin monoblokda **hozirgina login qilingan** bo'lsa (dastur endigina ishga tushgan), ba'zan server to'liq yuklanmagan bo'lishi mumkin.

**Yechim:**
1. Admin monoblokda Biznex dasturidan **chiqing** (logout).
2. **3-5 soniya** kuting.
3. Qaytadan **login** qiling.
4. Remote qurilmada qayta ulanishni sinab ko'ring.

---

### 3-qadam: Brauzer orqali server holatini tekshirish 🌐

Bu — **eng muhim diagnostika qadami**. Muammo ilovadami yoki tarmoqdami — aniq farqlash uchun quyidagini bajaring:

1. Remote qurilmada (telefon/planshet) **brauzerni** oching (Chrome, Safari).
2. Manzil satriga admin monoblokning **IP manzilini** kiriting va **:8080** portni qo'shing:

```
http://192.168.1.100:8080
```

> 💡 IP manzilni admin monoblokdagi **Sozlamalar** bo'limidan toping.

3. **Natijani tekshiring:**

---

#### ✅ Natija: "Route not found" yoki "Biznex server ishlamoqda" deb chiqsa

```
Route not found
```
yoki
```
Biznex server ishlamoqda
```

Bu **server ishlayotganini va tarmoq ulanishi borligini** tasdiqlaydi. Demak:

- 📡 Tarmoq — **OK**
- 🖥️ Server — **OK**
- ❌ **Muammo ilovaning o'zida** bo'lishi mumkin

**Nima qilish kerak:**
1. 📞 **Zudlik bilan dasturchilar bilan bog'laning** — muammo dasturiy ta'minotda.
2. Skrinshot oling va qo'llab-quvvatlash xizmatiga yuboring.
3. Ilova versiyasini xabar bering.

---

#### ❌ Natija: Sahifa ochilmasa, "Bu saytga ulanib bo'lmadi" yoki xatolik chiqsa

```
Bu saytga ulanib bo'lmadi
```
yoki
```
ERR_CONNECTION_REFUSED / ERR_TIMED_OUT
```

Bu **tarmoq muammosi** ekanligini bildiradi. Muammo ilovada **emas**. Quyidagilarni tekshiring:

---

##### A. Admin monoblokda tarmoq muammosi 🖥️❌

Admin monoblok tarmoqqa to'g'ri ulanmagandir:

1. Monoblokda **Wi-Fi yoki LAN kabel** ulanganligini tekshiring.
2. Monoblokda brauzerni oching va **google.com** ga kiring — internet bormi?
3. Monoblokda **IP manzil o'zgargan** bo'lishi mumkin — Sozlamalardan qayta tekshiring.
4. **Firewall/Antivirus** 8080 portni bloklayotgan bo'lishi mumkin — ruxsat bering.

##### B. Remote qurilma boshqa internetga ulangan 📱❌

Remote qurilma (telefon/planshet) **boshqa Wi-Fi tarmoqqa** yoki **mobil internetga** ulangan bo'lishi mumkin:

1. Telefonda **Wi-Fi sozlamalari** ni oching.
2. Admin monoblok ulangan **aynan shu Wi-Fi tarmoqqa** ulanganligini tekshiring.
3. ⚠️ **Mobil internet** (3G/4G/5G) — ishlamaydi! Faqat **Wi-Fi** orqali ulanish mumkin.
4. Wi-Fi nomi monoblokdagi bilan **bir xil** ekanligiga ishonch hosil qiling.

> 🔴 **Keng tarqalgan xato:** Telefon Wi-Fi ga ulangan ko'rinadi, lekin aslida mobil internetdan foydalanayotgan bo'ladi. Wi-Fi ni **o'chirib-yoqib** ko'ring.

##### C. Remote qurilmada VPN yoqilgan 🔒❌

Agar remote qurilmada **VPN** (Virtual Private Network) yoqilgan bo'lsa, u tarmoq yo'nalishini o'zgartiradi va lokal serverga kirishni bloklaydi.

1. Telefon **Sozlamalar** → **VPN** ga kiring.
2. Agar biror VPN **faol** bo'lsa — **o'chiring**.
3. Qayta ulanishni sinab ko'ring.

> 💡 VPN ilovalari: Outline, 1.1.1.1, NordVPN, Psiphon, Turbo VPN va boshqalar — barchasi lokal tarmoq ulanishiga **halaqit beradi**.

---

### Diagnostika xulosasi — tezkor jadval 📋

| Brauzerda natija | Muammo qayerda? | Nima qilish kerak? |
|------------------|-----------------|---------------------|
| ✅ "Route not found" / "Biznex server ishlamoqda" | **Ilova** (dasturiy) | Dasturchilarga murojaat qiling |
| ❌ Sahifa ochilmadi | **Tarmoq** | Quyidagi 3 narsani tekshiring |
| ↳ | Monoblok tarmoqqa ulanmaganmi? | Monoblokda internetni tekshiring |
| ↳ | Remote qurilma boshqa tarmoqdami? | Bir xil Wi-Fi ga ulang |
| ↳ | VPN yoqilganmi? | VPN ni o'chiring |

---

## **Umumiy tarmoq muammolari va yechimlari 🔧**

| Muammo | Yechim |
|--------|--------|
| Mobil ilova ulanmayapti | Yuqoridagi diagnostika bosqichlarini bajaring |
| Printer chop etmayapti | USB/Wi-Fi ulanishni tekshiring, printerni qayta yoqing |
| Sekin ishlayapti | Routerni qayta yoqing, qurilmalar sonini tekshiring |
| Internet yo'q | Provayder bilan bog'laning, routerni qayta yoqing |
| Ba'zan ulanib, ba'zan ulanmaydi | Router signal kuchini tekshiring, qurilmani routerga yaqinroq qo'ying |

---

## **Maslahatlar 💡**

- **Sifatli router:** Yaxshi router — barqaror tarmoqning asosi.
- **Statik IP:** POS qurilma va printerlarga statik IP manzil bering — har safar qayta sozlash kerak bo'lmaydi.
- **Zaxira internet:** Asosiy internet uzilganda mobil internet (hotspot) ishlatish mumkin.
- **VPN tekshiring:** Har doim remote qurilmalarda VPN o'chirilganligini tekshiring.
- **Bir tarmoq:** Barcha qurilmalar **bitta router** ga ulangan bo'lishi shart.
- **Brauzer testi:** Muammo chiqqanda **har doim** avval brauzerda `IP:8080` ni tekshiring — bu 10 soniyada muammo qayerdaligini aniqlaydi.

---

🎉 To'g'ri ulanish — barcha qurilmalarning muammosiz ishlashi!
