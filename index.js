/**
 * Created by antonio_dimariano on 06/05/2016.
 */


exports.disableAll = function (modelName) {
    modelName.disableRemoteMethodByName("create");
    modelName.disableRemoteMethodByName("upsert");
    modelName.disableRemoteMethodByName("updateAll");
    modelName.disableRemoteMethodByName("prototype.updateAttributes");
    modelName.disableRemoteMethodByName("find");
    modelName.disableRemoteMethodByName("findById");
    modelName.disableRemoteMethodByName("findOne");
    modelName.disableRemoteMethodByName("deleteById");
    modelName.disableRemoteMethodByName("confirm");
    modelName.disableRemoteMethodByName("count");
    modelName.disableRemoteMethodByName("exists");
    modelName.disableRemoteMethodByName("resetPassword");
    modelName.disableRemoteMethodByName('prototype.__count__accessTokens');
    modelName.disableRemoteMethodByName('prototype.__create__accessTokens');
    modelName.disableRemoteMethodByName('prototype.__delete__accessTokens');
    modelName.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
    modelName.disableRemoteMethodByName('prototype.__findById__accessTokens');
    modelName.disableRemoteMethodByName('prototype.__get__accessTokens');
    modelName.disableRemoteMethodByName('prototype.__updateById__accessTokens');
    modelName.disableRemoteMethodByName('createChangeStream');
    modelName.disableRemoteMethodByName('replaceById');
    console.log("[BOOT SETUP] all the defaults API endpoints for Model ", modelName.definition.name + " has been disabled");
}

exports.enableReadOnly = function (modelName) {
    modelName.disableRemoteMethodByName('create');     // Removes (POST)
    modelName.disableRemoteMethodByName('upsert');     // Removes (PUT)
    modelName.disableRemoteMethodByName('deleteById'); // Removes (DELETE) /modelName/:id
    modelName.disableRemoteMethodByName('updateAll');  // Removes (POST) /products/update
    modelName.disableRemoteMethodByName('prototype.updateAttributes');
    modelName.disableRemoteMethodByName('replaceById');// Removes (PUT) /products/:id
    modelName.disableRemoteMethodByName('createChangeStream');
    console.log("[BOOT SETUP] enabled Read-Only API endpoints for Model ", modelName.definition.name + " has been disabled");
}

exports.enableWriteOnly = function (modelName) {
    modelName.disableRemoteMethodByName("find");
    modelName.disableRemoteMethodByName("findById");
    modelName.disableRemoteMethodByName("findOne");
    modelName.disableRemoteMethodByName('createChangeStream');
    modelName.disableRemoteMethodByName("count");
    modelName.disableRemoteMethodByName("exists");
    console.log("[BOOT SETUP] enabled Write-Only defaults API endpoints for Model ", modelName.definition.name + " has been disabled");
}

exports.disableRelatedModels = function(modelName) {
    modelName.disableRemoteMethodByName('prototype.__get__tags');
    modelName.disableRemoteMethodByName('prototype.__create__tags');
    modelName.disableRemoteMethodByName('prototype.__destroyById__accessTokens'); // DELETE
    modelName.disableRemoteMethodByName('prototype.__updateById__accessTokens'); // PUT
    console.log("[BOOT SETUP] disabled Related model endpoints for Model ", modelName.definition.name + " has been disabled");

}
