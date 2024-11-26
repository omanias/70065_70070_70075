import mongoose from "mongoose";
import User from "../dao/Users.dao.js";
import assert from 'assert';
import { afterEach } from "node:test";

mongoose.connect('mongodb+srv://omarmanias:1234562024@cluster0.bxjfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

describe('Testing Users DAO get method', () => {
    before(function () {

        this.usersDao = new User();
    });

    it('should retrieve users from the database', async function () {
        this.timeout(50000);
        try {
            const result = await this.usersDao.get();
            assert.strictEqual(Array.isArray(result) && result.length >= 0, true);
        } catch (error) {
            console.error('Error during test:', error);
            assert.fail('Test failed with an error');
        }
    });

    it("El dao debe agregar un usuario correctamente a la base de datos", async function () {
        let mockUser = {
            first_name: "Coder",
            last_name: "House",
            email: "coder@house.com",
            password: "123"
        }

        const result = await this.usersDao.save(mockUser)
        assert.ok(result._id)
    })

    it("El dao debe agregar a un usuario un array de mascotas a la base de datos", async function () {
        let mockUser = {
            first_name: "Coder2",
            last_name: "House2",
            email: "coder@house2.com",
            password: "1234"
        }

        const result = await this.usersDao.save(mockUser)
        assert.deepStrictEqual(result.pets, [])
    })

    it("El dao debe obtener un usuario por email", async function () {
        let mockUser = {
            first_name: "Coder2",
            last_name: "House2",
            email: "coder@house2.com",
            password: "1234"
        }

        const result = await this.usersDao.save(mockUser)

        const user = await this.usersDao.getBy({ email: result.email })
        assert.strictEqual(typeof user, 'object')
    })

    afterEach(function () {
        mongoose.connection.collections.users.drop()
        this.timeout(5000)
    })

});