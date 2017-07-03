module.exports = function(RED) {
    function SUDNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toSUD();
            node.send(msg);
        });
    }
    RED.nodes.registerType("SUD",SUDNode);
}
