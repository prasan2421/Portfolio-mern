import AWS from 'aws-sdk';
import { useState } from 'react';

AWS.config.update({
  accessKeyId: '<Your-Access-Key-Id>',
  secretAccessKey: '<Your-Secret-Key>',
  region: 'us-east-1',
  signatureVersion: 'v4',
});

export default function ImageUploader() {
  const s3 = new AWS.S3();
  return (
    <div >
      <h1>Test Image Upload</h1>
    </div>
  );
}