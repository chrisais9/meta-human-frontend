module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/style/main.scss";
        `,
      },
    },
  },
  transpileDependencies: true,
};
