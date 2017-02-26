Simply utility to disable default endpoints defined for a Model in the loopback.io framework.

###What is it?

The loopback.io comes with full RESTful APIs endpoints enables by default.
This simply utility disables them leaving user's custom remote methods only.

### How to use it

loopback.io version 3.x is required.

npm install loopback-disable-endpoints

In a boot script, include to disable all endpoints

     var endpoint-disabler = require('loopback-disable-endpoints');
     endpoint-disabler.disableAll(server.models.MyModel);
     
     
To enable Read-only endpoints
    
     var endpoint-disabler = require('loopback-disable-endpoints');
    endpoint-disabler.enableReadOnly(server.models.MyModel);


To enable Write-only endpoints 
    
     var endpoint-disabler = require('loopback-disable-endpoints');
    endpoint-disabler.enableWriteOnly(server.models.MyModel);

To disable endpoints for related model 

     var endpoint-disabler = require('loopback-disable-endpoints');
    endpoint-disabler.disableRelatedModels(server.models.MyModel);