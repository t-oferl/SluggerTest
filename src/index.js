function Slugger(...args){
    return args.join(" ").split(" ").join("|")
}

module.exports = {Slugger}