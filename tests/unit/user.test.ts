import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { Users } from '../../src/model/user.ts';

Deno.test('Unit: can list the users', () => {
	let users : Users = new Users();

	assertEquals(users.getUsers(), []);
});

Deno.test('Unit: can create new users', () => {
	let users : Users = new Users();

	for (let i = 0; i <= 2; i++) {
		users.addUser('Foo Bar', 'foobar@email.com');
	}

	assertEquals(users.getUsers(), [
		{ id: 0, name: 'Foo Bar', email: 'foobar@email.com' },
		{ id: 1, name: 'Foo Bar', email: 'foobar@email.com' },
		{ id: 2, name: 'Foo Bar', email: 'foobar@email.com' }
	]);
});

Deno.test('Unit: can update a user', () => {
	let users : Users = new Users();

	users.addUser('Foo Bar', 'foobar@email.com');
	users.updateUser(0, 'Foo', 'foo@email.com');
	users.updateUser(0, undefined, undefined);

	assertEquals(users.getUsers(), [{ id: 0, name: 'Foo', email: 'foo@email.com' }]);
});

Deno.test('Unit: can delete a user', () => {
	let users : Users = new Users();

	users.addUser('Foo Bar', 'foobar@email.com');
	users.deleteUser(0);

	assertEquals(users.getUsers(), []);
});