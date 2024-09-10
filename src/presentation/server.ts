import { envs } from "@/configs/envs";
import express from "express";
import path from "path";

type Options = {
  PORT: number;
  PUBLIC_PATH: string;
};

export class Server {
  private app = express();
  private readonly port;
  private readonly publicPath;

  constructor(options: Options) {
    this.port = options.PORT;
    this.publicPath = options.PUBLIC_PATH;
  }
  async start() {
    // middlewares
    this.app.use(express.static(this.publicPath));

    this.app.get("*", (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`
      );
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`port is listening on port ${this.port}`);
    });
  }
}
