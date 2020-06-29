import 'https://deno.land/x/dotenv/load.ts';
import app from './app.ts';

app.listen({
	port: parseInt(Deno.env.get('port') || '3000') // Deno envs always are of the type string
});