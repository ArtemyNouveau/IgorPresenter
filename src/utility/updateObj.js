const updateObject = (oldObj, updatedObj) => (
    JSON.parse(JSON.stringify({
        ...oldObj,
        ...updatedObj
    }))
);

export default updateObject
