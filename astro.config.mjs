// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.biznex.uz',
	integrations: [
		sitemap(),
		starlight({
			favicon: '/favicon.svg',
			title: 'Biznex Docs',
			defaultLocale: 'root',
			locales: {
				root: { label: 'O\'zbekcha', lang: 'uz' },
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'Biznex, Biznex uz, Biznex POS, POS tizimi, POS sistema, kassa dasturi, restoran dasturi, kafe dasturi, savdo dasturi, Biznex qollanma, Biznex docs, Biznex yordam, onlayn kassa, fiskal kassa, soliq tizimi, O\'zbekiston POS, uzbekistan POS, ombor boshqaruvi, retsept dasturi, restoran POS, restoran avtomatizatsiyasi, umumiy ovqatlanish korxonalarini boshqarish, kafe va restoranlar uchun dastur, ombor hisob-kitobi dasturi, ofitsiantlar uchun mobil ilova, restoran CRM, sotuv terminali, oshxona uchun programma, kafe uchun kassa, restoran programmasi, kassir uchun programma, sklad programmasi, QR menyu, restaurant POS system, cloud POS, kitchen display system, fast food POS, restoran uchun eng yaxshi dastur, taom tannarxini hisoblash, Toshkentda restoran avtomatizatsiyasi',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: 'Biznex',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://docs.biznex.uz/favicon.svg',
					},
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: 'Biznex',
						alternateName: ['Biznex POS', 'Biznex Docs', 'Biznex uz'],
						url: 'https://docs.biznex.uz',
						description: 'Biznex POS — O\'zbekistondagi restoranlar, kafelar va do\'konlar uchun zamonaviy savdo va boshqaruv tizimi. Qo\'llanma va yordam markazi.',
						inLanguage: 'uz',
						publisher: {
							'@type': 'Organization',
							name: 'Biznex',
							url: 'https://biznex.uz',
							logo: 'https://docs.biznex.uz/favicon.svg',
						},
					}),
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'SoftwareApplication',
						name: 'Biznex POS',
						applicationCategory: 'BusinessApplication',
						operatingSystem: 'Windows, Android',
						description: 'Restoran, kafe va do\'konlar uchun POS (savdo nuqtasi) tizimi. Kassa, ombor, hisobotlar, soliq integratsiyasi.',
						url: 'https://biznex.uz',
						offers: {
							'@type': 'Offer',
							availability: 'https://schema.org/InStock',
						},
					}),
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Boshlash',
					items: [
						{ label: '🚪 Kirish', slug: 'getting-started/introduction' },
						{ label: '💻 O\'rnatish', slug: 'getting-started/installation' },
						{ label: '⚡️ Tezkor boshlash', slug: 'getting-started/quick-start' },
					],
				},

				{
					label: 'Sotib olish',
					items: [
						{ label: '🛍 Sotib olish', slug: 'subscription-modul/buy' },
						{ label: '📆 Obunalar', slug: 'subscription-modul/subscription' },
						{ label: '🖨 Qurilmalar', slug: 'subscription-modul/devices' },
						{ label: '📑 Shartnoma', slug: 'subscription-modul/rules' },
					],
				},

				{
					label: 'Asosiy tushunchalar',
					items: [
						{ label: '👩‍🍳 Xodimlar', slug: 'core-modul/employees' },
						{ label: '🥕 Mahsulotlar', slug: 'core-modul/ingredients' },
						{ label: '🍛 Taomlar', slug: 'core-modul/products' },
						{ label: '📄 Retseptlar', slug: 'core-modul/recipes' },
						{ label: '🛒 Xaridlar', slug: 'core-modul/shopping' },
						{ label: '💳 Tranzaksiyalar', slug: 'core-modul/transactions' },
					],
				},

				{
					label: 'POS tizimi',
					items: [
						{ label: '🪑 Joylar & o\'rinlar', slug: 'pos-modul/places' },
						{ label: '〽️ Savdo qilish', slug: 'pos-modul/sales' },
						{ label: '🛎 Buyurtmalar', slug: 'pos-modul/orders' },
						{ label: '👥 Mijozlar', slug: 'pos-modul/customers' },
					],
				},

				{
					label: 'Fastfood tizimi',
					items: [
						{ label: '🌭 Savdo qilish', slug: 'fastfood-modul/sale' },
						{ label: '🍔 Buyurtmalar', slug: 'fastfood-modul/orders' },
						{ label: '1️⃣ Navbatlar', slug: 'fastfood-modul/queue' },
					],
				},

				{
					label: 'To\'lov va Soliq',
					items: [
						{ label: '🧾 Soliq integratsiyasi', slug: 'tax-modul/overview' },
						{ label: '🖨️ QPOS terminali', slug: 'tax-modul/qpos' },
						{ label: '📟 Fiskal modul (FM)', slug: 'tax-modul/fiscal-module' },
						{ label: '🔌 FDS xizmati', slug: 'tax-modul/fds' },
						{ label: '🏷️ MXIK kodlar', slug: 'tax-modul/mxik' },
						{ label: '📦 Paket kodlar', slug: 'tax-modul/package-codes' },
						{ label: '🧾 Fiskal chek', slug: 'tax-modul/fiscal-receipt' },
					],
				},

				{
					label: 'Biznex Cloud',
					items: [
						{ label: '☁️ Cloud haqida', slug: 'cloud-modul/overview' },
						{ label: '🌐 Veb-portal (client.biznex.uz)', slug: 'cloud-modul/web-client' },
					],
				},

				{
					label: 'Hisobotlar',
					items: [
						{ label: '📊 Umumiy ko\'rinish', slug: 'inventory-modul/overview' },
						{ label: '📉 Asosiy hisobotlar', slug: 'inventory-modul/monitoring' },
						{ label: '🍱 Taomlar', slug: 'inventory-modul/stock-management' },
						{ label: '🏢 Omborxona boshqaruvi', slug: 'inventory-modul/warehouse-management' },
						{ label: '🏭 Oshxona ishlab chiqarish', slug: 'inventory-modul/kitchen' },
						{ label: '📈 Tahlillar', slug: 'inventory-modul/analytics' },
					],
				},
				{
					label: 'Qurilmalar',
					items: [
						{ label: '🖥 POS qurilma', slug: 'devices-modul/desktop' },
						{ label: '📱 Mobil ilova', slug: 'devices-modul/mobile' },
						{ label: '⛓️ Ulanish', slug: 'devices-modul/connection' },
					],
				},
				{
					label: 'Sozlamalar',
					items: [
						{ label: '🔑 Boshqaruv', slug: 'config-modul/roles' },
						{ label: '📲 Integratsiya', slug: 'config-modul/integrations' },
						{ label: '⚙️ Ilova sozlamalari', slug: 'config-modul/settings' },
					],
				},

				{
					label: 'Qonunchilik',
					items: [
						{ label: '📜 Qonunchilik asoslari', slug: 'qonunchilik-modul/overview' },
						{ label: '🖥 Qurilmalar va tizimlar', slug: 'qonunchilik-modul/qurilmalar' },
						{ label: '🧾 Chek va hisobot', slug: 'qonunchilik-modul/chek-hisobot' },
						{ label: '⚙️ Texnik talablar', slug: 'qonunchilik-modul/texnik-talablar' },
						{ label: '💰 Moliyaviy talablar', slug: 'qonunchilik-modul/moliyaviy-talablar' },
						{ label: '📋 Amaliy qoidalar', slug: 'qonunchilik-modul/amaliy-qoidalar' },
						{ label: '📞 Call Center qo\'llanma', slug: 'qonunchilik-modul/call-center' },
					],
				},

				{
					label: 'FAQ',
					items: [
						{ label: '❓ Sotuv masalasi', slug: 'faq-modul/faq-1' },
						{ label: '❓ Texnik masalalar', slug: 'faq-modul/faq-2' },
					],
				},

				{
					label: 'Boshqalar',
					items: [
						{ label: '🛠 Versiyalar', slug: 'support-modul/changelog' },
						{ label: '📝 Docs o\'zgarishlar', slug: 'support-modul/docs-changelog' },
						{ label: '🌐 Ijtimoiy tarmoqlar', slug: 'support-modul/socials' },
						{ label: '📞 Qo\'llab-quvvatlash', slug: 'support-modul/support' },
					],
				},
			],
		}),
	],
});
