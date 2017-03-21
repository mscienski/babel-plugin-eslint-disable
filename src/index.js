export default function({ types: t }) {
    return {
        visitor: {
            Program(path, state) {
                path.addComment('leading', ' eslint-disable ');
                path.unshiftContainer("directives", t.noop());
            }
        }
    }
};