// import AWS from 'aws-sdk';
// import { S3 } from '@aws-sdk/client-s3';
// import { useState } from 'react';

// // JS SDK v3 does not support global configuration.
// // Codemod has attempted to pass values to each service client in this file.
// // You may need to update clients outside of this file, if they use global config.
// // JS SDK v3 does not support global configuration.
// // Codemod has attempted to pass values to each service client in this file.
// // You may need to update clients outside of this file, if they use global config.
// // JS SDK v3 does not support global configuration.
// // Codemod has attempted to pass values to each service client in this file.
// // You may need to update clients outside of this file, if they use global config.
// AWS.config.update({
//   accessKeyId: '<Your-Access-Key-Id>',
//   secretAccessKey: '<Your-Secret-Key>',
//   region: 'us-east-1',
//   // The key signatureVersion is no longer supported in v3, and can be removed.
//   // @deprecated SDK v3 only supports signature v4.
//   signatureVersion: 'v4',
// });

// export default function ImageUploader() {
//   const s3 = new S3({
//     credentials: {
//       accessKeyId: '<Your-Access-Key-Id>',
//       secretAccessKey: '<Your-Secret-Key>',
//     },

//     region: 'us-east-1',

//     // The key signatureVersion is no longer supported in v3, and can be removed.
//     // @deprecated SDK v3 only supports signature v4.
//     signatureVersion: 'v4',
//   });
//   return (
//     <div >
//       <h1>Test Image Upload</h1>
//     </div>
//   );
// }