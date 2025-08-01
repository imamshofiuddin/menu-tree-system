const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"menus.index":{"uri":"menus","methods":["GET","HEAD"]},"menus.create":{"uri":"menus\/create","methods":["GET","HEAD"]},"menus.store":{"uri":"menus","methods":["POST"]},"menus.edit":{"uri":"menus\/{id}\/edit","methods":["GET","HEAD"],"parameters":["id"]},"menus.update":{"uri":"menus\/{id}","methods":["PUT"],"parameters":["id"]},"menus.destroy":{"uri":"menus\/{id}","methods":["DELETE"],"parameters":["id"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
