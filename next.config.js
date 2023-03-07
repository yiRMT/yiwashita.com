/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    ignoreRoutes: [
      '/public'
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
}