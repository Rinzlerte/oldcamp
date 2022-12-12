module.exports = {
  pathPrefix: `/gatsby-creative`,
  siteMetadata: {
    title: `Boyarcamp`,
    description: `Дитячий табір з англомовним середовищем та носіями мови у Яремче, Плаю, Болгарії та Лондоні. Організовуємо англомовні табори для дорослих та сімейні табори. Позитивні відгуки, комфортні умови, якісне харчування та кваліфіковані викладачі з англійської мови.`,
    author: `Serg Nazarchuk`,
    siteUrl: `http://boyarcamp.com/`,
    keywords: ['англомовний табір',
      'дитячий табір',
      'Табір для дорослих',
      'Сімейний табір',
      'Табір з носіями мови',
      'Дитячий табір на Буковелі',
      'Англійський табір',
      'Сімейний табір',
      'Дитячий відпочинок влітку',
      'Дитячі табори в Карпатах',
      'Дитячий табір в Яремче',
      'Англомовний табір в Карпатах',
      'Акція на дитячий відпочинок',
      'Раннє бронювання в дитячий табір',
      'англоязычный лагерь',
      'англоязычный лагерь украина',
      'языковой лагерь за границей',
      'Лагерь английского языка для взрослых',
      'Английский лагерь для детей на Буковеле',
      'Детские лагеря с изучением английского Украина'
      ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Boyar camp`,
        short_name: `boyarcamp`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/campsmall.png`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "401660944698480",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5WHNVZX",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-sass`,
  ],
}

