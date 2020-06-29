export interface IUser {
	id : Number;
	name : String;
	email : String;
}

export class Users {
	private users : Array<IUser> = [];

	public getUsers() : Array<IUser> {
		return this.users;
	}

	public getUser(id : Number) : IUser|undefined {
		return this.users.find((user : IUser) => user.id == id);
	}

	public addUser(name : String, email : String) {
		this.users.push({
			id: this.users.length,
			name,
			email
		});
	}

	public updateUser(id : Number, name : String|undefined, email : String|undefined) : void {
		if (name) {
			this.users[+id].name = name;
		}
		if (email) {
			this.users[+id].email = email;
		}
	}

	public deleteUser(id : Number) : void {
		this.users = this.users.filter((user : IUser) => user.id !== id);
	}
}