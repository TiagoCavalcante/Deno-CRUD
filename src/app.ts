import { Application } from "https://deno.land/x/oak/mod.ts"; // Oak framework
import router from "./routes.ts";

const app: Application = new Application();

app.use(router.routes()); // use the routes of the router
app.use(router.allowedMethods()); // it works without this

export default app; // the listen port is not here because we have tests