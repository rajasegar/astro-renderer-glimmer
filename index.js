export default {
  name: 'astro-renderer-glimmer', // the renderer name
  client: './client.js', // relative path to the client entrypoint
  server: './server.js', // relative path to the server entrypoint
  //snowpackPlugin: '@snowpack/plugin-xxx', // optional, the name of a snowpack plugin to inject
  //snowpackPluginOptions: { example: true }, // optional, any options to be forwarded to the snowpack plugin
};
