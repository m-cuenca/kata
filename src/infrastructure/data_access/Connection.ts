import { DynamoDB } from 'aws-sdk'
import { IConnectionOther } from '../../application/interfaces/iothers/IConnectionOther'
import { Constants } from '../../application/helpers/Constants'

export class Connection implements IConnectionOther {
  private readonly docClient: DynamoDB.DocumentClient

  constructor () {
    const { IS_OFFLINE } = process.env;

    this.docClient = new DynamoDB.DocumentClient({
      apiVersion: Constants.dynamoDBAPIVersion,
      region: Constants.region
    });

    // this.docClient = IS_OFFLINE === "true"
    //   ? new DynamoDB.DocumentClient({
    //       region: 'localhost',
    //       endpoint: 'http://localhost:8000'
    //     })
    //   : new DynamoDB.DocumentClient({
    //     apiVersion: Constants.dynamoDBAPIVersion,
    //     region: Constants.region
    //   });
  }

  get = async (tableName: string, id: string): Promise<any> => {
    const input: DynamoDB.DocumentClient.GetItemInput = {
      TableName: tableName,
      Key: {
        id
      }
    }

    return await this.docClient.get(input, (error, result) => {
      if (error) {
        return { is_error: true, message: 'Retrieving film' };
      }

      if (!result.Item) {
        return { is_error: true, message: `Film with id: ${id} not found` };
      }

      return { is_error: false, entity: result.Item };
    }).promise()
  }

  put = async (tableName: string, item: { [key: string]: any }): Promise<any> => {
    const input: DynamoDB.DocumentClient.PutItemInput = {
      TableName: tableName,
      Item: item
    }

    return await this.docClient.put(input, error => {
      if (error) {
        return { is_error: true, message: 'Fail creating Film' };
      }

      return { is_error: false, message: '' };
    }).promise()
  }
}
