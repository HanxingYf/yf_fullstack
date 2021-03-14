function funcNew(obj, ...args) {
  const newObj = Object.create(obj.prototype);
  const result = obj.apply(newObj,args);
  return typeof result === 'object' && result !== null ? result : newObj;
}