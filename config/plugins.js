module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployhook:
        "https://api.vercel.com/v1/integrations/deploy/prj_CsJgip211mx9GKQhYILMhsIDlw0V/Du5Twr0NGZ",
      apiToken: "prj_CsJgip211mx9GKQhYILMhsIDlw0V",
      appFilter: "Strapi",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
