import notification from './Notification.js';
import oneTime from './One.js';
import ClassExample from './ClassExample.js';

notification.log("Webpack Log!");
oneTime();
notification.notify("Webpack notify");
new ClassExample();
