Meteor.publish("graphs", function(){
    return GraphsModel.find({"owner" : this.userId});
});
Meteor.publish("nodes", function(graph){
    return NodesModel.find({"graph" : (graph !== null) ? graph._id : 0});
});
Meteor.publish("relationships", function(nodes){
    return RelationshipsModel.find({$or : [
        {"node_a" : { $in : nodes}},
        {"node_b" : { $in : nodes}}
    ]});
});