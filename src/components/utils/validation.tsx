const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const phone_regex = /[0-9]/gim;
export const validation = (obj: any) => {
    if (!obj["Customer Name"]) {
        return { key: "Customer Name", msg: "Customer Name is required" };
    } else if (obj["Customer Name"].length < 3) {
        return { key: "Customer Name", msg: "Customer Name should have atleast 3 character" };
    } else if (obj["Customer Name"].length > 10) {
        return { key: "Customer Name", msg: "Customer Name should not have more then 10 character" };
    } else if (!obj["Email"] || obj["Email"].length === 0) {
        return { key: "Email", msg: "Email is required" };
    } else if (!email_regex.test(obj["Email"])) {
        return { key: "Email", msg: "Please a enter a valid email" };
    } else if (!obj["Phone"] || obj["Phone"].length === 0) {
        return { key: "Phone", msg: "Phone is required" };
    } else if (!phone_regex.test(obj["Phone"])) {
        return { key: "Phone", msg: "Phone Should be only number" };
    } else if (obj["Phone"].length < 10 || obj["Phone"].length > 10) {
        return { key: "Phone", msg: "Phone should be 10 digit number" };
    } else {
        return false;
    }
};
