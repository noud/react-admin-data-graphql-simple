import React from 'react';
import { Edit, SimpleForm, DisabledInput, TextInput } from 'react-admin';
import { List, Datagrid, TextField } from 'react-admin';

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