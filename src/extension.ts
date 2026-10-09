import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('dotnet-runner.runProject', (uri: vscode.Uri) => {
        
        // If triggered from the editor context menu or command palette, uri might be undefined.
        // Fall back to the active text editor's file URI.
        if (!uri && vscode.window.activeTextEditor) {
            uri = vscode.window.activeTextEditor.document.uri;
        }

        if (!uri) {
            vscode.window.showErrorMessage('No valid file or folder selected.');
            return;
        }

        const targetPath = uri.fsPath;
        let dirPath = targetPath;

        // If the clicked resource is a file (.csproj or Program.cs), extract its directory path
        try {
            const stat = fs.statSync(targetPath);
            if (stat.isFile()) {
                dirPath = path.dirname(targetPath);
            }
        } catch (error) {
            vscode.window.showErrorMessage('Failed to read the selected path.');
            return;
        }

        // Check if a terminal named "Run .NET" already exists to avoid clutter, or create a new one
        const terminalName = 'Run .NET';
        let terminal = vscode.window.terminals.find(t => t.name === terminalName);
        if (!terminal) {
            terminal = vscode.window.createTerminal(terminalName);
        }

        terminal.show();
        
        terminal.sendText(`dotnet run --project "${dirPath}"`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}