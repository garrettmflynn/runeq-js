const AUTH_METHOD_CLIENT_KEYS = 'client_keys' // Auth method to use a Client Key pair for authentication.
const AUTH_METHOD_JWT = 'jwt' // Auth method to use a JWT for authentication.
const AUTH_METHOD_ACCESS_TOKEN = 'access_token' // Auth method to use a user access token for authentication.
// const DEFAULT_CONFIG_YAML = '~/.rune/config' // Default path for the config file (yaml formatted)

type ConfigObj = {
    streamURL?: string | 'https://stream.runelabs.io'
    authMethod?: "access_token" | "client_keys" | "jwt",
    accessTokenId?: string, 
    accessTokenSecret?: string, 
    clientKeyId?: string, 
    clientAccessKey?: string, 
    jwt?: string, // Not sure...
}

// Configuration for API access
export class Config {
    graphURL = 'https://graph.runelabs.io'
    streamURL: string = 'https://stream.runelabs.io'
    authMethod: "access_token" | "client_keys" | "jwt" = 'access_token'
    accessTokenId: string = ''
    accessTokenSecret: string = ''
    clientKeyId: string = ''
    clientAccessKey: string=  ''
    jwt: string = ''

    constructor (o:ConfigObj) {
        this.set(o)
    }

    // Load a YAML File
    load = () => {
        console.warn('Cannot load a .yaml file yet...')
    }

    // Set configuration values
    set = (o:ConfigObj) => {
        Object.assign(this, o)
    }

    // ------------------- Access Headers -------------------
    //  Authentication headers for HTTP requests, using client key pair.
    clientAuthHeaders = () => {
        if (!this.clientAccessKey) return new Error('Client access key is not set')
        if (!this.clientKeyId) return new Error('Client key id is not set')

        return {
            'X-Rune-Client-Key-ID': this.clientAccessKey,
            'X-Rune-Client-Access-Key': this.clientKeyId
        }

    }

    //  Authentication headers for HTTP requests, using a JWT.

    jwtAuthHeaders = () => {

        if (!this.jwt) return new Error('JWT is not set')

        return {
            'X-Rune-User-Access-Token': this.jwt,
        }
    }


   // Authentication headers for HTTP requests, using a User access token.
    accessTokenAuthHeaders = () => {
        if (!this.accessTokenId) return new Error('Access token id is not set')
        if (!this.accessTokenSecret) return new Error('Access token secret is not set')

        return {
            'X-Rune-User-Access-Token-Id': this.accessTokenId,
            'X-Rune-User-Access-Token-Secret': this.accessTokenSecret
        }
    }


    // Authentication headers for HTTP requests.
    authHeaders = () => {
        
        switch(this.authMethod){
            case (AUTH_METHOD_ACCESS_TOKEN): 
                return this.accessTokenAuthHeaders()

            case (AUTH_METHOD_CLIENT_KEYS):
                return this.clientAuthHeaders()

            case (AUTH_METHOD_JWT):
                return this.jwtAuthHeaders()
            default:
                return new Error(`Invalid auth_method "{self.auth_method}": expected one of (${AUTH_METHOD_CLIENT_KEYS}, ${AUTH_METHOD_JWT})`)

        }
    }
}