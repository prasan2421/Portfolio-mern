const Blogs = require('../model/blogModel')
const Admins = require('../model/adminModel')
const Personal = require('../model/personalModel')

const {Kind, GraphQlObject, GraphQLID,GraphQLList,GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLSchema, GraphQLBoolean, GraphQLEnumType, GraphQLScalarType} = require('graphql')

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

// Personal Type
const PersonalType = new GraphQLObjectType({
  name: 'Personal',
  fields:()=>({
      _id:{type: GraphQLID},
      title:{type: GraphQLString},
      // description:{type: GraphQLString},
      createdAt:{type:GraphQLString },
     
  })
})

// Blog Type
const BlogType = new GraphQLObjectType({
    name: 'Blog',
    fields:()=>({
        _id:{type: GraphQLID},
        title:{type: GraphQLString},
        markdown:{type: GraphQLString},
        description:{type: GraphQLString},
        createdAt:{type:dateScalar },
        updatedAt:{type:dateScalar },
        user:{ type: AdminType,
            resolve(parent, args) {
              return Admins.findById(parent.user);}
        
            }
    })
})

// Admin Type
const AdminType = new GraphQLObjectType({
    name: 'Admin',
    fields: () => ({
      _id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      status:{ type:GraphQLBoolean}
    }),
  });

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        blogs:{
            type: new GraphQLList(BlogType),
           
            resolve(parent, args){
                return Blogs.find()
            }
        },
        blog:{
            type: BlogType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Blogs.findById(args.id)
            }
        },
        personal:{
          type: PersonalType,
           
          resolve(parent, args){
              return Personal.find()
          }
        }
    }
})

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // Add Admin
      addAdmin: {
        type: AdminType,
        args: { 
          name: { type: GraphQLNonNull(GraphQLString) },
          email: { type: GraphQLNonNull(GraphQLString) },
          status: { type: GraphQLNonNull(GraphQLBoolean) },
         
        },
        resolve(parent, args) {
          const admin = new Admins({
            name: args.user,
            email: args.title,
            status: args.description,
          });
  
          return admin.save();
        },
      },
         // Add a Blog
    addBlog: {
        type: BlogType,
        args: { 
          title: { type: GraphQLNonNull(GraphQLString) },
          description: { type: GraphQLNonNull(GraphQLString) },
          markdown: { type: GraphQLNonNull(GraphQLString) },
          user: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
          const blog = new Blogs({
            user: args.user,
            title: args.title,
            description: args.description,
            markdown: args.markdown,
          });
  
          return blog.save();
        },
      },

               // Update a Blog
    updateBlog: {
      type: BlogType,
      args: { 
        id:{type: GraphQLNonNull(GraphQLID)},
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        markdown: { type: GraphQLNonNull(GraphQLString) },
        user: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Blogs.findByIdAndUpdate(
          args.id,{
            $set:{
              user: args.user,
              title: args.title,
              description: args.description,
              markdown: args.markdown,
            }
          },
          {
            new:true
          }
        );
      },
    },

      // Delete Blog
      deteteBlog:{
        type:BlogType,
        args:{
          id:{type: GraphQLNonNull(GraphQLID)}
        },
          resolve(parent, args){
            return Blogs.findByIdAndRemove(args.id)
          }
        
      } 
    }

})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
})