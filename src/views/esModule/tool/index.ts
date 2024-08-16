let name: any;

export function getVal() {
  return name;
}

export function setVal(val: string) {
  console.log('🚀 ~ setVal ~ val:', val);
  name = val;
}
