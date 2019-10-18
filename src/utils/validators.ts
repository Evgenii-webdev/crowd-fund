export const validateNumber = (rule: any, value: any, cbFunc: any) => {
    let pattern = new RegExp(/[^0-9]+/g);
    if (!!pattern.exec(value)) {
        cbFunc('Only numbers are allowed');
    } else {
        cbFunc();
    }
}

export const validateFixedNumber = (rule: any, value: any, cbFunc: any) => {
    let pattern = new RegExp(/[^0-9.]+/g);
    if (!!pattern.exec(value)) {
        cbFunc('Only dot and digits are allowed');
    } else {
        if ((value.match(/\./g) || []).length > 1) {
            cbFunc('Invalid number format. Too many dots');
        } else {
            cbFunc();
        }
    }
}