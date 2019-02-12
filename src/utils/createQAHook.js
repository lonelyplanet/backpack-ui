const uniformString = (string) => `${string.toString().toLowerCase().trim().replace(/ /gi, "-")}`;

const sanitize = (el) =>
    (typeof el === "string" || typeof el === "number"
        ? uniformString(el)
        : "default");

const createQAHook = (hook, fallback = "fallback", type = "unknown") => (hook
    ? `${sanitize(hook)}-${sanitize(type)}`
    : `${sanitize(fallback)}-${sanitize(type)}`);


export default createQAHook;
