import { Application } from 'https://deno.land/x/oak/mod.ts'; // oak framework
import router from './routes.ts';

const app : Application = new Application();

app.use(router.routes());
app.use(router.allowedMethods()); // it works without this

export default app;