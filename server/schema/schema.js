
const Admins = require('../model/adminModel')
const Blogs = require('../model/blogModel')
const Personal = require('../model/personalModel')
const Contact = require('../model/contactModel')
const Project = require('../model/projectModel')
const Donation = require('../model/donationModel')

const {Kind, GraphQlObject, GraphQLInputObjectType, GraphQLID,GraphQLList,GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLSchema, GraphQLBoolean, GraphQLEnumType, GraphQLScalarType} = require('graphql')

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



// Contact Type
const ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields:()=>({
      _id:{type: GraphQLID},
      name:{type: GraphQLString},
      email:{type: GraphQLString},
      subject:{type: GraphQLString},
      message:{type: GraphQLString},
      createdAt:{type:dateScalar },
      updatedAt:{type:dateScalar },
     
  })
})

// Personal Type
const PersonalType = new GraphQLObjectType({
  name: 'Personal',
  fields:()=>({
      _id:{type: GraphQLID},
      title:{type: GraphQLString},
      subtitle:{type: GraphQLString},
      project_title:{type: GraphQLString},
      project_description:{type: GraphQLString},
      profile_title:{type: GraphQLString},
      profile_description:{type: GraphQLString},
      createdAt:{type:dateScalar },
      updatedAt:{type:dateScalar },
     
  })
})

// Image type

const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    imageUrl: { type: GraphQLString },
    caption: { type: GraphQLString }
  })
});

// Image type

const TechType = new GraphQLObjectType({
  name: 'Tech',
  fields: () => ({
    name: { type: GraphQLString }
  })
});

// Project Type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields:()=>({
      _id:{type: GraphQLID},
      title:{type: GraphQLString},
      description:{type: GraphQLString},
      link:{type: GraphQLString},
      technologies: { type: new GraphQLList(TechType) },
      details:{type: GraphQLString},
      images:{type: new GraphQLList(ImageType)},
      createdAt:{type:dateScalar },
      updatedAt:{type:dateScalar },
     
  })
})

// Donation Type
const DonationType = new GraphQLObjectType({
  name: 'Donation',
  fields:()=>({
      _id:{type: GraphQLID},
      title:{type: GraphQLString},
      subtitle:{type: GraphQLString},
      link:{type: GraphQLString},
      details:{type: GraphQLString},
      images:{type: new GraphQLList(ImageType)},
      createdAt:{type:dateScalar },
      updatedAt:{type:dateScalar },
     
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
            type: BlogType,
           
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
        },
        projects:{
          type: new GraphQLList(ProjectType),
           
          resolve(parent, args){
              return Project.find()
          }
        },
        donation:{
          type: new GraphQLList(DonationType),
           
          resolve(parent, args){
              return Donation.find()
          }
        }
    }
})

const ImageTypeInput = new GraphQLInputObjectType({
  name: 'ImageInput',
  fields: () => ({
    imageUrl: { type: new GraphQLNonNull(GraphQLString) },
    caption: { type: new GraphQLNonNull(GraphQLString) },
  })
});

const TechTypeInput = new GraphQLInputObjectType({
  name: 'TechInput',
  fields: () => ({
  
    name: { type: new GraphQLNonNull(GraphQLString) },
  })
});


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
            name: args.name,
            email: args.email,
            status: args.status,
          });
  
          return admin.save();
        },
      },
       // Add Personal data
       addPersonal: {
        type: PersonalType,
        args: { 
          title: { type: GraphQLNonNull(GraphQLString) },
          subtitle: { type: GraphQLNonNull(GraphQLString) },
          project_title: { type: GraphQLNonNull(GraphQLString) },
          project_description: { type: GraphQLNonNull(GraphQLString) },
          profile_title: { type: GraphQLNonNull(GraphQLString) },
          profile_description: { type: GraphQLNonNull(GraphQLString) },
          
        },
        resolve(parent, args) {
          const personal = new Personal({
            title: args.title,
            subtitle: args.subtitle,
            project_title: args.project_title,
            project_description: args.project_description,
            profile_title: args.profile_title,
            profile_description: args.profile_description,
          });
  
          return personal.save();
        },
      },

       // Update Personal data
       updatePersonal: {
        type: PersonalType,
        args: { 
          id:{type: GraphQLNonNull(GraphQLID)},
          title: { type: GraphQLNonNull(GraphQLString) },
          subtitle: { type: GraphQLNonNull(GraphQLString) },
          project_title: { type: GraphQLNonNull(GraphQLString) },
          project_description: { type: GraphQLNonNull(GraphQLString) },
          profile_title: { type: GraphQLNonNull(GraphQLString) },
          profile_description: { type: GraphQLNonNull(GraphQLString) },
          
        },
        resolve(parent, args) {
          return Personal.findByIdAndUpdate(
            args.id,{
              $set:{
                title: args.title,
            subtitle: args.subtitle,
            project_title: args.project_title,
            project_description: args.project_description,
            profile_title: args.profile_title,
            profile_description: args.profile_description,
              }
            },
            {
              new:true
            }
          );
        },
      },

       // Add Project data
       addProject: {
        type: ProjectType,
        args: { 
          title: { type: GraphQLNonNull(GraphQLString) },
          description: { type: GraphQLNonNull(GraphQLString) },
          link: { type: GraphQLNonNull(GraphQLString) },
          technologies: { type: GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TechTypeInput))) },
          details: { type: GraphQLNonNull(GraphQLString) },
          images: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ImageTypeInput))) },
          // images: { type: GraphQLNonNull(GraphQLString) },
          
        },
        resolve: async(parent,args,context, ) =>{
          const { images,title,
            description,
            link,
            technologies,
            details,} = args;

          const currentImages = []; // Using spread operator to create a new array
          // Push the new image to the array
          const newImages = currentImages.concat(images);
          // Update the context with the new array of images
        
          const currentTech = []; // Using spread operator to create a new array
          // Push the new image to the array
          const newTech = currentTech.concat(technologies);

          const project = new Project({
            title,
            description,
            link,
            technologies:newTech,
            details,
            images: newImages,
          });
  
          return project.save();

          

        },
      },

       // Update Project data
       updateProject: {
        type: ProjectType,
        args: { 
          id:{type: GraphQLNonNull(GraphQLID)},
          title: { type: GraphQLNonNull(GraphQLString) },
          description: { type: GraphQLNonNull(GraphQLString) },
          link: { type: GraphQLNonNull(GraphQLString) },
          technologies: { type: GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TechTypeInput))) },
          details: { type: GraphQLNonNull(GraphQLString) },
          images: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ImageTypeInput))) },
          // images: { type: GraphQLNonNull(GraphQLString) },
          
        },
        resolve: async(parent,args,context, ) =>{
          const { images,title,
            description,
            link,
            technologies,
            details,} = args;

          const currentImages = []; // Using spread operator to create a new array
          // Push the new image to the array
          const newImages = currentImages.concat(images);
          // Update the context with the new array of images
        
          const currentTech = []; // Using spread operator to create a new array
          // Push the new image to the array
          const newTech = currentTech.concat(technologies);

          
          return Project.findByIdAndUpdate(
            args.id,{
              $set:{
                title,
                description,
                link,
                technologies:newTech,
                details,
                images: newImages,
            }},
            {
              new:true
            }
          );

        },
      },

   // Add Donation
   addDonation: {
    type: DonationType,
    args: { 
      title: { type: GraphQLNonNull(GraphQLString) },
      subtitle: { type: GraphQLNonNull(GraphQLString) },
      link: { type: GraphQLNonNull(GraphQLString) },
     
      details: { type: GraphQLNonNull(GraphQLString) },
      images: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ImageTypeInput))) },
      // images: { type: GraphQLNonNull(GraphQLString) },
      
    },
    resolve: async(parent,args,context, ) =>{
      const { images,title,
        subtitle,
        link,
       
        details,} = args;

      const currentImages = []; // Using spread operator to create a new array
      // Push the new image to the array
      const newImages = currentImages.concat(images);
      // Update the context with the new array of images
    
      const currentTech = []; // Using spread operator to create a new array
      // Push the new image to the array
      

      const donation = new Donation({
        title,
        subtitle,
        link,
        
        details,
        images: newImages,
      });

      return donation.save();

      

    },
  },

   // Update Project data
   updateDonation: {
    type: DonationType,
    args: { 
      id:{type: GraphQLNonNull(GraphQLID)},
      title: { type: GraphQLNonNull(GraphQLString) },
      subtitle: { type: GraphQLNonNull(GraphQLString) },
      link: { type: GraphQLNonNull(GraphQLString) },
      details: { type: GraphQLNonNull(GraphQLString) },
      images: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ImageTypeInput))) },
      // images: { type: GraphQLNonNull(GraphQLString) },
      
    },
    resolve: async(parent,args,context, ) =>{
      const { images,title,
        subtitle,
        link,
       
        details,} = args;

      const currentImages = []; // Using spread operator to create a new array
      // Push the new image to the array
      const newImages = currentImages.concat(images);
      // Update the context with the new array of images
    
      return Donation.findByIdAndUpdate(
        args.id,{
          $set:{
            title,
            subtitle,
            link,
            details,
            images: newImages,
        }},
        {
          new:true
        }
      );

    },
  },


      // Add Contact
      addContact: {
        type: ContactType,
        args: { 
          name: { type: GraphQLNonNull(GraphQLString) },
          email: { type: GraphQLNonNull(GraphQLString) },
          subject: { type: GraphQLNonNull(GraphQLString) },
          message: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          const contact = new Contact({
            name: args.name,
            email: args.email,
            subject: args.subject,
            message: args.message,
          });
  
          return contact.save();
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
        
      } ,

        // Delete Project
        deteteBlog:{
          type:ProjectType,
          args:{
            id:{type: GraphQLNonNull(GraphQLID)}
          },
            resolve(parent, args){
              return Project.findByIdAndRemove(args.id)
            }
          
        } 
    }

})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
})