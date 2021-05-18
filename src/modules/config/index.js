import base from "./data/default.json"
import merge from "merge"

let loadData = (file) =>
{
    try
    {
        return require("./data/" + file + ".json");
    }
    catch(err)
    {
        return {};
    }
}

let ENV         = process.env.NODE_ENV || "development"
let config      = merge.clone(base);
let data        = loadData(ENV);

config          = merge.recursive(true, config, data)
config.ENV      = ENV
config.VERSION  = process.env.npm_package_version
config.MAX_FILE_SIZE *= 1000000
window.config   = config

export default config;
