import { Server } from "@/presentation/server";
import { envs } from "@/configs/envs";
import { AppRoutes } from "@/presentation/routes";

(() => {
  main();
})();

function main() {
  const server = new Server({ ...envs, routes: AppRoutes.get() });
  server.start();
}
