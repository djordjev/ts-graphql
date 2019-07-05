import { buildSchema, GraphQLSchema } from 'graphql';
import schema from './schema.graphql';

const gqlSchema: GraphQLSchema = buildSchema(schema);

export default gqlSchema;
