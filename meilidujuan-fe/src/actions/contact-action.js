/**
 * Created by liunickluck on 15/7/23.
 */
define(['reflux'],function(Reflux){
    var ContactActions = Reflux.createActions([
        "createContact",
        "getContacts",
        "deleteContact"
    ]);
    return ContactActions;
});