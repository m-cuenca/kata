import AWS from 'aws-sdk'

export interface IAWSUtil {

    getEnvParameters: (path: string, region: string, apiVersion: string) => Promise<AWS.SSM.ParameterList>

}
