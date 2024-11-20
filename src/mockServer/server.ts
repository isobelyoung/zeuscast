import { createServer, Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
// import { mockUsers } from './mockData';

const UserModel: ModelDefinition<any> = Model.extend({});

export function mockServer() {
    
    const server = createServer({
        models: {
            // only dealing with one type of data :. only need simple relational structure
            users: UserModel,
        },

        routes() {
            this.namespace = 'api';

            // this.get('/users', (schema: any) => {
            //     return schema.users.all();
            // })
            this.get('/users')
        },

        // seeds(server) {
        //     mockUsers.forEach((user) => {
        //         server.create('user', user)
        //     })
        // }
    });

    return server;
}