module.exports = {
  apps: [
    {
      name: "WolfPal [Client]",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./client/node_modules/nuxt/bin/nuxt.js",
      args: "start",
    },
    {
      name: "WolfPal [Server]",
      script: "./server/index.js",
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      exec_mode: "cluster",
      ignore_watch: "[”[/\\]./”, “node_modules”]",
      autorestart: true,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
