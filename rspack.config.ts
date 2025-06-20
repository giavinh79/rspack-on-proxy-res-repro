import * as path from "path";
import type { DevServer, RspackOptions } from "@rspack/core";

const serverProxy: DevServer["proxy"] = [
  {
    // Rspack 1.3.5 has this property typed
    // onProxyRes: (proxyRes, req, res) => {
    //   console.log(proxyRes.headers);
    // },
    // In Rspack 1.3.6, the `onProxyRes` property is not available
  },
];

const config: RspackOptions = {
  mode: "development",
  entry: {
    main: "./src/index",
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "rspack-dist"),
    filename: "[name].js",
  },
  experiments: {
    css: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    proxy: serverProxy,
  },
};

export default config;
