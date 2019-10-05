import React, { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import { Admin, Resource } from 'react-admin';
// import { Admin, Resource, Delete } from 'react-admin';

// import { PostCreate, PostEdit, PostList } from './posts';
import { PostList } from './posts';
const PostCreate =  null;
const PostEdit =  null;
// const PostList = null;

const Delete =  null;

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildGraphQLProvider({ clientOptions: { uri: 'http://127.0.0.1:8000//graphql' }})   // http://lighthouse-tutorial.localhost
            .then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />
            </Admin>
        );
    }
}

export default App;