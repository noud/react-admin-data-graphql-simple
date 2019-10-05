import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { Edit, DisabledInput } from 'react-admin';
import { List, Datagrid, TextField } from 'react-admin';

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="author" />
        </Datagrid>
    </List>
);