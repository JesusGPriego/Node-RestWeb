import { Server } from "@/presentation/server";
import { envs } from "@/configs/envs";

(() => {
  main();
})();

function main() {
  const server = new Server(envs);
  server.start();
}
