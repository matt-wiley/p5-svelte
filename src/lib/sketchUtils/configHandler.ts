export class ConfigHandler {

    private config: any;

    constructor(config: any) {
        this.config = config;
    }

    get(key: string, defaultValue?: any) {

        let foundValue;

        let keys = key.split('.');
        
        let configSubtree = this.config;
        while ( keys.length > 1 ) {
            let k = keys.shift() || 'undefined'; 
            configSubtree = configSubtree[k];
        }
        foundValue = configSubtree[keys[0]];

        return foundValue || defaultValue;
    }
}