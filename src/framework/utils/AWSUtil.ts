import AWS from 'aws-sdk';
import { IAWSUtil } from '../../application/interfaces/iothers/IAWSUtil'
import { Constants } from '../../application/helpers/Constants';

export class AWSUtil implements IAWSUtil {
    
    async getEnvParameters(path: string, region: string, apiVersion: string): Promise<AWS.SSM.ParameterList> {
        const ssm = new AWS.SSM({ apiVersion: Constants.paramStoreAPIVersion, region: region });
        const params = {
            Path: path,
            Recursive: true
        };
    
        try {
            var promise = await ssm.getParametersByPath(params).promise();
            return promise.Parameters!;
        }
        catch (err) {
            throw err;
        }
    }
}