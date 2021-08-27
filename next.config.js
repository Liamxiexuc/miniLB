const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer()

module.exports = {
  async rewrites() {
    return [
      {
        source: "/addresses",
        destination:
          "https://pnwyb0a3p8.execute-api.ap-southeast-2.amazonaws.com/production/addresses",
      },
      {
        source: "/legacybuilder/propertydata/:slug*",
        destination: `https://pnwyb0a3p8.execute-api.ap-southeast-2.amazonaws.com/production/legacybuilder/propertydata/:slug*`,
      },
    ];
  },
};
