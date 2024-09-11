import express, { Router } from "express";
import path from "path";

type Options = {
  PORT: number;
  PUBLIC_PATH: string;
  routes: Router;
};

export class Server {
  private app = express();
  private readonly port;
  private readonly publicPath;
  private readonly routes;

  constructor(options: Options) {
    this.port = options.PORT;
    this.publicPath = options.PUBLIC_PATH;
    this.routes = options.routes;
  }
  async start() {
    // middlewares
    this.app.use(express.json());
    // public folder
    this.app.use(express.static(this.publicPath));

    this.app.use(this.routes);

    // SPA
    this.app.get("*", (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`
      );
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`server is listening on port ${this.port}`);
    });
  }
}
