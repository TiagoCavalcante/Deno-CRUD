import { Context, RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { IUser, Users } from '../model/user.ts';

let users: Users = new Users;

export const getUsers = (context: Context): void => {
	context.response.body = users.getUsers();
};

export const getUser = (context: RouterContext): void => {
	if (context.params.id) { // this line and its closing tag are not necessary if you are not using TypeScript
		const user: IUser | undefined = users.getUser(parseInt(context.params.id));

		if (user) {
			context.response.status = 200; // http status code OK
			context.response.body = user;
		}
		else {
			context.response.status = 404; // it is unecessary (the respone.status is 404 by default)
			context.response.body = {
				message: 'User not found'
			};
		}
	}
};

export const addUser = async (context: Context): Promise<void> => {
	const { value } = context.request.body({ type: 'json' });
	const { name, email } = await value;

	users.addUser(name, email);

	context.response.status = 201; // http status code created
};

export const updateUser = async (context: RouterContext): Promise<void> => {
	if (context.params.id) { // this line and its closing tag are not necessary if you are not using TypeScript
		const user: IUser | undefined = users.getUser(parseInt(context.params.id));

		if (user) {
			const { value } = context.request.body({ type: 'json' });
			const { name, email } = await value;

			users.updateUser(parseInt(context.params.id), name, email);

			context.response.status = 200; // http status code created
		}
		else {
			context.response.status = 404; // it is unecessary (the respone.status is 404 by default)
			context.response.body = {
				message: 'User not found'
			};
		}
	}
};

export const deleteUser = (context: RouterContext): void => {
	if (context.params.id) { // this line and its closing tag are not necessary if you are not using TypeScript
		const user: IUser | undefined = users.getUser(parseInt(context.params.id));

		if (user) {
			users.deleteUser(parseInt(context.params.id));
			context.response.status = 200; // http status code OK
		}
		else {
			context.response.status = 404; // it is unecessary (the respone.status is 404 by default)
			context.response.body = {
				message: 'User not found'
			};
		}
	}
};