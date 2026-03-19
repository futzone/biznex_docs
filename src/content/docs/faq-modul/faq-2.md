---
title: Texnik masalalar
description: Texnik muammolar bo'yicha tez-tez so'raladigan savollar va yechimlar
---

# **Texnik masalalar (FAQ)**

Biznex POS ishlatishda uchraydigan texnik muammolar va ularning yechimlari.

---

## **I. Tizimga kirish**

<details>
<summary><strong>PIN-kodim bilan tizimga kirib bo'lmayapti</strong></summary>

1. PIN-kodni to'g'ri kiritayotganingizni tekshiring (4-6 raqam)
2. Administrator tomonidan PIN-kod o'zgartirilgan bo'lishi mumkin — admin dan so'rang
3. Xodim profili "Nofaol" qilingan bo'lishi mumkin — admin tekshirsin
4. Dasturni qayta ishga tushiring
</details>

<details>
<summary><strong>Yangi xodim qo'shdik, tizimda ko'rinmayapti</strong></summary>

1. Xodim qo'shgandan so'ng **"Saqlash"** tugmasi bosilganmi?
2. Xodimga **lavozim (rol)** belgilanganmi?
3. Xodimga **PIN-kod** yaratilganmi?
4. Ilovani qayta ishga tushiring — ma'lumotlar yangilanadi
</details>

<details>
<summary><strong>Xodim ishdan ketdi, profilini qanday bloklayman?</strong></summary>

**Xodimlar** bo'limiga kiring → xodimni toping → **"Nofaol"** qiling. Shundan keyin u PIN-kod bilan kira olmaydi. Xodimni butunlay o'chirish ham mumkin.
</details>

<details>
<summary><strong>Bir vaqtda ikki kishi bitta profil bilan kira oladimi?</strong></summary>

**Yo'q.** Har bir xodimning PIN-kodi unikal — boshqa qurilmada kira olmaydi. Har bir xodim faqat o'z buyurtmalarini ko'radi.
</details>

<details>
<summary><strong>Planshetda "Internet yo'q" deyapti</strong></summary>

1. Planshet va POS qurilma **bitta Wi-Fi** tarmoqda ekanligini tekshiring
2. **Mobil internet (4G)** emas, **Wi-Fi** ishlatilayotganini tekshiring
3. **VPN** o'chirilganligini tekshiring
4. Brauzerda `http://[IP]:8080` ni tekshiring — server ishlayaptimi?
</details>

---

## **II. Chek printerlari va chop etish**

<details>
<summary><strong>Printer chek chiqarmayapti</strong></summary>

1. Printer **yoqilganmi** — tekshiring
2. **USB/Wi-Fi** ulanish bormi — kabelni qayta ulang
3. **Qog'oz** bormi — printer qog'ozini tekshiring
4. **Sozlamalar > Printer** da printer tanlanganmi?
5. Printerni **o'chirib-yoqing**
6. **Test chek** chop eting
</details>

<details>
<summary><strong>Oshxonaga buyurtma varag'i (belgu) bormayapti</strong></summary>

1. Oshxona printeri alohida sozlanganmi? **Sozlamalar > Printer** tekshiring
2. Mahsulot **kategoriyasi** oshxona printeriga bog'langanmi?
3. Oshxona printeri **yoqilgan va ulangan** ekanligini tekshiring
4. Kategoriya → Printer bog'lanishini tekshiring (masalan: "Taomlar" → Oshxona printer)
</details>

<details>
<summary><strong>Printerda "Error" yoki qizil chiroq yonyapti</strong></summary>

1. **Qog'oz tekshiring** — tugagan yoki tiqilib qolgan bo'lishi mumkin
2. Printer qopqog'i **to'g'ri yopilganmi** tekshiring
3. Printerni **o'chirib, 10 soniya kutib, qayta yoqing**
4. USB kabelni qayta ulang
5. Muammo davom etsa — printer boshini tozalang
</details>

<details>
<summary><strong>Chekda yozuvlar xira chiqyapti</strong></summary>

1. **Termal qog'oz** to'g'ri tomoniga solinganligi tekshiring (silliq tomoni tashqarida)
2. Printer **boshini tozalang** (spirt bilan)
3. **Yangi qog'oz** soling — eski qog'oz xira chiqaradi
4. Sozlamalardan **shrift o'lchamini** oshiring
</details>

<details>
<summary><strong>Printer qog'ozi tiqilib qoldi</strong></summary>

1. Printerni **o'chiring**
2. Qopqoqni oching
3. Qog'ozni **ehtiyotkorlik bilan** tekis tortib chiqaring
4. Yangi qog'oz soling
5. Printerni qayta yoqing
</details>

<details>
<summary><strong>Printerdan g'alati belgilar/iyerogliflar chiqyapti</strong></summary>

1. **Sozlamalar > Printer** da to'g'ri printer modeli tanlanganmi?
2. Printer **kodlash (encoding)** sozlamasini tekshiring
3. Printerni o'chirib-yoqing
4. Muammo davom etsa — texnik xizmatga murojaat qiling
</details>

<details>
<summary><strong>Bir vaqtda ikkita printerdan chek chiqarish mumkinmi?</strong></summary>

**Ha.** Biznex POS **ko'p printerli rejimni** qo'llab-quvvatlaydi. Kategoriya bo'yicha printerlar ajratiladi — masalan, taomlar oshxona printeriga, ichimliklar bar printeriga. Har bir joy uchun ham alohida printer belgilash mumkin.
</details>

<details>
<summary><strong>Bluetooth printer ulanmayapti</strong></summary>

1. Qurilmada **Bluetooth yoqilganmi** tekshiring
2. Printer **juftlangan (paired)** ekanligini tekshiring
3. Printerni qayta juftlang
4. Printer **10 metr** masofadan uzoqda emas ekanligini tekshiring
</details>

<details>
<summary><strong>Chekda logotip yoki manzil noto'g'ri chiqyapti</strong></summary>

**Sozlamalar > Umumiy** dan do'kon nomi, manzil va logoni yangilang. O'zgarishlar keyingi chekdan boshlab qo'llaniladi.
</details>

<details>
<summary><strong>Bar va oshxona printerini qanday farqlayman?</strong></summary>

**Kategoriya bo'yicha ajratiladi:**
- "Taomlar" kategoriyasi → oshxona printeriga
- "Ichimliklar" kategoriyasi → bar printeriga
- **Sozlamalar > Kategoriya** dan har bir kategoriyaga printer belgilang
</details>

<details>
<summary><strong>Wi-Fi printer har doim uzilib qolyapti</strong></summary>

1. Printer va router orasidagi **masofani kamaytiring**
2. Printerga **statik IP** bering — DHCP har safar boshqa IP berishi mumkin
3. Router **2.4 GHz** tarmoq ishlatilayotganligini tekshiring (5 GHz masofaga chidamsiz)
4. Routerni qayta yoqing
</details>

---

## **III. Tarmoq va sinxronizatsiya**

<details>
<summary><strong>"Server bilan aloqa uzildi" xatosi</strong></summary>

1. Asosiy POS qurilma (monoblok) **yoqilgan va Biznex dasturi ochiq** ekanligini tekshiring
2. Barcha qurilmalar **bitta Wi-Fi tarmoqda** ekanligini tekshiring
3. Brauzerda `http://[IP]:8080` ni tekshiring
4. **VPN o'chirilgan**ligini tekshiring
5. POS qurilmada dasturdan chiqib, qayta kiring
</details>

<details>
<summary><strong>Ofitsiant urgan buyurtma kassada ko'rinmayapti</strong></summary>

1. Qurilmalar **bitta tarmoqda** ekanligini tekshiring
2. **WebSocket** sinxronizatsiya ishlayotganini tekshiring — buyurtmalar real-time sinxronizatsiya qilinadi
3. POS qurilmada Biznex dasturi **ochiq** ekanligini tekshiring
4. Ikkala qurilmani qayta ulang
</details>

<details>
<summary><strong>Cloud ga ma'lumotlar yuklanmay qoldi</strong></summary>

1. **Internet aloqasini** tekshiring
2. Cloud sinxronizatsiya **yoqilgan**ligini tekshiring (Sozlamalar)
3. Ma'lumotlar internet qaytganda **avtomatik yuklanadi**
4. Muammo davom etsa — texnik xizmatga murojaat qiling
</details>

<details>
<summary><strong>Internet o'chsa offlayn qancha vaqt ishlaydi?</strong></summary>

Buyurtmalar va naqd to'lov — **cheksiz** ishlaydi (lokal baza). Lekin fiskal modul **48 soatdan** keyin bloklanadi. Onlayn to'lovlar (karta, Click, Payme) internet talab qiladi.
</details>

<details>
<summary><strong>Router paroli o'zgargandan keyin qurilmalarni qayta ulash</strong></summary>

1. Barcha qurilmalarda **yangi Wi-Fi parolni** kiriting
2. POS qurilma IP manzili o'zgargan bo'lishi mumkin — **Sozlamalar** dan tekshiring
3. Mobil ilovalarga yangi IP manzilni kiriting
</details>

<details>
<summary><strong>Antivirus/Firewall dasturni bloklayapti</strong></summary>

1. Antivirus sozlamalarida Biznex POS ni **istisno** ro'yxatiga qo'shing
2. Windows Firewall da **8080 va 8081** portlarni oching
3. Antivirus **vaqtincha o'chirib** tekshiring — agar ishlasa, doimiy istisno qo'shing
</details>

<details>
<summary><strong>VPN yoqilganda dastur ishlamayapti</strong></summary>

VPN lokal tarmoq yo'nalishini o'zgartiradi va POS serverga kirishni **bloklaydi**. Biznex POS ishlatishda **VPN ni o'chiring**.
</details>

---

## **IV. Kassa operatsiyalari va smena**

<details>
<summary><strong>Smena (Z-hisobot) yopilmayapti</strong></summary>

1. **Yopilmagan buyurtmalar** bormi — avval ularni yoping yoki bekor qiling
2. **FM (fiskal modul)** ulangan ekanligini tekshiring
3. **Internet** borligini tekshiring — OFD ga yuborish kerak
4. Dasturni qayta ishga tushiring
5. Muammo davom etsa — texnik xizmatga murojaat qiling
</details>

<details>
<summary><strong>Xato urilgan chekni qanday bekor qilaman (vozvrat)?</strong></summary>

1. **Buyurtmalar** ro'yxatidan kerakli buyurtmani toping
2. **"Qaytarish"** tugmasini bosing
3. Qaytarish sababi kiritiladi
4. Fiskal **qaytarish cheki** avtomatik shakllanadi
5. Pul mijozga qaytariladi
> **Eslatma:** Bekor qilish uchun admin yoki menejer ruxsati kerak bo'lishi mumkin.
</details>

<details>
<summary><strong>Kassada pul kamomadi (minus) ko'rsatyapti</strong></summary>

1. Barcha **tranzaksiyalar** to'g'ri kiritilganmi tekshiring
2. Naqd to'lovlar to'g'ri qayd etilganmi?
3. **Tranzaksiyalar** bo'limida kirim/chiqimlarni ko'rib chiqing
4. Xodimlar tomonidan **tranzaksiya** kiritilmagan bo'lishi mumkin
</details>

<details>
<summary><strong>Yopiq bo'lmagan stollarni qanday topaman?</strong></summary>

**POS ekranida** stollar rangi bilan ko'rsatiladi:
- **Yashil** — bo'sh
- **Kulrang** — band (ochiq buyurtma bor)
Band stollarni bosib, ochiq buyurtmalarni ko'rish va yopish mumkin.
</details>

<details>
<summary><strong>To'lov turini (naqd → karta) qanday o'zgartiraman?</strong></summary>

To'lov yakunlangandan keyin turini o'zgartirish mumkin emas. Buyurtmani **qaytarish (refund)** qilib, qaytadan to'g'ri to'lov turi bilan yopish kerak.
</details>

<details>
<summary><strong>Chegirmani chek yopilgandan keyin bekor qilsa bo'ladimi?</strong></summary>

Yopilgan chekni o'zgartirish mumkin emas. Buyurtmani **qaytarish** qilib, yangi buyurtma (chegirmasiz) yaratish kerak.
</details>

<details>
<summary><strong>Fiskal kassa (NKM) xatolik beryapti</strong></summary>

1. **FM (USB-kalit)** ulangan ekanligini tekshiring
2. Fiskal xizmat (QPOS/FDS) **ishlayotganini** tekshiring
3. **Internet** borligini tekshiring
4. **Monitoring > Fiskal** sahifasida holatni ko'ring
5. Texnik xizmatga murojaat qiling
</details>

---

## **V. Buyurtmalar va operatsion xatolar**

<details>
<summary><strong>Buyurtmadan bitta taomni o'chirsam, hamma narsa o'chib ketyapti</strong></summary>

Bitta mahsulotni o'chirish uchun **faqat shu mahsulotni** chapga suring yoki ❌ tugmasini bosing. Agar butun buyurtma o'chsa — bu xatolik, texnik xizmatga murojaat qiling.
</details>

<details>
<summary><strong>Taomning narxi noto'g'ri kiritilgan, qanday o'zgartiraman?</strong></summary>

**Mahsulotlar (Taomlar)** bo'limiga kiring → kerakli mahsulotni toping → **tahrirlash** → narxni o'zgartiring → saqlang. Yangi narx keyingi buyurtmalardan boshlab qo'llaniladi.
</details>

<details>
<summary><strong>Ofitsiant planshetida taomlar rasmi ko'rinmayapti</strong></summary>

1. **Internet/tarmoq** aloqasini tekshiring — rasmlar serverdan yuklanadi
2. POS qurilma **yoqilgan** va dastur ochiq ekanligini tekshiring
3. Ilovani qayta ishga tushiring
</details>

<details>
<summary><strong>Taomni bekor qilish uchun menejer kodi so'rayapti</strong></summary>

Bu **xavfsizlik sozlamasi** — to'langan buyurtmani faqat yuqori huquqli xodim (admin, menejer) bekor qila oladi. **Admin yoki menejer PIN-kodini** kiriting. PIN-kodni admin dan so'rang.
</details>

<details>
<summary><strong>Servis haqi avtomatik hisoblanmayapti</strong></summary>

1. **Sozlamalar > Buyurtma sozlamalari** da foiz ustama qo'shilganmi tekshiring
2. Buyurtma ochilgan **joyda** foiz **yoqilganmi**? ([Joylar](/pos-modul/places/) sahifasida boshqariladi)
3. MXIK va paket kodlar xizmat haqi uchun kiritilganmi? (Fiskal sozlamalar)
</details>

<details>
<summary><strong>Buyurtma vaqti noto'g'ri ko'rsatyapti</strong></summary>

Buyurtma vaqti **kompyuter soatiga** bog'langan. Kompyuter soatini to'g'rilang — **Windows Sozlamalar > Vaqt va til > Soat**.
</details>

<details>
<summary><strong>Taomlar kategoriyasi aralashib ketdi</strong></summary>

**Mahsulotlar** bo'limiga kirib, har bir mahsulotni to'g'ri kategoriyaga qayta biriktiring. Kategoriyalar **Kategoriyalar** bo'limida boshqariladi.
</details>

<details>
<summary><strong>Mijoz telefon raqami orqali tarixini ko'rib bo'lmayapti</strong></summary>

**Mijozlar** bo'limiga kiring → mijoz nomini yoki telefon raqamini qidiring. Agar mijoz ro'yxatda bo'lsa — buyurtmalar tarixi ko'rinadi. Agar yo'q — avval mijozni **ro'yxatga qo'shing**.
</details>

<details>
<summary><strong>Hisob yopildi, lekin stol "band" bo'lib turibdi</strong></summary>

Buyurtma to'liq yakunlanmagan bo'lishi mumkin. Stolni bosing → ochiq buyurtma bormi tekshiring → agar bor — yoping yoki bekor qiling. Agar buyurtma yo'q lekin stol band — dasturni qayta ishga tushiring.
</details>

---

## **VI. Fiskal (soliq) va to'lov tizimlari**

<details>
<summary><strong>Virtual kassa (NKM) bilan aloqa yo'q</strong></summary>

1. **FM (USB-kalit)** ulangan ekanligini tekshiring
2. Fiskal xizmat dasturi (**FDS** yoki **QPOS**) ishlayotganini tekshiring
3. **Internet** borligini tekshiring
4. **Monitoring > Fiskal** sahifasida FM holat tekshiring
5. Texnik xizmatga murojaat qiling
</details>

<details>
<summary><strong>Chekda QR-kod (Soliq) chiqmayapti</strong></summary>

1. Fiskal modul **ulangan va ishlayotganini** tekshiring
2. Chek turi tekshiring — **avans, bo'lib to'lash va kredit** cheklarda QR-kod chiqmaydi (qonun bo'yicha)
3. MXIK va paket kodlar to'g'ri kiritilganmi tekshiring
4. Sozlamalarda fiskal tizim **yoqilganmi** tekshiring
</details>

<details>
<summary><strong>Terminaldan pul yechildi, lekin dasturda "to'lanmadi" deyapti</strong></summary>

1. Internet aloqasini tekshiring — to'lov tasdiqlash internet talab qiladi
2. Dasturni qayta ishga tushiring
3. **Tranzaksiyalar** bo'limida to'lov holatini tekshiring
4. Muammo davom etsa — texnik xizmat va bank bilan bog'laning
</details>

<details>
<summary><strong>MXIK kodlari xato kiritilgan, qanday to'g'rilaymiz?</strong></summary>

**Mahsulotlar** → kerakli mahsulotni tahrirlang → **"Fiskal ma'lumotlar"** bo'limida → **"MXIK tanlash"** → to'g'ri kodni qayta tanlang → saqlang.
</details>

<details>
<summary><strong>Chekni bekor qildim, lekin soliq bazasida turibdi</strong></summary>

Bu **normal holat**. Bekor qilingan chek uchun **qaytarish (vozvrat) cheki** shakllanadi — soliq bazasida ikkalasi ham saqlanadi (sotish va qaytarish).
</details>

<details>
<summary><strong>Fiskal qurilma xotirasi to'lgan (memory full)</strong></summary>

1. **Z-hisobotni yoping** — FM xotirasi bo'shatiladi
2. **OFD sinxronizatsiya** qiling — cheklar operatorga yuboriladi
3. Internet aloqasini ta'minlang
4. Muammo davom etsa — texnik xizmatga murojaat qiling
</details>

<details>
<summary><strong>QR-to'lov (Click/Payme) integratsiyasi ishlamayapti</strong></summary>

1. **Internet** borligini tekshiring — onlayn to'lov internet talab qiladi
2. **Sozlamalar > Integratsiya** da to'lov tizimi **yoqilganmi** tekshiring
3. To'lov tizimi ma'lumotlari (API kalitlar) to'g'ri kiritilganmi tekshiring
4. Texnik xizmatga murojaat qiling
</details>

---

## **VII. Qurilma va dasturiy ta'minot**

<details>
<summary><strong>Dastur juda sekin ishlayapti</strong></summary>

1. **RAM** yetarliligini tekshiring — 8GB tavsiya
2. **SSD** disk ishlatilayotganini tekshiring — HDD juda sekin
3. Keraksiz dasturlarni yoping
4. Biznex POS ni qayta ishga tushiring
5. Windows yangilanishlarini o'rnating
6. **Sozlamalar > Kesh** dan keshni tozalang
</details>

<details>
<summary><strong>Ilova o'z-o'zidan yopilib ketyapti (crash)</strong></summary>

1. Dasturni qayta ishga tushiring
2. Kompyuter **RAM va CPU** yuklanishini tekshiring
3. Windows **yangilanishlarni** o'rnating
4. Dasturni **qayta o'rnating** (ma'lumotlar saqlanadi)
5. Muammo davom etsa — texnik xizmatga murojaat qiling va xato xabarini yuboring
</details>

<details>
<summary><strong>Audio-xabarnomalar (buyurtma kelgan ovozi) chiqmayapti</strong></summary>

1. Qurilmada **ovoz yoqilganmi** tekshiring
2. Dastur **ovoz sozlamalari**ni tekshiring
3. Qurilma **karnay (dinamik)** ishlayotganini tekshiring
</details>

<details>
<summary><strong>Qurilma (monoblok) juda qizib ketyapti</strong></summary>

1. Qurilma **ventilyatsiya teshiklari** to'silganmi tekshiring
2. Qurilmani **devor yoki boshqa narsalarga yopishtirib qo'ymang**
3. **Havo aylanishi** bo'lishi kerak
4. **Sovutish tizimini** tozalang (chang)
5. Muammo davom etsa — qurilma xizmat markaziga murojaat qiling
</details>

<details>
<summary><strong>Dastur litsenziyasi faollashtirilmagan</strong></summary>

1. **Internet** borligini tekshiring — litsenziya onlayn tekshiriladi
2. Obuna muddati o'tganmi? **Obuna** bo'limidan yangilang
3. Litsenziya kalitini qayta kiriting
4. Texnik xizmatga murojaat qiling
</details>

<details>
<summary><strong>Barcha ma'lumotlarni qanday "backup" qilaman?</strong></summary>

Ma'lumotlar **avtomatik** saqlanadi:
- **Lokal** — qurilmaning o'zida (Isar bazasi)
- **Cloud** — Biznex Cloud serverida (agar sinxronizatsiya yoqilgan bo'lsa)
Qayta tiklash uchun — texnik xizmatga murojaat qiling.
</details>

<details>
<summary><strong>Tizimni butunlay qayta yuklash (reboot) qanday qilinadi?</strong></summary>

1. Biznex POS dasturini **yoping**
2. Kompyuterni **qayta yoqing** (Restart)
3. Biznex POS ni qayta ishga tushiring
4. Agar muammo davom etsa — **dasturni qayta o'rnating** (ma'lumotlar saqlanadi)
</details>

---

Muammongiz hal bo'lmadimi? **Texnik xizmatga murojaat qiling:**
- Telegram: [@biznex_uz](https://t.me/biznex_uz)
- Telefon: +998 94 244 99 89 (09:00-18:00, Du-Sha)
