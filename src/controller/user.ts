import { Context, RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { IUser, Users } from '../model/user.ts';

let users : Users = new Users;

export const getUsers = (context : Context) : void => {
	context.response.body = users.getUsers();
};

export const getUser = (context : RouterContext) : void => {
	if (context.params.id) {
		const user : IUser|undefined = users.getUser(parseInt(context.params.id));

		if (user) {
			context.response.status = 200;
			context.response.body = user;
		}
		else {
			context.response.status = 404;
			context.response.body = {
				message: 'User not found'
			};
		}
	}
	else {
		context.response.status = 404;
	}
}

export const addUser = async (context : Context) : Promise<void> => {
	const body = await context.request.body();

	users.addUser(body.value.name, body.value.email)
	
	context.response.status = 201;
}

export const updateUser = async (context : RouterContext) : Promise<void> => {
	if (context.params.id) {
		const user : IUser|undefined = users.getUser(parseInt(context.params.id));

		if (user) {
			const body = await context.request.body();

			users.updateUser(parseInt(context.params.id), body.value.name, body.value.email);

			context.response.status = 200;
		}
		else {
			context.response.status = 404;
			context.response.body = {
				message: 'User not found'
			};
		}
	}
	else {
		context.response.status = 404;
	}
};

export const deleteUser = (context : RouterContext) : void => {
	if (context.params.id) {
		const user : IUser|undefined = users.getUser(parseInt(context.params.id));

		if (user) {
			users.deleteUser(parseInt(context.params.id));
			context.response.status = 200;
		}
		else {
			context.response.status = 404;
			context.response.body = {
				message: 'User not found'
			};
		}
	}
	else {
		context.response.status = 404;
	}
};