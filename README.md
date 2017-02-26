Simply utility to disable default endpoints defined for a Model in the loopback.io framework.

###What is it?

The loopback.io comes with full RESTful APIs endpoints enables by default.
This simply utility disables them leaving user's custom remote methods only.

### How to use it

loopback.io version 3.x is required.

npm install endpoint-disabler

In a boot script, include

     var endpoint-disabler = require('endpoint-disabler');
     endpoint-disabler.disableAll(server.models.MyModel);