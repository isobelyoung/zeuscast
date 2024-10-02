import { createServer, Model } from 'miragejs';
import { UserType } from '../types';
import { ModelDefinition } from 'miragejs/-types';
import { mockUsers } from './mockData';

const UserModel: ModelDefinition<UserType> = Model.extend({});
// type AppRegistry = Registry<{ user: typeof UserModel }, {}>;
// type AppSchema = Schema<AppRegistry>;

export function mockServer() {
    const server = createServer({
        models: {
            // only dealing with one type of data :. only need simple relational structure
            users: UserModel,
        },

        routes() {
            this.namespace = 'api';

            this.get('/users');

            this.post('/users', (schema, request) => {
                let data = JSON.parse(request.requestBody);
                data.id = schema.all('users').length + 1;
                // data.id = (Math.random() * 100).toString();
                schema.create('users', data);
                return schema.all('users');
            });

            this.patch('/users/:id', (schema, request) => {
                let data = JSON.parse(request.requestBody);
                let userId = request.params.id;
                let selected = schema.findBy('users', { id: userId });
                if (selected !== null) {
                    selected.update(data);
                }
                return schema.all('users');
            });

            this.del('/users/:id', (schema, request) => {
                let userId = request.params.id;
                let selected = schema.findBy('users', { id: userId });
                if (selected !== null) {
                    selected.destroy();
                }
                return schema.all('users');
            });
        },

        seeds(server) {
            mockUsers.forEach((user) => {
                server.create('user', user);
            });
        },
    });

    return server;
}
