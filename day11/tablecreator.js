// tablecreator.js
var wrapTd = function(content) {
    return wrapTag("td", content);
}
var wrapTr = function(content) {
    return wrapTag("tr", content);
}

function wrapTag(tag, content) {
    // return '<' + tag + '>' + content + '</' + tag + '>';
    var dom_element =  document.createElement(tag);
    dom_element.textContent = content
}

function cellText(row, column) {
    return wrapTag("p", 'Row-' + row) + wrapTag("p", 'Column-' + column);
}

function matrix(wrapper_row, wrapper_column, row_count, column_count, content_callback) {
    output = "";
    for (i = 0; i < row_count; i++) {
        var row = "";
        for (j = 0; j < column_count; j++) {
            row += wrapper_column(content_callback(i, j));
        }
        output += wrapper_row(row);
    }
    return output;
}
