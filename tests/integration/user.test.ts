import { SuperDeno, superoak } from 'https://deno.land/x/superoak@master/mod.ts';
import app from '../../src/app.ts';

let request: SuperDeno;

Deno.test('Integration: can create new users', async (): Promise<void> => {
	for (let i: number = 0; i <= 2; i++) {
		request = await superoak(app);
		await request.post('/user')
			.send({ name: 'Foo Bar', email: 'foobar@email.com' })
			.expect(201); // expect the http status code 201 (created)
	}
});

Deno.test('Integration: can list the users', async (): Promise<void> => {
	request = await superoak(app);
	await request.get('/users')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect('[{"id":0,"name":"Foo Bar","email":"foobar@email.com"},{"id":1,"name":"Foo Bar","email":"foobar@email.com"},{"id":2,"name":"Foo Bar","email":"foobar@email.com"}]');
});

Deno.test('Integration: can get a user', async (): Promise<void> => {
	request = await superoak(app);
	await request.get('/user/0')
		.expect(200) // expect the http status code 201 (OK)
		.expect('Content-Type', /json/)
		.expect('{"id":0,"name":"Foo Bar","email":"foobar@email.com"}');
});

Deno.test('Integration: can update a user', async (): Promise<void> => {
	request = await superoak(app);
	await request.put('/user/0')
		.send({ name: 'Foo', email: 'foo@email.com' })
		.expect(200); // expect the http status code 201 (OK)

	request = await superoak(app);
	await request.get('/users')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect('[{"id":0,"name":"Foo","email":"foo@email.com"},{"id":1,"name":"Foo Bar","email":"foobar@email.com"},{"id":2,"name":"Foo Bar","email":"foobar@email.com"}]');
});

Deno.test('Integration: can delete a user', async (): Promise<void> => {
	request = await superoak(app);
	await request.delete('/user/0')
		.expect(200); // expect the http status code 201 (OK)

	request = await superoak(app);
	await request.get('/users')
		.expect(200) // expect the http status code 201 (OK)
		.expect('Content-Type', /json/)
		.expect('[{"id":1,"name":"Foo Bar","email":"foobar@email.com"},{"id":2,"name":"Foo Bar","email":"foobar@email.com"}]');
});