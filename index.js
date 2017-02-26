/**
 * Created by antonio_dimariano on 06/05/2016.
 */


exports.disableAll = function(modelName) {
    modelName.disableRemoteMethod("create", true);
    modelName.disableRemoteMethod("upsert", true);
    modelName.disableRemoteMethod("updateAll", true);
    modelName.disableRemoteMethod("updateAttributes", false);
    modelName.disableRemoteMethod("find", true);
    modelName.disableRemoteMethod("findById", true);
    modelName.disableRemoteMethod("findOne", true);
    modelName.disableRemoteMethod("deleteById", true);
    modelName.disableRemoteMethod("confirm", true);
    modelName.disableRemoteMethod("count", true);
    modelName.disableRemoteMethod("exists", true);
    modelName.disableRemoteMethod("resetPassword", true);
    modelName.disableRemoteMethod('__count__accessTokens', false);
    modelName.disableRemoteMethod('__create__accessTokens', false);
    modelName.disableRemoteMethod('__delete__accessTokens', false);
    modelName.disableRemoteMethod('__destroyById__accessTokens', false);
    modelName.disableRemoteMethod('__findById__accessTokens', false);
    modelName.disableRemoteMethod('__get__accessTokens', false);
    modelName.disableRemoteMethod('__updateById__accessTokens', false);
    modelName.disableRemoteMethod('createChangeStream', true);
    console.log("[BOOT SETUP] all the API endpoints for Model ",modelName.definition.name+" has been disabled");
}
