function classNames(...props) {
    let classes = [];
    props.forEach(prop => {
        if (Array.isArray(prop)) {
            classes = classes.concat(prop);
        } else {
            classes.push(prop);
        }
    });
    return classes.join(' ');
}

export default classNames;