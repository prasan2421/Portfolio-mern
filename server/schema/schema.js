const Blogs = require('../model/blogModel')
const Admins = require('../model/adminModel')

const {GraphQlObject, GraphQLID,GraphQLList,GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLSchema} = require('graphql')

// Blog Type
const BlogType = new GraphQLObjectType({
    name: 'Blog',
    fields:()=>({
        _id:{type: GraphQLID},
        title:{type: GraphQLString},
        markdown:{type: GraphQLString},
        description:{type: GraphQLString},
        createdAt:{type:GraphQLString },
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
        }
    }
})

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
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
    }

})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
})