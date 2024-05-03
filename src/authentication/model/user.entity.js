/**
 * User
 * @description User entity
 */
export class User {
    constructor(id, name, lastname, email, password) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    /**
     * Create a new User instance from a displayableUser
     * @param displayableUser - The displayableUser to create the User from
     * @returns {User}
     */
    static fromDisplayableUser(displayableUser) {
        return new User(
            displayableUser.id,
            displayableUser.name,
            displayableUser.lastname,
            displayableUser.email,
            displayableUser.password);
    }

    /**
     * Convert a item to a displayable item
     * @param user - The item to convert
     * @returns {{id, name, lastname, email, password}}
     */
    static toDisplayableUser(user) {
        return {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
        };
    }

}
