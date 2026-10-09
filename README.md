# Run Dotnet folder
## What it does
- Adds a **Run .NET Project** option when you right-click a folder, a `.csproj` file, or `Program.cs`.
- Works in the file explorer tree and directly inside the active editor window.
- Automatically opens a terminal (or uses an existing one), navigates to the exact folder, and runs `dotnet run` for you.

> I'm a TA helping my professor grade our class assessments. Usually, each task on a test is its own separate .NET project. When you have to grade dozens of assignments, opening integrated terminals and typing `dotnet run --project --path` over and over gets old real fast. 

## How to install
If you have the `.vsix` installation file:
1. Download or build your own `.vsix` file. You can download it [Here](/run-dotnet-folder-0.0.1.vsix)
2. Open VSCode and go to the **Extensions** view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Click the **...** (Views and More Actions) menu in the top right corner of the Extensions panel.
4. Select **Install from VSIX...** and choose the `.vsix` file.
5. Reload VSCode if prompted, and you're good to go!

## How to test/run
Open a terminal in the root directory and:
```
npm run watch
```
then press `f5` or, in vscode, go to **Run and Debug > Start Debbuging**

## How to build the `.vsix`
> should be a *Github Release Asset* but like... realy?

Open a terminal in the root directory and:
```
npx @vscode/vsce package
```
