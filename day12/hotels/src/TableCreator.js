// tablecreator.js
var wrapTd = function(content) {
    return wrapTag("td", content);
}
var wrapTr = function(content) {
    return wrapTag("tr", content);
}

function wrapTag(tag, content, className) {
    if (typeof content == 'function') {
        content = content();
    }
    // return '<' + tag + '>' + content + '</' + tag + '>';
    var dom_element = document.createElement(tag);
    if (typeof content == 'string' || typeof content == 'number' ) {
        dom_element.textContent = content;
    } else if (typeof content == 'node' || typeof content == 'object') {
        dom_element.appendChild(content);
    } else {
        console.log(typeof content);
    }
    if (typeof className == 'string') {
        dom_element.className = className;
    };
    return dom_element;
}

function cellText(row, column) {
    return wrapTag("p", 'Row-' + row) + wrapTag("p", 'Column-' + column);
}

function matrix(wrapper_row, wrapper_column, row_count, column_count, content_callback, dom_element) {
    console.log(typeof dom_element);
    if (typeof dom_element != 'node' && typeof dom_element != 'object') {
        dom_element = document.createElement('div'); 
    }
    for (i = 0; i < row_count; i++) {
        var row = wrapper_row('');
        for (j = 0; j < column_count; j++) {
            row.appendChild(wrapper_column(content_callback(i, j)));
        }
        dom_element.appendChild(row);
    }
    return dom_element;
}
