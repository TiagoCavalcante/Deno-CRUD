export interface IUser {
	id: number;
	name: String;
	email: String;
}

export class Users {
	private users: Array<IUser> = [];

	public getUsers(): Array<IUser> {
		return this.users;
	}

	public getUser(id: number): IUser | undefined {
		return this.users.find((user: IUser) => user.id === id);
	}

	public addUser(name: String, email: String) {
		this.users.push({
			id: this.users.length,
			name,
			email
		});
	}

	public updateUser(id: number, name: String | undefined, email: String | undefined): void {
		if (name) {
			this.users[id].name = name;
		}
		if (email) {
			this.users[id].email = email;
		}
	}

	public deleteUser(id: number): void {
		this.users = this.users.filter((user: IUser) => user.id !== id);
	}
}
