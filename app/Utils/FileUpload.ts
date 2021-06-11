import S3 from 'aws-sdk/clients/s3'
import fs from 'fs'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser'

export default class FileUpload {
  public async S3(file: MultipartFileContract) {
    const s3 = new S3({
      region: process.env.AWS_REGION,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    })

    const fileName = `${cuid()}.${file.extname}`

    if (!process.env.AWS_BUCKET_NAME || !file.tmpPath) return

    await s3
      .upload({
        Key: fileName,
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: fs.createReadStream(file.tmpPath),
      })
      .promise()

    return process.env.AWS_URI + fileName
  }
}
