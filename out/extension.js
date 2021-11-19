"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const commands_1 = require("./commands");
const commands = new commands_1.Commands();
function activate(context) {
    const run = vscode.commands.registerCommand("nand2tetris.run", (fileUri) => {
        commands.executeCommand(fileUri);
    });
    const hardware = vscode.commands.registerCommand("nand2tetris.hardware", (fileUri) => {
        commands.executeHarderwareCommand();
    });
    const assembler = vscode.commands.registerCommand("nand2tetris.assembler", (fileUri) => {
        commands.executeAssemblerCommand();
    });
    const cpu = vscode.commands.registerCommand("nand2tetris.cpu", (fileUri) => {
        commands.executeCPUCommand();
    });
    const stop = vscode.commands.registerCommand("nand2tetris.stop", () => {
        commands.stopCommand();
    });
    const zip = vscode.commands.registerCommand("nand2tetris.zip", () => {
        commands.zipCommand();
    });
    context.subscriptions.push(run);
    context.subscriptions.push(commands);
}
exports.activate = activate;
function deactivate() {
    commands.stopCommand();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map