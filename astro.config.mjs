// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	integrations: [
		starlight({
			favicon: '/favicon.svg',
			title: 'Biznex Docs',
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
					label: 'Hisobotlar',
					items: [
						{ label: '📊 Umumiy ko\'rinish', slug: 'inventory-modul/overview' },
						{ label: '📉 Asosiy hisobotlar', slug: 'inventory-modul/monitoring' },
						{ label: '🍱 Taomlar', slug: 'inventory-modul/stock-management' },
						{ label: '🏢 Omborxona boshqaruvi', slug: 'inventory-modul/warehouse-management' },

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
						{ label: '⚙️ Ilova sozlamalari', slug: 'config-modul/settings' }
					],
				},

				{
					label: 'FAQ',
					items: [
						{ label: '❓ FAQ 1', slug: 'faq-modul/faq-1' },
						{ label: '❓ FAQ 2', slug: 'faq-modul/faq-2' },
					],
				},

				{
					label: 'Boshqalar',
					items: [
						{ label: '🛠 Versiyalar', slug: 'support-modul/changelog' },
						{ label: '🌐 Ijtimoiy tarmoqlar', slug: 'support-modul/socials' },
						{ label: '📞 Qo\'llab-quvvatlash', slug: 'support-modul/support' },


					],
				},



			],
		}),
	],
});
