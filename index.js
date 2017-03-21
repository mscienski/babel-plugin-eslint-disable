module.exports = function(babel) {
    var t = babel.types;
    return {
        visitor: {
            Program(path, state) {
                path.addComment('leading', ' eslint-disable ');
                path.unshiftContainer('body', t.noop());
                path.unshiftContainer('body', t.noop());
            }
        }
    }
};
