/**
 * Created by antonio_dimariano on 06/05/2016.
 */


exports.disableAll = function(modelName) {
    modelName.disableRemoteMethodByName("create", true);
    modelName.disableRemoteMethodByName("upsert", true);
    modelName.disableRemoteMethodByName("updateAll", true);
    modelName.disableRemoteMethodByName("updateAttributes", false);
    modelName.disableRemoteMethodByName("find", true);
    modelName.disableRemoteMethodByName("findById", true);
    modelName.disableRemoteMethodByName("findOne", true);
    modelName.disableRemoteMethodByName("deleteById", true);
    modelName.disableRemoteMethodByName("confirm", true);
    modelName.disableRemoteMethodByName("count", true);
    modelName.disableRemoteMethodByName("exists", true);
    modelName.disableRemoteMethodByName("resetPassword", true);
    modelName.disableRemoteMethodByName('__count__accessTokens', false);
    modelName.disableRemoteMethodByName('__create__accessTokens', false);
    modelName.disableRemoteMethodByName('__delete__accessTokens', false);
    modelName.disableRemoteMethodByName('__destroyById__accessTokens', false);
    modelName.disableRemoteMethodByName('__findById__accessTokens', false);
    modelName.disableRemoteMethodByName('__get__accessTokens', false);
    modelName.disableRemoteMethodByName('__updateById__accessTokens', false);
    modelName.disableRemoteMethodByName('createChangeStream', true);
    console.log("[BOOT SETUP] all the defaults API endpoints for Model ",modelName.definition.name+" has been disabled");
}
