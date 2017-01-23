var vscode = require('vscode');
var mode = 'production';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    
    var subscriptions = [];
    var autoCompletes = {
        "tm1-calculate-top-level": ["true", "false"],
        "tm1-chart-type": ["line", "discreteBar", "multiBar", "multiBarHorizontal", "pie"],
        "tm1-change": ["true", "false"],
        "tm1-comment-read-only": ["true", "false"],
        "tm1-consol-input": ["true", "false"],
        "tm1-format-percentage": ["true", "false"],
        "tm1-format-parenthesis": ["true", "false"],
        "tm1-format-html": ["true", "false"],
        "tm1-format-html-popup": ["true", "false"],
        "tm1-freeze-element": ["true", "false"],
        "tm1-hide-controls": ["true", "false"],
        "tm1-hide-labels": ["true", "false"],
        "tm1-hide-drill": ["true", "false"],
        "tm1-hide-spread": ["true", "false"],
        "tm1-hide-comment": ["true", "false"],
        "tm1-hide-reference": ["true", "false"],
        "tm1-picklist-radio": ["none","vertical", "horizontal"],
        "tm1-read-only": ["true", "false"],
        "tm1-show-hierarchy": ["true", "false"],
        "tm1-show-values": ["true", "false"],
        "tm1-select-only": ["true", "false"],
        "tm1-server-mode": ["true", "false"],
        "tm1-suppress-zero":["both","row","column","none"],
        "tm1-show-tool-bar": ["true", "false"],
        "tm1-radio-only": ["none","vertical", "horizontal"],
        "tm1-ui-refresh-page": ["true", "false"],
        "tm1-ui-show-dialog": ["true", "false"],
        "tm1-ui-disabled": ["true", "false"]
    }

    var completionItemProvider = vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems(document, position, token) {
            var start = new vscode.Position(position.line, 0);
            var range = new vscode.Range(start, position);
            var text = document.getText(range);

            // check if the cursor is on a class attribute and retrieve all the css rules in this class attribute
            var tm1UiAttribute = text.match(/(tm1-[\w-]*)=["|']([\w- ]*$)/);
            if (tm1UiAttribute === null) {
                return [];
            }

            // creates a collection of CompletionItem based on the classes already fetched
            var completionItems = [];
            var items = autoCompletes[tm1UiAttribute[1]];
            if(items !== null){
                for (var i = 0; i < items.length; i++) {
                    completionItems.push(new vscode.CompletionItem(items[i]));
                }
            } 
            
            return completionItems;
        },
        resolveCompletionItem(item, token) {
            return item;
        }
    }, ["="]);

    context.subscriptions.push(completionItemProvider);

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {

}
exports.deactivate = deactivate;